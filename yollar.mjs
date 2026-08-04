/**
 * yollar.mjs — Dinamik yol çözümleyici
 * -------------------------------------------------
 * Component-studio'yu HERHANGİ bir bilgisayara kopyaladığınızda,
 * tüm yollar bu dosyanın bulunduğu klasöre göre çözülür.
 * Sabit yol YOKTUR — bu sayede klasör her yere taşınabilir.
 *
 * Kullanım: node yollar.mjs
 */
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = dirname(fileURLToPath(import.meta.url))

const paths = {
  kok: ROOT,
  envanter: join(ROOT, "Bileşen Listesi .txt"),
  kutuphane: join(ROOT, "bilesen-kutuphanesi"),
  bilesenler: join(ROOT, "bilesen-kutuphanesi", "src", "components", "ui"),
  sablonlar: join(ROOT, "bilesen-kutuphanesi", "src", "layouts"),
  barrel: join(ROOT, "bilesen-kutuphanesi", "src", "components", "ui", "index.tsx"),
  ornekler: join(ROOT, "bilesen-kutuphanesi", "src", "samples.tsx"),
  kayitDefteri: join(ROOT, "registry", "data", "registry.json"),
  kayitUretici: join(ROOT, "registry", "build-registry.mjs"),
  port: 5800,
  baslat: `cd "${join(ROOT, "bilesen-kutuphanesi")}" && npm run dev`,
  dogrula: `cd "${join(ROOT, "registry")}" && npm install && node build-registry.mjs`,
}

console.log(JSON.stringify(paths, null, 2))
