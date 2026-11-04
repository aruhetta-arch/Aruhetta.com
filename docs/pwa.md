ARUHETTA — Progressive Web App Specification

File: "docs/pwa.md"
Project: Aruhetta
Version: 1.0
Status: Planning
Last Updated: 4 November 2026

---

1. Overview

Progressive Web App (PWA) Specification menetapkan standar pengembangan fitur PWA pada Aruhetta.

Tujuan:

- Memungkinkan Aruhetta dipasang sebagai aplikasi.
- Memberikan pengalaman seperti aplikasi native.
- Mendukung akses offline untuk konten terpilih.
- Mempercepat pemuatan melalui caching.
- Menyediakan mekanisme pembaruan aplikasi.
- Mempertahankan pengalaman responsif di berbagai perangkat.

2. PWA Principles

Aruhetta menggunakan prinsip:

- Installable.
- Responsive.
- Reliable.
- Secure.
- Offline Capable.
- Lightweight.
- Progressive Enhancement.

Fitur PWA tidak boleh menghalangi pengguna yang mengakses website melalui browser biasa.

3. PWA Architecture

Komponen utama:

- Web App Manifest.
- Service Worker.
- Application Icons.
- Cache Storage.
- Offline Fallback.
- Installation Experience.
- Update Management.

PWA menggunakan arsitektur frontend Aruhetta berbasis HTML, CSS, Vanilla JavaScript ES Modules, dan Vite.

4. Web App Manifest

Manifest menyediakan informasi identitas dan tampilan aplikasi.

Properti yang direncanakan:

Property| Value
name| Aruhetta
short_name| Aruhetta
display| standalone
orientation| any
start_url| Sesuai konfigurasi deployment
scope| Sesuai konfigurasi deployment
theme_color| Mengikuti design system
background_color| Mengikuti tema aplikasi

Ketentuan:

- Menggunakan ikon aplikasi yang sesuai.
- Menyediakan ukuran ikon yang diperlukan.
- Menggunakan nama aplikasi yang konsisten.
- Memastikan start URL valid.
- Manifest harus tersedia pada lokasi yang benar.

5. Application Icons

Ikon PWA menggunakan identitas visual Aruhetta.

Kebutuhan:

- Ikon 192×192.
- Ikon 512×512.
- Ikon maskable jika diperlukan.
- Ikon untuk berbagai tampilan perangkat.

Ketentuan:

- Ikon harus jelas pada ukuran kecil.
- Memiliki kontras yang memadai.
- Tidak menggunakan detail berlebihan.
- Menggunakan format gambar yang didukung browser.

6. Installation Experience

Aruhetta mendukung instalasi melalui browser yang kompatibel.

Automatic Install Prompt

- Menampilkan prompt instalasi ketika browser mendukung.
- Tidak memaksa pengguna memasang aplikasi.
- Tidak menampilkan prompt berulang secara berlebihan.

Manual Installation

- Menyediakan tombol Install App jika memungkinkan.
- Menyediakan panduan instalasi manual.
- Mendukung instruksi Add to Home Screen untuk iOS.

Installation State

Aruhetta dapat mendeteksi apakah aplikasi sedang berjalan dalam mode standalone atau browser biasa, sesuai kemampuan platform.

7. Service Worker

Service Worker bertanggung jawab terhadap caching dan dukungan offline.

Fungsi:

- Mengelola cache aset statis.
- Menyediakan halaman offline.
- Mengatur strategi pemuatan resource.
- Mengelola versi cache.
- Menghapus cache lama.
- Menangani pembaruan aplikasi.

Ketentuan:

- Service Worker hanya berjalan melalui secure context yang didukung.
- Memiliki mekanisme fallback.
- Tidak menyimpan data sensitif.
- Tidak mengganggu proses autentikasi.
- Memiliki penanganan error yang jelas.

8. Caching Strategy

Strategi cache disesuaikan dengan jenis resource.

Cache First

Digunakan untuk aset statis yang memiliki versi atau nama file terkontrol.

Contoh:

- CSS.
- JavaScript hasil build.
- Ikon.
- Font.
- Gambar statis.

Network First

Digunakan untuk konten yang membutuhkan data terbaru.

Contoh:

- Daftar artikel terbaru.
- Informasi event.
- Data publik Arumunity.

Jika jaringan gagal, aplikasi dapat menampilkan cache yang masih valid apabila tersedia.

Stale While Revalidate

Dapat digunakan untuk konten publik yang boleh ditampilkan dari cache sambil mengambil versi terbaru dari jaringan.

Network Only

Digunakan untuk operasi yang harus terhubung ke server.

Contoh:

- Login.
- Logout.
- Pengiriman pesan.
- Perubahan data akun.
- Operasi administratif.

9. Offline Experience

Aruhetta menyediakan dukungan offline terbatas.

Available Offline

- Struktur dasar aplikasi.
- Aset statis yang sudah tersimpan.
- Halaman offline.
- Artikel yang sebelumnya dibuka dan berhasil disimpan.
- Bookmark lokal.
- Tool tertentu yang mendukung pemrosesan lokal.
- Sebagian informasi profil lokal yang aman.

