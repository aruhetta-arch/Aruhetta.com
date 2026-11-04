ARUHETTA — API Documentation

Version: 1.0
Status: Planned
Project: Aruhetta
Last Updated: 4 November 2026

---

1. Overview

Dokumen ini menjelaskan standar komunikasi API, integrasi Supabase, autentikasi, keamanan, format data, dan pengelolaan endpoint pada Aruhetta.

API dirancang agar konsisten, aman, mudah dikembangkan, dan dapat digunakan oleh berbagai fitur Aruhetta.

1.1 API Architecture

Aruhetta menggunakan Hybrid API Architecture:

1. Supabase Client: Operasi database standar yang diizinkan melalui Row Level Security (RLS).
2. Supabase Edge Functions: Proses bisnis khusus, validasi tambahan, dan operasi server-side.
3. Custom REST API: Endpoint khusus dengan prefix "/api/v1/" apabila diperlukan.

Tidak semua operasi database harus melewati custom REST API.

1.2 Communication Standards

- Protocol: HTTPS
- Data format: JSON
- API style: REST
- Character encoding: UTF-8
- Authentication: Token-based authentication
- API versioning: "/api/v1/"

---

2. API Base Structure

2.1 Base URL

Custom API:

"https://aruhetta.com/api/v1/"

Development dan GitHub Pages dapat menggunakan URL sementara sesuai lingkungan pengembangan.

2.2 Endpoint Naming

Standar penamaan endpoint:

- Menggunakan lowercase.
- Menggunakan plural untuk resource.
- Menggunakan tanda hubung jika diperlukan.
- Tidak menggunakan nama endpoint yang ambigu.

Contoh:

- "/users"
- "/articles"
- "/categories"
- "/community/posts"
- "/community/comments"
- "/notifications"
- "/tools"

2.3 HTTP Methods

Method| Fungsi
GET| Mengambil data
POST| Membuat data atau menjalankan proses
PUT| Mengganti seluruh resource
PATCH| Memperbarui sebagian resource
DELETE| Menghapus resource

---

3. Authentication

3.1 Authentication Methods

Aruhetta mendukung:

- Email + Password
- Username + Password
- Google Login
- Remember Me
- Forgot Password
- Logout

Autentikasi utama menggunakan Supabase Auth.

3.2 Token Management

- Menggunakan access token dan refresh token.
- Token dikelola melalui mekanisme autentikasi Supabase.
- Session harus dapat diperbarui secara aman.
- Logout harus mengakhiri session sesuai mekanisme yang berlaku.
- Token sensitif tidak boleh ditampilkan dalam log atau URL.

3.3 Authorization

Setiap permintaan harus memeriksa hak akses berdasarkan role:

- Guest
- Member
- Contributor
- Moderator
- Admin
- Owner

Hak akses ditentukan oleh role dan kebijakan resource terkait.

---

4. Authorization & Security

4.1 Row Level Security

Supabase RLS menjadi lapisan utama perlindungan akses database.

Kebijakan RLS harus memastikan:

- Pengguna hanya dapat mengakses data yang diizinkan.
- Pengguna hanya dapat mengubah data miliknya sendiri.
- Data privat tidak dapat dibaca pengguna lain tanpa izin.
- Role khusus memperoleh akses sesuai tanggung jawabnya.

4.2 API Security

Standar keamanan:

- HTTPS wajib digunakan pada production.
- Validasi input dilakukan di server untuk operasi sensitif.
- Pemeriksaan autentikasi dan otorisasi pada setiap operasi terlindungi.
- Rate limiting diterapkan pada endpoint yang berisiko.
- CORS hanya mengizinkan origin yang sesuai.
- Upload file harus melewati validasi tipe, ukuran, dan keamanan.
- Error tidak boleh membocorkan informasi internal.

4.3 Secret Management

- Supabase publishable key boleh digunakan di frontend dengan konfigurasi RLS yang benar.
- Supabase Service Role Key hanya boleh digunakan di lingkungan server yang aman.
- API secret dan credential tidak boleh disimpan dalam repository publik.
- Environment variable digunakan untuk mengelola konfigurasi sensitif.

---

5. Request & Response Standards

5.1 Request Format

Request menggunakan JSON apabila endpoint membutuhkan body JSON.

Contoh:

"POST /api/v1/articles"

{
  "title": "Contoh Artikel",
  "content": "Isi artikel",
  "category_id": "category-id"
}

5.2 Success Response

Format respons sukses:

{
  "success": true,
  "data": {
    "id": "resource-id",
    "title": "Contoh Artikel"
  },
  "meta": null
}

5.3 Error Response

Format error:

{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Data yang dikirim tidak valid."
  },
  "meta": null
}

Pesan error harus jelas dan tidak mengungkap informasi sensitif.

5.4 HTTP Status Codes

Status| Keterangan
200| OK
201| Created
204| No Content
400| Bad Request
401| Unauthorized
403| Forbidden
404| Not Found
409| Conflict
413| Payload Too Large
422| Unprocessable Entity
429| Too Many Requests
500| Internal Server Error
503| Service Unavailable

---

6. Pagination, Filtering & Sorting

6.1 Pagination

Endpoint daftar data sebaiknya mendukung pagination.

Contoh:

"GET /api/v1/articles?page=1&limit=10"

6.2 Filtering

Filter dapat digunakan berdasarkan kategori, tag, status, tanggal, atau parameter lain yang relevan.

Contoh:

"GET /api/v1/articles?category=technology"

6.3 Sorting

