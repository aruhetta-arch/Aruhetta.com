ARUHETTA — Backup & Recovery

Dokumen: Backup & Recovery Strategy
Versi: 1.0
Status: Planning
Tanggal: 4 November 2026
Branch: "development"

---

1. Tujuan

Dokumen ini menjelaskan strategi pencadangan dan pemulihan data Aruhetta untuk menjaga ketersediaan, integritas, dan keamanan data.

Tujuan utama:

- Mengurangi risiko kehilangan data.
- Menyediakan prosedur pemulihan ketika terjadi gangguan.
- Melindungi database, file pengguna, dan source code.
- Menentukan kebijakan backup dan retensi.
- Memastikan proses restore dapat diuji secara berkala.

2. Cakupan Backup

Sistem backup Aruhetta mencakup:

Komponen| Data yang dicadangkan
GitHub Repository| Source code, dokumentasi, konfigurasi non-rahasia
Supabase Database| Data akun, profil, artikel, komunitas, dan metadata
Supabase Storage| Gambar, dokumen, audio, video, dan file pengguna
Konfigurasi| Struktur konfigurasi dan dokumentasi deployment
Data operasional| Informasi penting untuk pemulihan layanan

Data sensitif seperti password, token, dan secret tidak boleh dimasukkan ke dalam dokumentasi atau backup konfigurasi dalam bentuk plaintext.

3. Strategi Backup

3.1 GitHub Repository

GitHub menjadi sumber utama penyimpanan source code Aruhetta.

Strategi:

- Menggunakan Git sebagai version control.
- Mempertahankan branch "main" dan "development".
- Menggunakan commit untuk mencatat perubahan.
- Membuat backup repository secara berkala.
- Menyimpan salinan backup di lokasi terpisah.
- Tidak mengandalkan satu akun atau satu salinan repository saja.

Backup repository dapat dilakukan melalui Git clone atau fitur download repository.

3.2 Supabase Database

Database PostgreSQL pada Supabase menyimpan data utama Aruhetta.

Data yang perlu dicadangkan meliputi:

- Informasi akun dan profil.
- Data artikel dan kategori.
- Postingan dan komentar Arumunity.
- Data grup dan event.
- Bookmark dan preferensi pengguna.
- Informasi relasi dan aktivitas.
- Metadata file.
- Konfigurasi database yang diperlukan untuk pemulihan.

Strategi:

- Memanfaatkan fitur backup otomatis Supabase apabila tersedia pada paket yang digunakan.
- Menentukan backup tambahan sesuai kebutuhan.
- Menyimpan salinan database di lokasi terpisah.
- Menjaga konsistensi struktur database dan migrasi.
- Mendokumentasikan prosedur export dan restore.

Ketersediaan, frekuensi, dan masa retensi backup bawaan Supabase bergantung pada paket dan fitur yang digunakan. Detailnya harus diperiksa sebelum implementasi.

3.3 Supabase Storage

Supabase Storage menyimpan file yang diunggah pengguna.

Jenis file:

- Avatar profil.
- Gambar artikel.
- Gambar postingan komunitas.
- Dokumen.
- Audio dan video.
- File hasil pemrosesan tools.

Strategi:

- Mencadangkan objek file secara terpisah dari database.
- Mencatat struktur bucket dan metadata file.
- Memastikan relasi antara file dan data database tetap konsisten.
- Memverifikasi integritas file setelah backup.
- Menguji pemulihan file dan metadata.

Catatan: Backup database tidak otomatis berarti seluruh isi Supabase Storage sudah tercadangkan. Keduanya harus ditangani sebagai komponen terpisah.

3.4 Konfigurasi dan Dokumentasi

Hal yang perlu dicadangkan:

- Dokumentasi dalam folder "docs/".
- Konfigurasi proyek.
- Struktur database dan migration files.
- Daftar environment variables tanpa nilai secret.
- Dokumentasi deployment.
- Dokumentasi integrasi layanan eksternal.

File ".env" dan secret aktif tidak boleh dimasukkan ke repository publik.

4. Jadwal Backup

Jadwal berikut merupakan target awal dan dapat disesuaikan setelah Aruhetta beroperasi.

Komponen| Target frekuensi
GitHub Repository| Setiap perubahan penting dan backup berkala
Database| Harian, jika mekanisme mendukung
Storage| Harian atau berdasarkan perubahan data
Dokumentasi| Setiap perubahan penting
Konfigurasi| Setiap perubahan konfigurasi

Backup tambahan dapat dilakukan sebelum:

- Perubahan struktur database.
- Pembaruan sistem besar.
- Migrasi layanan.
- Perubahan konfigurasi penting.
- Operasi yang berisiko terhadap data.

5. Retensi Backup

Kebijakan retensi awal yang direncanakan:

Jenis backup| Target retensi
Harian| 7 hari
Mingguan| 4 minggu
Bulanan| 3 bulan
Backup sebelum perubahan besar| Sampai perubahan dinyatakan stabil

Ketentuan:

- Backup lama dapat dihapus setelah masa retensi berakhir.
- Backup yang berkaitan dengan insiden dapat dipertahankan lebih lama.
- Penghapusan backup harus mengikuti kebijakan keamanan dan privasi.
- Retensi aktual harus menyesuaikan kapasitas penyimpanan dan kemampuan layanan.

6. Keamanan Backup

Seluruh backup wajib dilindungi.

Persyaratan:

- Menggunakan enkripsi saat transfer dan penyimpanan apabila didukung.
- Membatasi akses berdasarkan role dan kebutuhan.
- Menyimpan backup di lokasi yang aksesnya terkontrol.
- Tidak membagikan backup melalui tautan publik.
- Tidak menyimpan secret dalam repository publik.
- Menggunakan kredensial khusus untuk proses backup.
- Mencatat aktivitas akses dan pemulihan.
- Mengganti kredensial jika terjadi indikasi kebocoran.

Backup database dan file pengguna harus diperlakukan sebagai data sensitif.

7. Recovery Objectives

Aruhetta menggunakan dua target pemulihan awal:

Recovery Point Objective (RPO)

Menentukan batas maksimum kehilangan data yang masih dapat diterima berdasarkan waktu backup terakhir.

Recovery Time Objective (RTO)

Menentukan target waktu untuk memulihkan layanan setelah gangguan.

Target awal yang diusulkan:

Komponen| RPO| RTO
Database| 24 jam| 8 jam
Storage| 24 jam| 12 jam
Website| Sesuai commit terakhir| 4 jam
Dokumentasi| Sesuai backup terakhir| 4 jam

Target ini masih bersifat sementara. Angka tersebut bukan jaminan pemulihan dari GitHub atau Supabase. Target final harus ditentukan berdasarkan kemampuan layanan, biaya, dan hasil pengujian.

8. Prosedur Recovery

8.1 Repository Recovery

Jika repository mengalami kerusakan atau kehilangan akses:

1. Periksa kondisi repository utama.
2. Identifikasi commit atau backup terakhir yang valid.
3. Pulihkan repository dari salinan cadangan.
4. Verifikasi branch dan riwayat commit.
5. Periksa file konfigurasi dan dokumentasi.
6. Pastikan source code dapat digunakan kembali.

8.2 Database Recovery

Jika database mengalami kerusakan atau kehilangan data:

1. Identifikasi penyebab gangguan.
2. Hentikan operasi yang berpotensi memperparah kerusakan.
3. Tentukan backup yang akan digunakan.
4. Siapkan lingkungan pemulihan yang aman.
5. Pulihkan database sesuai prosedur layanan.
6. Verifikasi tabel, relasi, dan integritas data.
7. Jalankan pemeriksaan aplikasi.
8. Aktifkan kembali layanan setelah dinyatakan aman.

8.3 Storage Recovery

Jika file pengguna hilang atau rusak:

1. Identifikasi bucket dan objek yang terdampak.
2. Cari salinan backup yang sesuai.
3. Pulihkan file ke lokasi yang benar.
4. Verifikasi nama, ukuran, dan integritas file.
5. Periksa metadata serta relasi database.
6. Pastikan izin akses file tetap sesuai.

8.4 Full System Recovery

Jika sebagian besar sistem tidak dapat digunakan:

1. Identifikasi komponen yang mengalami gangguan.
2. Pulihkan repository dan konfigurasi.
3. Siapkan kembali layanan Supabase.
4. Pulihkan database.
5. Pulihkan file Storage.
6. Periksa environment variables dan secret.
7. Deploy ulang frontend.
8. Uji autentikasi, halaman utama, dan fitur penting.
9. Verifikasi integritas data.
10. Buka kembali layanan secara bertahap.

9. Recovery Testing

Backup tidak dianggap dapat diandalkan sebelum proses pemulihannya diuji.

Pengujian yang direncanakan:

- Restore database ke lingkungan pengujian.
- Pemulihan beberapa file dari Storage.
- Pemulihan repository dari backup.
- Pemeriksaan konsistensi data.
- Pemeriksaan akses dan permission.
- Pengujian fungsi utama aplikasi.

