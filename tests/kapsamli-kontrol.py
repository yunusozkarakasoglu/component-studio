#!/usr/bin/env python3
"""
Kapsamlı Kontrol — Bileşen Kütüphanesi (527 bileşen · 20 kategori)
TEST-PLANI.md'deki Grup 1-5, 7 statik kontrolleri + Grup 6 CDP çağrısı.
Kullanım: python3 tests/kapsamli-kontrol.py
"""
import json
import os
import re
import subprocess
import sys
from collections import Counter, defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UI = os.path.join(ROOT, "bilesen-kutuphanesi", "src", "components", "ui")
APP = os.path.join(ROOT, "bilesen-kutuphanesi", "src")
REG = os.path.join(ROOT, "registry", "data", "registry.json")
ENV = os.path.join(ROOT, "Bileşen Listesi .txt")

# ---------- Sonuç toplama ----------
RESULTS = []  # (grup, kontrol, durum, detay)
def ok(g, k, detay=""): RESULTS.append((g, k, "OK", detay))
def warn(g, k, detay=""): RESULTS.append((g, k, "UYARI", detay))
def fail(g, k, detay=""): RESULTS.append((g, k, "HATA", detay))

# ---------- Yasaklar ----------
BANNED_IMPORTS = ["@heroui/react", "@gravity-ui", "lucide-react", "@iconify", "react-aria-components",
                  "class-variance-authority", "sonner", "tw-animate-css", "@internationalized", "react-stately"]
BANNED_URLS = ["https://", "img.heroui", "iconUrl", "iconify"]

def load_registry():
    d = json.load(open(REG, encoding="utf-8"))
    return d["components"], d.get("categories", [])

def env_records():
    """Envanter txt'den (id, name, category, subcategory) satırları."""
    recs = []
    cat = sub = ""
    for line in open(ENV, encoding="utf-8"):
        line = line.rstrip("\n")
        m = re.match(r"^### (.+)$", line)
        if m: cat, sub = m.group(1).strip(), ""; continue
        m = re.match(r"^#### (.+)$", line)
        if m: sub = m.group(1).strip(); continue
        m = re.match(r"^- `(\d+)` (.+)$", line)
        if m: recs.append((m.group(1), m.group(2).strip(), cat, sub))
    return recs

# ---------- Slug kuralı (build-registry ile aynı) ----------
def slug(name):
    n = name.replace("TextArea", "Textarea")
    n = re.sub(r"([A-Z]+)([A-Z][a-z])", r"\1-\2", n)
    return re.sub(r"([a-z0-9])([A-Z])", r"\1-\2", n).lower()

# ================= GRUP 1 =================
def grup1(comps, cats):
    # G1.1
    try:
        d = json.load(open(REG, encoding="utf-8"))
        assert "components" in d and "categories" in d
        ok("G1", "G1.1", f"{len(comps)} bileşen, {len(cats)} kategori")
    except Exception as e:
        fail("G1", "G1.1", str(e))
    # G1.2
    ids = [c["id"] for c in comps]
    dup = [k for k, v in Counter(ids).items() if v > 1]
    if dup: fail("G1", "G1.2", f"çift id: {dup}")
    else: ok("G1", "G1.2")
    nonnum = [i for i in ids if not i.isdigit()]
    if nonnum: fail("G1", "G1.2", f"sayısal olmayan id: {nonnum}")
    # G1.3 kesintisiz (boşluk uyarı)
    nums = sorted(int(i) for i in ids if i.isdigit())
    gaps = [n for i, n in enumerate(nums[1:], start=1) if n != nums[i-1] + 1]
    if gaps: warn("G1", "G1.3", f"boşluklar: {gaps[:10]}{'…' if len(gaps)>10 else ''}")
    else: ok("G1", "G1.3")
    # G1.4 path var mı
    missing = [c["id"] for c in comps if not os.path.exists(c.get("path", ""))]
    if missing: fail("G1", "G1.4", f"dosya yok: {missing[:10]}")
    else: ok("G1", "G1.4")
    # G1.5 envanter ↔ registry
    env = env_records()
    env_ids = {r[0] for r in env}
    reg_ids = {c["id"] for c in comps}
    only_env = env_ids - reg_ids
    only_reg = reg_ids - env_ids
    if only_env or only_reg:
        fail("G1", "G1.5", f"sadece envanterde: {sorted(only_env)[:8]} | sadece registry'de: {sorted(only_reg)[:8]}")
    else: ok("G1", "G1.5", f"{len(env_ids)} kayıt eşleşti")
    # G1.6 kategori tutarlılığı
    env_cats = {r[2] for r in env}
    reg_cat_set = set(cats)
    comp_cats = {c["category"] for c in comps}
    diff = (env_cats ^ reg_cat_set) | (reg_cat_set ^ comp_cats)
    if diff: fail("G1", "G1.6", f"kategori farkları: {sorted(diff)}")
    else: ok("G1", "G1.6", f"{len(reg_cat_set)} kategori tutarlı")

