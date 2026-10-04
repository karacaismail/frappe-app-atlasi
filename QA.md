# Doğrulama

4 Ekim 2026, macOS yerel otomasyon. Playwright 1.62.1; kurulu Chromium, Firefox ve WebKit test binaryleri kullanıldı.

- PASS: ayrı AI segmenti, MCP alt kategorisi ve araştırma olgunluğu filtresi.
- PASS: kaynak listesindeki 62 URL, canonical kayıt veya alias üzerinden kapsanıyor; 43 yeni kayıt, toplam 258 kayıt.
- PASS: seçim, Markdown export, alias araması, fareyle dropdown/hover ve klavyeyle açma/ok/Escape.
- PASS: 320, 360, 375, 390, 568, 768, 1023/1024/1025 ve 1440 CSS px; yatay taşma yok, seçim resize sırasında korunuyor.
- PASS: mobil ana içeriğe sayfa kaydırmasıyla erişim; açık/koyu tema, 1rem minimum kontrol metni.
- PASS: yeni rapor kaydında teknik ve özellik puanları verilmemesi; rapor ürün olgunluğunun teknik puandan ayrılması.
- PASS: `git diff --check`.
- Bağımsız QA: kaynak/diff ve 320px/masaüstü görüntüleri incelendi. Metin solduran kaplama ve teknik renk/rapor etiketi karışması giderildi. Kaynak bölüm referansları eklendi.
- NOT_RUN: gerçek iOS/Android cihaz, gerçek Safari, ekran okuyucu, sertifikalı WCAG 2.2 AAA denetimi.
- Görseller aday ekran görüntüleridir; onaylı piksel karşılaştırma baseline'ı oluşturulmadı. Yeni CI sonucu GitHub Actions üzerinden ayrıca izlenir.

Komut: `NODE_PATH=<kurulu Playwright node_modules> npm test`. Yerel sunucu: `python3 -m http.server 8765 --bind 127.0.0.1`.
