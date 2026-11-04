ARUHETTA — Performance Specification

File: "docs/performance.md"
Project: Aruhetta
Version: 1.0
Status: Planning
Last Updated: 4 November 2026

---

1. Overview

Performance Specification menjelaskan standar dan strategi optimasi performa Aruhetta.

Tujuan:

- Mempercepat waktu pemuatan halaman.
- Mengurangi penggunaan bandwidth.
- Mengoptimalkan penggunaan CPU dan memori.
- Memberikan pengalaman yang stabil pada perangkat mobile.
- Mengurangi layout shifting dan interaksi yang lambat.
- Menjaga performa ketika jumlah pengguna dan konten meningkat.

2. Performance Principles

Aruhetta menggunakan prinsip:

- Performance First.
- Mobile First.
- Lightweight Architecture.
- Efficient Resource Loading.
- Progressive Enhancement.
- Responsive Asset Delivery.
- Minimal Unnecessary Processing.

3. Performance Metrics

Target performa awal menggunakan Core Web Vitals:

Metric| Target
LCP| ≤ 2.5 seconds
INP| ≤ 200 ms
CLS| ≤ 0.1

Target tambahan:

- Lighthouse Performance: 90+ sebagai sasaran.
- Tidak ada resource yang gagal dimuat tanpa penanganan.
- Navigasi utama tetap responsif.
- Halaman tetap dapat digunakan pada koneksi lambat.

Target merupakan sasaran pengembangan, bukan jaminan hasil pada semua perangkat.

4. Frontend Optimization

4.1 HTML

- Menggunakan struktur HTML semantik.
- Menghindari markup yang tidak diperlukan.
- Mengutamakan struktur halaman yang sederhana.
- Menggunakan atribut loading dan decoding sesuai kebutuhan.

4.2 CSS

- Menggunakan CSS yang terorganisasi.
- Menghindari duplikasi aturan.
- Menghapus CSS yang tidak digunakan.
- Mengoptimalkan selector dan animasi.
- Mengutamakan transform dan opacity untuk animasi.
- Menghindari layout dan paint yang tidak diperlukan.

4.3 JavaScript

- Menggunakan ES Modules.
- Menghindari script yang tidak diperlukan.
- Menggunakan dynamic import untuk fitur tertentu.
- Memisahkan kode berdasarkan kebutuhan halaman.
- Menghindari operasi berat pada main thread.
- Menggunakan debounce atau throttle untuk interaksi yang sesuai.
- Menghindari event listener yang tidak diperlukan.

5. Vite Build Optimization

- Menggunakan production build.
- Mengaktifkan minification.
- Mengoptimalkan pembagian bundle.
- Menghindari dependency berukuran besar tanpa alasan.
- Memeriksa ukuran output build.
- Menghapus source code dan aset yang tidak digunakan dari bundle produksi.
- Memastikan konfigurasi base path sesuai GitHub Pages atau custom domain.

6. Image Optimization

- Mengutamakan format WebP dan AVIF.
- Menggunakan ukuran gambar sesuai kebutuhan.
- Menyediakan thumbnail.
- Menggunakan responsive images.
- Menerapkan lazy loading untuk gambar non-kritis.
- Menghindari lazy loading pada gambar utama yang menjadi prioritas pemuatan.
- Menentukan width dan height untuk mengurangi layout shifting.
- Menyimpan original image jika diperlukan.

7. Video & Audio Optimization

Video

- Menggunakan thumbnail.
- Tidak memuat video berat sebelum diperlukan.
- Mendukung external embeds.
- Menggunakan adaptive quality jika tersedia.
- Menyediakan indikator loading dan error.

Audio

- Menggunakan pemuatan bertahap.
- Menghindari autoplay yang tidak diperlukan.
- Menyediakan kontrol pemutaran yang ringan.
- Mengoptimalkan metadata dan cover.

8. Font Optimization

- Mengutamakan Plus Jakarta Sans.
- Menggunakan font fallback sistem.
- Menghindari terlalu banyak variasi font.
- Menggunakan font-display yang sesuai.
- Memuat font hanya ketika diperlukan.
- Menggunakan file font lokal jika tersedia.

9. Loading Strategy

Critical Resources

- Memprioritaskan resource yang dibutuhkan untuk tampilan awal.
- Mengurangi dependency pada resource eksternal.
- Menghindari pemuatan fitur yang belum dibutuhkan.

Lazy Loading

Diterapkan pada:

- Gambar di luar viewport.
- Konten media tertentu.
- Komponen yang muncul setelah interaksi.
- Bagian halaman yang tidak langsung terlihat.