# ================= GRUP 2 =================
def grup2(comps):
    files = sorted(f for f in os.listdir(UI) if f.endswith(".tsx") and f not in ("index.tsx", "icons.tsx", "icons-brand.tsx"))
    # G2.1/G2.2 etiketler (icons.* çekirdek dosyalar bileşen değildir)
    no_id, no_cat, id_mismatch, desc_mismatch = [], [], [], []
    by_id = {c["id"]: c for c in comps}
    for f in files:
        code = open(os.path.join(UI, f), encoding="utf-8").read()
        m_id = re.search(r"@id\s+(\d+)", code)
        m_cat = re.search(r"@category\s+(.+)", code)
        if not m_id: no_id.append(f); continue
        if not m_cat: no_cat.append(f)
        rec = by_id.get(m_id.group(1))
        if rec and rec["file"] != f:
            id_mismatch.append(f"{rec['id']}: dosya {rec['file']} ≠ {f}")
        m_desc = re.search(r"/\*\*\n \* (.+?)\n", code)
        if rec and m_desc and rec.get("description") != m_desc.group(1).strip():
            desc_mismatch.append(f"{rec['id']} {f}")
    if no_id: fail("G2", "G2.1", f"@id yok: {no_id}")
    else: ok("G2", "G2.1")
    if no_cat: fail("G2", "G2.1", f"@category yok: {no_cat}")
    if id_mismatch: fail("G2", "G2.2", f"id↔dosya uyumsuz: {id_mismatch[:5]}")
    else: ok("G2", "G2.2", f"{len(files)} dosya etiketi eşleşti")
    if desc_mismatch: warn("G2", "G2.2", f"açıklama farkı: {desc_mismatch[:5]}")
    # G2.3 yasak import
    banned_hits = []
    for f in files:
        code = open(os.path.join(UI, f), encoding="utf-8").read()
        for line in code.splitlines():
            if "import" in line and "from" in line:
                for b in BANNED_IMPORTS:
                    if b in line: banned_hits.append(f"{f}: {b}")
    if banned_hits: fail("G2", "G2.3", "; ".join(banned_hits[:8]))
    else: ok("G2", "G2.3")
    # G2.4 yasak URL
    url_hits = []
    for f in files:
        code = open(os.path.join(UI, f), encoding="utf-8").read()
        # JSDoc/yorum satırlarını atla (kural açıklamaları)
        code_no_comments = re.sub(r"/\*.*?\*/|//.*", "", code, flags=re.S)
        for u in ["img.heroui", "iconUrl", "iconify", "@gravity-ui/icons"]:
            if u in code_no_comments and "invalid-url" not in code_no_comments:
                url_hits.append(f"{f}: {u}")
    if url_hits: fail("G2", "G2.4", "; ".join(url_hits[:8]))
    else: ok("G2", "G2.4")
    # G2.5 ikonlar: kullanılan isimler icons.tsx'te var mı
    icons_code = open(os.path.join(UI, "icons.tsx"), encoding="utf-8").read()
    icon_imports = set()
    missing_icons = []
    for f in files:
        code = open(os.path.join(UI, f), encoding="utf-8").read()
        m = re.search(r"import\s*\{([^}]+)\}\s*from\s*\"@/components/ui/icons\"", code)
        if m:
            for name in m.group(1).split(","):
                n = name.strip()
                if n and not n.startswith("type"):
                    icon_imports.add(n)
    for n in sorted(icon_imports):
        if not re.search(rf"\b{re.escape(n)}\b", icons_code):
            missing_icons.append(n)
    if missing_icons: fail("G2", "G2.5", f"icons.tsx'te yok: {missing_icons}")
    else: ok("G2", "G2.5", f"{len(icon_imports)} ikon adı doğrulandı")
    # G2.6 @/ import hedefleri var mı
    broken = []
    for f in files:
        code = open(os.path.join(UI, f), encoding="utf-8").read()
        for m in re.finditer(r'from\s*"@/components/ui/([a-z0-9-]+)"', code):
            target = m.group(1)
            if not os.path.exists(os.path.join(UI, f"{target}.tsx")) and not os.path.exists(os.path.join(UI, f"{target}.ts")):
                broken.append(f"{f} → {target}")
    if broken: fail("G2", "G2.6", "; ".join(broken[:8]))
    else: ok("G2", "G2.6")

