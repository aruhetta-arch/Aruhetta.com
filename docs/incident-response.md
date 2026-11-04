ARUHETTA — Incident Response Plan

Dokumen: Incident Response Plan
Versi: 1.0
Status: Planning
Tanggal: 4 November 2026
Branch: "development"

---

1. Tujuan

Dokumen ini menetapkan prosedur penanganan insiden pada platform Aruhetta.

Tujuan utama:

- Mendeteksi dan menangani insiden dengan cepat.
- Mengurangi dampak terhadap pengguna dan layanan.
- Melindungi data dan privasi pengguna.
- Menentukan tanggung jawab setiap pihak.
- Memulihkan layanan secara aman.
- Mencegah insiden serupa terjadi kembali.

Dokumen ini berlaku untuk seluruh komponen Aruhetta, termasuk frontend, backend, database, Storage, autentikasi, komunitas, dan layanan pendukung.

2. Ruang Lingkup Insiden

Insiden yang termasuk dalam kebijakan ini:

Kategori| Contoh
Security| Akses tidak sah, kebocoran kredensial
Data| Kehilangan, perubahan, atau kerusakan data
Availability| Website atau layanan tidak dapat diakses
Authentication| Gangguan login atau penyalahgunaan akun
Infrastructure| Gangguan Supabase atau GitHub Pages
Application| Bug kritis yang memengaruhi banyak pengguna
Community| Spam, penyalahgunaan, atau konten berbahaya
Privacy| Informasi pribadi terlihat oleh pihak yang tidak berwenang
Deployment| Kesalahan konfigurasi atau rilis bermasalah

3. Prinsip Penanganan

Setiap insiden ditangani berdasarkan prinsip berikut:

1. Safety First: Utamakan keamanan pengguna dan data.
2. Fast Response: Tanggapi insiden sesegera mungkin.
3. Containment: Batasi dampak sebelum melakukan pemulihan.
4. Evidence Preservation: Jaga bukti yang relevan secara aman.
5. Least Privilege: Gunakan akses minimum yang diperlukan.
6. Transparency: Sampaikan informasi yang akurat kepada pihak terdampak.
7. Accountability: Catat tindakan dan keputusan penanganan.
8. Continuous Improvement: Gunakan hasil evaluasi untuk meningkatkan sistem.

4. Incident Severity Levels

Tingkat keparahan ditentukan berdasarkan dampak, jumlah pengguna terdampak, risiko keamanan, dan ketersediaan layanan.

Level| Kategori| Contoh
SEV-1| Critical| Kebocoran data serius, kompromi akses administratif, layanan utama tidak tersedia secara luas
SEV-2| High| Gangguan fitur penting, banyak akun terdampak
SEV-3| Medium| Gangguan fitur terbatas atau sebagian pengguna
SEV-4| Low| Bug kecil tanpa dampak besar terhadap layanan

4.1 Prioritas Penanganan

- SEV-1: Penanganan darurat dan eskalasi segera.
- SEV-2: Prioritas tinggi setelah dampak awal dibatasi.
- SEV-3: Ditangani berdasarkan prioritas operasional.
- SEV-4: Dimasukkan ke antrean perbaikan.

Waktu respons final akan ditentukan setelah Aruhetta memiliki tim operasional dan sistem monitoring aktif.

5. Incident Response Team

Struktur tanggung jawab penanganan:

5.1 Owner

Tanggung jawab:

- Mengawasi seluruh proses penanganan.
- Menentukan keputusan untuk insiden kritis.
- Menyetujui tindakan pemulihan besar.
- Mengatur komunikasi resmi.
- Mengevaluasi laporan akhir.

5.2 Admin

Tanggung jawab:

- Membantu investigasi.
- Mengelola akses administratif sesuai kewenangan.
- Melakukan tindakan mitigasi yang disetujui.
- Memantau kondisi layanan.
- Mendokumentasikan tindakan.

5.3 Moderator

Tanggung jawab:

- Menangani insiden komunitas.
- Meninjau laporan pengguna.
- Membatasi konten yang melanggar aturan.
- Mengeskalasi insiden keamanan atau privasi kepada Admin.

5.4 Developer / Technical Maintainer

Tanggung jawab:

- Menganalisis gangguan teknis.
- Memeriksa frontend, backend, dan database.
- Menyiapkan perbaikan.
- Menguji hasil pemulihan.
- Mendokumentasikan perubahan teknis.

