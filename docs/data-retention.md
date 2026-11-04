ARUHETTA — Data Retention Policy

Dokumen: Data Retention Policy
File: "docs/data-retention.md"
Versi: 1.0
Status: Planning Documentation
Platform: Aruhetta
Tanggal: 4 November 2026

---

1. Tujuan

Dokumen ini menetapkan kebijakan penyimpanan, pemeliharaan, pengarsipan, dan penghapusan data pada Aruhetta.

Tujuannya:

- Menentukan masa penyimpanan setiap jenis data.
- Menghindari penyimpanan data yang tidak diperlukan.
- Menjaga keamanan informasi pengguna.
- Mengatur proses penghapusan data.
- Menentukan siklus hidup backup.
- Mendukung kepatuhan terhadap ketentuan perlindungan data.
- Memastikan pengelolaan data dilakukan secara konsisten.

2. Ruang Lingkup

Kebijakan berlaku untuk seluruh data yang diproses Aruhetta, termasuk:

- Data akun.
- Data profil.
- Data autentikasi.
- Data aktivitas.
- Artikel dan konten.
- Postingan dan komentar.
- Pesan langsung.
- File dan media.
- Bookmark dan riwayat.
- Data event dan grup.
- Notifikasi.
- Data laporan dan moderasi.
- Security logs.
- Audit logs.
- Database.
- Backup.
- Data sementara.

Kebijakan berlaku untuk penyimpanan lokal, database, cloud storage, dan sistem pendukung lainnya.

3. Prinsip Retensi Data

3.1 Data Minimization

Hanya data yang diperlukan untuk tujuan layanan yang boleh disimpan.

3.2 Storage Limitation

Data tidak boleh disimpan lebih lama daripada yang diperlukan, kecuali memiliki dasar penyimpanan yang sah.

3.3 Secure Deletion

Penghapusan harus dilakukan melalui mekanisme yang aman dan terkontrol.

3.4 Accountability

Proses retensi dan penghapusan harus dapat diperiksa melalui dokumentasi atau audit yang sesuai.

3.5 Legal Compliance

Jadwal retensi harus memperhatikan kewajiban hukum dan kebutuhan penyelesaian sengketa.

4. Siklus Hidup Data

Data Aruhetta mengikuti tahapan berikut:

1. Creation: Data dibuat atau diterima.
2. Collection: Data dikumpulkan oleh sistem.
3. Storage: Data disimpan pada media yang sesuai.
4. Usage: Data digunakan untuk tujuan layanan.
5. Maintenance: Data diperbarui atau diperiksa.
6. Archiving: Data dipindahkan ke penyimpanan arsip jika diperlukan.
7. Deletion: Data dihapus ketika tidak lagi diperlukan.
8. Verification: Hasil penghapusan diperiksa sesuai kemampuan sistem.

5. Kategori Data

Data dikelompokkan berdasarkan jenis dan kebutuhan penyimpanannya.

5.1 Account Data

Informasi dasar akun:

- User ID.
- Email.
- Username.
- Nama tampilan.
- Status akun.
- Tanggal pendaftaran.

5.2 Profile Data

- Avatar.
- Bio.
- Preferensi bahasa.
- Preferensi tema.
- Pengaturan privasi.

5.3 Authentication Data

- Data autentikasi yang dikelola penyedia autentikasi.
- Informasi sesi.
- Token yang diperlukan untuk autentikasi.
- Status verifikasi.

Token dan kredensial harus memiliki masa berlaku serta perlindungan yang sesuai.

5.4 User-generated Content

- Artikel.
- Postingan.
- Komentar.
- Balasan.
- Media.
- Konten grup.

5.5 Activity Data

- Bookmark.
- Riwayat membaca.
- Like.
- Follow.
- Aktivitas tools.
- Aktivitas komunitas.

5.6 Communication Data

- Pesan langsung.
- Lampiran pesan.
- Informasi pengirim dan penerima.
- Status pengiriman dan pembacaan.

5.7 Security and Audit Data

- Login events.
- Failed authentication events.
- Security alerts.
- Moderation records.
- Administrative actions.
- System logs.

5.8 Temporary Data

- Temporary uploads.
- Cache.
- Processing files.
- Temporary exports.
- Session-related temporary records.

6. Jadwal Retensi Data

