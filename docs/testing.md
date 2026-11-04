ARUHETTA — Testing & Quality Assurance Specification

File: "docs/testing.md"
Project: Aruhetta
Version: 1.0
Status: Planning
Last Updated: 4 November 2026

---

1. Overview

Testing & Quality Assurance Specification menetapkan strategi, standar, dan prosedur pengujian untuk seluruh sistem Aruhetta.

Tujuan:

- Memastikan fitur berjalan sesuai spesifikasi.
- Menemukan bug sebelum production.
- Menjaga stabilitas aplikasi.
- Memastikan keamanan dan privasi pengguna.
- Memastikan kompatibilitas perangkat dan browser.
- Mengurangi risiko regresi setelah perubahan kode.

2. Testing Principles

Aruhetta menerapkan prinsip:

- Quality First.
- Test Early.
- Test Continuously.
- Risk-Based Testing.
- Automated Testing Where Practical.
- Manual Testing for User Experience.
- Regression Prevention.

Pengujian dilakukan selama pengembangan, bukan hanya sebelum rilis.

3. Testing Environments

Development

Digunakan untuk:

- Pengujian fitur baru.
- Unit testing.
- Component testing.
- Eksperimen.
- Debugging.

Staging

Digunakan untuk:

- Pengujian integrasi.
- Pengujian sebelum rilis.
- Pengujian alur pengguna.
- Validasi konfigurasi deployment.
- Pengujian migrasi database.

Production

Digunakan untuk:

- Smoke testing setelah deployment.
- Monitoring.
- Pemeriksaan fungsi utama.
- Verifikasi error produksi.

Pengujian production harus menggunakan tindakan yang aman dan tidak merusak data pengguna.

4. Testing Types

4.1 Unit Testing

Menguji fungsi atau modul secara terpisah.

Contoh:

- Utility functions.
- Format tanggal.
- Validasi input.
- Pengolahan data.
- Permission checks.

4.2 Component Testing

Menguji komponen antarmuka secara individual.

Contoh:

- Header.
- Sidebar.
- Buttons.
- Forms.
- Cards.
- Modal.
- Search.
- Media components.

4.3 Integration Testing

Menguji hubungan antarkomponen dan layanan.

Contoh:

- Frontend dengan Supabase.
- Authentication dengan database.
- Upload dengan Storage.
- API dengan Edge Functions.
- Sistem bookmark dengan akun pengguna.

4.4 End-to-End Testing

Menguji alur pengguna dari awal hingga akhir.

Contoh:

- Registrasi.
- Login.
- Membuat profil.
- Membuat artikel.
- Mengirim komentar.
- Mengunggah file.
- Mengelola bookmark.

4.5 Regression Testing

Memastikan perubahan baru tidak merusak fitur yang sebelumnya berjalan.

Pengujian dilakukan pada fitur yang terdampak dan fungsi utama lainnya.

4.6 Performance Testing

Menguji:

- Loading time.
- Core Web Vitals.
- API response time.
- Database query performance.
- Penggunaan memori.
- Performa perangkat mobile.

4.7 Security Testing

Menguji:

- Authentication.
- Authorization.
- Row Level Security.
- Input validation.
- File upload validation.
- Session management.
- Rate limiting.
- Akses data privat.

Pengujian keamanan hanya dilakukan pada lingkungan dan sistem yang memiliki izin.

4.8 Accessibility Testing

Memeriksa:

- Keyboard navigation.
- Screen reader labels.
- Color contrast.
- Focus visibility.
- Alternative text.
- Reduced motion.
- Form accessibility.

5. Frontend Testing

Pengujian frontend mencakup:

- HTML structure.
- CSS layout.
- JavaScript functionality.
- Responsive behavior.
- Component states.
- Form validation.
- Navigation.
- Theme switching.
- Loading and error states.

Setiap komponen interaktif harus diuji pada kondisi normal, loading, disabled, success, dan error jika relevan.

6. Backend & API Testing

Pengujian backend mencakup:

- HTTP methods.
- Request validation.
- Response structure.
- Authentication requirements.
- Permission enforcement.
- Error handling.
- Rate limiting.
- Pagination.
- Data consistency.

API harus mengembalikan status HTTP dan format error yang konsisten.

7. Database Testing

Pengujian database mencakup:

- Schema validation.
- Primary key dan foreign key.
- Constraints.
- Indexes.
- Query correctness.
- Data integrity.
- Migration testing.
- Row Level Security policies.

Pengujian RLS harus mencakup berbagai peran pengguna, termasuk akses yang seharusnya ditolak.

8. Authentication Testing

Alur yang diuji:

- Email registration.
- Username registration.
- Login.
- Google Login.
- Remember Me.
- Forgot Password.
- Logout.
- Session expiration.
- Multi-device sessions.
- Email verification.

Pengujian harus memastikan pengguna tidak memperoleh akses di luar haknya.

9. Authorization Testing

Pengujian dilakukan berdasarkan role:

- Guest.
- Member.
- Contributor.
- Moderator.
- Admin.
- Owner.

