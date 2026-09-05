/**
 * RichTextEditorPlus
 * Saf React bileşen (bağımlılıksız) — Özel (kullanıcı) kaynaklı.
 * Zengin metin editörü (contentEditable + execCommand): kalın/italik/altı çizili,
 * hizalama, madde/numaralı liste, girinti (Tab/Shift+Tab), kontrol listesi
 * (checkbox — Enter yeni satır, boş satırda Enter kaldırır), resim ekleme
 * (480px tavan + köşe tutamaçlarıyla yeniden boyutlandırma), bağlantı modalı,
 * snapshot tabanlı geri/ileri (Ctrl+Z / Ctrl+Y), güvenli zengin kopyala-yapıştır.
 * API: value (HTML string) + onChange (her düzenlemede yeni HTML).
 *   <RichTextEditorPlus value={html} onChange={setHtml} />
 * @id 2086
 * @category Özel Komponentler
 * @subcategory RichTextEditorPlus
 * @source ozel
 * @tags zengin, metin, editör, richtext, kontrol, liste, resim, wysiwyg, not
 */
// ============================================================================
// RichTextEditor.tsx
// ----------------------------------------------------------------------------
// Kaynak: Note Pro uygulamasının "zengin metin alanı" bileşeni
//        (App.tsx satır 280–550) — olduğu gibi ayrıştırılıp bağımsızlaştırıldı.
// Bağımlılıklar: react, lucide-react.  (Tailwind sınıfları kullanır)
// Kullanım:      <RichTextEditor value={html} onChange={setHtml} />
//                 value = HTML string; değişiklikler onChange ile geri döner.
// ============================================================================

import { useState, useEffect, useRef } from 'react';
import {
  Undo2,
  Redo2,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List as ListIcon,
  ListOrdered,
  Indent as IndentIcon,
  IndentDecrease as OutdentIcon,
  Link as LinkIcon,
  Image as ImageIcon,
  ExternalLink,
  CheckSquare,
  Trash2,
} from '@/components/ui/icons';

// ====================================================================
// Yapıştırma (Paste) desteği — dış kaynaktan kopyala > yapıştır
// Biçimlendirme (kalın, renk, hizalama, listeler, tablo) ve resimleri
// korur; tehlikeli etiketleri/öznitelikleri temizler.
// ====================================================================
const PASTE_ALLOWED_TAGS = new Set([
    'P', 'DIV', 'BR', 'HR', 'B', 'STRONG', 'I', 'EM', 'U', 'S', 'STRIKE', 'DEL', 'MARK', 'SMALL', 'SUB', 'SUP',
    'SPAN', 'A', 'UL', 'OL', 'LI', 'IMG',
    'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'BLOCKQUOTE', 'CODE', 'PRE',
    'TABLE', 'THEAD', 'TBODY', 'TFOOT', 'TR', 'TH', 'TD', 'CAPTION', 'COLGROUP', 'COL'
]);
// Bu etiketler yapıştırmada tamamen atılır (güvenlik)
const PASTE_DROP_TAGS = new Set([
    'SCRIPT', 'STYLE', 'IFRAME', 'OBJECT', 'EMBED', 'LINK', 'META', 'BASE', 'TITLE', 'HEAD',
    'FORM', 'INPUT', 'BUTTON', 'SELECT', 'TEXTAREA', 'OPTION', 'VIDEO', 'AUDIO', 'SOURCE', 'TRACK',
    'CANVAS', 'SVG', 'MATH', 'TEMPLATE', 'NOSCRIPT', 'FRAME', 'FRAMESET'
]);