Tabel berikut merupakan rancangan awal. Periode final harus disesuaikan dengan kebutuhan operasional, kewajiban hukum, dan konfigurasi sistem.

Jenis Data| Masa Retensi Rencana| Tindakan
Data akun aktif| Selama akun aktif| Dipertahankan
Profil| Selama diperlukan| Diperbarui atau dihapus
Data verifikasi| Sesuai kebutuhan autentikasi| Dihapus atau dibatasi
Sesi login| Mengikuti masa berlaku sesi| Kedaluwarsa otomatis
Artikel publik| Selama dipublikasikan| Diarsipkan atau dihapus
Draft artikel| Selama diperlukan| Dipertahankan atau dihapus
Komentar| Selama relevan dan diperlukan| Dihapus atau dianonimkan
Bookmark| Sampai pengguna menghapusnya| Dihapus
Riwayat membaca| Berdasarkan preferensi pengguna| Dihapus
Pesan langsung| Sesuai kebijakan komunikasi| Dihapus sesuai ketentuan
File sementara| Maksimal 24 jam sebagai target awal| Pembersihan otomatis
Cache| Sesuai konfigurasi cache| Kedaluwarsa otomatis
Laporan moderasi| Sesuai kebutuhan penanganan| Diarsipkan atau dihapus
Security logs| Target awal 90 hari| Dihapus atau dianonimkan
Audit logs| Sesuai kebutuhan audit| Diarsipkan
Backup| Mengikuti jadwal backup| Kedaluwarsa sesuai siklus

Periode tersebut bukan pernyataan bahwa retensi sudah diterapkan. Setiap kategori harus memiliki pemilik, dasar penyimpanan, dan jadwal final sebelum implementasi.

7. Penghapusan Akun

Pengguna dapat mengajukan penghapusan akun.

Alur yang direncanakan:

1. Pengguna mengirim permintaan penghapusan.
2. Sistem memverifikasi kepemilikan akun.
3. Pengguna menerima informasi konsekuensi penghapusan.
4. Akun memasuki status pending deletion jika mekanisme tersebut digunakan.
5. Data diproses untuk penghapusan atau anonimisasi.
6. Data yang wajib dipertahankan dipisahkan sesuai dasar penyimpanannya.
7. Pengguna menerima konfirmasi proses.

Penghapusan harus memperhatikan:

- Data profil.
- Data autentikasi.
- Bookmark.
- Riwayat aktivitas.
- File milik pengguna.
- Data komunitas.
- Pesan langsung.
- Data yang tersimpan pada layanan pihak ketiga.

8. Soft Delete dan Permanent Delete

8.1 Soft Delete

Soft delete merupakan mekanisme menandai data sebagai terhapus tanpa langsung menghilangkan seluruh record fisiknya.

Manfaat:

- Pemulihan jika terjadi kesalahan.
- Mendukung moderasi.
- Menjaga konsistensi relasi data.
- Memberikan waktu sebelum penghapusan permanen.

8.2 Periode Pemulihan

Rencana awal:

- Konten yang dihapus pengguna dapat dipulihkan selama 30 hari jika memenuhi syarat.
- Konten yang dihapus karena pelanggaran dapat mengikuti kebijakan moderasi khusus.
- Data yang wajib dihapus segera tidak boleh ditahan hanya karena periode pemulihan.

8.3 Permanent Delete

Setelah masa pemulihan berakhir, sistem dapat melakukan penghapusan permanen.

Proses harus mencakup:

- Record database.
- File storage.
- Metadata.
- Relasi yang tidak lagi diperlukan.
- Cache terkait.
- Salinan yang berada dalam kendali sistem.

Penghapusan harus memperhatikan kewajiban hukum dan kebutuhan retensi yang sah.

9. Data Anonimisasi

Jika data masih diperlukan untuk statistik atau analisis, Aruhetta dapat mempertimbangkan anonimisasi.

Ketentuan:

- Identitas pengguna dihilangkan.
- Data tidak boleh mudah dikaitkan kembali kepada individu.
- Informasi sensitif tidak boleh dipertahankan tanpa dasar.
- Hasil anonimisasi harus diperiksa efektivitasnya.

Pseudonimisasi tidak sama dengan anonimisasi. Data yang masih dapat dihubungkan kembali dengan seseorang tetap harus dilindungi sebagai data pribadi.

10. File dan Media Storage