Satu orang dapat memegang beberapa tanggung jawab ketika tim masih kecil. Namun, tindakan kritis tetap harus dicatat dan ditinjau.

6. Incident Response Lifecycle

Penanganan insiden menggunakan enam tahap utama.

6.1 Preparation

Persiapan sebelum insiden:

- Menyediakan dokumentasi keamanan.
- Menyiapkan backup dan prosedur recovery.
- Menentukan pihak yang bertanggung jawab.
- Menyiapkan akses darurat yang aman.
- Memastikan monitoring dan logging tersedia.
- Menyediakan saluran pelaporan insiden.

6.2 Detection

Insiden dapat diketahui melalui:

- Monitoring otomatis.
- Error tracking.
- Audit log.
- Laporan pengguna.
- Laporan moderator.
- Pemberitahuan dari penyedia layanan.
- Pemeriksaan rutin sistem.

Setiap laporan harus dicatat dan diperiksa sebelum dikategorikan sebagai insiden.

6.3 Triage & Assessment

Langkah penilaian:

1. Catat waktu laporan diterima.
2. Identifikasi komponen yang terdampak.
3. Tentukan tingkat keparahan.
4. Perkirakan jumlah pengguna terdampak.
5. Identifikasi risiko terhadap data dan keamanan.
6. Tentukan pihak yang perlu dilibatkan.
7. Tetapkan tindakan awal.

6.4 Containment

Tujuannya membatasi dampak insiden.

Tindakan dapat meliputi:

- Menonaktifkan sementara fitur yang bermasalah.
- Membatasi akses yang terindikasi tidak sah.
- Mencabut atau merotasi kredensial yang terdampak.
- Mengisolasi komponen yang mengalami gangguan.
- Menghentikan deployment yang bermasalah.
- Membatasi sementara aktivitas tertentu pada komunitas.

Setiap tindakan harus mempertimbangkan risiko kehilangan data dan dampak terhadap pengguna.

6.5 Eradication & Recovery

Setelah dampak terkendali:

1. Identifikasi penyebab utama.
2. Perbaiki kerentanan atau kesalahan konfigurasi.
3. Pulihkan data jika diperlukan.
4. Deploy perbaikan melalui proses yang terkontrol.
5. Uji fitur yang terdampak.
6. Verifikasi keamanan dan integritas data.
7. Pantau sistem setelah layanan dipulihkan.

Pemulihan mengikuti prosedur pada "docs/backup-recovery.md".

6.6 Post-Incident Review

Setelah insiden selesai:

- Susun kronologi.
- Dokumentasikan penyebab.
- Catat dampak terhadap pengguna.
- Evaluasi efektivitas penanganan.
- Identifikasi kekurangan sistem.
- Buat tindakan pencegahan.
- Tetapkan penanggung jawab perbaikan.

Evaluasi berfokus pada perbaikan sistem, bukan mencari kambing hitam.

7. Incident Handling Procedures

7.1 Security Breach

Contoh: indikasi akses tidak sah terhadap sistem.

Prosedur:

1. Verifikasi laporan.
2. Tentukan akun atau komponen yang terdampak.
3. Batasi akses yang terkompromi.
4. Cabut atau rotasi kredensial terkait.
5. Periksa audit log dan aktivitas relevan.
6. Evaluasi kemungkinan akses terhadap data pengguna.
7. Pulihkan sistem setelah dinyatakan aman.
8. Dokumentasikan hasil investigasi.

7.2 Data Breach

Contoh: data pribadi dapat diakses oleh pihak yang tidak berwenang.

Prosedur:

1. Identifikasi jenis data yang terdampak.
2. Batasi akses terhadap data tersebut.
3. Pertahankan bukti yang relevan.
4. Tentukan cakupan dan kemungkinan pihak terdampak.
5. Libatkan pihak yang bertanggung jawab atas keamanan dan privasi.
6. Lakukan pemberitahuan sesuai kewajiban hukum dan kebijakan yang berlaku.
7. Perbaiki penyebab insiden.
8. Dokumentasikan tindakan dan hasilnya.

Jangan menyebarkan data pribadi atau bukti sensitif melalui laporan publik.

7.3 Service Outage

Contoh: website atau layanan utama tidak dapat diakses.

Prosedur:

1. Verifikasi ketersediaan layanan.
2. Periksa monitoring dan status penyedia.
3. Identifikasi komponen yang bermasalah.
4. Tentukan apakah gangguan berasal dari frontend, backend, database, atau layanan eksternal.
5. Terapkan mitigasi yang aman.
6. Pulihkan layanan.
7. Uji fungsi utama.
8. Pantau kestabilan setelah pemulihan.

