ARUHETTA — Accessibility Guidelines

Dokumen: Accessibility Guidelines
Versi: 1.0
Status: Planning
Tanggal: 4 November 2026
Branch: "development"

---

1. Tujuan

Dokumen ini menetapkan standar aksesibilitas untuk seluruh bagian platform Aruhetta.

Tujuan utama:

- Membuat website mudah digunakan oleh berbagai pengguna.
- Mendukung pengguna keyboard dan assistive technology.
- Memastikan konten mudah dibaca dan dipahami.
- Menyediakan navigasi yang konsisten.
- Mengurangi hambatan dalam menggunakan fitur.
- Menerapkan prinsip desain yang inklusif.

Aksesibilitas harus menjadi bagian dari proses perencanaan, desain, pengembangan, dan pengujian.

2. Accessibility Standard

Aruhetta menggunakan Web Content Accessibility Guidelines (WCAG) 2.2 Level AA sebagai target utama.

WCAG memiliki empat prinsip utama yang dikenal sebagai POUR:

Prinsip| Penjelasan
Perceivable| Informasi dapat dikenali melalui berbagai indra
Operable| Fitur dapat dioperasikan dengan berbagai metode input
Understandable| Informasi dan interaksi mudah dipahami
Robust| Konten kompatibel dengan teknologi bantu

Target ini berlaku untuk halaman utama, artikel, Arumunity, Tools, autentikasi, profil, dan dashboard.

3. General Accessibility Principles

Seluruh halaman harus mengikuti prinsip berikut:

1. Informasi penting tidak hanya disampaikan melalui warna.
2. Elemen interaktif harus dapat dikenali.
3. Navigasi harus konsisten.
4. Konten memiliki struktur yang jelas.
5. Formulir menyediakan label dan petunjuk.
6. Gambar informatif memiliki teks alternatif.
7. Animasi tidak boleh mengganggu pengguna.
8. Komponen harus mendukung teknologi bantu.
9. Pesan error harus jelas dan mudah ditemukan.
10. Pengguna harus memiliki kendali terhadap interaksi penting.

4. Semantic HTML

HTML semantik digunakan untuk membantu browser dan assistive technology memahami struktur halaman.

Elemen yang dianjurkan:

Elemen| Penggunaan
"<header>"| Bagian header halaman
"<nav>"| Navigasi
"<main>"| Konten utama
"<section>"| Kelompok konten
"<article>"| Konten mandiri seperti artikel
"<aside>"| Konten tambahan
"<footer>"| Bagian footer
"<button>"| Aksi interaktif
"<form>"| Formulir
"<label>"| Label input

Ketentuan:

- Gunakan heading secara berurutan.
- Hindari menggunakan elemen hanya untuk tampilan visual.
- Gunakan button untuk aksi.
- Gunakan link untuk navigasi.
- Pastikan setiap halaman memiliki struktur utama yang jelas.
- Hindari penggunaan elemen non-semantik untuk menggantikan kontrol interaktif.

5. Keyboard Accessibility

Seluruh fitur penting harus dapat digunakan menggunakan keyboard.

Tombol navigasi utama:

Tombol| Fungsi umum
Tab| Berpindah ke elemen interaktif berikutnya
Shift + Tab| Kembali ke elemen sebelumnya
Enter| Mengaktifkan link atau tombol
Space| Mengaktifkan tombol atau checkbox
Escape| Menutup dialog atau menu yang mendukungnya
Arrow Keys| Navigasi pada komponen yang memerlukannya

Ketentuan:

- Seluruh elemen interaktif harus dapat dijangkau.
- Urutan fokus harus logis.
- Fokus tidak boleh terjebak tanpa alasan.
- Focus indicator harus terlihat.
- Elemen yang sedang tidak aktif tidak boleh menerima interaksi yang tidak semestinya.
- Dropdown, sidebar, modal, dan dialog harus mendukung keyboard.
- Setelah dialog ditutup, fokus dikembalikan ke elemen pemicunya.

6. Focus Management

Fokus membantu pengguna mengetahui posisi navigasi mereka.

Standar:

- Gunakan focus indicator yang jelas.
- Jangan menghilangkan outline tanpa pengganti.
- Pastikan fokus tidak tertutup header atau elemen tetap lainnya.
- Saat modal dibuka, fokus diarahkan ke dalam modal.
- Saat modal ditutup, fokus dikembalikan ke pemicu.
- Saat konten diperbarui secara dinamis, perpindahan fokus harus tetap masuk akal.
- Perubahan halaman harus memberikan petunjuk yang sesuai kepada teknologi bantu.

Focus indicator harus memiliki kontras yang memadai terhadap latar belakang.

7. Screen Reader Support

Aruhetta harus mendukung screen reader populer yang tersedia pada perangkat dan browser pengguna.

Contoh:

- TalkBack.
- VoiceOver.
- NVDA.
- JAWS.

Ketentuan:

- Gunakan elemen HTML semantik.
- Sediakan accessible name untuk kontrol.
- Gunakan label formulir yang jelas.
- Gunakan alt text pada gambar informatif.
- Gunakan ARIA hanya ketika diperlukan.
- Hindari penggunaan ARIA yang bertentangan dengan semantik HTML.
- Berikan informasi status untuk perubahan penting.
- Pastikan ikon interaktif memiliki nama yang dapat dikenali.

7.1 ARIA Guidelines

ARIA digunakan untuk melengkapi semantik, bukan menggantikan HTML semantik.

Contoh atribut:

- "aria-label"
- "aria-labelledby"
- "aria-describedby"
- "aria-expanded"
- "aria-controls"
- "aria-current"
- "aria-live"
- "aria-hidden"

Penggunaan harus sesuai fungsi komponen.

Elemen dekoratif yang tidak perlu dibacakan screen reader dapat disembunyikan dari accessibility tree.

8. Color & Contrast

Warna harus digunakan dengan mempertimbangkan keterbacaan.

Target kontras WCAG 2.2 Level AA:

Jenis konten| Rasio minimum
Teks normal| 4.5:1
Teks besar| 3:1
Komponen UI dan indikator visual penting| 3:1 terhadap warna yang berdekatan

Ketentuan:

- Jangan mengandalkan warna sebagai satu-satunya penanda status.
- Gunakan teks atau ikon tambahan untuk informasi penting.
- Periksa kontras pada Light Mode dan Dark Mode.
- Pastikan teks pada gradient banner tetap terbaca.
- Periksa kontras placeholder dan teks sekunder.
- Pastikan focus indicator terlihat jelas.

Warna utama Aruhetta tetap mengikuti "docs/design-system.md".

9. Typography & Readability

Tipografi harus mudah dibaca pada berbagai ukuran layar.

Font utama:

Plus Jakarta Sans

Ketentuan:

- Gunakan ukuran teks yang nyaman dibaca.
- Hindari teks terlalu kecil.
- Gunakan line-height yang memadai.
- Pisahkan paragraf panjang menjadi bagian yang lebih mudah dibaca.
- Gunakan heading yang menjelaskan isi bagian.
- Hindari penggunaan huruf kapital berlebihan.
- Jangan menyampaikan informasi penting hanya melalui bentuk atau gaya teks.

Pengguna harus dapat memperbesar teks hingga 200% tanpa kehilangan konten atau fungsi.

Layout juga harus tetap dapat digunakan ketika pengguna melakukan zoom hingga 400% pada kondisi pengujian yang sesuai.

10. Responsive & Reflow Accessibility

Aruhetta menggunakan pendekatan Mobile First.

Ketentuan:

- Konten menyesuaikan ukuran viewport.
- Hindari horizontal scrolling untuk konten utama, kecuali pada komponen yang memang membutuhkan scrolling dua arah.
- Teks tidak boleh terpotong akibat pembesaran.
- Tombol dan kontrol tetap mudah digunakan.
- Navigasi tetap dapat diakses pada layar kecil.
- Konten tidak boleh bergantung pada orientasi layar tertentu kecuali memang diperlukan.

Komponen horizontal scroll seperti Quick Access, Latest Updates, dan Featured Content harus tetap menyediakan alternatif navigasi yang dapat digunakan keyboard dan teknologi bantu.

11. Touch Target Accessibility

