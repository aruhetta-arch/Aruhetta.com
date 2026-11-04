ARUHETTA — Roles & Permissions Documentation

Version: 1.0
Status: Planned
Project: Aruhetta
Last Updated: 4 November 2026

---

1. Overview

Roles & Permissions System mengatur hak akses setiap pengguna di Aruhetta.

Sistem ini menggunakan Role-Based Access Control (RBAC) dengan pemeriksaan izin berdasarkan role, kepemilikan resource, dan kondisi tertentu.

Tujuan:

- Membatasi akses sesuai tanggung jawab.
- Melindungi data pengguna.
- Mencegah penyalahgunaan wewenang.
- Memisahkan hak akses pengguna biasa dan pengelola.
- Menyediakan pengelolaan izin yang konsisten.

---

2. Role Architecture

Aruhetta memiliki enam role utama:

1. Guest
2. Member
3. Contributor
4. Moderator
5. Admin
6. Owner

2.1 Role Hierarchy

Urutan tingkat wewenang:

"Guest → Member → Contributor → Moderator → Admin → Owner"

Hierarki ini menggambarkan tingkat tanggung jawab, bukan berarti setiap role otomatis memperoleh seluruh izin role sebelumnya.

Setiap izin harus ditentukan secara eksplisit.

2.2 Permission Principles

- Least Privilege.
- Default Deny.
- Resource Ownership.
- Role Separation.
- Server-side Authorization.
- Auditable Administrative Actions.

---

3. Guest

Guest merupakan pengguna yang belum login.

Permissions

- Melihat halaman publik.
- Membaca artikel publik.
- Melihat profil publik.
- Melihat diskusi publik.
- Melihat informasi grup publik.
- Melihat informasi event publik.
- Menggunakan tools yang tersedia untuk Guest.
- Menggunakan pencarian publik.

Restrictions

- Tidak dapat membuat posting.
- Tidak dapat memberikan komentar.
- Tidak dapat melakukan follow.
- Tidak dapat mengirim pesan pribadi.
- Tidak dapat menyimpan bookmark ke akun.
- Tidak dapat mengikuti grup privat.
- Tidak dapat mengakses dashboard pengguna.
- Tidak dapat mengakses fitur administratif.

Bookmark lokal dan preferensi lokal tetap dapat digunakan jika fitur tersebut mendukung Guest.

---

4. Member

Member merupakan pengguna yang telah memiliki akun Aruhetta.

Permissions

- Semua akses publik.
- Mengelola profil sendiri.
- Mengubah pengaturan akun.
- Membuat posting komunitas.
- Memberikan komentar dan balasan.
- Memberikan like.
- Mengikuti pengguna lain.
- Mengelola followers dan following.
- Bergabung dengan grup.
- Mengikuti event.
- Menggunakan pesan pribadi sesuai izin.
- Mengelola bookmark.
- Melihat riwayat aktivitas pribadi.
- Menggunakan fitur Member.
- Melaporkan konten atau pengguna.

Restrictions

- Tidak dapat mengelola akun pengguna lain.
- Tidak dapat memublikasikan artikel sebagai Contributor.
- Tidak dapat menjalankan moderasi.
- Tidak dapat mengubah konfigurasi sistem.
- Tidak dapat mengakses data administratif.

---

5. Contributor

Contributor merupakan Member yang memperoleh izin untuk membuat dan mengelola konten artikel.

Permissions

- Seluruh izin Member.
- Membuat artikel.
- Menyimpan draft.
- Mengedit artikel milik sendiri.
- Mengirim artikel untuk review.
- Melihat status publikasi.
- Mengelola tag yang diusulkan.
- Mengelola media milik sendiri.
- Melihat riwayat revisi artikel sendiri.
- Mengajukan perubahan artikel yang sudah diterbitkan.

Restrictions

- Tidak dapat menyetujui artikelnya sendiri.
- Tidak dapat memublikasikan artikel tanpa izin.
- Tidak dapat mengedit artikel milik Contributor lain.
- Tidak dapat mengelola seluruh kategori.
- Tidak dapat mengakses pengaturan sistem.
- Tidak dapat menghapus audit log.

Article Workflow

"Draft → Submitted → Under Review → Approved → Published"

Artikel dapat dikembalikan kepada Contributor untuk revisi jika belum memenuhi persyaratan.

---

6. Moderator

Moderator bertanggung jawab menjaga keamanan dan ketertiban komunitas.

Permissions