Standar sorting:

- "created_at"
- "updated_at"
- "title"
- "popularity"

Contoh:

"GET /api/v1/articles?sort=created_at&order=desc"

Parameter yang tidak didukung harus ditolak atau ditangani secara aman.

---

7. API Resource Groups

7.1 Accounts

- Profiles
- User Settings
- Sessions
- Followers
- Following
- Blocks

7.2 Articles

- Articles
- Categories
- Tags
- Comments
- Likes
- Bookmarks
- Reading History

7.3 Arumunity

- Posts
- Comments
- Groups
- Group Members
- Events
- Event Participants

7.4 Notifications

- Notifications
- Notification Preferences
- Read Status

7.5 Tools

- Tool Information
- Tool Usage
- Tool History
- Tool Feedback

7.6 Media

- Media Upload
- Media Information
- Media Management
- Media Download

7.7 Administration

- User Management
- Article Management
- Moderation
- Reports
- Audit Logs
- System Settings

Setiap resource hanya dapat diakses sesuai kebijakan autentikasi dan otorisasi.

---

8. File Upload & Media API

Upload menggunakan Supabase Storage atau proses server-side sesuai kebutuhan.

Standar:

- Validasi ukuran file.
- Validasi MIME type dan format.
- Pemeriksaan keamanan file.
- Pembatasan ukuran berdasarkan jenis file dan role.
- Penyimpanan metadata file.
- Pengelolaan akses publik dan privat.
- Pembersihan file sementara.
- Penanganan kegagalan upload.

File privat tidak boleh dapat diakses tanpa izin yang sesuai.

---

9. Rate Limiting

Rate limiting diterapkan untuk mencegah penyalahgunaan API.

Prioritas pembatasan:

- Login dan autentikasi.
- Registrasi.
- Pencarian.
- Komentar dan posting.
- Pengiriman pesan.
- Upload file.
- Endpoint administratif.

Batas penggunaan ditentukan berdasarkan jenis endpoint, role, dan risiko keamanan.

Jika batas terlampaui, API dapat mengembalikan status "429 Too Many Requests".

---

10. Validation & Data Integrity

Setiap input harus diperiksa sebelum diproses.

Validasi meliputi:

- Required fields.
- Data types.
- Maximum dan minimum length.
- Format email dan username.
- Validitas ID resource.
- Hak akses pengguna.
- Relasi antar-data.
- Batas ukuran request.
- Pencegahan input berbahaya.

Database tetap menjadi lapisan perlindungan integritas data melalui constraints dan aturan yang sesuai.

---

11. Logging & Monitoring

Sistem API perlu mencatat:

- Request penting.
- Response status.
- Error dan kegagalan proses.
- Aktivitas administratif.
- Aktivitas keamanan.
- Performa endpoint.

Ketentuan:

- Password dan token tidak boleh dicatat.
- Informasi pribadi dibatasi sesuai kebutuhan.
- Log memiliki waktu dan identitas proses yang relevan.
- Aktivitas penting dapat terhubung dengan audit logs.
- Monitoring digunakan untuk mendeteksi gangguan dan penyalahgunaan.

---

12. Performance & Reliability

Standar performa:

- Menghindari request berulang yang tidak diperlukan.
- Menggunakan pagination untuk data berjumlah besar.
- Mengoptimalkan query database.
- Menggunakan cache jika sesuai.
- Mengelola timeout dan kegagalan koneksi.
- Menyediakan penanganan retry yang aman.
- Menggunakan idempotency key untuk operasi tertentu yang berisiko mengalami duplikasi.

Operasi kritis harus dirancang agar tidak menghasilkan data ganda ketika request dikirim ulang.

---

13. CORS & Network Configuration

- HTTPS digunakan untuk seluruh komunikasi production.
- CORS dikonfigurasi berdasarkan domain yang diizinkan.
- Origin development dan production dipisahkan.
- Credential tidak boleh dibagikan ke origin yang tidak dipercaya.
- Endpoint sensitif tidak boleh terbuka tanpa autentikasi.

---

14. API Testing

Pengujian mencakup:

- Endpoint functionality.
- Authentication.
- Authorization.
- RLS policies.
- Input validation.
- Error handling.
- Rate limiting.
- File upload.
- Performance.
- Security testing.
- Cross-origin requests.

Pengujian dilakukan pada development dan staging sebelum perubahan dipublikasikan ke production.

---

15. API Documentation Management

Dokumentasi API harus:

- Mengikuti versi API.
- Mencatat endpoint, method, parameter, request, dan response.
- Menjelaskan kebutuhan autentikasi dan role.
- Menjelaskan kemungkinan error.
- Diperbarui saat endpoint berubah.
- Memisahkan dokumentasi development dan production jika diperlukan.

OpenAPI dapat digunakan sebagai standar dokumentasi endpoint custom REST API ketika implementasinya sudah tersedia.

---

16. Future Development

Rencana pengembangan API:

- API analytics.
- Advanced search.
- Recommendation services.
- External integrations.
- Advanced notification services.
- Webhook support.
- API usage monitoring.
- Extended developer documentation.

Fitur tersebut akan dikembangkan sesuai kebutuhan dan kesiapan backend.

---

17. Implementation Notes

Dokumen ini merupakan rancangan arsitektur API Aruhetta, bukan implementasi API yang sudah berjalan.

Endpoint, response schema, rate limit, dan aturan akses masih dapat disesuaikan ketika backend mulai dikembangkan.

Document Status: Planned
Version: 1.0