Kontrol pada perangkat sentuh harus memiliki area interaksi yang cukup.

Target minimum WCAG 2.2 AA untuk ukuran target adalah 24 × 24 CSS pixel, dengan pengecualian yang diatur dalam standar.

Rekomendasi desain Aruhetta:

- Mengutamakan area sentuh sekitar 44 × 44 CSS pixel.
- Memberi jarak antar tombol.
- Menghindari tombol yang terlalu berdekatan.
- Menyediakan label yang jelas.
- Memastikan kontrol tidak hanya dapat diakses melalui hover.

Ketentuan ini berlaku untuk:

- Hamburger menu.
- Search.
- Profile icon.
- Theme toggle.
- Slider controls.
- Bookmark.
- Like dan reply.
- Tombol formulir.

12. Forms & Input Accessibility

Seluruh formulir harus mudah dipahami dan digunakan.

Ketentuan:

- Setiap input memiliki label.
- Placeholder tidak menggantikan label.
- Field wajib diberi informasi yang jelas.
- Format input dijelaskan jika diperlukan.
- Pesan error harus spesifik.
- Error harus terhubung dengan field terkait.
- Pengguna tidak boleh kehilangan seluruh input akibat kesalahan validasi.
- Status pengiriman harus diinformasikan.
- Formulir harus dapat digunakan dengan keyboard dan screen reader.

12.1 Authentication Forms

Berlaku untuk:

- Login.
- Sign Up.
- Forgot Password.
- Account Recovery.

Ketentuan tambahan:

- Informasi kesalahan login harus aman dan tidak membocorkan data akun.
- Password field harus memiliki label.
- Kontrol untuk menampilkan password harus dapat diakses.
- Proses verifikasi harus memberikan petunjuk yang jelas.
- Pesan keberhasilan dan kegagalan harus dapat dikenali teknologi bantu.

13. Image & Media Accessibility

13.1 Images

Ketentuan:

- Gambar informatif memiliki alt text yang menjelaskan tujuannya.
- Gambar dekoratif menggunakan alt kosong.
- Ikon interaktif memiliki accessible name.
- Hindari teks penting yang hanya tersedia di dalam gambar.
- Thumbnail harus memiliki deskripsi sesuai konteksnya.

13.2 Video

Jika video tersedia:

- Sediakan caption untuk konten percakapan atau audio penting.
- Sediakan kontrol pemutaran yang dapat diakses.
- Hindari autoplay dengan audio.
- Berikan informasi yang jelas mengenai media.
- Sediakan transkrip jika sesuai dengan jenis kontennya.

13.3 Audio

Jika audio tersedia:

- Sediakan kontrol play dan pause.
- Berikan label kontrol yang jelas.
- Sediakan transkrip jika sesuai.
- Hindari autoplay yang mengganggu.
- Pastikan kontrol dapat dioperasikan menggunakan keyboard.

13.4 Media Controls

Kontrol media harus:

- Memiliki nama yang jelas.
- Menampilkan status pemutaran.
- Mendukung keyboard.
- Memiliki ukuran target yang memadai.
- Tidak mengandalkan warna saja untuk menunjukkan status.

14. Animation & Motion Accessibility

Aruhetta menggunakan animasi yang halus dan tidak berlebihan.

Ketentuan:

- Mendukung "prefers-reduced-motion".
- Mengurangi animasi ketika pengguna meminta gerakan minimal.
- Hindari animasi berkedip yang berisiko mengganggu.
- Jangan menggunakan gerakan yang tidak diperlukan.
- Sediakan kontrol untuk konten bergerak otomatis jika dibutuhkan.
- Jangan mengandalkan animasi sebagai satu-satunya petunjuk interaksi.

14.1 Auto Slider

Hero Banner menggunakan Auto Slider dengan interval 5 detik.

Ketentuan aksesibilitas:

- Menyediakan kontrol pause dan resume.
- Menyediakan tombol navigasi sebelumnya dan berikutnya.
- Menyediakan indikator slide yang dapat diakses.
- Tidak memindahkan fokus secara otomatis.
- Tidak mengganggu pengguna screen reader.
- Menghormati pengaturan reduced motion.
- Pengguna dapat menghentikan pergerakan otomatis.