File yang diunggah dapat disimpan melalui Supabase Storage.

Pengelolaan meliputi:

10.1 File Aktif

File yang masih digunakan oleh artikel, profil, postingan, atau fitur lain.

10.2 File Sementara

File yang sedang diunggah atau diproses.

10.3 File Tidak Terpakai

File yang tidak lagi memiliki referensi aktif.

10.4 Pembersihan File

Sistem perlu:

- Mengidentifikasi file yang tidak lagi digunakan.
- Memastikan tidak ada referensi aktif.
- Menandai file untuk penghapusan.
- Melakukan penghapusan sesuai jadwal.
- Mencatat hasil proses jika diperlukan.

File tidak boleh dihapus hanya karena tidak terlihat pada satu halaman.

11. Data Pesan Langsung

Pesan langsung memiliki kebutuhan retensi khusus.

Ketentuan:

- Pesan hanya dapat diakses oleh pihak yang memiliki izin.
- Penghapusan pesan harus mengikuti desain fitur.
- Penghapusan pada satu sisi percakapan tidak boleh diasumsikan otomatis menghapus salinan pada sisi lain.
- Lampiran mengikuti kebijakan file storage.
- Data yang dipertahankan untuk investigasi harus memiliki dasar dan akses terbatas.

Perilaku penghapusan pesan harus dijelaskan kepada pengguna sebelum fitur diluncurkan.

12. Security Logs dan Audit Logs

12.1 Security Logs

Digunakan untuk:

- Mendeteksi aktivitas mencurigakan.
- Menyelidiki masalah keamanan.
- Memantau kegagalan autentikasi.
- Menjaga stabilitas sistem.

Log tidak boleh menyimpan password, token rahasia, atau kredensial sensitif.

12.2 Audit Logs

Digunakan untuk mencatat tindakan penting, seperti:

- Perubahan role.
- Perubahan konfigurasi.
- Tindakan admin.
- Tindakan moderasi.
- Penghapusan data penting.
- Perubahan izin akses.

12.3 Akses

Akses terhadap log harus dibatasi berdasarkan peran dan kebutuhan operasional.

13. Backup Retention

Backup mengikuti kebijakan Backup & Recovery Aruhetta.

Rencana awal:

- Backup database terjadwal.
- Backup file penting sesuai kebutuhan.
- Penyimpanan backup dengan akses terbatas.
- Penghapusan backup yang sudah melewati masa retensi.
- Pemeriksaan keberhasilan backup.
- Pengujian pemulihan secara berkala.

Backup tidak boleh disimpan tanpa batas waktu.

13.1 Contoh Jadwal Awal

Jenis Backup| Frekuensi Rencana| Retensi Rencana
Database backup| Harian| 30 hari
Backup mingguan| Mingguan| 8 minggu
Backup bulanan| Bulanan| 6 bulan

Jadwal tersebut merupakan target perencanaan, bukan konfigurasi aktif. Kemampuan penyedia hosting dan storage harus diverifikasi terlebih dahulu.

13.2 Penghapusan Data dalam Backup

Penghapusan data dari database utama tidak selalu langsung menghapus data dari backup.

Data dalam backup akan mengikuti siklus kedaluwarsa backup, kecuali terdapat kewajiban hukum atau kebutuhan khusus yang mengharuskan tindakan lain.

14. Cache dan Data Lokal

Data lokal dapat tersimpan melalui:

- Browser storage.
- Local Storage.
- Session Storage.
- IndexedDB.
- Cache API.
- Service Worker.

Ketentuan:

- Data lokal harus memiliki tujuan yang jelas.
- Data sensitif tidak boleh disimpan tanpa perlindungan memadai.
- Pengguna harus memiliki mekanisme untuk menghapus data lokal.
- Cache harus memiliki aturan kedaluwarsa.
- Logout harus membersihkan data sesi yang relevan.

15. Retensi Data Guest

Guest dapat memiliki data lokal seperti:

- Bookmark.
- Riwayat pencarian.
- Preferensi tema.
- Preferensi bahasa.
- Riwayat penggunaan tools tertentu.

Data tersebut dapat hilang ketika pengguna menghapus data browser atau menggunakan perangkat lain.

Jika Guest membuat akun, sistem dapat menyediakan opsi pemindahan data lokal ke akun sesuai kemampuan fitur dan persetujuan pengguna.