Requires Internet

- Login dan autentikasi server.
- Pengiriman DM.
- Sinkronisasi data.
- Notifikasi dari server.
- Posting dan komentar baru.
- Operasi admin.
- Data yang belum pernah disimpan secara lokal.

Offline Fallback

Jika halaman tidak dapat diakses:

- Menampilkan halaman offline.
- Menjelaskan bahwa koneksi internet diperlukan.
- Menyediakan tombol coba lagi.
- Mempertahankan tampilan yang konsisten dengan design system.

10. Offline Data Management

- Menyimpan hanya data yang diperlukan.
- Memberikan batas penyimpanan lokal.
- Menyediakan mekanisme penghapusan cache.
- Menghindari penyimpanan data sensitif.
- Mengelola konflik data ketika kembali online.
- Memastikan data lokal tidak dianggap sebagai sumber data server yang selalu terbaru.

11. Synchronization

Ketika koneksi kembali tersedia:

- Memeriksa koneksi.
- Memperbarui konten yang relevan.
- Menyinkronkan preferensi yang aman.
- Menangani konflik perubahan.
- Menampilkan status sinkronisasi.
- Menghindari pengiriman operasi berulang.

Operasi yang gagal tidak boleh otomatis diulang jika berisiko membuat duplikasi.

12. Update Management

Aruhetta menggunakan sistem pembaruan campuran.

Minor Updates

- Dapat diterapkan secara otomatis ketika aman.
- Tidak mengganggu aktivitas pengguna.
- Memperbarui aset dan cache terkait.

Major Updates

- Menampilkan pemberitahuan pembaruan.
- Memberikan informasi perubahan jika tersedia.
- Meminta konfirmasi ketika diperlukan.
- Menyediakan opsi memuat ulang aplikasi.

Update Safety

- Memastikan versi aset tetap konsisten.
- Menghindari cache campuran dari versi berbeda.
- Memiliki mekanisme pemulihan ketika update gagal.

13. Push Notifications

Push notification dapat digunakan jika browser dan platform mendukungnya.

Jenis:

- Notifikasi pesan.
- Aktivitas komunitas.
- Pengikut baru.
- Event dan pengingat.
- Pembaruan penting.

Ketentuan:

- Memerlukan izin pengguna.
- Tidak meminta izin tanpa konteks.
- Pengguna dapat mengatur preferensi.
- Tidak menampilkan informasi pribadi pada layar kunci secara default.
- Menyediakan pengaturan untuk menonaktifkan notifikasi.

14. Background Processing

Background processing hanya digunakan jika platform mendukungnya.

Contoh:

- Pembaruan cache.
- Sinkronisasi data yang diizinkan.
- Penanganan notifikasi.

Fitur seperti Background Sync dan Periodic Background Sync bersifat opsional karena dukungan browser berbeda-beda.

15. Security & Privacy

- Menggunakan HTTPS.
- Tidak menyimpan password di Cache Storage.
- Tidak menyimpan Service Role Key atau secret backend.
- Tidak melakukan caching response autentikasi secara sembarangan.
- Membatasi akses terhadap data privat.
- Menghapus data lokal ketika pengguna memilih logout dari perangkat.
- Memastikan cache tidak membocorkan data antar akun.

16. Performance Optimization

- Menghindari cache aset yang tidak diperlukan.
- Menggunakan ukuran gambar yang optimal.
- Membatasi ukuran penyimpanan.
- Menghindari service worker yang terlalu kompleks.
- Memprioritaskan resource penting.
- Menghapus cache versi lama dengan aman.

17. GitHub Pages Compatibility

Karena Aruhetta menggunakan GitHub Pages:

- Menyesuaikan manifest dengan base path deployment.
- Menyesuaikan start URL dan scope.
- Memastikan lokasi Service Worker sesuai scope yang diperlukan.
- Memastikan seluruh aset menggunakan path yang benar.
- Menguji PWA pada URL GitHub Pages.
- Menyesuaikan konfigurasi setelah custom domain aktif.

18. Browser Compatibility

Pengujian dilakukan pada:

- Chrome Android.
- Edge.
- Firefox.
- Safari iOS.
- Chrome Desktop.

Fitur yang tidak didukung browser harus memiliki fallback yang sesuai.

19. PWA Testing

Pengujian meliputi:

- Manifest validation.
- Service Worker registration.
- Instalasi aplikasi.
- Tampilan standalone.
- Offline fallback.
- Cache behavior.
- Update lifecycle.
- Push notification permission.
- Penghapusan cache.
- Navigasi ketika koneksi terputus.

Tools:

- Chrome DevTools.
- Lighthouse.
- Browser Application Panel.
- Web App Manifest Validator.

20. Maintenance

- Memperbarui versi cache ketika aset berubah.
- Menguji Service Worker setelah perubahan deployment.
- Memeriksa kompatibilitas browser.
- Memantau penggunaan storage.
- Memperbaiki masalah instalasi.
- Memperbarui dokumentasi jika strategi PWA berubah.

---

End of Document

Aruhetta Progressive Web App Specification — Version 1.0