15. Navigation Accessibility

15.1 Header

Header Aruhetta berisi:

- Hamburger menu.
- Logo.
- Profile icon.

Ketentuan:

- Setiap kontrol memiliki nama yang jelas.
- Logo memiliki teks alternatif atau nama yang sesuai.
- Navigasi dapat digunakan dengan keyboard.
- Status menu terbuka atau tertutup dapat diketahui teknologi bantu.

15.2 Sidebar

Sidebar harus:

- Mendukung keyboard.
- Memiliki status expanded/collapsed yang benar.
- Dapat ditutup dengan Escape.
- Memiliki urutan fokus yang logis.
- Tidak menyembunyikan fokus pengguna.
- Mengembalikan fokus ke hamburger setelah ditutup.

15.3 Footer

Footer harus menggunakan struktur heading dan navigasi yang jelas.

Tautan harus memiliki teks yang menjelaskan tujuan, bukan label yang ambigu.

16. Dynamic Content & Notifications

Aruhetta menggunakan konten dinamis seperti:

- Toast.
- Modal.
- In-App Notification.
- Loading indicator.
- Search autocomplete.
- Komentar dan postingan baru.
- Status upload.

Ketentuan:

- Perubahan status penting harus dapat diketahui pengguna.
- Gunakan live region secara tepat.
- Hindari pengumuman berulang yang tidak diperlukan.
- Loading indicator harus memiliki informasi status.
- Error dan keberhasilan harus disampaikan dengan jelas.
- Jangan memindahkan fokus secara tidak perlu.

Contoh penggunaan:

- "role="status"" untuk informasi status.
- "role="alert"" untuk pesan penting yang membutuhkan perhatian segera.

17. Search Accessibility

Fitur pencarian harus dapat digunakan oleh berbagai pengguna.

Ketentuan:

- Search input memiliki label.
- Autocomplete dapat digunakan dengan keyboard.
- Hasil pencarian memiliki struktur yang jelas.
- Status hasil pencarian dapat diketahui screen reader.
- Riwayat pencarian dapat dikelola.
- Tombol hapus memiliki accessible name.
- Tidak mengandalkan interaksi mouse saja.

18. Accessibility by Page

18.1 Home

- Hero Banner memiliki kontrol yang dapat diakses.
- Quick Access dapat digunakan dengan keyboard.
- Latest Updates memiliki struktur heading yang jelas.
- Community Preview memiliki informasi konten yang mudah dikenali.
- Featured Content memiliki deskripsi gambar dan tautan yang jelas.

18.2 Articles

- Heading artikel tersusun secara hierarkis.
- Gambar artikel memiliki alt text.
- Video dan audio memiliki dukungan aksesibilitas.
- Kontrol komentar dan bookmark memiliki label.
- Tautan artikel mudah dikenali.

18.3 Arumunity

- Postingan memiliki struktur semantik.
- Tombol like dan reply memiliki label.
- Komentar dapat dibaca screen reader.
- Formulir postingan mudah digunakan.
- Dialog laporan dan moderasi mendukung keyboard.

18.4 Tools

- Formulir upload memiliki label.
- Status proses dapat diketahui.
- Pesan error mudah dipahami.
- Hasil proses dapat diakses.
- Kontrol download memiliki nama yang jelas.

18.5 Authentication

- Formulir login dan registrasi memiliki label.
- Pesan validasi terhubung dengan field.
- Proses autentikasi dapat digunakan dengan keyboard.
- Kontrol password dapat diakses.

18.6 Profile & Dashboard

- Navigasi dashboard konsisten.
- Informasi status dapat dibaca screen reader.
- Formulir pengaturan memiliki label.
- Grafik menyediakan ringkasan atau alternatif tekstual.
- Kontrol akun memiliki nama yang jelas.

19. Accessibility Testing

Pengujian dilakukan secara otomatis dan manual.

19.1 Automated Testing

Tools yang dapat digunakan:

- Lighthouse Accessibility.
- axe DevTools.
- WAVE.
- Browser developer tools.

