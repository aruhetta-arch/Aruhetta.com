ARUHETTA — Internationalization & Localization

Dokumen: Internationalization & Localization Guidelines
Versi: 1.0
Status: Planning
Tanggal: 4 November 2026
Branch: "development"

---

1. Tujuan

Dokumen ini menetapkan standar internasionalisasi (i18n) dan lokalisasi (l10n) untuk platform Aruhetta.

Tujuan utama:

- Mendukung penggunaan bahasa Indonesia dan Inggris.
- Menyediakan pengalaman yang sesuai dengan preferensi bahasa pengguna.
- Menyeragamkan format tanggal, waktu, angka, dan informasi lainnya.
- Mempermudah penambahan bahasa baru.
- Memastikan terjemahan konsisten di seluruh halaman.
- Menghindari teks antarmuka yang tertanam langsung dalam kode.

2. Ruang Lingkup

Internasionalisasi dan lokalisasi berlaku untuk:

- Antarmuka website.
- Navigasi dan komponen UI.
- Formulir autentikasi.
- Artikel dan konten.
- Arumunity.
- Tools.
- Profil dan dashboard.
- Notifikasi dan pesan sistem.
- Email transaksional.
- Format tanggal, waktu, dan angka.
- Metadata SEO.
- PWA dan informasi offline.

3. Language Support

Bahasa utama yang direncanakan:

Bahasa| Kode| Status
Bahasa Indonesia| "id"| Bahasa utama
English| "en"| Bahasa tambahan

Ketentuan:

- Bahasa Indonesia menjadi bahasa default.
- Bahasa Inggris tersedia sebagai pilihan.
- Sistem dapat mendeteksi bahasa browser pada kunjungan pertama.
- Jika bahasa browser tidak didukung, gunakan Bahasa Indonesia.
- Pengguna dapat mengganti bahasa secara manual.
- Preferensi bahasa disimpan sesuai status pengguna.

4. Language Detection

Pada kunjungan pertama, sistem mencoba mendeteksi bahasa dari pengaturan browser.

Urutan prioritas:

1. Preferensi bahasa yang tersimpan pada akun pengguna.
2. Preferensi bahasa lokal yang tersimpan pada perangkat.
3. Bahasa browser.
4. Bahasa default Aruhetta, yaitu Bahasa Indonesia.

Ketentuan:

- Deteksi otomatis hanya digunakan sebagai preferensi awal.
- Pilihan manual pengguna harus diutamakan.
- Bahasa yang tidak didukung menggunakan fallback Bahasa Indonesia.
- Sistem tidak boleh mengganti bahasa secara otomatis setiap kali halaman dibuka jika pengguna sudah memilih bahasa sendiri.

5. Language Switcher

Pengguna dapat mengganti bahasa melalui pengaturan bahasa.

Ketentuan:

- Menyediakan pilihan Indonesia dan English.
- Menggunakan nama bahasa yang mudah dikenali.
- Menampilkan bahasa yang sedang aktif.
- Perubahan bahasa diterapkan ke seluruh antarmuka.
- Tidak menghapus data atau preferensi lainnya.
- Perubahan bahasa tidak boleh mengganggu proses yang sedang berlangsung.

Pilihan bahasa dapat ditempatkan pada pengaturan profil atau area pengaturan global yang sesuai.

6. Translation Architecture

Sistem terjemahan harus dipisahkan dari struktur komponen UI.

Ketentuan:

- Teks antarmuka disimpan dalam resource terjemahan.
- Setiap bahasa memiliki resource tersendiri.
- Gunakan translation key yang konsisten.
- Hindari hardcoded UI text.
- Gunakan fallback jika translation key tidak ditemukan.
- Terjemahan harus mudah diperbarui.
- Penambahan bahasa baru tidak memerlukan perubahan besar pada arsitektur.

Contoh struktur:

src/
├── locales/
│   ├── id/
│   │   ├── common.json
│   │   ├── navigation.json
│   │   ├── auth.json
│   │   ├── home.json
│   │   └── errors.json
│   │
│   └── en/
│       ├── common.json
│       ├── navigation.json
│       ├── auth.json
│       ├── home.json
│       └── errors.json

Struktur tersebut merupakan rancangan dan dapat disesuaikan dengan implementasi frontend.

7. Translation Key Standards

Translation key harus:

- Menggunakan nama yang deskriptif.
- Konsisten antarhalaman.
- Tidak bergantung pada teks terjemahan.
- Menggunakan struktur kategori.
- Mudah ditemukan dan dipelihara.

Contoh:

{
  "navigation": {
    "home": "Beranda",
    "about": "Tentang",
    "community": "Arumunity",
    "tools": "Tools"
  }
}

Versi bahasa Inggris:

{
  "navigation": {
    "home": "Home",
    "about": "About",
    "community": "Arumunity",
    "tools": "Tools"
  }
}

Nama produk, brand, dan istilah khusus dapat dipertahankan jika memang tidak perlu diterjemahkan.

8. Translation Guidelines

Terjemahan harus memperhatikan konteks dan tujuan informasi.

Ketentuan:

- Gunakan bahasa yang alami.
- Hindari terjemahan kata per kata yang membingungkan.
- Pertahankan makna asli.
- Gunakan istilah yang konsisten.
- Hindari kalimat terlalu panjang.
- Sesuaikan gaya bahasa dengan jenis halaman.
- Pastikan pesan error mudah dipahami.
- Jangan menerjemahkan nama brand dan nama produk tanpa alasan.

Bahasa Indonesia menggunakan gaya yang jelas dan mudah dipahami. Bahasa Inggris menggunakan gaya yang natural dan konsisten.

9. Date Localization

Format tanggal mengikuti bahasa pengguna.

Bahasa| Format tampilan
Indonesia| 3 November 2026
English| November 3, 2026

Ketentuan:

- Format internal menggunakan "YYYY-MM-DD" jika hanya menyimpan tanggal.
- Timestamp disimpan dalam format standar yang konsisten, seperti ISO 8601.
- Format tampilan menyesuaikan locale.
- Zona waktu pengguna diperhitungkan untuk tampilan waktu.
- Tanggal tidak boleh berubah hanya karena perbedaan format tampilan.

Contoh:

id-ID: 3 November 2026
en-US: November 3, 2026

10. Time Localization

Waktu mengikuti zona waktu perangkat pengguna.

Ketentuan:

- Gunakan zona waktu lokal untuk tampilan.
- Simpan timestamp dengan format standar.
- Gunakan format 24 jam untuk Bahasa Indonesia.
- Gunakan format sesuai locale untuk Bahasa Inggris.
- Tampilkan zona waktu jika diperlukan.
- Perhatikan perbedaan zona waktu pada event komunitas.

Contoh:

id-ID: 14.30
en-US: 2:30 PM

Event yang dibuat pengguna harus memiliki informasi waktu yang tidak ambigu.

11. Number & Currency Localization

Format angka menyesuaikan locale.

Contoh:

Jenis| Indonesia| English
Angka| 1.234,56| 1,234.56
Persentase| 75,5%| 75.5%
Ribuan| 10.000| 10,000

Ketentuan:

- Nilai internal disimpan sebagai data numerik.
- Format tampilan mengikuti locale.
- Jangan menyimpan angka sebagai teks yang sudah diformat.
- Mata uang harus memiliki kode yang jelas.
- Konversi mata uang tidak boleh dilakukan hanya untuk mengubah format tampilan.

Jika Aruhetta menggunakan Rupiah, tampilkan simbol atau kode mata uang secara konsisten, misalnya "Rp10.000".

12. Relative Time Localization

Informasi waktu relatif harus diterjemahkan.

Contoh:

Indonesia| English
Baru saja| Just now
5 menit lalu| 5 minutes ago
1 jam lalu| 1 hour ago
Kemarin| Yesterday
3 hari lalu| 3 days ago

Ketentuan:

- Gunakan pluralization yang sesuai.
- Hindari teks waktu relatif yang ambigu.
- Waktu absolut dapat ditampilkan sebagai informasi tambahan.
- Perhitungan waktu mengikuti timestamp asli.

13. Content Localization

Konten pengguna dan konten platform harus dibedakan.

13.1 Interface Content

Konten UI seperti tombol, label, navigasi, dan pesan sistem diterjemahkan melalui resource bahasa.

13.2 User-Generated Content

Konten yang dibuat pengguna tidak boleh diterjemahkan otomatis tanpa kebutuhan atau persetujuan yang sesuai.

Contoh:

- Artikel.
- Komentar.
- Postingan Arumunity.
- Deskripsi profil.
- Nama grup.
- Pesan pribadi.

Bahasa asli konten harus dipertahankan.

13.3 Platform Content

Konten resmi Aruhetta dapat disediakan dalam beberapa bahasa jika diperlukan.

Setiap versi terjemahan harus mempertahankan makna dan informasi dari konten sumber.

14. SEO Localization

Setiap halaman harus mendukung metadata sesuai bahasa.

Ketentuan:

- Page title diterjemahkan.
- Meta description disesuaikan.
- Open Graph metadata mengikuti bahasa halaman.
- URL harus konsisten.
- Canonical URL ditentukan dengan benar.
- Gunakan "hreflang" jika tersedia beberapa versi bahasa halaman yang benar-benar setara.
- Sitemap mencerminkan halaman bahasa yang tersedia.

Jangan membuat halaman terjemahan kosong hanya untuk menambah variasi URL.

15. Accessibility & Localization

Terjemahan harus tetap mempertahankan aksesibilitas.

Ketentuan:

- Gunakan atribut "lang" yang sesuai.
- Accessible name harus diterjemahkan.
- Alt text mengikuti bahasa konten.
- Pesan error harus mudah dipahami.
- Teks tidak boleh terpotong akibat perbedaan panjang terjemahan.
- Komponen harus mampu menyesuaikan teks yang lebih panjang.
- Format tanggal dan angka harus dapat dibaca teknologi bantu.

Contoh:

<html lang="id">

Untuk halaman bahasa Inggris:

<html lang="en">

16. Localization in UI Components

Komponen berikut harus mendukung terjemahan:

- Header.
- Sidebar.
- Footer.
- Hero Banner.
- Quick Access.
- Search.
- Cards.
- Forms.
- Buttons.
- Modal.
- Toast.
- Notifications.
- Pagination.
- Loading states.
- Empty states.
- Error messages.

Komponen tidak boleh bergantung pada teks yang hanya tersedia dalam satu bahasa.

17. Localization in Authentication

Seluruh proses autentikasi harus mendukung bahasa yang dipilih.

Termasuk:

- Login.
- Sign Up.
- Forgot Password.
- Account Recovery.
- Email Verification.
- Password Reset.
- Session Expiration.
- Authentication Errors.

Email transaksional harus menggunakan bahasa yang sesuai dengan preferensi pengguna apabila mekanisme tersebut tersedia.

18. Localization in Arumunity

Arumunity harus mendukung tampilan multibahasa.

Ketentuan:

- Navigasi komunitas diterjemahkan.
- Label kategori mengikuti bahasa UI jika berasal dari sistem.
- Konten postingan mempertahankan bahasa asli.
- Event menampilkan tanggal dan waktu sesuai locale.
- Pesan moderasi menggunakan resource terjemahan.
- Notifikasi mengikuti preferensi bahasa pengguna.

Nama grup dan nama pengguna tidak boleh diterjemahkan secara otomatis.

19. Localization in Tools

Tools harus mendukung bahasa UI yang aktif.

Ketentuan:

- Nama kontrol dan label diterjemahkan.
- Instruksi penggunaan tersedia sesuai bahasa.
- Pesan validasi diterjemahkan.
- Status proses diterjemahkan.
- Pesan error mudah dipahami.
- Hasil pemrosesan tidak boleh diubah hanya karena bahasa antarmuka berubah.

