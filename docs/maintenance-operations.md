ARUHETTA — Maintenance & Operations

Dokumen: Maintenance & Operations
Versi: 1.0
Status: Planning
Tanggal: 4 November 2026
Branch: "development"

---

1. Tujuan

Dokumen ini menetapkan standar pemeliharaan dan operasional platform Aruhetta.

Tujuan utama:

- Menjaga stabilitas dan ketersediaan layanan.
- Memastikan sistem tetap aman dan diperbarui.
- Mencegah gangguan akibat konfigurasi atau dependensi yang usang.
- Menjaga performa frontend, backend, dan database.
- Mengatur aktivitas operasional secara terstruktur.
- Memastikan perubahan sistem dapat ditinjau dan dipulihkan.

Dokumen ini menjadi panduan operasional setelah Aruhetta mulai dikembangkan dan digunakan.

2. Ruang Lingkup

Pemeliharaan mencakup seluruh komponen Aruhetta:

Komponen| Ruang lingkup
Frontend| HTML, CSS, JavaScript, Vite
Backend| Supabase dan Edge Functions
Database| PostgreSQL dan migrasi
Storage| File pengguna dan media
Authentication| Login, sesi, dan keamanan akun
API| Endpoint, validasi, dan performa
Infrastructure| GitHub Pages dan layanan pendukung
Security| Secret, akses, dan pembaruan keamanan
Community| Arumunity dan moderasi
Documentation| Dokumentasi teknis dan operasional

3. Maintenance Principles

Pemeliharaan Aruhetta mengikuti prinsip:

1. Preventive Maintenance: Mencegah masalah sebelum terjadi.
2. Corrective Maintenance: Memperbaiki masalah yang ditemukan.
3. Adaptive Maintenance: Menyesuaikan sistem terhadap perubahan kebutuhan dan teknologi.
4. Perfective Maintenance: Meningkatkan kualitas dan pengalaman pengguna.
5. Security First: Mengutamakan keamanan setiap perubahan.
6. Documentation: Mencatat perubahan dan aktivitas penting.
7. Controlled Changes: Menghindari perubahan langsung tanpa pemeriksaan.

4. Operational Responsibilities

4.1 Owner

Tanggung jawab:

- Mengawasi operasional keseluruhan.
- Menentukan prioritas pemeliharaan.
- Menyetujui perubahan penting.
- Mengelola kebijakan akses.
- Mengevaluasi kondisi platform.

4.2 Admin

Tanggung jawab:

- Membantu operasional platform.
- Mengelola konfigurasi sesuai izin.
- Memantau aktivitas pengguna dan layanan.
- Menangani laporan operasional.
- Melaporkan masalah kepada Owner.

4.3 Moderator

Tanggung jawab:

- Memelihara kualitas komunitas.
- Meninjau laporan pengguna.
- Mengelola konten yang melanggar aturan.
- Melaporkan masalah komunitas.

4.4 Developer / Technical Maintainer

Tanggung jawab:

- Memelihara source code.
- Memperbarui dependensi.
- Memeriksa error dan performa.
- Mengelola migrasi database.
- Melakukan deployment.
- Memperbaiki bug dan masalah teknis.

Satu orang dapat menjalankan beberapa tanggung jawab ketika tim masih kecil. Hak akses tetap harus dibatasi sesuai kebutuhan.

5. Maintenance Schedule

Jadwal berikut merupakan rekomendasi awal dan dapat disesuaikan setelah sistem beroperasi.

Frekuensi| Aktivitas
Harian| Memeriksa error penting, ketersediaan layanan, dan alert
Mingguan| Memeriksa backup, aktivitas sistem, dan laporan pengguna
Bulanan| Memeriksa dependensi, performa, keamanan, dan kapasitas
Setiap 3 bulan| Evaluasi infrastruktur, kebijakan, dan dokumentasi
Setiap 6 bulan| Evaluasi menyeluruh dan pengujian recovery
Sebelum perubahan besar| Backup, pemeriksaan, dan persiapan rollback