Pengujian otomatis membantu menemukan masalah seperti:

- Kontras warna.
- Label input.
- Struktur heading.
- Accessible name.
- Atribut ARIA.
- Elemen interaktif.

Hasil otomatis tidak menjamin seluruh persyaratan WCAG telah terpenuhi.

19.2 Manual Testing

Pengujian manual mencakup:

- Navigasi menggunakan keyboard.
- Pengujian screen reader.
- Zoom dan pembesaran teks.
- Kontras warna.
- Penggunaan reduced motion.
- Navigasi pada perangkat mobile.
- Formulir dan validasi.
- Modal dan sidebar.
- Kontrol media.
- Konten dinamis.

19.3 Assistive Technology Testing

Pengujian dapat dilakukan menggunakan:

Platform| Teknologi
Android| TalkBack
iOS| VoiceOver
Windows| NVDA
Windows| JAWS

Pengujian disesuaikan dengan perangkat dan browser yang tersedia.

20. Accessibility Issue Management

Setiap masalah aksesibilitas harus dicatat.

Informasi minimal:

- Issue ID.
- Nama halaman atau komponen.
- Deskripsi masalah.
- Dampak terhadap pengguna.
- Kriteria WCAG terkait.
- Tingkat prioritas.
- Penanggung jawab.
- Status perbaikan.
- Hasil pengujian ulang.

Prioritas perbaikan:

Prioritas| Keterangan
Critical| Menghalangi akses ke fungsi penting
High| Mengganggu penggunaan fitur utama
Medium| Mengurangi kenyamanan atau kemudahan
Low| Perbaikan minor

21. Accessibility Checklist

Structure

- [ ] HTML semantik digunakan.
- [ ] Heading tersusun dengan baik.
- [ ] Struktur halaman konsisten.
- [ ] Navigasi mudah dikenali.

Keyboard

- [ ] Semua fitur utama dapat digunakan dengan keyboard.
- [ ] Focus indicator terlihat.
- [ ] Urutan fokus logis.
- [ ] Modal dan sidebar dapat dikontrol dengan keyboard.

Visual

- [ ] Kontras memenuhi target WCAG AA.
- [ ] Teks dapat diperbesar.
- [ ] Informasi tidak hanya bergantung pada warna.
- [ ] Layout tetap terbaca pada layar kecil.

Screen Reader

- [ ] Input memiliki label.
- [ ] Gambar informatif memiliki alt text.
- [ ] Ikon interaktif memiliki accessible name.
- [ ] Status dinamis dapat diketahui.

Motion & Media

- [ ] Reduced motion didukung.
- [ ] Auto Slider memiliki kontrol.
- [ ] Media memiliki kontrol yang dapat diakses.
- [ ] Tidak ada autoplay yang mengganggu.

Testing

- [ ] Automated testing dilakukan.
- [ ] Manual keyboard testing dilakukan.
- [ ] Screen reader testing dilakukan.
- [ ] Masalah aksesibilitas dicatat.
- [ ] Perbaikan diuji ulang.

22. Future Improvements

Pengembangan aksesibilitas berikutnya dapat mencakup:

- Accessibility settings khusus pengguna.
- Pengaturan ukuran teks.
- Pengaturan kontras tambahan.
- Pengaturan motion.
- Audit aksesibilitas otomatis dalam CI.
- Dashboard hasil pengujian aksesibilitas.
- Pengujian dengan pengguna yang memakai assistive technology.
- Panduan aksesibilitas untuk contributor.

23. Prinsip Akhir

Aksesibilitas Aruhetta harus mengutamakan:

1. Kemudahan penggunaan.
2. Navigasi yang konsisten.
3. Keterbacaan konten.
4. Dukungan teknologi bantu.
5. Kontrol pengguna terhadap interaksi.
6. Pengujian secara berkelanjutan.

Aksesibilitas bukan fitur tambahan, melainkan bagian dari kualitas dasar Aruhetta. Setiap fitur baru harus mempertimbangkan aksesibilitas sejak tahap perencanaan hingga pengujian.

---

Dokumen: "docs/accessibility.md"
Status: Planning
Pemilik: Aruhetta Project
Branch: "development"