Hal yang diperiksa:

- Hak akses halaman.
- Hak akses API.
- Hak pengelolaan konten.
- Hak moderasi.
- Hak administrasi.
- Pembatasan tindakan berdasarkan role.

Pengujian harus memeriksa akses langsung melalui API, bukan hanya menyembunyikan tombol pada frontend.

10. Responsive & Browser Testing

Ukuran layar pengujian:

- 320px.
- 360px.
- 375px.
- 390px.
- 414px.
- 768px.
- 1024px.
- 1280px.
- 1440px.
- 1920px.

Browser:

- Chrome.
- Firefox.
- Safari.
- Edge.

Perangkat:

- Android.
- iOS.
- Tablet.
- Desktop.

11. PWA Testing

Pengujian meliputi:

- Manifest validation.
- Service Worker registration.
- Installation.
- Standalone mode.
- Offline fallback.
- Cache behavior.
- Update process.
- Storage cleanup.
- Notification permissions.

12. File & Media Testing

Pengujian mencakup:

- File type validation.
- File size limits.
- Upload progress.
- Upload failure.
- Download behavior.
- Image preview.
- Video playback.
- Audio playback.
- Storage permissions.
- File deletion.
- Temporary file cleanup.

13. Community Testing

Pengujian Arumunity meliputi:

- Create post.
- Edit post.
- Delete post.
- Comments.
- Replies.
- Likes.
- Follow and unfollow.
- Group creation.
- Group permissions.
- Event registration.
- Reports.
- Moderation workflow.

14. Error Handling Testing

Skenario yang diuji:

- Internet terputus.
- API timeout.
- Server error.
- Invalid input.
- Unauthorized request.
- Forbidden access.
- Missing resource.
- Upload failure.
- Session expired.

Aplikasi harus menampilkan feedback yang jelas tanpa membocorkan informasi internal atau rahasia sistem.

15. Test Data Management

- Menggunakan data pengujian terpisah dari data production.
- Menghindari penggunaan informasi pribadi nyata.
- Menyediakan akun pengujian untuk setiap role.
- Menyiapkan data untuk skenario normal dan edge cases.
- Membersihkan data pengujian setelah diperlukan.
- Melindungi kredensial akun pengujian.

16. Bug Reporting

Setiap laporan bug mencakup:

- Bug ID.
- Title.
- Description.
- Steps to reproduce.
- Expected result.
- Actual result.
- Environment.
- Severity.
- Priority.
- Screenshot atau log jika relevan.
- Status.

Bug Severity

Level| Description
Critical| Sistem utama tidak dapat digunakan atau ada risiko keamanan serius
High| Fitur penting mengalami kegagalan
Medium| Fungsi tertentu terganggu
Low| Masalah kecil atau visual

Bug Status

- Open.
- Confirmed.
- In Progress.
- Fixed.
- Retesting.
- Closed.
- Reopened.

17. Test Automation

Otomatisasi dapat diterapkan untuk:

- Unit tests.
- Component tests.
- Integration tests.
- End-to-end tests.
- Regression tests.
- Build validation.
- Linting.

Tools yang dapat dipertimbangkan:

- Vitest.
- Playwright.
- Testing Library.
- ESLint.
- Lighthouse CI.

Pemilihan tools final dilakukan ketika implementasi dimulai.

18. CI/CD Testing

GitHub Actions direncanakan menjalankan:

1. Dependency installation.
2. Code linting.
3. Unit tests.
4. Build validation.
5. Integration tests jika tersedia.
6. Deployment checks.

Build yang gagal dalam pemeriksaan wajib tidak boleh diteruskan ke deployment production.

19. Release Testing

Sebelum rilis:

- Menyelesaikan pengujian fitur utama.
- Memeriksa bug Critical dan High.
- Menjalankan regression tests.
- Memeriksa keamanan.
- Menguji responsive layout.
- Memeriksa performa.
- Memvalidasi konfigurasi environment.
- Memastikan backup dan rollback plan tersedia.

20. Test Documentation

Dokumentasi pengujian mencakup:

- Test plans.
- Test cases.
- Test results.
- Bug reports.
- Regression reports.
- Release testing reports.

Setiap pengujian penting harus memiliki hasil yang dapat ditelusuri.

21. Quality Gate

Sebelum deployment production:

- Build harus berhasil.
- Pemeriksaan wajib harus lulus.
- Tidak ada bug Critical yang belum diselesaikan.
- Tidak ada masalah keamanan serius yang diketahui dan belum ditangani.
- Fitur utama harus berfungsi.
- Halaman utama harus responsif.
- Konfigurasi production harus tervalidasi.

22. Maintenance

- Memperbarui test cases ketika fitur berubah.
- Menambahkan regression tests untuk bug yang pernah ditemukan.
- Memeriksa test automation secara berkala.
- Meninjau kualitas hasil pengujian.
- Memperbarui standar QA sesuai perkembangan Aruhetta.

---

End of Document

Aruhetta Testing & Quality Assurance Specification — Version 1.0