const sanitizePastedStyle = (css: string): string => {
    return css.split(';')
        .map(decl => decl.trim())
        .filter(decl => decl.length > 0)
        .filter(decl => !/(url\s*\x28|expression\s*\x28|javascript:|vbscript:|behavior\s*:|position\s*:|content\s*:\s*["']|@import|@charset)/i.test(decl))
        .join('; ');
};

const sanitizePastedNode = (node: Node): Node[] => {
    if (node.nodeType === Node.TEXT_NODE) return [document.createTextNode((node as Text).data)];
    if (node.nodeType !== Node.ELEMENT_NODE) return [];
    const el = node as HTMLElement;
    const tag = el.tagName.toUpperCase();
    if (PASTE_DROP_TAGS.has(tag)) return []; // tehlikeli/uygunsuz → komple at
    const children: Node[] = [];
    Array.from(el.childNodes).forEach(ch => children.push(...sanitizePastedNode(ch)));
    if (!PASTE_ALLOWED_TAGS.has(tag)) return children; // bilinmeyen etiket → sadece içeriğini aç (unwrap)
    const out = document.createElement(el.tagName);
    for (const attr of Array.from(el.attributes)) {
        const name = attr.name.toLowerCase();
        if (name.startsWith('on')) continue; // olay işleyicileri at
        if (name === 'class' || name === 'id' || name === 'style') {
            if (name === 'style') {
                const safe = sanitizePastedStyle(attr.value);
                if (safe) out.setAttribute('style', safe);
            }
            continue;
        }
        if (name === 'href' && tag === 'A') {
            const v = attr.value.trim();
            // Sadece tehlikeli protokoller engellenir; https, http, mailto, tel,
            // ftp, file:, göreli/yok-protokollü linkler korunur (Word, web, doküman)
            if (v && !/^\s*(javascript|vbscript|data)\s*:/i.test(v)) {
                out.setAttribute('href', v.startsWith('//') ? 'https:' + v : v);
            }
            continue;
        }
        if (name === 'target' && tag === 'A') {
            if (attr.value === '_blank') {
                out.setAttribute('target', '_blank');
                out.setAttribute('rel', 'noopener noreferrer');
            }
            continue;
        }
        if (tag === 'IMG' && (name === 'src' || name === 'alt' || name === 'title')) {
            if (name === 'src') {
                const v = attr.value.trim();
                if (/^(data:image\/|https?:|blob:|\/\/)/i.test(v)) out.setAttribute('src', v.startsWith('//') ? 'https:' + v : v);
            } else if (attr.value) out.setAttribute(name, attr.value);
            continue;
        }
        if (name === 'width' || name === 'height') {
            if (/^\d+(px|%)?$/.test(attr.value.trim())) out.setAttribute(name, attr.value.trim());
            continue;
        }
        if ((name === 'colspan' || name === 'rowspan') && (tag === 'TD' || tag === 'TH')) {
            out.setAttribute(name, attr.value);
            continue;
        }
    }
    children.forEach(c => out.appendChild(c));
    return [out];
};

const sanitizePastedHtml = (html: string): string => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const out = document.createElement('div');
    Array.from(doc.body.childNodes).forEach(ch => {
        sanitizePastedNode(ch).forEach(n => out.appendChild(n));
    });
    return out.innerHTML;
};

const escapeHtml = (text: string): string =>
    text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

interface RichTextEditorPlusProps {
    value: string;
    onChange: (html: string) => void;
}

function RichTextEditorPlus({ value, onChange }: RichTextEditorPlusProps) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [linkModalOpen, setLinkModalOpen] = useState(false);
    const [linkText, setLinkText] = useState('');
    const [linkUrl, setLinkUrl] = useState('');
    const [linkTarget, setLinkTarget] = useState<'_blank' | '_self'>('_blank');
    const savedRangeRef = useRef<Range | null>(null);
    const [editingLinkNode, setEditingLinkNode] = useState<HTMLAnchorElement | null>(null);

    // ----------------- Geri / İleri: anlık görüntü tabanlı geçmiş -----------------
    const undoStack = useRef<string[]>([]);
    const redoStack = useRef<string[]>([]);
    const lastUndoPush = useRef(0);
    const MAX_HISTORY = 120;

    // Bir değişiklikten ÖNCE çağrılır: mevcut içeriği geri yığınına atar.
    // Art arda gelen yazma tuşları 600ms içinde tek bir "hamle" olarak birleşir.
    const captureForUndo = (force = false) => {
        const el = contentRef.current;
        if (!el) return;
        const now = Date.now();
        if (!force && now - lastUndoPush.current < 600) return;
        const current = el.innerHTML;
        const top = undoStack.current[undoStack.current.length - 1];
        if (top !== current) {
            undoStack.current.push(current);
            if (undoStack.current.length > MAX_HISTORY) undoStack.current.shift();
            lastUndoPush.current = now;
        }
        redoStack.current = []; // yeni eylem, eski "ileri" geçmişini geçersiz kılar
    };

    const restoreHtml = (html: string) => {
        const el = contentRef.current;
        if (!el) return;
        el.innerHTML = html;
        handleInput();
        el.focus();
        const sel = window.getSelection();
        if (sel) {
            const r = document.createRange();
            r.selectNodeContents(el);
            r.collapse(false);
            sel.removeAllRanges();
            sel.addRange(r);
        }
    };

    const undo = () => {
        if (undoStack.current.length === 0) return;
        const prev = undoStack.current.pop() as string;
        const el = contentRef.current;
        if (el) redoStack.current.push(el.innerHTML);
        restoreHtml(prev);
    };

    const redo = () => {
        if (redoStack.current.length === 0) return;
        const next = redoStack.current.pop() as string;
        const el = contentRef.current;
        if (el) undoStack.current.push(el.innerHTML);
        restoreHtml(next);
    };

    // beforeinput: tarayıcı DOM'u değiştirmeden ÖNCE ateşlenir → her tuş yakalanır
    const handleBeforeInput = (e: any) => {
        const t: string = e?.nativeEvent?.inputType || e?.inputType || '';
        if (t.startsWith('history')) return; // tarayıcının kendi undo/redo'su
        captureForUndo();
    };

    useEffect(() => {
        if (contentRef.current && value !== contentRef.current.innerHTML) {
             if (document.activeElement !== contentRef.current) {
                contentRef.current.innerHTML = value;
                // Dışarıdan gelen içerik (not değişimi) geçmişi sıfırlar
                undoStack.current = [];
                redoStack.current = [];
             }
        }
    }, [value]);

    const handleInput = () => {
        if (contentRef.current) {
            onChange(contentRef.current.innerHTML);
        }
    };

    // Boş editörde execCommand('insertHTML') çalışmaz (imleç noktası yoktur).
    // Gerekirse önce içeriğe imleç noktası hazırla.
    const prepareInsertionPoint = () => {
        const el = contentRef.current;
        const s = window.getSelection();
        if (!el || !s) return;
        if (el.innerHTML === '') {
            el.innerHTML = '<br>';
        }
        let valid = false;
        if (s.rangeCount > 0) {
            const r = s.getRangeAt(0);
            valid = el.contains(r.commonAncestorContainer);
        }
        if (!valid) {
            const r = document.createRange();
            r.selectNodeContents(el);
            r.collapse(false);
            s.removeAllRanges();
            s.addRange(r);
        }
    };

    const execCmd = (command: string, value: string | undefined = undefined) => {
        if (command !== 'undo' && command !== 'redo') {
            captureForUndo(true); // komut öncesi anlık yedek (format/ekleme tek hamle)
        }
        const host = contentRef.current;
        // execCommand odaktaki düzenlenebilir öğeye uygulanır; odak butondayken
        // (araç çubuğuna tıklanınca) işlem sessizce başarısız olur → önce editöre odak ver
        if (host) {
            const active = document.activeElement;
            if (active !== host && !(active && host.contains(active))) {
                host.focus();
            }
        }
        if (command === 'insertHTML' || command === 'insertText') {
            prepareInsertionPoint();
        }
        document.execCommand(command, false, value);
        handleInput();
        contentRef.current?.focus();
    };

    // ====================================================================
    // Resim yardımcıları — 480px genişlik tavanı + köşelerden yeniden boyutlandırma
    // ====================================================================
    const MAX_IMG_WIDTH = 480;
    const wrapRef = useRef<HTMLDivElement | null>(null);
    const selImgRef = useRef<HTMLImageElement | null>(null);
    const resizeState = useRef<{ corner: string; startX: number; startY: number; w: number; h: number; ratio: number; naturalW: number; mTop: number; mLeft: number } | null>(null);
    const resizeListeners = useRef<{ mv: (e: MouseEvent) => void; up: () => void } | null>(null);
    const [overlay, setOverlay] = useState<{ x: number; y: number; w: number; h: number } | null>(null);

    // Yeni eklenen resmi ölçekle: genişlik > 480 ise 480'e düşür, yükseklik orantılı kalsın.
    // Küçük resimler kendi doğal boyutunda eklenir (büyütülmez).
    const normalizeOneImage = (img: HTMLImageElement) => {
        if (img.getAttribute('data-normalized')) return;
        const nw = img.naturalWidth;
        const nh = img.naturalHeight;
        if (!nw || !nh) return; // henüz yüklenmedi
        img.removeAttribute('width');
        img.removeAttribute('height');
        let w = nw;
        let h = nh;
        if (w > MAX_IMG_WIDTH) {
            h = Math.round((h * MAX_IMG_WIDTH) / w);
            w = MAX_IMG_WIDTH;
        }
        img.style.width = w + 'px';
        img.style.height = h + 'px';
        img.style.maxWidth = '100%';
        img.setAttribute('draggable', 'false'); // yerel sürükleme yerine köşe tutamaçları kullanılır
        img.setAttribute('data-normalized', '1');
    };

    const ensureImagesNormalized = () => {
        const host = contentRef.current;
        if (!host) return;
        host.querySelectorAll('img').forEach((im) => {
            const img = im as HTMLImageElement;
            if (img.getAttribute('data-normalized')) return;
            if (img.complete && img.naturalWidth) {
                normalizeOneImage(img);
            } else {
                img.onload = () => normalizeOneImage(img);
                img.onerror = () => {
                    img.setAttribute('draggable', 'false');
                    img.setAttribute('data-normalized', '1');
                };
            }
        });
    };

    // İçeriğe resim eklendiğinde (ekleme, yapıştırma, geri yükleme) otomatik ölçekle
    useEffect(() => {
        const el = contentRef.current;
        if (!el) return;
        const mo = new MutationObserver(() => {
            if (el.querySelector('img:not([data-normalized])')) {
                requestAnimationFrame(() => ensureImagesNormalized());
            }
        });
        mo.observe(el, { childList: true, subtree: true });
        ensureImagesNormalized();
        return () => mo.disconnect();
    }, []);

    // Seçili resmi vurgula ve tutamaç konumlarını hesapla
    const syncOverlay = () => {
        const img = selImgRef.current;
        const wrap = wrapRef.current;
        if (!img || !wrap) { setOverlay(null); return; }
        const ir = img.getBoundingClientRect();
        const wr = wrap.getBoundingClientRect();
        setOverlay({
            x: ir.left - wr.left + wrap.scrollLeft,
            y: ir.top - wr.top + wrap.scrollTop,
            w: ir.width,
            h: ir.height,
        });
    };

    const selectImage = (img: HTMLImageElement) => {
        deselectImage();
        selImgRef.current = img;
        img.style.outline = '2px solid #3b82f6';
        img.style.outlineOffset = '2px';
        img.style.cursor = 'default';
        syncOverlay();
    };

    const deselectImage = () => {
        const img = selImgRef.current;
        if (img) {
            img.style.outline = '';
            img.style.outlineOffset = '';
            img.style.cursor = '';
        }
        selImgRef.current = null;
        setOverlay(null);
    };

    const handleEditorScroll = () => { if (selImgRef.current) syncOverlay(); };

    // Köşe tutamacından sürükleme
    const startImageResize = (e: React.MouseEvent, corner: string) => {
        e.preventDefault();
        e.stopPropagation();
        const img = selImgRef.current;
        if (!img) return;
        const r = img.getBoundingClientRect();
        resizeState.current = {
            corner,
            startX: e.clientX,
            startY: e.clientY,
            w: r.width,
            h: r.height,
            ratio: r.width ? r.height / r.width : 1,
            naturalW: img.naturalWidth || MAX_IMG_WIDTH,
            mTop: parseFloat(img.style.marginTop) || 0,
            mLeft: parseFloat(img.style.marginLeft) || 0,
        };
        const move = (ev: MouseEvent) => {
            const rs = resizeState.current;
            if (!rs || !img) return;
            const dx = ev.clientX - rs.startX;
            const dy = ev.clientY - rs.startY;
            let grow = 0;
            if (rs.corner.includes('e')) grow += dx;
            if (rs.corner.includes('s')) grow += dy;
            if (rs.corner.includes('w')) grow -= dx;
            if (rs.corner.includes('n')) grow -= dy;
            const maxW = Math.max(MAX_IMG_WIDTH, rs.naturalW * 2);
            const newW = Math.min(maxW, Math.max(24, rs.w + grow));
            const newH = Math.round(newW * rs.ratio);
            img.style.width = newW + 'px';
            img.style.height = newH + 'px';
            // Karşı köşe sabit kalsın diye görsel kaydırma (yayınlanmaz)
            img.style.marginTop = rs.corner.includes('n') ? (rs.mTop - (newH - rs.h)) + 'px' : '';
            img.style.marginLeft = rs.corner.includes('w') ? (rs.mLeft - (newW - rs.w)) + 'px' : '';
            syncOverlay();
        };
        const up = () => {
            if (resizeListeners.current) {
                window.removeEventListener('mousemove', resizeListeners.current.mv);
                window.removeEventListener('mouseup', resizeListeners.current.up);
                resizeListeners.current = null;
            }
            document.body.style.cursor = '';
            resizeState.current = null;
            if (img) { img.style.marginTop = ''; img.style.marginLeft = ''; }
            syncOverlay();
            handleInput(); // yeni boyut HTML'e yazılsın
        };
        resizeListeners.current = { mv: move, up };
        window.addEventListener('mousemove', move);
        window.addEventListener('mouseup', up);
        document.body.style.cursor = corner === 'nw' || corner === 'se' ? 'nwse-resize' : 'nesw-resize';
    };

    useEffect(() => () => {
        if (resizeListeners.current) {
            window.removeEventListener('mousemove', resizeListeners.current.mv);
            window.removeEventListener('mouseup', resizeListeners.current.up);
        }
    }, []);

    const insertImage = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (readerEvent) => {
                    const img = `<img src="${readerEvent.target?.result}" style="max-width: 100%; height: auto;" />`;
                    execCmd('insertHTML', img);
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    };

    const insertCheckbox = () => {
        const checkboxHtml = '<input type="checkbox" style="margin-right: 6px; vertical-align: middle; accent-color: #3b82f6; transform: scale(1.2); cursor: pointer;" />&nbsp;';
        execCmd('insertHTML', checkboxHtml);
    };

    const openLinkModal = () => {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            savedRangeRef.current = range;

            let node = selection.anchorNode;
            while (node && node.nodeName !== 'A' && node !== contentRef.current) {
                node = node.parentNode;
            }

            if (node && node.nodeName === 'A') {
                const anchor = node as HTMLAnchorElement;
                setEditingLinkNode(anchor);
                setLinkText(anchor.textContent || '');
                setLinkUrl(anchor.href);
                setLinkTarget(anchor.target as '_blank' | '_self' || '_blank');
            } else {
                setEditingLinkNode(null);
                setLinkText(range.toString());
                setLinkUrl('');
                setLinkTarget('_blank');
            }
            setLinkModalOpen(true);
        }
    };

    const closeLinkModal = () => {
        setLinkModalOpen(false);
        setEditingLinkNode(null);
    };

    const saveLink = () => {
        const selection = window.getSelection();
        if (selection && savedRangeRef.current) {
            selection.removeAllRanges();
            selection.addRange(savedRangeRef.current);
        }

        if (editingLinkNode) {
            editingLinkNode.textContent = linkText;
            editingLinkNode.href = linkUrl;
            editingLinkNode.target = linkTarget;
        } else {
            const linkHtml = `<a href="${linkUrl}" target="${linkTarget}" class="text-blue-600 underline">${linkText}</a>`;
            execCmd('insertHTML', linkHtml);
        }
        handleInput();
        closeLinkModal();
    };

    const removeLink = () => {
        if (editingLinkNode) {
            const text = editingLinkNode.textContent || "";
            const textNode = document.createTextNode(text);
            editingLinkNode.parentNode?.replaceChild(textNode, editingLinkNode);
            handleInput();
            closeLinkModal();
        } else {
           execCmd('unlink');
           closeLinkModal();
        }
    };

    const goToLink = () => {
        if (linkUrl) window.open(linkUrl, '_blank');
    };

    const handleEditorClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'IMG') {
            selectImage(target as HTMLImageElement);
            return;
        }
        if (target.tagName === 'INPUT' && (target as HTMLInputElement).type === 'checkbox') {
            deselectImage();
            const input = target as HTMLInputElement;
            if (input.checked) {
                input.setAttribute('checked', 'checked');
            } else {
                input.removeAttribute('checked');
            }
            handleInput();
            return;
        }
        deselectImage();
    };

    // ----------------- Checkbox satırı yardımcıları -----------------
    const normalizeLineText = (s: string) => (s || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();

    // Satırı ve checkbox'ını bul: host'un doğrudan çocuğu olan blok (div/p/li)
    // veya doğrudan metin ("kök satır": input+metin doğrudan host altında)
    const getLineInfo = (): { blockEl: HTMLElement | null; lineEl: HTMLElement | null; rootText: Text | null; checkbox: HTMLInputElement | null; isEmpty: boolean } | null => {
        const host = contentRef.current;
        const sel = window.getSelection();
        if (!host || !sel || sel.rangeCount === 0) return null;
        if (!sel.isCollapsed) return null; // çoklu seçim → varsayılan davranış
        let node: Node | null = sel.getRangeAt(0).startContainer;

        let top: Node | null = null;
        while (node && node !== host) {
            if (node.parentNode === host) { top = node; break; }
            node = node.parentNode;
        }
        if (!top) return null;

        if (top.nodeType === Node.TEXT_NODE) {
            const rootText = top as Text;
            let prev: Node | null = rootText.previousSibling;
            let checkbox: HTMLInputElement | null = null;
            while (prev) {
                if (prev.nodeType === Node.ELEMENT_NODE) {
                    const el = prev as HTMLElement;
                    if (el.tagName === 'INPUT' && (el as HTMLInputElement).type === 'checkbox') { checkbox = el as HTMLInputElement; break; }
                    if (['DIV', 'P', 'UL', 'OL', 'LI', 'BLOCKQUOTE', 'TABLE'].includes(el.tagName)) break;
                }
                prev = prev.previousSibling;
            }
            return { blockEl: null, lineEl: null, rootText, checkbox, isEmpty: normalizeLineText(rootText.data) === '' };
        }

        const blockEl = top as HTMLElement;
        // Satır kutusu: imlecin bulunduğu, checkbox içeren en yakın satır öğesi (div/p/li).
        // Girintili yapıda (ör. blockquote > div) bu, dış kabın DEĞİL satırın kendisidir.
        let lineEl: HTMLElement | null = null;
        let cursor: Node | null = sel.getRangeAt(0).startContainer;
        while (cursor && cursor !== host && cursor !== blockEl) {
            if (cursor.nodeType === Node.ELEMENT_NODE) {
                const el = cursor as HTMLElement;
                if (['DIV', 'P', 'LI'].includes(el.tagName) && el.querySelector('input[type="checkbox"]')) {
                    lineEl = el;
                    break;
                }
            }
            cursor = cursor.parentNode;
        }
        const scope = lineEl || blockEl;
        const checkbox = scope.querySelector('input[type="checkbox"]') as HTMLInputElement | null;
        return { blockEl, lineEl, rootText: null, checkbox, isEmpty: normalizeLineText(scope.textContent || '') === '' };
    };

    // İmleç gerçek bir tarayıcı listesinin (ul/ol/li) içinde mi?
    const inNativeList = (): boolean => {
        const host = contentRef.current;
        const sel = window.getSelection();
        if (!host || !sel || sel.rangeCount === 0) return false;
        let node: Node | null = sel.getRangeAt(0).startContainer;
        while (node && node !== host) {
            if (node.nodeType === Node.ELEMENT_NODE) {
                const t = (node as HTMLElement).tagName;
                if (t === 'LI' || t === 'UL' || t === 'OL') return true;
            }
            node = node.parentNode;
        }
        return false;
    };

    // Yeni checkbox satırı (div) üret: [checkbox, &nbsp;, ...]
    const makeCheckboxBlock = (): HTMLDivElement => {
        const div = document.createElement('div');
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.style.marginRight = '6px';
        cb.style.verticalAlign = 'middle';
        cb.style.accentColor = '#3b82f6';
        cb.style.cursor = 'pointer';
        cb.style.transform = 'scale(1.2)';
        div.appendChild(cb);
        div.appendChild(document.createTextNode('\u00a0'));
        return div;
    };

    const placeCaretAfterCheckbox = (div: HTMLDivElement) => {
        const sel = window.getSelection();
        if (!sel) return;
        const r = document.createRange();
        const afterNbsp = div.childNodes[1]; // [checkbox, &nbsp;, ...tail]
        r.setStartAfter(afterNbsp);
        r.collapse(true);
        sel.removeAllRanges();
        sel.addRange(r);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        // Ctrl/Cmd + Z → geri, Ctrl/Cmd + Shift+Z veya Ctrl+Y → ileri
        if ((e.ctrlKey || e.metaKey) && !e.altKey && (e.key === 'z' || e.key === 'Z' || e.key === 'y' || e.key === 'Y')) {
            e.preventDefault();
            if (e.key.toLowerCase() === 'y' || e.shiftKey) redo();
            else undo();
            return;
        }
        // Normal tuşlar: değişiklik ÖNCESİ yedek al (yazma demeti 600ms birleşir)
        if (!e.ctrlKey && !e.metaKey && !e.altKey) {
            captureForUndo();
        }
        // Sekme (Tab): ileri = girinti artır, Shift+Tab = geri = girinti azalt.
        // Varsayılan davranış (odağı editörden dışarı kaçırma) engellenir.
        if (e.key === 'Tab') {
            e.preventDefault();
            captureForUndo(true); // girinti tek hamle olarak geri alınabilir

            // İmleç, içerikteki bir checkbox input'undaysa önce satır sonuna taşı
            // (girinti komutunun çalışması için metin imleci gerekir)
            const active = document.activeElement;
            if (active && active.tagName === 'INPUT' && contentRef.current && contentRef.current.contains(active)) {
                const input = active as HTMLInputElement;
                const block = input.closest('div, li, p');
                const selection = window.getSelection();
                if (selection) {
                    const range = document.createRange();
                    if (block) {
                        range.selectNodeContents(block);
                        range.collapse(false);
                    } else {
                        range.setStartAfter(input);
                        range.collapse(true);
                    }
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
                contentRef.current.focus();
            }

            if (e.shiftKey) {
                document.execCommand('outdent'); // geri (girintiyi azalt)
            } else {
                document.execCommand('indent'); // ileri (girintiyi artır)
            }
            handleInput();
            return;
        }

        if (e.key === 'Enter') {
            const line = getLineInfo();
            if (!line || !line.checkbox) return; // checkbox satırı değil → varsayılan davranış
            e.preventDefault();
            captureForUndo(true); // checkbox satırı işlemi tek hamle olarak geri alınabilir

            if (line.isEmpty) {
                // 2. Enter (boş satır): checkbox kaldır → normal satır olur
                line.checkbox.remove();
                handleInput();
                return;
            }

            if (inNativeList()) {
                // Gerçek liste (ul/ol/li) içi: tarayıcının satır devamı + yeni checkbox
                document.execCommand('insertParagraph', false);
                insertCheckbox();
                handleInput();
                return;
            }

            // Notion tarzı bölme: imlecin ardındaki metni yeni checkbox satırına taşı
            const sel = window.getSelection();
            if (sel && sel.rangeCount > 0) {
                const range = sel.getRangeAt(0);
                const startNode = range.startContainer;
                const offset = range.startOffset;

                const tailRange = document.createRange();
                tailRange.setStart(startNode, offset);
                if (line.lineEl) {
                    // Girintili satır: kuyruğu yalnızca bu satırın sonuna kadar al
                    // (kabın/diğer satırların içeriğini sürükleme)
                    tailRange.setEnd(line.lineEl, line.lineEl.childNodes.length);
                } else if (line.blockEl) {
                    tailRange.setEnd(line.blockEl, line.blockEl.childNodes.length);
                } else {
                    tailRange.setEnd(line.rootText as Text, (line.rootText as Text).length);
                }
                const tail = tailRange.extractContents();
                const newBlock = makeCheckboxBlock();
                if (tail.textContent) newBlock.appendChild(tail);
                // Yeni satırı AYNI kabın içine (üst satırla aynı hizada) ekle
                (line.lineEl || line.blockEl || line.rootText)?.after(newBlock);
                placeCaretAfterCheckbox(newBlock);
            }
            handleInput();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
        e.preventDefault();
        const cd = e.clipboardData;
        if (!cd) return;

        const html = cd.getData('text/html');
        const text = cd.getData('text/plain');

        // 1. Panoda resim dosyası varsa → base64 olarak sırayla ekle
        //    (örn. ekran görüntüsü veya bir resim dosyasının kopyası)
        const imageFiles: File[] = [];
        if (cd.items) {
            Array.from(cd.items).forEach(item => {
                if (item.kind === 'file' && item.type.startsWith('image/')) {
                    const file = item.getAsFile();
                    if (file) imageFiles.push(file);
                }
            });
        }

        if (imageFiles.length > 0 && !html) {
            let index = 0;
            const insertNextImage = () => {
                if (index >= imageFiles.length) {
                    handleInput();
                    contentRef.current?.focus();
                    return;
                }
                const file = imageFiles[index++];
                const reader = new FileReader();
                reader.onload = (ev) => {
                    const src = ev.target?.result;
                    if (src) {
                        const img = `<img src="${src}" style="max-width: 100%; height: auto;" alt="" />`;
                        execCmd('insertHTML', img);
                    }
                    insertNextImage();
                };
                reader.readAsDataURL(file);
            };
            insertNextImage();
            return;
        }

        // 2. Zengin HTML varsa → temizleyip biçimleri ve resimleri koruyarak yapıştır
        if (html) {
            const cleaned = sanitizePastedHtml(html);
            if (cleaned.trim()) {
                execCmd('insertHTML', cleaned);
                return;
            }
        }

        // 3. Düz metin → satır sonlarını koruyarak yapıştır
        if (text) {
            execCmd('insertHTML', escapeHtml(text).replace(/\n/g, '<br>'));
        }
    };

    return (
        <div className="flex flex-col h-full border rounded-lg overflow-hidden bg-white text-black">
            <div className="flex flex-wrap items-center gap-1 p-2 border-b bg-gray-50 text-gray-700">
                <div className="flex mr-2 border-r pr-2 gap-1">
                    <button onClick={undo} className="p-1 hover:bg-gray-200 rounded" title="Geri Al (Ctrl+Z)"><Undo2 className="size-4" /></button>
                    <button onClick={redo} className="p-1 hover:bg-gray-200 rounded" title="İleri Al (Ctrl+Y)"><Redo2 className="size-4" /></button>
                </div>
                <div className="flex mr-2 border-r pr-2 gap-1">
                    <button onClick={() => execCmd('bold')} className="p-1 hover:bg-gray-200 rounded font-bold" title="Kalın"><Bold className="size-[18px]" /></button>
                    <button onClick={() => execCmd('italic')} className="p-1 hover:bg-gray-200 rounded italic" title="İtalik"><Italic className="size-[18px]" /></button>
                    <button onClick={() => execCmd('underline')} className="p-1 hover:bg-gray-200 rounded underline" title="Altı Çizili"><Underline className="size-[18px]" /></button>
                </div>
                <div className="flex mr-2 border-r pr-2 gap-1">
                     <button onClick={() => execCmd('justifyLeft')} className="p-1 hover:bg-gray-200 rounded" title="Sola Hizala"><AlignLeft className="size-[18px]" /></button>
                     <button onClick={() => execCmd('justifyCenter')} className="p-1 hover:bg-gray-200 rounded" title="Ortala"><AlignCenter className="size-[18px]" /></button>
                     <button onClick={() => execCmd('justifyRight')} className="p-1 hover:bg-gray-200 rounded" title="Sağa Hizala"><AlignRight className="size-[18px]" /></button>
                     <button onClick={() => execCmd('justifyFull')} className="p-1 hover:bg-gray-200 rounded" title="İki Yana Yasla"><AlignJustify className="size-[18px]" /></button>
                </div>
                <div className="flex mr-2 border-r pr-2 gap-1">
                    <button onClick={() => execCmd('insertUnorderedList')} className="p-1 hover:bg-gray-200 rounded" title="Madde İşaretleri"><ListIcon className="size-[18px]" /></button>
                    <button onClick={() => execCmd('insertOrderedList')} className="p-1 hover:bg-gray-200 rounded" title="Numaralı Liste"><ListOrdered className="size-[18px]" /></button>
                </div>
                 <div className="flex mr-2 border-r pr-2 gap-1">
                    <button onClick={() => execCmd('indent')} className="p-1 hover:bg-gray-200 rounded" title="Girintiyi Artır"><IndentIcon className="size-[18px]" /></button>
                    <button onClick={() => execCmd('outdent')} className="p-1 hover:bg-gray-200 rounded" title="Girintiyi Azalt"><OutdentIcon className="size-[18px]" /></button>
                </div>
                <div className="flex gap-1 items-center">
                    <button onClick={openLinkModal} className={`p-1 hover:bg-gray-200 rounded ${linkModalOpen ? 'bg-blue-200' : ''}`} title="Bağlantı Ekle/Düzenle"><LinkIcon className="size-[18px]" /></button>
                    <button onClick={insertImage} className="p-1 hover:bg-gray-200 rounded" title="Resim Ekle"><ImageIcon className="size-[18px]" /></button>
                    <div className="w-px h-5 bg-gray-300 mx-1"></div>
                    <button onClick={insertCheckbox} className="p-1 hover:bg-gray-200 rounded" title="Kontrol Listesi Ekle"><CheckSquare className="size-[18px]" /></button>
                </div>
            </div>
            <div ref={wrapRef} className="relative flex-1 overflow-y-auto" onScroll={handleEditorScroll}>
                <div 
                    ref={contentRef}
                    className="h-full p-4 outline-none [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_a]:text-blue-600 [&_a]:underline [&_img]:max-w-full"
                    contentEditable
                    onInput={handleInput}
                    onClick={handleEditorClick}
                    onKeyDown={handleKeyDown}
                    onBeforeInput={handleBeforeInput}
                    onPaste={handlePaste}
                    style={{ minHeight: '200px' }}
                />
                {overlay && (
                    <>
                        {(['nw', 'ne', 'sw', 'se'] as const).map((c) => {
                            const l = c.includes('w') ? overlay.x : overlay.x + overlay.w;
                            const t = c.includes('n') ? overlay.y : overlay.y + overlay.h;
                            const cursor = c === 'nw' || c === 'se' ? 'nwse-resize' : 'nesw-resize';
                            return (
                                <div
                                    key={c}
                                    onMouseDown={(e) => startImageResize(e, c)}
                                    className="absolute"
                                    style={{
                                        left: l, top: t,
                                        width: 12, height: 12,
                                        marginLeft: -6, marginTop: -6,
                                        background: '#fff',
                                        border: '2px solid #3b82f6',
                                        borderRadius: 2,
                                        cursor,
                                        zIndex: 30,
                                        boxShadow: '0 0 2px rgba(0,0,0,0.35)',
                                    }}
                                />
                            );
                        })}
                    </>
                )}
            </div>
            {linkModalOpen && (
                <div className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-xl w-80 border border-gray-200">
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                            <LinkIcon className="size-[18px]" /> Bağlantı Düzenle
                        </h3>
                        <div className="space-y-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Metin</label>
                                <input 
                                    type="text" 
                                    value={linkText} 
                                    onChange={(e) => setLinkText(e.target.value)}
                                    className="w-full border rounded px-2 py-1 text-sm"
                                    placeholder="Görünen metin"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Bağlantı Adresi (URL)</label>
                                <div className="flex gap-1">
                                    <input 
                                        type="text" 
                                        value={linkUrl} 
                                        onChange={(e) => setLinkUrl(e.target.value)}
                                        className="w-full border rounded px-2 py-1 text-sm"
                                        placeholder="https://..."
                                    />
                                    <button onClick={goToLink} title="Bağlantıya Git" className="p-1 bg-gray-100 border rounded hover:bg-gray-200">
                                        <ExternalLink className="size-4" />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Hedef</label>
                                <select 
                                    value={linkTarget} 
                                    onChange={(e) => setLinkTarget(e.target.value as '_blank' | '_self')}
                                    className="w-full border rounded px-2 py-1 text-sm bg-white"
                                >
                                    <option value="_blank">Yeni Pencere (_blank)</option>
                                    <option value="_self">Aynı Sekme (_self)</option>
                                </select>
                            </div>
                            <div className="flex justify-between items-center pt-2 border-t mt-2">
                                <button onClick={removeLink} className="text-red-600 text-xs hover:underline flex items-center gap-1"><Trash2 className="size-3" /> Bağlantıyı Kaldır</button>
                                <div className="flex gap-2">
                                    <button onClick={closeLinkModal} className="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300">İptal</button>
                                    <button onClick={saveLink} className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700">Kaydet</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export { RichTextEditorPlus }