7.4 Authentication Incident

Contoh: gangguan login atau indikasi penyalahgunaan akun.

Prosedur:

1. Identifikasi jenis gangguan.
2. Periksa sistem autentikasi dan log terkait.
3. Batasi sesi atau akses yang berisiko.
4. Gunakan mekanisme pemulihan akun resmi.
5. Rotasi kredensial yang terindikasi bocor.
6. Pastikan akses pengguna yang sah dapat dipulihkan.
7. Evaluasi penyebab dan dokumentasikan hasilnya.

7.5 Community Abuse

Contoh: spam, pelecehan, penyalahgunaan grup, atau konten yang melanggar aturan.

Prosedur:

1. Terima dan catat laporan.
2. Tinjau konten atau aktivitas yang dilaporkan.
3. Tentukan tingkat pelanggaran.
4. Terapkan moderasi sesuai kebijakan komunitas.
5. Eskalasi jika terdapat ancaman keamanan atau privasi.
6. Berikan informasi keputusan sesuai kebutuhan.
7. Simpan riwayat moderasi.

7.6 Deployment Incident

Contoh: pembaruan menyebabkan website tidak berfungsi.

Prosedur:

1. Identifikasi deployment yang bermasalah.
2. Hentikan perubahan lanjutan sementara.
3. Periksa log build dan deployment.
4. Tentukan apakah rollback diperlukan.
5. Pulihkan versi stabil sebelumnya jika memungkinkan.
6. Uji halaman dan fitur penting.
7. Catat penyebab kegagalan.
8. Lakukan perbaikan sebelum deployment berikutnya.

8. Communication & Notification

Komunikasi harus jelas, akurat, dan tidak menimbulkan kepanikan.

8.1 Internal Communication

Pihak internal perlu menerima informasi mengenai:

- Ringkasan insiden.
- Tingkat keparahan.
- Komponen terdampak.
- Tindakan yang sedang dilakukan.
- Status pemulihan.
- Pihak yang bertanggung jawab.

8.2 User Communication

Jika pengguna terdampak, informasi dapat disampaikan melalui:

- Pengumuman website.
- In-App Notification.
- Email resmi.
- Halaman status layanan.

Informasi yang disampaikan:

- Apa yang terjadi.
- Fitur atau layanan yang terdampak.
- Dampak terhadap pengguna.
- Tindakan yang sedang dilakukan.
- Langkah yang perlu dilakukan pengguna jika ada.
- Informasi pembaruan berikutnya.

Jangan menyampaikan penyebab atau cakupan yang belum terverifikasi sebagai fakta.

8.3 External Communication

Jika insiden melibatkan penyedia layanan atau pihak eksternal:

- Gunakan saluran dukungan resmi.
- Berikan informasi teknis seperlunya.
- Hindari membagikan data pengguna yang tidak diperlukan.
- Simpan nomor laporan atau referensi komunikasi.

9. Evidence & Investigation

Bukti insiden harus dikelola dengan aman.

Sumber bukti dapat mencakup:

- Application logs.
- Audit logs.
- Error reports.
- Deployment history.
- Monitoring records.
- Laporan pengguna.
- Informasi status penyedia layanan.

Ketentuan:

- Catat waktu dan sumber bukti.
- Batasi akses hanya kepada pihak berwenang.
- Hindari mengubah bukti asli.
- Simpan salinan kerja jika analisis membutuhkan perubahan.
- Jangan mencatat password, token, atau secret.
- Hapus atau arsipkan bukti mengikuti kebijakan retensi.

10. Privacy & Data Protection

Selama penanganan insiden:

- Gunakan data seminimal mungkin.
- Jangan membuka informasi pengguna tanpa kebutuhan yang sah.
- Jangan memasukkan password atau token ke laporan.
- Jangan mengunggah database produksi ke tempat publik.
- Lindungi bukti investigasi.
- Batasi akses terhadap data sensitif.
- Ikuti kebijakan privasi Aruhetta dan ketentuan hukum yang berlaku.

Jika insiden melibatkan data pribadi, proses penanganan harus mempertimbangkan kewajiban pemberitahuan dan perlindungan data yang berlaku.

11. Incident Status

Setiap insiden menggunakan status berikut:

Status| Keterangan
Reported| Laporan diterima
Investigating| Sedang diperiksa
Confirmed| Insiden telah diverifikasi
Contained| Dampak telah dibatasi
Recovering| Proses pemulihan berlangsung
Monitoring| Layanan dipulihkan dan dipantau
Resolved| Insiden selesai ditangani
Closed| Evaluasi dan dokumentasi selesai

Status harus diperbarui ketika terdapat perubahan penting.

12. Incident Record Template

Setiap insiden harus memiliki catatan dengan format berikut:

Incident Information

- Incident ID:
- Incident Title:
- Date & Time:
- Reported By:
- Severity:
- Category:
- Status:
- Assigned To:

Incident Summary

- Description:
- Affected Components:
- Estimated Impact:
- Users Affected:
- Data Impact:

Response Timeline

- Detection Time:
- Investigation Start:
- Containment Time:
- Recovery Time:
- Resolution Time:

Response Actions

- Initial Actions:
- Containment:
- Investigation:
- Recovery:
- Verification:

Final Review

- Root Cause:
- Data Loss:
- User Impact:
- Lessons Learned:
- Preventive Actions:
- Follow-up Owner:

13. Escalation Policy

Insiden harus dieskalasi ketika:

- Tingkat keparahan meningkat.
- Data pribadi berpotensi terdampak.
- Akses administratif terkompromi.
- Gangguan meluas ke banyak pengguna.
- Pemulihan tidak berjalan sesuai target.
- Insiden membutuhkan bantuan penyedia layanan.
- Penanganan melampaui kewenangan pihak yang bertugas.

SEV-1 wajib segera diteruskan kepada Owner dan pihak teknis yang bertanggung jawab.

14. Post-Incident Review

Evaluasi dilakukan setelah insiden diselesaikan.

Pertanyaan evaluasi:

1. Bagaimana insiden pertama kali terdeteksi?
2. Apa penyebab utamanya?
3. Bagaimana dampaknya terhadap pengguna?
4. Apakah respons berjalan efektif?
5. Apakah dokumentasi dan monitoring sudah memadai?
6. Apakah proses pemulihan berhasil?
7. Apa yang harus diperbaiki?
8. Siapa yang bertanggung jawab atas tindak lanjut?

Hasil evaluasi disimpan sebagai dokumentasi internal.

15. Incident Response Checklist

Preparation

- [ ] Struktur tanggung jawab tersedia.
- [ ] Saluran pelaporan insiden tersedia.
- [ ] Monitoring dan logging direncanakan.
- [ ] Prosedur recovery tersedia.
- [ ] Kontak penyedia layanan terdokumentasi.
- [ ] Akses darurat dikelola secara aman.

During Incident

- [ ] Laporan dicatat.
- [ ] Insiden diverifikasi.
- [ ] Tingkat keparahan ditentukan.
- [ ] Dampak dinilai.
- [ ] Tindakan containment dilakukan.
- [ ] Bukti diamankan.
- [ ] Pihak terkait diberi informasi.

Recovery

- [ ] Penyebab telah ditangani.
- [ ] Data dipulihkan jika diperlukan.
- [ ] Fungsi utama telah diuji.
- [ ] Keamanan telah diperiksa.
- [ ] Layanan dipantau setelah pemulihan.

Post-Incident

- [ ] Kronologi selesai.
- [ ] Laporan akhir dibuat.
- [ ] Dampak pengguna dievaluasi.
- [ ] Tindakan pencegahan ditetapkan.
- [ ] Dokumentasi diperbarui.

16. Future Improvements

Pengembangan berikutnya dapat mencakup:

- Incident management dashboard.
- Integrasi error tracking dan alerting.
- Otomatisasi notifikasi insiden.
- Status page publik.
- Sistem incident ticket.
- Integrasi audit log dengan monitoring.
- Otomatisasi laporan pascainsiden.
- Simulasi incident response secara berkala.

17. Prinsip Akhir

Incident Response Aruhetta harus mengutamakan:

1. Keselamatan pengguna.
2. Perlindungan data dan privasi.
3. Respons yang cepat dan terukur.
4. Komunikasi yang transparan.
5. Pemulihan yang aman.
6. Evaluasi dan pencegahan berkelanjutan.

Setiap insiden harus ditangani secara terstruktur, didokumentasikan, dan digunakan sebagai bahan peningkatan kualitas serta keamanan Aruhetta.

---

Dokumen: "docs/incident-response.md"
Status: Planning
Pemilik: Aruhetta Project
Branch: "development"