Progressive Loading

- Menampilkan struktur halaman terlebih dahulu.
- Menggunakan skeleton atau loading indicator jika diperlukan.
- Memuat konten secara bertahap.
- Mempertahankan layout selama proses loading.

10. Caching Strategy

Browser Cache

- Menggunakan cache untuk aset statis.
- Menggunakan nama file berbasis hash untuk aset hasil build.
- Mengatur cache berdasarkan jenis resource.

Service Worker

- Menggunakan caching untuk resource yang sesuai.
- Mendukung akses offline pada halaman dan konten terpilih.
- Menghindari penyimpanan data sensitif.
- Memiliki strategi pembaruan cache.
- Menangani cache lama dan versi baru dengan aman.

Supabase

- Menghindari request berulang yang tidak diperlukan.
- Menggunakan pagination untuk data berukuran besar.
- Menggunakan query yang efisien.
- Memanfaatkan caching pada data yang sesuai.

11. Network Optimization

- Mengurangi jumlah request.
- Menghindari payload berukuran besar.
- Menggunakan pagination.
- Menghindari polling berlebihan.
- Menangani koneksi terputus.
- Menyediakan retry secara terbatas untuk operasi yang aman diulang.
- Memberikan feedback ketika koneksi lambat.

12. Database Performance

- Menggunakan index pada kolom yang sering dicari.
- Mengoptimalkan query PostgreSQL.
- Menghindari pengambilan seluruh data tanpa kebutuhan.
- Menggunakan pagination dan filtering.
- Menghindari N+1 queries.
- Membatasi jumlah data yang dikirim ke frontend.
- Memeriksa performa query secara berkala.

13. Backend & Edge Functions

- Menjaga fungsi tetap efisien.
- Memvalidasi request sebelum pemrosesan.
- Membatasi ukuran payload.
- Menghindari proses berulang.
- Menggunakan timeout yang sesuai.
- Mengembalikan response yang konsisten.
- Memproses pekerjaan berat secara terpisah jika diperlukan.

14. Component Performance

- Menghindari render yang tidak diperlukan.
- Menggunakan event delegation jika sesuai.
- Membersihkan event listener ketika komponen tidak digunakan.
- Menghindari manipulasi DOM berlebihan.
- Mengoptimalkan komponen list berukuran besar.
- Menggunakan pagination atau virtual scrolling jika diperlukan.

15. Animation Performance

- Mengutamakan animasi ringan.
- Menggunakan durasi transisi yang konsisten.
- Menghindari animasi berlebihan.
- Mendukung prefers-reduced-motion.
- Menghindari animasi yang menghambat interaksi.

16. Mobile Performance

Prioritas khusus:

- Mengurangi ukuran JavaScript.
- Mengoptimalkan gambar dan media.
- Membatasi proses berat.
- Menghindari penggunaan memori berlebihan.
- Menjaga interaksi tetap responsif.
- Menguji pada perangkat dengan spesifikasi rendah.
- Mempertimbangkan koneksi internet yang tidak stabil.

17. PWA Performance

- Menggunakan service worker secara efisien.
- Menyimpan aset penting untuk akses offline.
- Menghindari cache yang tidak diperlukan.
- Memperbarui cache secara terkontrol.
- Mengoptimalkan proses instalasi dan startup.
- Menyediakan fallback ketika resource offline tidak tersedia.

18. Monitoring & Diagnostics

Pemantauan mencakup:

- Core Web Vitals.
- Waktu pemuatan halaman.
- JavaScript errors.
- Network failures.
- API response time.
- Database query performance.
- Ukuran bundle.
- Penggunaan resource.

Data monitoring tidak boleh mengumpulkan informasi pribadi secara berlebihan.

19. Performance Testing

Pengujian menggunakan:

- Lighthouse.
- Chrome DevTools.
- PageSpeed Insights.
- Network throttling.
- Responsive device testing.
- Bundle analysis.
- Pengujian koneksi lambat.

Pengujian dilakukan pada:

- Development.
- Staging.
- Production.

20. Performance Maintenance

- Memeriksa ukuran bundle setiap perubahan besar.
- Menguji performa setelah penambahan fitur.
- Memperbarui dependency dengan mempertimbangkan ukurannya.
- Menghapus resource yang tidak digunakan.
- Memantau Core Web Vitals.
- Mengoptimalkan bagian yang terbukti menjadi bottleneck.

---

End of Document

Aruhetta Performance Specification — Version 1.0
