ARUHETTA — Security Documentation

Version: 1.0
Status: Planned
Project: Aruhetta
Last Updated: 4 November 2026

---

1. Overview

Dokumen ini menjelaskan standar keamanan untuk seluruh sistem Aruhetta, termasuk frontend, backend, database, autentikasi, penyimpanan file, API, dan aktivitas administratif.

Tujuan utama:

- Melindungi data pengguna.
- Mencegah akses tanpa izin.
- Menjaga integritas database.
- Melindungi sistem dari penyalahgunaan.
- Menjaga keamanan file dan media.
- Menyediakan proses pemantauan dan pemulihan.

Keamanan harus diterapkan sejak tahap pengembangan, bukan hanya setelah website dipublikasikan.

---

2. Security Architecture

Aruhetta menggunakan pendekatan keamanan berlapis.

2.1 Security Layers

1. Frontend Security
2. Authentication Security
3. Authorization Security
4. Database Security
5. API Security
6. Storage Security
7. Infrastructure Security
8. Monitoring & Audit

Setiap lapisan memiliki tanggung jawab berbeda dan tidak boleh bergantung pada satu mekanisme keamanan saja.

2.2 Security Principles

- Least Privilege: setiap pengguna hanya memperoleh akses yang diperlukan.
- Defense in Depth: menggunakan beberapa lapisan perlindungan.
- Secure by Default: akses sensitif ditutup secara default.
- Data Minimization: hanya mengumpulkan data yang diperlukan.
- Fail Securely: kegagalan pemeriksaan keamanan tidak boleh memberikan akses tambahan.

---

3. Authentication Security

Autentikasi menggunakan Supabase Auth.

3.1 Login Security

- Email dan password.
- Username dan password melalui mekanisme autentikasi yang aman.
- Google Login.
- Remember Me.
- Forgot Password.
- Logout.
- Session management.

3.2 Password Protection

- Password tidak boleh disimpan sebagai teks biasa.
- Password hashing ditangani oleh sistem autentikasi.
- Password tidak boleh ditampilkan dalam log.
- Reset password harus menggunakan proses verifikasi.
- Pesan kesalahan login tidak boleh membocorkan apakah suatu email terdaftar.

3.3 Session Security

- Menggunakan access token dan refresh token.
- Session harus dapat diperbarui secara aman.
- Pengguna dapat melihat perangkat atau sesi aktif.
- Pengguna dapat mengakhiri sesi tertentu.
- Pengguna dapat logout dari seluruh perangkat.
- Perubahan kredensial penting dapat memerlukan autentikasi ulang.

3.4 Account Protection

- Verifikasi email untuk akun Member.
- Pemeriksaan tambahan untuk aktivitas mencurigakan.
- Pembatasan percobaan login.
- Notifikasi aktivitas keamanan penting.
- Proses pemulihan akun yang aman.

---

4. Authorization & Role Security

Aruhetta menggunakan sistem role:

Role| Hak Akses
Guest| Akses publik terbatas
Member| Fitur akun dan komunitas
Contributor| Pengelolaan kontribusi konten
Moderator| Moderasi komunitas dan laporan
Admin| Pengelolaan sistem sesuai izin
Owner| Kontrol penuh platform

Ketentuan:

- Role tidak boleh ditentukan hanya melalui frontend.
- Perubahan role harus melalui proses server-side yang terverifikasi.
- Setiap tindakan administratif harus memeriksa izin.
- Pengguna tidak boleh menaikkan role sendiri.
- Perubahan role penting harus masuk audit log.

4.1 Privilege Separation

Akses Admin dan Owner harus dibatasi.

Tindakan sensitif dapat memerlukan:

- Verifikasi ulang identitas.
- Persetujuan tambahan.
- Pencatatan aktivitas.
- Konfirmasi sebelum tindakan dijalankan.

---

5. Database Security

Database menggunakan PostgreSQL melalui Supabase.

5.1 Row Level Security

RLS wajib diaktifkan pada tabel yang menyimpan data pengguna atau data yang membutuhkan pembatasan akses.

Kebijakan RLS harus memastikan:

- Pengguna hanya dapat mengakses data yang diizinkan.
- Pengguna hanya dapat mengubah data miliknya.
- Data privat tidak dapat dibaca pengguna lain.
- Hak akses moderator dan admin diperiksa secara benar.
- Operasi publik hanya diizinkan untuk data yang memang bersifat publik.

5.2 Database Protection