Jadwal aktual mempertimbangkan kapasitas tim, tingkat penggunaan, biaya layanan, dan tingkat risiko.

6. Frontend Maintenance

Frontend menggunakan HTML5, CSS3, Vanilla JavaScript ES Modules, dan Vite.

Aktivitas pemeliharaan:

- Memeriksa struktur halaman.
- Memastikan navigasi berfungsi.
- Memeriksa tampilan mobile dan desktop.
- Menghapus kode dan aset yang tidak digunakan.
- Memperbaiki bug antarmuka.
- Memeriksa kompatibilitas browser.
- Memastikan aksesibilitas tetap terjaga.
- Memeriksa penggunaan aset dan ukuran bundle.
- Menguji fitur setelah perubahan.

6.1 UI Maintenance

Pemeriksaan meliputi:

- Header dan sidebar.
- Hero Banner.
- Navigasi halaman.
- Footer.
- Komponen kartu.
- Formulir.
- Modal dan notifikasi.
- Dark/Light Mode.
- Responsive layout.

Perubahan desain harus mengikuti "docs/design-system.md" dan "docs/ui-components.md".

6.2 Browser Compatibility

Frontend harus diuji pada browser modern yang umum digunakan.

Pemeriksaan meliputi:

- Layout.
- Navigasi.
- Formulir.
- JavaScript.
- Media.
- Responsivitas.
- PWA apabila sudah diterapkan.

7. Backend Maintenance

Backend Aruhetta menggunakan Supabase dan Supabase Edge Functions.

Aktivitas pemeliharaan:

- Memeriksa fungsi backend.
- Memantau error API.
- Memeriksa validasi input.
- Memastikan autentikasi berjalan.
- Memeriksa Row Level Security (RLS).
- Memeriksa penggunaan resource.
- Memperbarui fungsi ketika terdapat perubahan kebutuhan.
- Memeriksa integrasi layanan eksternal.

Perubahan backend harus diuji sebelum diterapkan ke lingkungan produksi.

8. Database Maintenance

Database menggunakan PostgreSQL melalui Supabase.

Aktivitas pemeliharaan:

- Memeriksa kesehatan database.
- Memantau penggunaan penyimpanan.
- Memeriksa performa query.
- Meninjau indeks yang diperlukan.
- Memeriksa relasi dan constraint.
- Mengidentifikasi data yang tidak lagi diperlukan.
- Memeriksa kebijakan RLS.
- Memastikan backup berjalan.
- Mendokumentasikan migrasi database.

8.1 Database Migration

Setiap perubahan struktur database harus:

1. Dibuat sebagai migration yang terdokumentasi.
2. Diuji di lingkungan development.
3. Diperiksa dampaknya terhadap data.
4. Dicadangkan sebelum perubahan berisiko.
5. Diterapkan melalui proses deployment terkontrol.
6. Diverifikasi setelah diterapkan.

Migration produksi tidak boleh dilakukan secara sembarangan melalui perubahan manual tanpa dokumentasi.

8.2 Data Cleanup

Pembersihan data dilakukan sesuai kebijakan retensi.

Contoh:

- File sementara yang sudah kedaluwarsa.
- Data sementara hasil pemrosesan tools.
- Data yang sudah melewati masa retensi.
- Metadata yang tidak lagi digunakan.

Penghapusan harus mempertimbangkan relasi database, kebutuhan audit, dan hak pengguna.

9. Storage Maintenance

Supabase Storage digunakan untuk menyimpan file pengguna.

Aktivitas pemeliharaan:

- Memeriksa kapasitas penyimpanan.
- Memantau jumlah file.
- Memeriksa file yang gagal diunggah.
- Menghapus file sementara yang sudah tidak diperlukan.
- Memeriksa izin akses bucket.
- Memeriksa metadata file.
- Memastikan backup Storage tersedia.
- Memeriksa integritas file.