Frekuensi pengujian awal:

- Pemeriksaan backup: mingguan.
- Uji pemulihan: bulanan.
- Uji full recovery: setiap 6 bulan atau setelah perubahan besar.

Pengujian dilakukan tanpa mengganggu data produksi.

10. Disaster Recovery

Skenario yang perlu dipersiapkan:

Skenario| Tindakan
Repository tidak dapat diakses| Pulihkan dari salinan repository
Database rusak| Restore database dari backup
File Storage hilang| Pulihkan objek dari backup Storage
Secret bocor| Cabut atau rotasi kredensial terdampak
Akun administrator bermasalah| Pulihkan akses melalui prosedur resmi
Layanan Supabase terganggu| Ikuti status dan prosedur pemulihan penyedia
Kesalahan deployment| Kembalikan versi frontend sebelumnya
Penghapusan data tidak sengaja| Pulihkan dari backup yang sesuai

11. Backup Access Management

Akses backup dibatasi berdasarkan tanggung jawab.

- Owner: memiliki kontrol penuh terhadap kebijakan dan akses backup.
- Admin: dapat mengelola backup sesuai izin yang diberikan.
- Moderator: tidak memiliki akses langsung ke backup database atau Storage.
- Contributor: tidak memiliki akses backup sistem.
- Member dan Guest: tidak memiliki akses ke backup internal.

Akses darurat harus dicatat dan ditinjau setelah insiden selesai.

12. Monitoring Backup

Sistem backup perlu dipantau untuk mendeteksi:

- Backup gagal.
- Backup tidak berjalan sesuai jadwal.
- Kapasitas penyimpanan hampir penuh.
- File backup rusak.
- Proses backup terlalu lama.
- Aktivitas akses yang tidak wajar.
- Kegagalan proses restore.

Notifikasi kegagalan backup harus dikirim kepada pihak yang bertanggung jawab.

13. Recovery Documentation

Setiap proses pemulihan wajib memiliki catatan:

- Waktu terjadinya gangguan.
- Komponen yang terdampak.
- Penyebab gangguan jika diketahui.
- Backup yang digunakan.
- Langkah pemulihan.
- Hasil pemeriksaan.
- Durasi pemulihan.
- Data yang mungkin hilang.
- Tindakan pencegahan berikutnya.

Dokumentasi harus disimpan secara aman dan tidak memuat secret atau informasi autentikasi.

14. Backup & Recovery Checklist

Backup Preparation

- [ ] Repository memiliki salinan cadangan.
- [ ] Database memiliki mekanisme backup.
- [ ] Storage memiliki mekanisme backup terpisah.
- [ ] Backup tersimpan di lokasi yang aman.
- [ ] Akses backup dibatasi.
- [ ] Jadwal dan retensi sudah ditentukan.
- [ ] Backup terakhir berhasil diverifikasi.

Recovery Preparation

- [ ] Prosedur repository recovery tersedia.
- [ ] Prosedur database recovery tersedia.
- [ ] Prosedur Storage recovery tersedia.
- [ ] Kredensial pemulihan tersedia secara aman.
- [ ] Lingkungan pengujian tersedia.
- [ ] Prosedur verifikasi data tersedia.
- [ ] Uji pemulihan telah dilakukan.

15. Future Improvements

Pengembangan berikutnya dapat mencakup:

- Backup otomatis melalui pipeline terjadwal.
- Penyimpanan backup di lokasi terpisah.
- Pemeriksaan integritas backup otomatis.
- Notifikasi kegagalan backup.
- Dashboard status backup.
- Recovery automation.
- Point-in-time recovery jika layanan mendukung.
- Disaster recovery lintas lokasi atau penyedia jika diperlukan.

16. Prinsip Akhir

Strategi Backup & Recovery Aruhetta harus mengutamakan:

1. Keamanan data pengguna.
2. Konsistensi dan integritas data.
3. Backup yang dapat diverifikasi.
4. Prosedur pemulihan yang terdokumentasi.
5. Pengujian restore secara berkala.
6. Pemulihan layanan yang terukur.

Backup yang berhasil dibuat belum tentu dapat dipulihkan. Karena itu, keberhasilan strategi ini ditentukan oleh kemampuan Aruhetta mengembalikan data dan layanan melalui proses recovery yang sudah diuji.

---

Dokumen: "docs/backup-recovery.md"
Status: Planning
Pemilik: Aruhetta Project
Branch: "development"
