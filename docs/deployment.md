ARUHETTA — Deployment & CI/CD Specification

File: "docs/deployment.md"
Project: Aruhetta
Version: 1.0
Status: Planning
Last Updated: 4 November 2026

---

1. Overview

Deployment & CI/CD Specification menetapkan standar proses build, testing, deployment, dan pemeliharaan Aruhetta.

Tujuan:

- Menyediakan proses deployment yang konsisten.
- Mengurangi kesalahan saat publikasi.
- Mengotomatisasi pemeriksaan kualitas kode.
- Memisahkan development dan production.
- Memastikan deployment dapat dipantau dan dipulihkan.
- Menjaga keamanan konfigurasi dan environment.

2. Deployment Architecture

Arsitektur deployment Aruhetta:

Component| Platform
Source Code| GitHub
Repository| Aruhetta.com
Frontend Hosting| GitHub Pages
Frontend Build| Vite
Backend| Supabase
Database| Supabase PostgreSQL
File Storage| Supabase Storage
Server-side Operations| Supabase Edge Functions
CI/CD| GitHub Actions
Domain| aruhetta.com (planned)

GitHub Pages digunakan untuk frontend statis. Operasi yang memerlukan server-side execution ditangani melalui Supabase.

3. Git Branch Strategy

Aruhetta menggunakan struktur branch:

main

- Berisi kode production.
- Hanya menerima perubahan yang sudah diperiksa.
- Menjadi sumber deployment production.

development

- Berisi integrasi fitur.
- Digunakan untuk pengembangan aktif.
- Menjadi dasar pengujian sebelum production.

feature branches

Digunakan untuk pengembangan fitur tertentu.

Contoh:

feature/authentication
feature/profile
feature/arumunity
feature/tools

hotfix branches

Digunakan untuk memperbaiki masalah mendesak pada production.

Contoh:

hotfix/login-error
hotfix/security-fix

4. Development Workflow

Alur pengembangan:

1. Membuat feature branch dari development.
2. Mengembangkan fitur.
3. Melakukan testing lokal.
4. Memastikan build berhasil.
5. Membuat Pull Request ke development.
6. Menjalankan pemeriksaan otomatis.
7. Melakukan review.
8. Menggabungkan perubahan jika lolos pemeriksaan.

Perubahan besar tidak langsung dimasukkan ke main.

5. Environment Strategy

Development

Digunakan untuk:

- Pengembangan fitur.
- Debugging.
- Unit testing.
- Eksperimen.
- Integrasi awal.

Staging

Digunakan untuk:

- Pengujian sebelum rilis.
- Validasi integrasi backend.
- Regression testing.
- Pemeriksaan konfigurasi deployment.

Production

Digunakan untuk:

- Website publik.
- Pengguna sebenarnya.
- Data produksi.
- Monitoring dan maintenance.

Setiap environment menggunakan konfigurasi dan kredensial yang sesuai.

6. Build System

Frontend menggunakan Vite.

Proses build:

1. Mengambil source code.
2. Memasang dependency.
3. Memeriksa kode.
4. Menjalankan testing.
5. Menjalankan production build.
6. Menghasilkan output pada folder "dist".
7. Memvalidasi hasil build.

Build harus menghasilkan aset yang siap dipublikasikan.

7. Vite Deployment Configuration

Konfigurasi Vite harus memperhatikan target hosting.

GitHub Pages Repository URL

Saat menggunakan project URL:

https://aruhetta-arch.github.io/Aruhetta.com/

Base path harus menyesuaikan nama repository.

Custom Domain

Setelah "aruhetta.com" aktif dan terhubung:

- Base path disesuaikan dengan root domain.
- Canonical URL diperbarui.
- Sitemap diperbarui.
- Manifest dan Service Worker diperiksa.
- Seluruh internal asset paths diuji.

Konfigurasi deployment harus menggunakan satu sumber pengaturan yang konsisten.

8. GitHub Actions CI/CD

GitHub Actions digunakan untuk otomatisasi proses.

Continuous Integration

Setiap Pull Request dapat menjalankan:

- Dependency installation.
- Linting.
- Unit testing.
- Component testing jika tersedia.
- Build validation.
- Security-related dependency checks.

Continuous Deployment

Deployment production dilakukan setelah perubahan disetujui dan masuk ke branch "main".

Alur:

1. Trigger workflow.
2. Checkout source code.
3. Setup Node.js.
4. Install dependencies.
5. Run quality checks.
6. Build project.
7. Upload build artifact.
8. Deploy ke GitHub Pages.
9. Verify deployment.

Deployment harus gagal jika pemeriksaan wajib gagal.

9. GitHub Pages Configuration

Ketentuan:

- GitHub Pages menggunakan GitHub Actions sebagai deployment source.
- Folder hasil build adalah "dist".
- Workflow memiliki permission minimum yang diperlukan.
- Deployment hanya berjalan dari branch dan kondisi yang ditentukan.
- Custom domain dikonfigurasi melalui GitHub Pages.
- HTTPS diaktifkan setelah domain berhasil diverifikasi.

10. Supabase Deployment

Supabase mengelola layanan backend.

Komponen yang perlu dikelola:

- Database schema.
- Database migrations.
- Row Level Security policies.
- Storage buckets.
- Storage policies.
- Edge Functions.
- Authentication settings.
- Environment configuration.

Perubahan database harus melalui migration yang terdokumentasi.

Deployment Edge Functions dilakukan secara terpisah dari frontend GitHub Pages.

11. Environment Variables & Secrets

Konfigurasi rahasia tidak boleh dimasukkan ke repository publik.

Ketentuan:

- Menggunakan ".env.example" sebagai template.
- File ".env" tidak boleh di-commit.
- Secret disimpan pada pengelola secret yang sesuai.
- GitHub Actions menggunakan GitHub Secrets jika diperlukan.
- Production dan development menggunakan konfigurasi terpisah.
- Supabase Service Role Key tidak boleh dimasukkan ke frontend.

Supabase publishable key dapat digunakan pada frontend dengan RLS dan permission yang benar.

12. Deployment Approval

Sebelum production deployment:

- Pull Request sudah diperiksa.
- Required checks berhasil.
- Build berhasil.
- Tidak ada bug Critical yang belum diselesaikan.
- Konfigurasi production tervalidasi.
- Perubahan database sudah dipersiapkan.
- Risiko deployment sudah diperiksa.

Perubahan penting dapat memerlukan persetujuan tambahan.

13. Release Management

Setiap release memiliki:

- Version number.
- Release date.
- Changelog.
- Daftar fitur baru.
- Bug fixes.
- Breaking changes jika ada.

Versioning awal mengikuti Semantic Versioning:

MAJOR.MINOR.PATCH

Contoh:

1.0.0
1.1.0
1.1.1

14. Rollback Strategy

Jika deployment menyebabkan masalah:

- Mengidentifikasi perubahan penyebab.
- Menghentikan deployment lanjutan jika diperlukan.
- Mengembalikan frontend ke versi stabil sebelumnya.
- Memeriksa integritas data backend.
- Melakukan rollback database hanya melalui prosedur migration yang aman.
- Memverifikasi kembali fitur utama.

Rollback frontend tidak otomatis membatalkan perubahan database.

15. Monitoring & Deployment Verification

Setelah deployment:

- Memeriksa URL website.
- Memeriksa halaman utama.
- Memeriksa navigasi.
- Memeriksa aset CSS dan JavaScript.
- Memeriksa koneksi backend.
- Memeriksa autentikasi.
- Memeriksa error console.
- Memeriksa Service Worker jika aktif.

Setiap deployment penting harus memiliki hasil verifikasi.

16. Backup & Recovery

Backup mencakup:

- Source code melalui Git.
- Database melalui mekanisme backup Supabase.
- File penting pada Supabase Storage.
- Konfigurasi deployment.
- Dokumentasi sistem.

Ketentuan:

- Backup database dilakukan sesuai kebutuhan dan kemampuan layanan.
- Backup penting harus dapat dipulihkan.
- Prosedur recovery harus terdokumentasi.
- Backup tidak boleh disimpan dalam repository publik jika mengandung data sensitif.

17. Security Considerations

- Menggunakan HTTPS.
- Membatasi workflow permissions.
- Melindungi secrets.
- Memeriksa dependency.
- Membatasi akses repository.
- Melakukan review Pull Request.
- Tidak menampilkan kredensial dalam log.
- Memvalidasi deployment source.
- Meninjau perubahan konfigurasi production.

18. Deployment Status

Status deployment yang digunakan:

- Pending.
- Building.
- Testing.
- Ready.
- Deploying.
- Successful.
- Failed.
- Rolled Back.

Status harus mudah dipahami oleh pengelola proyek.

19. Deployment Documentation

Dokumentasi deployment mencakup:

- Setup environment.
- Build instructions.
- GitHub Actions workflow.
- GitHub Pages configuration.
- Supabase deployment procedure.
- Release procedure.
- Rollback procedure.
- Recovery procedure.

Instruksi harus dapat diikuti oleh pengelola proyek tanpa menebak konfigurasi.

20. Maintenance

- Memperbarui workflow ketika kebutuhan berubah.
- Memeriksa dependency dan runtime.
- Meninjau permission GitHub Actions.
- Menguji proses rollback.
- Memantau kegagalan deployment.
- Memperbarui dokumentasi setelah perubahan infrastruktur.

---

End of Document

Aruhetta Deployment & CI/CD Specification — Version 1.0
