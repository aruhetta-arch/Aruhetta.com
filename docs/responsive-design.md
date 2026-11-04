ARUHETTA — Responsive Design Specification

File: "docs/responsive-design.md"
Project: Aruhetta
Version: 1.0
Status: Planning
Last Updated: 4 November 2026

---

1. Overview

Responsive Design Specification menjelaskan standar tampilan dan perilaku antarmuka Aruhetta pada berbagai ukuran layar dan perangkat.

Tujuan utama:

- Memberikan pengalaman konsisten di semua perangkat.
- Mengutamakan pengalaman pengguna mobile.
- Menjaga keterbacaan dan kemudahan navigasi.
- Menghindari elemen yang terpotong atau bertumpuk.
- Menyesuaikan layout tanpa menghilangkan fungsi utama.

2. Responsive Strategy

Arishetta menggunakan pendekatan Mobile First.

Desain dimulai dari layar kecil, kemudian dikembangkan untuk tablet dan desktop.

Prinsip:

- Flexible layout.
- Fluid typography.
- Responsive images.
- Adaptive components.
- Touch-friendly interaction.
- Consistent spacing.
- Minimal horizontal overflow.

3. Breakpoints

Breakpoint awal yang digunakan:

Device| Width
Small Mobile| ≤ 360px
Mobile| 361–767px
Tablet| 768–1023px
Desktop| 1024–1439px
Large Desktop| ≥ 1440px

Breakpoint dapat disesuaikan berdasarkan kebutuhan komponen.

4. Global Layout

4.1 Container

- Konten utama menggunakan lebar fleksibel.
- Desktop menggunakan batas maksimal lebar konten.
- Mobile menggunakan ruang layar secara optimal.
- Padding horizontal menyesuaikan ukuran layar.
- Tidak boleh menyebabkan horizontal overflow.

4.2 Spacing

- Jarak antarbagian konsisten.
- Padding komponen menyesuaikan ukuran layar.
- Spacing mobile lebih ringkas.
- Desktop memiliki ruang lebih luas.

4.3 Grid System

- Mobile: satu kolom atau horizontal scrolling.
- Tablet: dua kolom jika sesuai.
- Desktop: dua hingga empat kolom sesuai jenis konten.
- Grid tidak boleh membuat kartu terlalu sempit.

5. Header & Navigation

Header

- Tinggi dasar 64px.
- Hamburger menu di kiri.
- Logo di tengah.
- Profile icon di kanan.
- Tetap nyaman digunakan pada layar kecil.

Sidebar

- Desktop: lebar sekitar 280px.
- Mobile: menyesuaikan lebar layar.
- Muncul dari sisi kiri.
- Background overlay menutupi area belakang.
- Konten utama tidak bergeser.
- Animasi buka dan tutup sekitar 300ms.
- Bisa ditutup melalui tombol hamburger atau area luar sidebar.

6. Home Page

Hero Banner

- Lebar mengikuti container.
- Tinggi menyesuaikan perangkat.
- Teks tetap terbaca.
- Tombol tidak bertumpuk.
- Gambar menggunakan rasio dan cropping adaptif.
- Panah dan indikator slider tetap mudah digunakan.

Quick Access

- Horizontal scrolling pada mobile.
- Kartu dapat menyesuaikan ukuran layar.
- Swipe didukung.
- Tombol navigasi digunakan jika tersedia dan sesuai perangkat.

Latest Updates

- Kartu horizontal pada mobile.
- Grid adaptif pada layar lebih besar.
- Informasi penting tidak boleh terpotong.

Community Preview

- Kartu diskusi menyesuaikan lebar layar.
- Judul, kategori, username, cuplikan, jumlah balasan, dan tanggal tetap terbaca.

Featured Content

- Mobile menggunakan susunan vertikal atau horizontal scrolling.
- Desktop menggunakan satu kartu utama dan beberapa kartu pendukung.
- Gambar dan metadata menyesuaikan ruang tersedia.

7. Content Pages

Articles

- Judul menggunakan ukuran responsif.
- Area artikel memiliki lebar baca yang nyaman.
- Gambar mengikuti lebar konten.
- Tabel dapat menggunakan horizontal scrolling jika diperlukan.
- Kode dan kutipan tidak boleh keluar dari container.
- Informasi penulis dan metadata menyesuaikan layar.

Arumunity