20. Fallback & Missing Translation

Jika terjemahan tidak tersedia:

1. Periksa resource bahasa aktif.
2. Gunakan fallback Bahasa Indonesia.
3. Catat translation key yang hilang dalam proses pengembangan.
4. Jangan menampilkan key internal kepada pengguna.
5. Perbaiki resource yang tidak lengkap sebelum rilis.

Fallback harus mencegah antarmuka menampilkan teks kosong atau kode terjemahan.

21. Translation Management

Pengelolaan terjemahan mengikuti ketentuan:

- Translation key dikelola secara terstruktur.
- Perubahan terjemahan dicatat.
- Terjemahan diperiksa sebelum rilis.
- Istilah penting memiliki glossary.
- Perubahan pada teks UI harus memperbarui resource bahasa terkait.
- Terjemahan yang belum diverifikasi tidak boleh dianggap final.

Translation Review

Pemeriksaan meliputi:

- Ketepatan makna.
- Konsistensi istilah.
- Tata bahasa.
- Panjang teks.
- Kesesuaian konteks.
- Aksesibilitas.
- Tampilan pada mobile dan desktop.

22. Localization Testing

Pengujian dilakukan untuk memastikan semua bahasa bekerja dengan baik.

22.1 Language Testing

- [ ] Bahasa Indonesia tersedia.
- [ ] Bahasa Inggris tersedia.
- [ ] Deteksi bahasa browser bekerja.
- [ ] Fallback bahasa bekerja.
- [ ] Language switcher berfungsi.
- [ ] Preferensi bahasa tersimpan.

22.2 Format Testing

- [ ] Format tanggal sesuai locale.
- [ ] Format waktu sesuai locale.
- [ ] Format angka sesuai locale.
- [ ] Mata uang ditampilkan secara konsisten.
- [ ] Waktu event mengikuti zona waktu yang benar.

22.3 UI Testing

- [ ] Tidak ada teks UI yang tertinggal dalam bahasa yang salah.
- [ ] Tidak ada translation key yang tampil.
- [ ] Teks tidak terpotong.
- [ ] Layout tetap responsif.
- [ ] Accessible name diterjemahkan.

22.4 Content Testing

- [ ] Konten pengguna mempertahankan bahasa asli.
- [ ] Konten resmi memiliki terjemahan yang sesuai.
- [ ] Metadata SEO sesuai bahasa halaman.
- [ ] Notifikasi menggunakan bahasa yang benar.

23. Future Language Support

Arsitektur harus memungkinkan penambahan bahasa di masa depan.

Bahasa tambahan dapat dipertimbangkan berdasarkan:

- Kebutuhan pengguna.
- Jumlah komunitas pengguna.
- Ketersediaan penerjemah.
- Kesiapan konten.
- Biaya pemeliharaan.

Penambahan bahasa tidak boleh mengharuskan perubahan besar pada sistem utama.

24. Future Improvements

Pengembangan berikutnya dapat mencakup:

- Translation management dashboard.
- Kontribusi terjemahan oleh komunitas.
- Glossary istilah Aruhetta.
- Pemeriksaan translation key otomatis.
- Automated localization testing.
- Dukungan bahasa tambahan.
- Pengaturan locale yang lebih lengkap.

25. Prinsip Akhir

Internasionalisasi dan lokalisasi Aruhetta harus mengutamakan:

1. Konsistensi bahasa.
2. Kemudahan penggunaan.
3. Format lokal yang tepat.
4. Pengalaman multibahasa.
5. Aksesibilitas.
6. Kemudahan pemeliharaan.
7. Kesiapan untuk pengembangan bahasa baru.

Arsitektur i18n harus dipersiapkan sejak awal agar penambahan bahasa tidak membutuhkan perubahan besar pada struktur aplikasi.

---

Dokumen: "docs/i18n-localization.md"
Status: Planning
Pemilik: Aruhetta Project
Branch: "development"
