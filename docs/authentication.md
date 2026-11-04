ARUHETTA — Authentication Documentation

Version: 1.0
Status: Planned
Project: Aruhetta
Last Updated: 4 November 2026

---

1. Overview

Authentication System merupakan sistem yang mengatur identitas pengguna, proses login, registrasi, session, dan akses akun pada Aruhetta.

Sistem autentikasi menggunakan Supabase Auth sebagai layanan utama.

Tujuan:

- Menyediakan proses registrasi dan login yang aman.
- Mengelola identitas pengguna.
- Melindungi session pengguna.
- Mendukung beberapa metode autentikasi.
- Mengatur akses berdasarkan role.
- Menyediakan pemulihan akun.
- Mendukung penggunaan multi-device.

---

2. Authentication Architecture

2.1 Main Components

1. Frontend Authentication UI
2. Supabase Auth
3. User Profiles
4. Session Management
5. Role & Permission System
6. Account Security
7. Authentication Events

2.2 Authentication Flow

Alur umum:

1. Pengguna membuka halaman autentikasi.
2. Pengguna memilih metode login atau registrasi.
3. Supabase Auth memproses autentikasi.
4. Sistem memeriksa hasil autentikasi.
5. Profil pengguna diambil atau disiapkan.
6. Hak akses diperiksa.
7. Pengguna diarahkan ke halaman sesuai kondisi akun.

2.3 Identity Separation

Identitas autentikasi dan profil pengguna disimpan secara terpisah:

- Supabase Auth menyimpan identitas autentikasi.
- Tabel "profiles" menyimpan informasi profil.
- Tabel "user_settings" menyimpan preferensi.
- Sistem role mengatur hak akses.

ID pengguna pada profil harus terhubung dengan ID autentikasi Supabase.

---

3. Registration System

3.1 Registration Methods

Aruhetta menyediakan:

- Email Registration
- Password Registration
- Username Setup
- Google Sign Up

3.2 Registration Fields

Data yang diperlukan:

Field| Required
Email| Yes
Password| Yes
Username| Yes
Display Name| Yes
Terms Acceptance| Yes
Avatar| Optional
Bio| Optional

Username harus unik dan mengikuti aturan karakter yang ditentukan.

3.3 Registration Validation

Sistem memeriksa:

- Format email.
- Ketersediaan email.
- Ketersediaan username.
- Kekuatan password.
- Panjang username.
- Karakter yang diperbolehkan.
- Persetujuan Terms of Service.
- Persetujuan Privacy Policy.

3.4 Registration Flow

1. Pengguna mengisi formulir.
2. Sistem memvalidasi data.
3. Supabase Auth membuat akun.
4. Sistem mengirim email verifikasi jika diperlukan.
5. Profil pengguna disiapkan melalui proses server-side yang aman.
6. Pengguna menyelesaikan verifikasi.
7. Akun dapat digunakan sesuai statusnya.

Pembuatan profil harus dirancang agar tidak menghasilkan profil ganda ketika proses diulang.

---

4. Login System

4.1 Supported Login Methods

- Email + Password
- Username + Password
- Google Login

4.2 Email Login

Pengguna memasukkan email dan password yang terdaftar.

Sistem memeriksa kredensial melalui Supabase Auth.

4.3 Username Login

Username bukan metode autentikasi bawaan Supabase Auth.

Jika fitur ini diterapkan, Aruhetta harus menyediakan mekanisme server-side yang aman untuk memetakan username ke identitas akun tanpa mengekspos informasi akun pengguna.

Password tetap diverifikasi melalui mekanisme autentikasi resmi.

4.4 Google Login

Google Login menggunakan OAuth melalui Supabase Auth.

Persyaratan:

- Konfigurasi Google OAuth.
- Konfigurasi redirect URL.
- Validasi callback.
- Penanganan kegagalan autentikasi.
- Pemeriksaan status profil setelah login.

4.5 Login Validation

Sistem harus memeriksa:

- Kredensial.
- Status akun.
- Status verifikasi email.
- Status pembatasan akun.
- Validitas session.
- Hak akses pengguna.

---

5. Email Verification

Email verification digunakan untuk memastikan kepemilikan alamat email.

5.1 Verification Flow