File pengguna tidak boleh dihapus hanya karena dianggap tidak aktif tanpa mengikuti kebijakan retensi dan penghapusan data.

10. Dependency Management

Dependensi frontend dan backend harus dikelola secara teratur.

Aktivitas:

- Memeriksa versi dependensi.
- Memantau pembaruan keamanan.
- Memeriksa kompatibilitas versi.
- Menghapus dependensi yang tidak digunakan.
- Menguji perubahan sebelum deployment.
- Memperbarui lockfile.
- Mendokumentasikan pembaruan penting.

10.1 Update Priority

Prioritas| Jenis pembaruan
Critical| Kerentanan keamanan serius
High| Perbaikan bug penting
Medium| Pembaruan fitur dan kompatibilitas
Low| Pembaruan kecil yang tidak mendesak

Pembaruan tidak boleh diterapkan langsung ke produksi tanpa pemeriksaan risiko dan pengujian yang sesuai.

11. Security Maintenance

Keamanan harus diperiksa secara berkelanjutan.

Aktivitas:

- Meninjau akses akun administratif.
- Memeriksa izin dan role pengguna.
- Memeriksa kebijakan RLS.
- Memeriksa konfigurasi autentikasi.
- Mengelola rotasi secret.
- Memeriksa dependensi rentan.
- Memantau aktivitas mencurigakan.
- Meninjau audit log.
- Memastikan HTTPS digunakan.
- Memeriksa konfigurasi CORS dan API.

11.1 Secret Management

Ketentuan:

- Secret disimpan dalam pengelola secret yang sesuai.
- Secret tidak boleh dimasukkan ke repository publik.
- File ".env" tidak boleh di-commit.
- ".env.example" hanya berisi nama variabel dan contoh placeholder.
- Supabase Service Role Key tidak boleh digunakan di frontend.
- Kredensial yang terindikasi bocor harus segera ditangani.

12. Monitoring & Logging Maintenance

Monitoring digunakan untuk mengetahui kondisi layanan.

Hal yang diperiksa:

- Availability.
- Frontend errors.
- Backend errors.
- Database performance.
- API response.
- Storage usage.
- Deployment status.
- Authentication errors.
- Security events.

Logging harus tetap mengikuti kebijakan privasi dan keamanan.

Dokumentasi terkait: "docs/monitoring-logging.md".

13. Performance Maintenance

Pemeliharaan performa mencakup:

13.1 Frontend Performance

- Mengoptimalkan gambar.
- Menggunakan WebP atau AVIF jika sesuai.
- Menerapkan lazy loading.
- Mengurangi JavaScript yang tidak diperlukan.
- Meminimalkan CSS dan JavaScript.
- Mengoptimalkan pemuatan font.
- Menghindari animasi berlebihan.
- Memeriksa ukuran bundle.

13.2 Backend Performance

- Mengoptimalkan query.
- Mengurangi proses yang tidak diperlukan.
- Memeriksa penggunaan Edge Functions.
- Memantau API response time.
- Mengelola rate limiting.
- Memeriksa penggunaan resource.

13.3 Database Performance

- Memeriksa query lambat.
- Mengoptimalkan indeks.
- Menghindari query berulang yang tidak diperlukan.
- Memeriksa penggunaan koneksi.
- Memantau pertumbuhan database.

Target performa mengikuti dokumentasi "docs/performance.md".

14. Git & Repository Maintenance

GitHub digunakan untuk mengelola source code dan dokumentasi.

Struktur branch:

Branch| Fungsi
"main"| Production
"development"| Integrasi pengembangan
"feature/*"| Pengembangan fitur
"fix/*"| Perbaikan bug
"hotfix/*"| Perbaikan darurat

Ketentuan:

- Commit message harus jelas.
- Perubahan penting harus melalui review.
- Hindari commit secret.
- Branch yang tidak diperlukan dapat dibersihkan setelah dipastikan aman.
- Backup repository harus tetap tersedia.
- Perubahan dokumentasi harus mengikuti kondisi sistem terbaru.