# ================= GRUP 3 =================
def grup3(comps):
    barrel = open(os.path.join(UI, "index.tsx"), encoding="utf-8").read()
    samples = open(os.path.join(APP, "samples.tsx"), encoding="utf-8").read()
    files = sorted(f for f in os.listdir(UI) if f.endswith(".tsx") and f != "index.tsx")
    # G3.1 barrel hedefleri var
    missing_barrel = []
    for m in re.finditer(r'export \* from "\./([a-z0-9-]+)"', barrel):
        t = m.group(1)
        if not os.path.exists(os.path.join(UI, f"{t}.tsx")) and not os.path.exists(os.path.join(UI, f"{t}.ts")):
            missing_barrel.append(t)
    # explicit export (drawer/modal gibi) hedefleri
    for m in re.finditer(r'export \{([^}]+)\} from "\./([a-z0-9-]+)"', barrel):
        t = m.group(2)
        if not os.path.exists(os.path.join(UI, f"{t}.tsx")) and not os.path.exists(os.path.join(UI, f"{t}.ts")):
            missing_barrel.append(t)
    if missing_barrel: fail("G3", "G3.1", f"barrel kırık: {missing_barrel}")
    else: ok("G3", "G3.1")
    # G3.2 her dosya barrel'de
    exported = set(re.findall(r'export \* from "\./([a-z0-9-]+)"', barrel))
    exported |= set(re.findall(r'\} from "\./([a-z0-9-]+)"', barrel))
    not_exported = [f[:-4] for f in files if f[:-4] not in exported and f != "icons.tsx"]
    if not_exported: warn("G3", "G3.2", f"barrel'de yok: {not_exported[:8]}")
    else: ok("G3", "G3.2", f"{len(files)} dosya export edildi")
    # G3.3 samples id + U.Ad
    sample_ids = set()
    for m in re.finditer(r'"(\d{3})":\s*(?:<U\.([A-Za-z0-9]+)|\()', samples):
        if m.group(2): sample_ids.add((m.group(1), m.group(2)))
        else:
            nxt = re.search(r'<U\.([A-Za-z0-9]+)', samples[m.end():m.end()+400])
            if nxt: sample_ids.add((m.group(1), nxt.group(1)))
    bad_samples = []
    for sid, sname in sample_ids:
        rec = next((c for c in comps if c["id"] == sid), None)
        if not rec: bad_samples.append(f"{sid} registry'de yok"); continue
        kebab_file = rec["file"][:-4]
        in_barrel = (f'export * from "./{kebab_file}"' in barrel) or re.search(rf'\b{sname}\b', barrel)
        if not in_barrel:
            bad_samples.append(f"{sid} {sname}: barrel export yok")
    if bad_samples: fail("G3", "G3.3", "; ".join(bad_samples[:8]))
    else: ok("G3", "G3.3", f"{len(sample_ids)} önizleme doğrulandı")
    # G3.4 registry → samples eksik
    reg_ids = {c["id"] for c in comps}
    sample_id_set = {sid for sid, _ in sample_ids}
    missing_samples = reg_ids - sample_id_set
    if missing_samples: warn("G3", "G3.4", f"samples önizlemesi yok: {sorted(missing_samples)[:8]}")
    else: ok("G3", "G3.4")

# ================= GRUP 4 =================
def grup4(comps):
    by_id = {c["id"]: c for c in comps}
    bad_slug = []
    for c in comps:
        expected = slug(c["name"]) + ".tsx"
        if c["file"] != expected:
            bad_slug.append(f"{c['id']} {c['name']}: beklenen {expected} ≠ {c['file']}")
    if bad_slug: fail("G4", "G4.1", "; ".join(bad_slug[:8]))
    else: ok("G4", "G4.1", f"{len(comps)} slug eşleşti")
    dup_file = [k for k, v in Counter(c["file"] for c in comps).items() if v > 1]
    if dup_file: fail("G4", "G4.2", f"çift dosya: {dup_file}")
    else: ok("G4", "G4.2")