1. Pengguna mendaftar.
2. Sistem mengirim email verifikasi.
3. Pengguna membuka tautan verifikasi.
4. Supabase Auth memvalidasi token.
5. Status email diperbarui.
6. Pengguna dapat menggunakan fitur yang mensyaratkan verifikasi.

5.2 Verification Features

- Verification Email.
- Resend Verification Email.
- Verification Status.
- Expired Link Handling.
- Invalid Token Handling.

5.3 Verification Rules

- Email yang belum terverifikasi memiliki akses sesuai kebijakan akun.
- Contributor memerlukan email terverifikasi.
- Role khusus mengikuti persyaratan verifikasi tambahan.
- Perubahan email dapat memerlukan verifikasi ulang.

---

6. Password Management

6.1 Password Policy

Password harus mengikuti persyaratan keamanan yang ditetapkan.

Ketentuan:

- Memiliki panjang minimum.
- Mendukung password yang kuat dan unik.
- Tidak menggunakan password umum yang mudah ditebak.
- Tidak disimpan sebagai teks biasa.
- Tidak ditampilkan atau dicatat dalam log.

6.2 Change Password

Pengguna dapat mengganti password melalui pengaturan akun.

Proses dapat meminta:

- Session yang valid.
- Verifikasi ulang identitas.
- Password baru.
- Konfirmasi perubahan.

6.3 Forgot Password

Alur:

1. Pengguna memasukkan email.
2. Sistem mengirim reset password email.
3. Pengguna membuka tautan.
4. Sistem memvalidasi proses pemulihan.
5. Pengguna menetapkan password baru.
6. Sistem memperbarui kredensial.

Respons permintaan reset harus menghindari pengungkapan apakah suatu email terdaftar.

---

7. Session Management

7.1 Session System

Session dikelola menggunakan mekanisme Supabase Auth.

Komponen:

- Access Token.
- Refresh Token.
- Session Expiration.
- Session Refresh.
- Logout.

7.2 Remember Me

Fitur Remember Me mengatur pengalaman pengguna ketika kembali membuka Aruhetta.

Keamanan session tetap mengikuti kebijakan penyimpanan dan masa berlaku token Supabase.

7.3 Multi-Device Sessions

Pengguna dapat:

- Melihat daftar perangkat atau sesi yang tersedia.
- Melihat informasi aktivitas sesi jika tersedia.
- Mengakhiri sesi tertentu jika didukung.
- Logout dari seluruh perangkat.

7.4 Session Security

- Token tidak boleh dimasukkan ke URL.
- Token tidak boleh dicatat dalam log.
- Session harus diperiksa sebelum operasi sensitif.
- Session tidak valid harus ditangani dengan aman.
- Perubahan kredensial penting dapat memerlukan autentikasi ulang.

---

8. Logout System

Aruhetta menyediakan:

8.1 Current Device Logout

Mengakhiri session pada perangkat yang sedang digunakan.

8.2 All Devices Logout

Mengakhiri seluruh session pengguna sesuai kemampuan dan konfigurasi Supabase Auth.

8.3 Logout Behavior

Setelah logout:

- Status autentikasi dibersihkan.
- Data akun privat tidak lagi ditampilkan.
- Pengguna diarahkan ke halaman publik.
- Preferensi lokal non-sensitif dapat tetap disimpan.
- Data session tidak boleh digunakan kembali.

---

9. Account Status

Setiap akun memiliki status.

Status| Description
Pending Verification| Menunggu verifikasi
Active| Akun aktif
Restricted| Akses dibatasi
Suspended| Akun ditangguhkan
Deletion Requested| Permintaan penghapusan
Deleted| Akun dihapus

Status akun menentukan fitur yang dapat digunakan.

Perubahan status harus melalui proses yang memiliki izin sesuai role.

---

10. Role & Authentication Permissions

Authentication System terhubung dengan Role & Permission System.

Role| Authentication Access
Guest| Tanpa login
Member| Akun terverifikasi sesuai kebijakan
Contributor| Email terverifikasi dan persetujuan
Moderator| Verifikasi tambahan dan persetujuan admin
Admin| Verifikasi tambahan
Owner| Perlindungan akses tertinggi