- Seluruh izin Member.
- Melihat laporan yang ditugaskan atau sesuai cakupan moderasi.
- Memeriksa konten yang dilaporkan.
- Menyembunyikan konten sesuai kewenangan.
- Menghapus konten yang melanggar kebijakan sesuai prosedur.
- Memberikan peringatan.
- Membatasi aktivitas pengguna sesuai kebijakan.
- Mengelola diskusi komunitas.
- Memoderasi grup dan event sesuai penugasan.
- Melihat riwayat moderasi.
- Menangani banding sesuai kewenangan.

Restrictions

- Tidak dapat mengubah role Admin atau Owner.
- Tidak dapat mengakses secret sistem.
- Tidak dapat mengubah konfigurasi global.
- Tidak dapat menghapus audit log.
- Tidak dapat melakukan tindakan di luar cakupan moderasi.
- Tidak dapat mengakses pesan pribadi tanpa dasar dan prosedur yang sah.

Setiap tindakan moderasi harus memiliki alasan dan tercatat dalam sistem.

---

7. Admin

Admin bertanggung jawab mengelola operasional Aruhetta.

Permissions

- Mengelola pengguna.
- Mengelola Contributor dan Moderator sesuai kewenangan.
- Mengelola artikel.
- Mengelola kategori dan tag.
- Mengelola tools.
- Mengelola komunitas.
- Mengelola grup dan event.
- Mengelola laporan.
- Mengelola konten publik.
- Melihat analytics.
- Mengelola konfigurasi aplikasi yang diizinkan.
- Melihat audit log sesuai izin.

Restrictions

- Tidak dapat mengambil alih kepemilikan platform.
- Tidak dapat mengubah atau menghapus identitas Owner melalui operasi biasa.
- Tidak dapat mengakses credential rahasia tanpa kebutuhan dan otorisasi khusus.
- Tidak dapat menghapus catatan audit secara sembarangan.
- Tidak dapat melampaui batas kewenangan yang diberikan Owner.

Admin dapat memiliki pembagian izin khusus berdasarkan tanggung jawab operasional.

---

8. Owner

Owner merupakan pemegang wewenang tertinggi platform Aruhetta.

Permissions

- Seluruh pengelolaan platform.
- Mengelola role dan permission.
- Mengelola Admin.
- Mengelola konfigurasi global.
- Mengelola sistem keamanan.
- Mengelola integrasi layanan.
- Mengakses analytics keseluruhan.
- Mengelola kebijakan platform.
- Mengelola pengaturan backend yang diizinkan.
- Menentukan kebijakan operasional.
- Mengelola kepemilikan platform.

Security Requirements

- Verifikasi tambahan untuk tindakan sensitif.
- Session management yang ketat.
- Audit log untuk tindakan penting.
- Perlindungan terhadap pengambilalihan akun.
- Penggunaan akun Owner secara terbatas.

Owner tidak boleh mengabaikan mekanisme keamanan database dan server.

---

9. Permission Categories

Izin dibagi menjadi beberapa kategori.

9.1 Account Permissions

- "account.view"
- "account.create"
- "account.update"
- "account.delete"
- "account.suspend"
- "account.restore"

9.2 Profile Permissions

- "profile.view"
- "profile.update_own"
- "profile.update_any"
- "profile.delete_own"

9.3 Article Permissions

- "article.view"
- "article.create"
- "article.update_own"
- "article.update_any"
- "article.submit"
- "article.review"
- "article.publish"
- "article.delete_own"
- "article.delete_any"

9.4 Community Permissions

- "community.post"
- "community.comment"
- "community.like"
- "community.moderate"
- "community.manage"

9.5 Group & Event Permissions

- "group.create"
- "group.manage_own"
- "group.manage_any"
- "event.create"
- "event.manage_own"
- "event.manage_any"

9.6 Tool Permissions

- "tool.use"
- "tool.manage_own"
- "tool.manage_any"
- "tool.configure"

9.7 Moderation Permissions

- "moderation.view_reports"
- "moderation.review"
- "moderation.warn"
- "moderation.restrict"
- "moderation.remove_content"
- "moderation.manage_appeals"

9.8 System Permissions

- "system.view_analytics"
- "system.manage_settings"
- "system.manage_roles"
- "system.view_audit_logs"
- "system.manage_integrations"

Permission di atas merupakan rancangan awal dan dapat dikembangkan sesuai kebutuhan fitur.

---

10. Role & Permission Matrix

Feature| Guest| Member| Contributor| Moderator| Admin| Owner
View Public Content| ✓| ✓| ✓| ✓| ✓| ✓
Manage Own Profile| -| ✓| ✓| ✓| ✓| ✓
Create Community Post| -| ✓| ✓| ✓| ✓| ✓
Comment & Like| -| ✓| ✓| ✓| ✓| ✓
Follow Users| -| ✓| ✓| ✓| ✓| ✓
Create Articles| -| -| ✓| -| ✓| ✓
Submit Articles| -| -| ✓| -| ✓| ✓
Review Articles| -| -| -| -| ✓| ✓
Publish Articles| -| -| -| -| ✓| ✓
Moderate Community| -| -| -| ✓| ✓| ✓
Manage Users| -| -| -| Limited| ✓| ✓
Manage System Settings| -| -| -| -| Limited| ✓
Manage Roles| -| -| -| -| Limited| ✓
View Audit Logs| -| -| -| Limited| Limited| ✓