- Daftar diskusi menggunakan layout adaptif.
- Form posting nyaman digunakan pada mobile.
- Informasi grup dan event tetap mudah dibaca.
- Sidebar tambahan dapat berubah menjadi bagian vertikal atau drawer.

Tools

- Kategori tools menggunakan grid responsif.
- Form input menyesuaikan lebar perangkat.
- Area hasil dapat di-scroll jika kontennya panjang.
- Upload file menyediakan indikator progres yang jelas.

8. Authentication & Profile

Login dan Sign Up

- Form menggunakan lebar fleksibel.
- Input dan tombol mudah disentuh.
- Pesan validasi tidak terpotong.
- Layout dapat berubah menjadi satu kolom pada mobile.

Profile

- Avatar menyesuaikan ukuran layar.
- Informasi pengguna disusun secara adaptif.
- Tab dapat menggunakan horizontal scrolling.
- Pengaturan akun menggunakan layout vertikal pada mobile.

9. Dashboard & Admin Panel

- Sidebar dashboard dapat berubah menjadi drawer.
- Statistik menggunakan grid adaptif.
- Grafik menyesuaikan lebar container.
- Tabel menyediakan horizontal scrolling.
- Form administrasi menggunakan susunan responsif.
- Aksi penting tetap mudah ditemukan.

10. Responsive Components

Komponen berikut wajib mendukung responsive behavior:

- Header
- Sidebar
- Footer
- Buttons
- Forms
- Cards
- Search
- Modal
- Dropdown
- Tabs
- Pagination
- Slider
- Tables
- Media Player
- Upload Components
- Toast Notifications

11. Typography

- Ukuran teks menggunakan skala responsif.
- Judul tidak boleh memenuhi seluruh layar.
- Deskripsi harus tetap nyaman dibaca.
- Line-height disesuaikan dengan ukuran teks.
- Teks panjang harus dapat membungkus secara normal.

12. Images & Media

- Menggunakan gambar responsif.
- Menjaga aspect ratio sesuai kebutuhan.
- Menggunakan "object-fit" jika diperlukan.
- Video dan audio menyesuaikan lebar container.
- Thumbnail menggunakan ukuran yang sesuai.
- Media tidak boleh melewati batas container.

13. Interaction & Touch

- Area sentuh memiliki ukuran yang nyaman.
- Tombol tidak boleh terlalu berdekatan.
- Swipe hanya digunakan jika sesuai dengan fungsi.
- Hover bukan satu-satunya cara mengakses fitur.
- Interaksi keyboard tetap didukung.
- Focus state harus terlihat.

14. Responsive Footer

- Desktop menggunakan beberapa kolom.
- Tablet menggunakan kolom yang lebih ringkas.
- Mobile menggunakan susunan vertikal.
- Informasi copyright dan tautan tambahan tetap terbaca.
- Social media links tetap mudah diakses.

15. Accessibility

- Kontras warna tetap memadai.
- Teks dapat diperbesar.
- Navigasi mendukung keyboard.
- Komponen interaktif memiliki label.
- Gambar memiliki alternative text.
- Tidak mengandalkan warna saja untuk menyampaikan informasi.
- Mendukung preferensi reduced motion.

16. Testing Strategy

Pengujian dilakukan pada beberapa ukuran layar:

- 320px
- 360px
- 375px
- 390px
- 414px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

Hal yang diperiksa:

- Layout tidak rusak.
- Tidak ada horizontal overflow yang tidak diperlukan.
- Navigasi berfungsi.
- Tombol dapat digunakan.
- Teks tidak terpotong.
- Gambar dan media tampil dengan benar.
- Modal dan sidebar tidak keluar dari layar.
- Form tetap nyaman digunakan.
- Dark dan Light Mode tetap konsisten.

17. Performance Considerations

- Hindari layout yang terlalu kompleks.
- Gunakan gambar dengan ukuran sesuai kebutuhan.
- Terapkan lazy loading pada media yang sesuai.
- Hindari animasi berat.
- Minimalkan layout shifting.
- Pastikan komponen responsif tidak membebani perangkat mobile.

18. Maintenance

- Perubahan breakpoint harus mempertimbangkan seluruh halaman.
- Komponen bersama harus memiliki standar responsive yang konsisten.
- Perubahan layout perlu diuji pada mobile dan desktop.
- Dokumentasi diperbarui ketika standar responsive berubah.

---

End of Document

Arishetta Responsive Design Specification — Version 1.0