15. Deployment Maintenance

Deployment frontend dilakukan melalui GitHub Pages dengan GitHub Actions yang direncanakan.

Aktivitas:

- Memeriksa status build.
- Memeriksa hasil deployment.
- Memastikan konfigurasi Vite sesuai base path.
- Memeriksa halaman utama.
- Menguji navigasi.
- Memeriksa integrasi backend.
- Memeriksa PWA jika sudah diterapkan.
- Memastikan custom domain berfungsi apabila sudah dikonfigurasi.

15.1 Pre-Deployment Checklist

- [ ] Perubahan sudah ditinjau.
- [ ] Build berhasil.
- [ ] Pengujian yang diperlukan berhasil.
- [ ] Tidak ada secret di source code.
- [ ] Migrasi database sudah diperiksa.
- [ ] Backup tersedia jika perubahan berisiko.
- [ ] Prosedur rollback tersedia.

15.2 Post-Deployment Checklist

- [ ] Website dapat diakses.
- [ ] Halaman utama berfungsi.
- [ ] Navigasi berfungsi.
- [ ] Login dan autentikasi diuji jika terdampak.
- [ ] Integrasi Supabase berjalan.
- [ ] Tidak ada error kritis.
- [ ] Monitoring menunjukkan kondisi stabil.

16. Content & Community Operations

Operasional konten dan Arumunity juga membutuhkan pemeliharaan.

16.1 Articles

- Memeriksa status artikel.
- Meninjau laporan konten.
- Memeriksa kategori dan tag.
- Memastikan konten yang dipublikasikan sesuai kebijakan.
- Memeriksa tautan dan media.
- Mengelola konten yang perlu diperbarui.

16.2 Arumunity

- Meninjau laporan pengguna.
- Memeriksa aktivitas spam.
- Mengelola grup dan event.
- Memeriksa konten yang dilaporkan.
- Meninjau aktivitas moderator.
- Memastikan aturan komunitas diterapkan secara konsisten.

16.3 User Accounts

- Menangani laporan akun.
- Meninjau permintaan pemulihan akun.
- Mengelola perubahan role sesuai kewenangan.
- Memeriksa akun yang terindikasi disalahgunakan.
- Menjaga privasi informasi pengguna.

17. PWA & Offline Maintenance

Jika PWA sudah diterapkan, pemeliharaan mencakup:

- Memeriksa manifest.
- Memeriksa service worker.
- Memeriksa cache.
- Memastikan proses pembaruan berjalan.
- Menghapus cache usang dengan aman.
- Menguji pengalaman offline.
- Memeriksa proses instalasi.
- Memastikan perubahan aplikasi tidak menyebabkan cache lama digunakan terus-menerus.

Fitur yang membutuhkan koneksi internet harus memberikan informasi yang jelas ketika pengguna sedang offline.

18. Scheduled Maintenance

Pemeliharaan terjadwal dilakukan ketika terdapat perubahan yang membutuhkan waktu atau berpotensi mengganggu layanan.

Ketentuan:

- Jadwal ditentukan berdasarkan kebutuhan.
- Pengguna diberi pemberitahuan jika layanan akan terganggu.
- Dampak terhadap fitur dijelaskan.
- Backup dilakukan sebelum perubahan berisiko.
- Proses pemeliharaan didokumentasikan.
- Status layanan diperiksa setelah pekerjaan selesai.

Tidak semua perubahan membutuhkan downtime.

19. Rollback & Recovery

Jika perubahan menyebabkan masalah:

1. Identifikasi perubahan yang menyebabkan gangguan.
2. Tentukan apakah rollback diperlukan.
3. Hentikan perubahan lanjutan.
4. Kembalikan versi stabil sebelumnya jika memungkinkan.
5. Periksa kondisi database dan Storage.
6. Uji fitur utama.
7. Pantau kondisi layanan.
8. Dokumentasikan hasil rollback.