Note: ✓ berarti diizinkan sesuai cakupan dan kebijakan resource. Limited berarti hanya diizinkan untuk tindakan atau data yang secara eksplisit diberikan.

---

11. Resource Ownership

Aruhetta menggunakan aturan kepemilikan resource.

Contoh:

- Member hanya dapat mengedit profil sendiri.
- Contributor hanya dapat mengedit draft artikelnya sendiri.
- Pengelola grup dapat mengelola grup sesuai izin.
- Pengguna hanya dapat mengelola bookmark miliknya.
- Pesan hanya dapat diakses oleh pihak yang berhak.

Role yang lebih tinggi tidak otomatis memperoleh akses terhadap semua data privat.

Setiap akses harus memiliki dasar izin yang jelas.

---

12. Role Assignment & Management

12.1 Role Assignment

- Guest menjadi Member melalui registrasi.
- Member dapat mengajukan diri sebagai Contributor.
- Contributor diberikan setelah persetujuan.
- Moderator diangkat oleh Admin atau Owner sesuai kebijakan.
- Admin ditetapkan oleh Owner.
- Owner mengikuti mekanisme kepemilikan platform.

12.2 Role Changes

Setiap perubahan role harus:

- Memiliki aktor yang berwenang.
- Memiliki target pengguna yang jelas.
- Memiliki alasan.
- Melalui validasi server-side.
- Dicatat dalam audit log.
- Memberikan notifikasi jika diperlukan.

12.3 Role Removal

Jika role khusus dicabut, pengguna kembali ke role dasar yang masih berlaku.

Konten dan data yang dibuat pengguna tidak otomatis dihapus hanya karena perubahan role.

---

13. Permission Enforcement

Pemeriksaan izin dilakukan pada beberapa lapisan:

1. Frontend: menyembunyikan atau menonaktifkan fitur yang tidak tersedia.
2. Backend: memvalidasi role dan permission sebelum menjalankan operasi.
3. Database: menggunakan RLS dan constraints untuk melindungi data.

Frontend bukan sumber otoritas izin.

Permintaan yang tidak memiliki izin harus ditolak meskipun dikirim langsung melalui API.

---

14. Temporary Permissions

Sistem dapat mendukung izin sementara untuk kebutuhan khusus.

Contoh:

- Moderator sementara.
- Akses pengelolaan event.
- Penugasan moderasi tertentu.
- Akses operasional terbatas.

Izin sementara harus memiliki:

- Tujuan.
- Pemberi izin.
- Penerima izin.
- Cakupan.
- Waktu mulai.
- Waktu berakhir.

Izin berakhir secara otomatis sesuai konfigurasi.

---

15. Audit & Accountability

Aktivitas penting harus dicatat:

- Pemberian role.
- Pencabutan role.
- Perubahan permission.
- Penangguhan akun.
- Penghapusan konten.
- Perubahan konfigurasi.
- Tindakan moderasi.
- Tindakan administratif.

Audit log tidak boleh dapat diubah oleh pengguna biasa.

Catatan audit tidak boleh menyimpan password, token, atau secret.

---

16. Security & Abuse Prevention

Perlindungan mencakup:

- Default Deny.
- Server-side authorization.
- RLS policies.
- Privilege separation.
- Protection against privilege escalation.
- Session verification.
- Audit logging.
- Administrative action confirmation.

Pengujian harus memastikan pengguna tidak dapat memperoleh izin yang tidak dimilikinya dengan memodifikasi request frontend.

---

17. Testing

Pengujian Roles & Permissions meliputi:

- Guest access.
- Member access.
- Contributor workflow.
- Moderator permissions.
- Admin permissions.
- Owner permissions.
- Resource ownership.
- Role assignment.
- Role removal.
- Permission inheritance.
- Unauthorized access.
- Privilege escalation prevention.
- RLS enforcement.
- Audit log integrity.

Pengujian dilakukan pada development dan staging sebelum diterapkan ke production.

---

18. Implementation Notes

Dokumen ini merupakan rancangan Role-Based Access Control Aruhetta.

Role dan permission belum aktif sampai backend, database policies, dan mekanisme authorization selesai diimplementasikan.

Permission matrix dapat disesuaikan seiring perkembangan fitur.

Document Status: Planned
Version: 1.0