- Gunakan foreign key dan constraints.
- Validasi data sebelum penyimpanan.
- Batasi hak akses database.
- Hindari query yang tidak diperlukan.
- Jangan menyimpan password secara manual.
- Lindungi data sensitif dari akses publik.
- Gunakan migration untuk perubahan struktur database.

5.3 Sensitive Data

Data berikut harus mendapatkan perlindungan khusus:

- Email pengguna.
- Informasi akun.
- Session dan token.
- Pesan pribadi.
- Data keamanan.
- Informasi administratif.

---

6. API Security

API menggunakan standar keamanan dari dokumentasi API Aruhetta.

Perlindungan mencakup:

- HTTPS.
- Authentication checks.
- Authorization checks.
- Input validation.
- Rate limiting.
- CORS restrictions.
- Request size limits.
- Error handling.
- Abuse prevention.

6.1 API Key Protection

- Publishable key hanya digunakan sesuai konfigurasi keamanan Supabase.
- Service Role Key tidak boleh berada di frontend.
- Secret key disimpan dalam environment server.
- Credential tidak boleh dimasukkan ke repository publik.
- Secret yang terlanjur terpublikasi harus segera dirotasi.

---

7. Frontend Security

Frontend menggunakan HTML, CSS, dan JavaScript.

Standar perlindungan:

- Hindari penggunaan "innerHTML" untuk konten tidak tepercaya.
- Gunakan text rendering yang aman.
- Validasi input pada frontend dan server.
- Hindari penyimpanan token sensitif secara sembarangan.
- Jangan mengandalkan pemeriksaan role frontend.
- Hindari menampilkan informasi internal.
- Terapkan Content Security Policy (CSP) ketika konfigurasi hosting memungkinkan.

7.1 Cross-Site Scripting (XSS)

Konten dari pengguna harus diperlakukan sebagai data tidak tepercaya.

Perlindungan:

- Escape output sesuai konteks.
- Sanitasi HTML jika fitur rich text mengizinkan HTML.
- Batasi penggunaan script dari sumber eksternal.
- Validasi konten sebelum ditampilkan.

7.2 Cross-Site Request Forgery (CSRF)

Untuk operasi yang menggunakan cookie sebagai kredensial, terapkan perlindungan CSRF yang sesuai.

Periksa origin dan gunakan konfigurasi cookie yang aman jika mekanisme autentikasi membutuhkannya.

---

8. File Upload Security

Semua file yang diunggah harus melewati pemeriksaan.

8.1 Validation

- MIME type.
- Ekstensi file.
- Ukuran file.
- Struktur file jika memungkinkan.
- Nama file.
- Hak akses penyimpanan.

Ekstensi file saja tidak cukup untuk memastikan keamanan file.

8.2 Storage Protection

- File privat menggunakan akses terbatas.
- Gunakan signed URL jika diperlukan.
- Hindari menjalankan file yang diunggah sebagai kode.
- File sementara harus dibersihkan secara berkala.
- File yang mencurigakan dapat dikarantina untuk pemeriksaan.

8.3 Download Security

- Periksa izin sebelum memberikan file privat.
- Validasi resource yang diminta.
- Hindari penggunaan path file yang berasal langsung dari input pengguna.
- Jangan membocorkan lokasi penyimpanan internal.

---

9. User Privacy & Data Protection

Aruhetta menerapkan prinsip privasi pengguna.

9.1 Privacy Controls

Pengguna dapat mengatur:

- Profil publik atau privat.
- Visibilitas informasi profil.
- Izin pesan pribadi.
- Pengaturan notifikasi.
- Pengelolaan blokir pengguna.
- Pengelolaan sesi aktif.

9.2 Data Collection

- Hanya kumpulkan data yang diperlukan.
- Jelaskan tujuan pengumpulan data.
- Jangan menjual data pribadi pengguna.
- Batasi akses internal terhadap informasi pribadi.
- Tentukan masa penyimpanan data sesuai kebutuhan.

9.3 Account Deletion

Proses penghapusan akun harus mencakup:

- Verifikasi permintaan.
- Penjelasan dampak penghapusan.
- Penanganan konten milik pengguna.
- Penghapusan atau anonimisasi data sesuai kebijakan.
- Penanganan backup dan kewajiban penyimpanan yang berlaku.

---

10. Community Safety & Moderation Security

Arumunity membutuhkan perlindungan terhadap penyalahgunaan komunitas.

Sistem harus mendukung:

- Report pengguna dan konten.
- Block dan mute.
- Spam detection.
- Pembatasan aktivitas berlebihan.
- Moderation review.
- Moderation history.
- Appeal process.

Moderator hanya memperoleh akses yang diperlukan untuk menjalankan tugasnya.

Tindakan moderasi sensitif harus tercatat dalam audit log.

---

11. Messaging Security

Fitur pesan pribadi harus menerapkan:

- Pemeriksaan izin komunikasi.
- Pembatasan akses berdasarkan pengirim dan penerima.
- Perlindungan terhadap spam.
- Block dan report.
- Pembatasan ukuran dan tipe lampiran.
- Perlindungan data pesan.

Pesan pribadi tidak boleh dapat dibaca pengguna lain tanpa izin yang sah.

Enkripsi end-to-end belum menjadi fitur yang dijanjikan dan harus dirancang serta diuji secara terpisah jika kelak akan diterapkan.

---

12. Infrastructure & Deployment Security

12.1 GitHub Security

- Repository tidak boleh menyimpan credential.
- ".gitignore" harus mengecualikan file rahasia.
- ".env.example" hanya berisi nama variabel dan contoh non-rahasia.
- Periksa perubahan sebelum merge.
- Gunakan branch development untuk pekerjaan pengembangan.
- Perubahan production harus melalui proses pemeriksaan.

12.2 GitHub Actions

- Gunakan permission minimum.
- Hindari mencetak secret dalam log.
- Batasi penggunaan third-party actions.
- Gunakan versi action yang terpercaya.
- Pisahkan konfigurasi development dan production.

12.3 Supabase Security

- Aktifkan RLS pada tabel yang memerlukan pembatasan akses.
- Periksa Storage policies.
- Batasi penggunaan Service Role Key.
- Gunakan environment terpisah.
- Periksa konfigurasi autentikasi dan database secara berkala.

---

13. Security Monitoring & Audit

Aktivitas penting yang perlu dipantau:

- Login gagal berulang.
- Perubahan password.
- Perubahan email.
- Perubahan role.
- Aktivitas administratif.
- Penghapusan data.
- Percobaan akses tanpa izin.
- Aktivitas API mencurigakan.

13.1 Audit Logs

Audit log mencatat:

- Actor.
- Action.
- Target resource.
- Timestamp.
- Result.
- Informasi konteks yang aman.

Audit log tidak boleh menyimpan password, token, atau secret.

---

14. Backup & Recovery

Perlindungan data mencakup:

- Backup database.
- Perlindungan file media.
- Pemeriksaan keberhasilan backup.
- Pembatasan akses backup.
- Prosedur pemulihan.
- Pengujian restore secara berkala.

Backup tidak dianggap berhasil sebelum proses pemulihannya pernah diuji.

---

15. Incident Response

Jika terjadi insiden keamanan, proses penanganannya:

1. Detection — mendeteksi insiden.
2. Assessment — menilai dampak dan cakupan.
3. Containment — membatasi dampak.
4. Eradication — menghilangkan penyebab.
5. Recovery — memulihkan layanan.
6. Review — mengevaluasi dan memperbaiki sistem.

Insiden yang melibatkan data pribadi harus ditangani sesuai kewajiban hukum dan kebijakan privasi yang berlaku.

---

16. Security Testing

Pengujian keamanan mencakup:

- Authentication testing.
- Authorization testing.
- RLS testing.
- XSS testing.
- CSRF testing jika relevan.
- Input validation.
- File upload validation.
- API rate limiting.
- Session security.
- Access control.
- Dependency vulnerability checks.
- Backup restoration testing.

Pengujian harus dilakukan pada lingkungan development atau staging sebelum perubahan diterapkan ke production.

---

17. Security Maintenance

Keamanan harus diperiksa secara berkala melalui:

- Dependency updates.
- Security configuration review.
- Permission review.
- RLS policy review.
- Credential rotation jika diperlukan.
- Log monitoring.
- Backup verification.
- Vulnerability assessment.

Perubahan keamanan yang signifikan harus didokumentasikan.

---

18. Implementation Notes

Dokumen ini merupakan rancangan keamanan Aruhetta dan belum menunjukkan bahwa seluruh mekanisme sudah diterapkan.

Setiap fitur harus melewati pemeriksaan keamanan sebelum digunakan pada production.

Standar keamanan dapat diperbarui mengikuti perkembangan teknologi, risiko, dan kebutuhan platform.

Document Status: Planned
Version: 1.0