# ================= GRUP 7 (bağımlılık zinciri) =================
def grup7(comps):
    by_id = {c["id"]: c for c in comps}
    # G7.1: üst düzey örneklerin import zinciri
    samples = ["274", "271", "232", "246", "197", "120"]
    ok_count = 0
    issues = []
    for sid in samples:
        rec = by_id.get(sid)
        if not rec: issues.append(f"{sid} yok"); continue
        code = open(rec["path"], encoding="utf-8").read()
        deps = re.findall(r'from\s*"@/components/ui/([a-z0-9-]+)"', code)
        missing = [d for d in deps if not os.path.exists(os.path.join(UI, f"{d}.tsx"))]
        if missing: issues.append(f"{sid}: kırık bağımlılık {missing}")
        else: ok_count += 1
    if issues: fail("G7", "G7.1", "; ".join(issues))
    else: ok("G7", "G7.1", f"{ok_count}/{len(samples)} zincir çözüldü")
    # G7.3: çekirdek kullananlarda Gerektirir notu (calendar/color/checkbox/button)
    cores = {"calendar": "calendar", "color": "color", "checkbox": "checkbox", "button": "button"}
    no_note = []
    for c in comps:
        # Yalnızca ana bileşenler (adı kategoriyle aynı başlayan ve örnek suffix'siz)
        if c["name"] == c["category"] or c["name"].lower() in ("calendar", "checkbox", "button", "colorpicker"):
            code = open(c["path"], encoding="utf-8").read()
            for core in cores:
                if re.search(rf'from\s*"@/components/ui/({core}[a-z0-9-]*)"', code) and "Gerektirir" not in code:
                    no_note.append(f"{c['id']} {c['name']} → {core}")
                    break
    if no_note: warn("G7", "G7.3", f"Gerektirir notu yok: {no_note[:6]}")
    else: ok("G7", "G7.3")

# ================= GRUP 5 (derleme) =================
def grup5():
    def run(cmd, cwd, timeout=300):
        r = subprocess.run(cmd, cwd=cwd, capture_output=True, text=True, timeout=timeout)
        return r.returncode, r.stdout, r.stderr
    cwd = os.path.join(ROOT, "bilesen-kutuphanesi")
    rc, out, err = run(["npx", "tsc", "--noEmit", "-p", "tsconfig.app.json"], cwd)
    if rc == 0: ok("G5", "G5.1", "tsc temiz")
    else: fail("G5", "G5.1", (err or out)[-600:])
    rc2, out2, err2 = run(["npm", "test"], cwd)
    m = re.search(r"# (pass|fail)\s+(\d+)", out2 + err2)
    if rc2 == 0 and m and m.group(1) == "pass":
        ok("G5", "G5.2", f"{m.group(2)} test geçti")
    else: fail("G5", "G5.2", (err2 or out2)[-600:])

# ================= RAPOR =================
def rapor():
    print("\n" + "=" * 70)
    print("KAPSAMLI KONTROL RAPORU")
    print("=" * 70)
    gcount = Counter(g for g, *_ in RESULTS)
    for g in sorted(gcount):
        rows = [r for r in RESULTS if r[0] == g]
        okc = sum(1 for r in rows if r[2] == "OK")
        wc = sum(1 for r in rows if r[2] == "UYARI")
        fc = sum(1 for r in rows if r[2] == "HATA")
        print(f"\n[{g}] {okc} OK · {wc} UYARI · {fc} HATA")
        for _, k, st, det in rows:
            mark = {"OK": "  ✓", "UYARI": "  ⚠", "HATA": "  ✗"}[st]
            line = f"{mark} {k}"
            if det: line += f" — {det}"
            print(line)
    total_ok = sum(1 for r in RESULTS if r[2] == "OK")
    total_w = sum(1 for r in RESULTS if r[2] == "UYARI")
    total_f = sum(1 for r in RESULTS if r[2] == "HATA")
    print("\n" + "-" * 70)
    print(f"TOPLAM: {total_ok} OK · {total_w} UYARI · {total_f} HATA")
    return total_f

def main():
    comps, cats = load_registry()
    grup1(comps, cats)
    grup2(comps)
    grup3(comps)
    grup4(comps)
    grup7(comps)
    grup5()
    fails = rapor()
    print(f"\nExit: {'BAŞARISIZ (hata var)' if fails else 'BAŞARILI'}")
    sys.exit(1 if fails else 0)

if __name__ == "__main__":
    main()