16. Retensi Berdasarkan Role

Pengelolaan data mengikuti hak akses.

Role| Ketentuan
Guest| Data lokal sesuai fitur yang digunakan
Member| Data akun dan aktivitas sesuai pengaturan
Contributor| Data artikel dan riwayat publikasi
Moderator| Data moderasi sesuai kewenangan
Admin| Data operasional sesuai izin
Owner| Akses pengelolaan sesuai kewenangan tertinggi

Memiliki role tinggi tidak otomatis memberikan alasan untuk mengakses seluruh data privat pengguna.

17. Data Pihak Ketiga

Jika data disimpan atau diproses oleh pihak ketiga:

- Periode retensi penyedia harus diperiksa.
- Penghapusan harus mengikuti kemampuan dan ketentuan penyedia.
- Kewajiban penghapusan harus diatur melalui kontrak atau persyaratan layanan jika relevan.
- Transfer data harus memperhatikan hukum yang berlaku.

Aruhetta harus mendokumentasikan penyedia dan lokasi pemrosesan data yang benar-benar digunakan.

18. Otomatisasi Retensi

Sistem dapat menggunakan scheduled jobs atau proses terjadwal untuk:

- Menghapus file sementara.
- Membersihkan cache.
- Menghapus sesi kedaluwarsa.
- Memproses permanent deletion.
- Membersihkan data yang sudah melewati retensi.
- Menghapus backup yang kedaluwarsa.

Setiap proses otomatis harus memiliki:

- Jadwal.
- Kriteria penghapusan.
- Pembatasan akses.
- Penanganan kesalahan.
- Logging yang aman.
- Mekanisme pemulihan jika diperlukan.

19. Penanganan Legal Hold

Dalam kondisi tertentu, data dapat perlu dipertahankan untuk memenuhi kewajiban hukum atau penyelesaian sengketa.

Jika legal hold diterapkan:

- Data terkait harus diidentifikasi.
- Penghapusan rutin terhadap data tersebut harus ditangguhkan.
- Akses harus dibatasi.
- Alasan dan otorisasi harus dicatat.
- Data harus dievaluasi kembali setelah kebutuhan berakhir.

20. Monitoring dan Audit

Pengelolaan retensi perlu diperiksa secara berkala.

Pemeriksaan mencakup:

- Data yang melewati masa retensi.
- Proses penghapusan yang gagal.
- File tidak terpakai.
- Backup kedaluwarsa.
- Data yang belum memiliki jadwal retensi.
- Kepatuhan terhadap kebijakan.
- Akses terhadap data yang dipertahankan.

Temuan penting harus didokumentasikan dan ditindaklanjuti.

21. Tanggung Jawab

Peran| Tanggung Jawab
Owner| Menyetujui kebijakan retensi
Admin| Mengelola kebijakan operasional
Moderator| Mengelola data moderasi sesuai kewenangan
Developer| Mengimplementasikan mekanisme teknis
Security| Memantau keamanan penyimpanan dan penghapusan
Pengguna| Mengelola data akun sesuai fitur yang tersedia

22. Pengembangan Mendatang

Fitur yang dapat dikembangkan:

- Data retention dashboard.
- Automated cleanup scheduler.
- Storage usage monitoring.
- Deletion request management.
- Data export.
- Retention policy audit.
- Backup lifecycle monitoring.
- Orphaned file detection.
- Data anonymization workflow.

Semua fitur tersebut masih merupakan rencana pengembangan.

23. Catatan Implementasi

Dokumen ini merupakan pedoman perencanaan dan belum berarti mekanisme retensi sudah diterapkan.

Sebelum implementasi, Aruhetta perlu:

- Melakukan inventarisasi data.
- Menentukan dasar dan masa retensi setiap kategori.
- Memverifikasi kemampuan Supabase dan penyedia lainnya.
- Menentukan prosedur penghapusan.
- Menentukan jadwal backup.
- Menguji pemulihan data.
- Menguji penghapusan akun.
- Menguji pembersihan file.
- Meninjau kebijakan bersama Privacy Policy.

Dokumen terkait:

- Privacy Policy.
- Terms of Service.
- Database.
- Security.
- Backup & Recovery.
- Incident Response.
- Maintenance Operations.

---

End of Document

ARUHETTA — Data Retention Policy v1.0