Role tidak boleh diberikan hanya berdasarkan data yang dikirim frontend.

Pemeriksaan role dan permission harus dilakukan di backend atau melalui kebijakan database yang aman.

---

11. Account Linking

Account linking memungkinkan pengguna menghubungkan metode autentikasi tambahan.

Contoh:

- Email dan Password.
- Google Account.
- Metode autentikasi lain yang didukung.

Ketentuan:

- Identitas yang dihubungkan harus diverifikasi.
- Sistem harus mencegah pengambilalihan akun.
- Pengguna harus memahami akun mana yang sedang dihubungkan.
- Konflik identitas harus ditangani secara aman.
- Penghapusan metode login tidak boleh membuat akun kehilangan seluruh akses.

---

12. Authentication UI & UX

Halaman autentikasi harus konsisten dengan Design System Aruhetta.

12.1 Pages

- Login
- Sign Up
- Forgot Password
- Reset Password
- Email Verification
- Authentication Callback

12.2 UI Components

- Email Input
- Username Input
- Password Input
- Password Visibility Toggle
- Remember Me
- Submit Button
- Google Login Button
- Form Validation
- Error Message
- Loading State
- Success Message

12.3 UX Requirements

- Form mudah digunakan pada perangkat mobile.
- Pesan error jelas.
- Tombol memiliki loading state.
- Input memiliki label.
- Navigasi antarhalaman konsisten.
- Aksesibilitas keyboard dan screen reader diperhatikan.

---

13. Authentication Notifications

Sistem dapat memberikan notifikasi untuk:

- Registrasi berhasil.
- Email verifikasi dikirim.
- Email berhasil diverifikasi.
- Password berhasil diperbarui.
- Login dari perangkat baru jika tersedia.
- Perubahan email.
- Aktivitas keamanan penting.

Notifikasi keamanan harus menggunakan kanal komunikasi yang sesuai dan tidak menampilkan informasi sensitif.

---

14. Abuse Prevention

Perlindungan terhadap penyalahgunaan meliputi:

- Rate limiting.
- Pembatasan percobaan login.
- Perlindungan registrasi otomatis.
- Validasi permintaan reset password.
- Pencegahan enumerasi akun.
- Deteksi aktivitas mencurigakan.
- CAPTCHA atau mekanisme anti-bot jika diperlukan.

Penerapan perlindungan harus mempertimbangkan kenyamanan pengguna yang sah.

---

15. Authentication Error Handling

Sistem harus menangani:

- Invalid Credentials.
- Email Not Verified.
- Account Restricted.
- Session Expired.
- Invalid Verification Link.
- Expired Reset Link.
- OAuth Failure.
- Network Error.
- Rate Limit Exceeded.

Pesan kepada pengguna harus informatif tanpa mengungkap detail internal.

---

16. Data & Database Integration

Authentication System terhubung dengan tabel:

- "profiles"
- "user_settings"
- "user_sessions" jika diperlukan untuk metadata sesi aplikasi
- "audit_logs"

Ketentuan:

- ID profil terhubung dengan ID Supabase Auth.
- Informasi autentikasi tidak diduplikasi secara sembarangan.
- Data profil mengikuti kebijakan RLS.
- Metadata sesi tidak menggantikan sistem session resmi Supabase.
- Perubahan penting dicatat dalam audit log.

---

17. Testing & Quality Assurance

Pengujian meliputi:

- Registration.
- Email Verification.
- Email Login.
- Username Login.
- Google Login.
- Forgot Password.
- Reset Password.
- Change Password.
- Remember Me.
- Session Refresh.
- Logout.
- Multi-Device Behavior.
- Role Permissions.
- Account Restriction.
- Error Handling.
- Abuse Prevention.

Pengujian dilakukan pada development dan staging sebelum production.

---

18. Implementation Notes

Dokumen ini merupakan rancangan Authentication System Aruhetta.

Supabase Auth menjadi layanan autentikasi utama. Fitur tambahan seperti username login, account linking, dan pengelolaan sesi perangkat harus disesuaikan dengan kemampuan layanan serta implementasi backend.

Tidak semua fitur yang direncanakan berarti sudah tersedia atau aktif.

Document Status: Planned
Version: 1.0