Rollback frontend tidak otomatis membatalkan perubahan database. Setiap perubahan database harus memiliki strategi pemulihan tersendiri.

Panduan lengkap tersedia pada "docs/backup-recovery.md".

20. Change Management

Setiap perubahan penting harus dikelola secara terstruktur.

Informasi perubahan minimal:

- Change ID.
- Nama perubahan.
- Tujuan.
- Komponen terdampak.
- Risiko.
- Penanggung jawab.
- Hasil pengujian.
- Jadwal implementasi.
- Rencana rollback.
- Status perubahan.

Kategori perubahan:

Jenis| Contoh
Standard| Perubahan kecil dengan risiko rendah
Normal| Pembaruan fitur atau konfigurasi
Emergency| Perubahan untuk menangani insiden kritis

Perubahan darurat tetap harus didokumentasikan dan ditinjau setelah kondisi stabil.

21. Operational Documentation

Dokumentasi operasional harus diperbarui ketika terjadi perubahan sistem.

Dokumen terkait:

- "docs/architecture.md"
- "docs/frontend-architecture.md"
- "docs/database.md"
- "docs/api.md"
- "docs/security.md"
- "docs/authentication.md"
- "docs/roles-permissions.md"
- "docs/monitoring-logging.md"
- "docs/backup-recovery.md"
- "docs/incident-response.md"
- "docs/performance.md"
- "docs/deployment.md"

Dokumentasi yang sudah tidak sesuai dengan implementasi harus diperbarui.

22. Maintenance Report Template

Setiap kegiatan pemeliharaan penting dapat dicatat menggunakan format berikut.

Maintenance Information

- Maintenance ID:
- Date:
- Responsible:
- Category:
- Environment:
- Status:

Maintenance Details

- Objective:
- Components Affected:
- Changes Made:
- Issues Found:
- Actions Taken:

Verification

- Test Results:
- Performance Status:
- Security Status:
- Deployment Status:

Final Report

- Result:
- Remaining Issues:
- Follow-up Actions:
- Next Maintenance Date:

23. Maintenance Checklist

Daily

- [ ] Memeriksa alert penting.
- [ ] Memeriksa ketersediaan layanan.
- [ ] Meninjau error kritis.

Weekly

- [ ] Memeriksa backup.
- [ ] Meninjau laporan pengguna.
- [ ] Memeriksa aktivitas sistem.
- [ ] Memeriksa status deployment.

Monthly

- [ ] Memeriksa dependensi.
- [ ] Memeriksa performa.
- [ ] Meninjau keamanan.
- [ ] Memeriksa kapasitas database dan Storage.
- [ ] Memperbarui dokumentasi jika diperlukan.

Periodic

- [ ] Menguji pemulihan backup.
- [ ] Mengevaluasi infrastruktur.
- [ ] Meninjau akses administratif.
- [ ] Mengevaluasi kebijakan operasional.
- [ ] Memeriksa kesiapan disaster recovery.

24. Future Improvements

Pengembangan operasional berikutnya dapat mencakup:

- Automated maintenance dashboard.
- Scheduled dependency updates.
- Automated health checks.
- Automated backup verification.
- Deployment notifications.
- Centralized operational dashboard.
- Maintenance ticket system.
- Automated cleanup untuk file sementara.
- Infrastructure cost monitoring.
- Maintenance history dashboard.

25. Prinsip Akhir

Pemeliharaan dan operasional Aruhetta harus mengutamakan:

1. Stabilitas layanan.
2. Keamanan sistem.
3. Konsistensi data.
4. Performa yang baik.
5. Pengelolaan perubahan yang terkontrol.
6. Dokumentasi yang akurat.
7. Peningkatan berkelanjutan.

Seluruh aktivitas pemeliharaan harus dilakukan secara terencana, dapat ditinjau, dan memiliki prosedur pemulihan ketika terjadi masalah.

---

Dokumen: "docs/maintenance-operations.md"
Status: Planning
Pemilik: Aruhetta Project
Branch: "development"
