ARUHETTA — UI Components Documentation

Version: 1.0
Status: Planned
Project: Aruhetta
Last Updated: 4 November 2026

---

1. Overview

UI Components merupakan kumpulan elemen antarmuka yang digunakan secara konsisten di seluruh halaman Aruhetta.

Tujuan:

- Menjaga konsistensi visual.
- Mengurangi duplikasi kode.
- Mempermudah pengembangan.
- Meningkatkan aksesibilitas.
- Menyediakan komponen yang reusable.
- Menjaga pengalaman pengguna pada berbagai perangkat.

Seluruh komponen mengikuti "docs/design-system.md" dan "docs/frontend-architecture.md".

---

2. Component Architecture

Komponen dibagi menjadi beberapa kategori:

1. Layout Components.
2. Navigation Components.
3. Button Components.
4. Form Components.
5. Card Components.
6. Feedback Components.
7. Overlay Components.
8. Content Components.
9. Data Display Components.
10. Utility Components.

2.1 Component Principles

Setiap komponen harus:

- Memiliki tanggung jawab yang jelas.
- Dapat digunakan kembali.
- Memiliki struktur yang konsisten.
- Mendukung responsive layout.
- Mendukung accessibility.
- Memiliki state yang jelas.
- Tidak mengandung logic yang tidak berkaitan.

2.2 Component States

Komponen interaktif dapat memiliki state:

- Default.
- Hover.
- Focus.
- Active.
- Disabled.
- Loading.
- Success.
- Error.

State hanya diterapkan jika relevan dengan jenis komponen.

---

3. Global Layout Components

3.1 Header

Header merupakan bagian navigasi utama Aruhetta.

Struktur:

- Hamburger Menu di kiri.
- Logo Aruhetta di tengah.
- Profile Icon di kanan.

Standar:

- Tinggi sekitar 64px.
- Posisi static.
- Background solid sesuai theme.
- Icon outline.
- Tanpa bottom divider.
- Responsive.
- Konsisten pada halaman publik.

3.2 Sidebar

Sidebar menjadi navigasi utama.

Menu:

- Home.
- About.
- Arumunity.
- Tools.
- Dark / Light Mode.

Standar:

- Posisi dari sisi kiri.
- Lebar desktop sekitar 280px.
- Adaptif untuk mobile.
- Overlay background.
- Konten halaman tidak bergeser.
- Animasi keluar dan masuk sekitar 300ms.
- Dapat ditutup melalui tombol atau klik area luar.
- Mendukung keyboard navigation.

3.3 Footer

Footer digunakan secara global.

Bagian:

- Brand Information.
- Quick Links.
- Account Links.
- Social Media.
- Information Links.
- Copyright.
- Terms of Service.
- Privacy Policy.

Standar:

- Layout hybrid.
- Responsive.
- Gradient divider.
- Theme-aware.
- Informasi tersusun jelas.
- Bagian footer menyesuaikan layar mobile.

---

4. Button Components

4.1 Primary Button

Untuk tindakan utama.

Contoh:

- Sign Up.
- Login.
- Submit.
- Publish.

4.2 Secondary Button

Untuk tindakan tambahan.

Contoh:

- Cancel.
- Learn More.
- Back.

4.3 Icon Button

Tombol berbasis ikon.

Contoh:

- Search.
- Close.
- Menu.
- Notification.
- More Options.

4.4 Navigation Button

Untuk navigasi halaman atau bagian tertentu.

4.5 Button States

- Default.
- Hover.
- Focus.
- Active.
- Disabled.
- Loading.

4.6 Button Rules

- Label harus jelas.
- Ukuran sesuai fungsi.
- Area sentuh nyaman pada mobile.
- Ikon memiliki accessible label.
- Tombol berbahaya menggunakan konfirmasi jika diperlukan.
- Loading state mencegah pengiriman berulang.

---

5. Form Components

5.1 Input Field

Jenis:

- Text.
- Email.
- Password.
- Search.
- Number.
- URL.

5.2 Textarea

Digunakan untuk:

- Bio.
- Artikel.
- Komentar.
- Deskripsi.
- Pesan.

5.3 Select

Untuk memilih satu atau beberapa pilihan sesuai kebutuhan.

5.4 Checkbox

Untuk pilihan yang dapat diaktifkan atau dinonaktifkan.

5.5 Radio Button

Untuk memilih satu opsi dari beberapa pilihan.

5.6 Form Feedback

Form harus mendukung:

- Required Indicator.
- Validation Message.
- Error State.
- Success State.
- Loading State.
- Helper Text.

5.7 Form Rules

- Setiap input memiliki label.
- Validasi dilakukan pada frontend dan backend.
- Password memiliki opsi visibility toggle.
- Error ditampilkan dekat input terkait.
- Data sensitif tidak disimpan secara sembarangan.
- Form harus mudah digunakan pada layar kecil.

---

6. Card Components

Card digunakan untuk menampilkan konten dalam bentuk terstruktur.

6.1 Article Card

Informasi:

- Thumbnail.
- Judul.
- Ringkasan.
- Kategori.
- Penulis.
- Tanggal publikasi.
- Informasi tambahan.

6.2 Community Card

Informasi:

- Username.
- Avatar.
- Judul diskusi.
- Kategori.
- Cuplikan isi.
- Jumlah balasan.
- Tanggal.

6.3 Tool Card

Informasi:

- Icon.
- Nama tool.
- Deskripsi.
- Kategori.
- Status ketersediaan.

6.4 User Card

Informasi:

- Avatar.
- Nama.
- Username.
- Bio singkat.
- Follow Status.

6.5 Event Card

Informasi:

- Nama event.
- Thumbnail.
- Tanggal.
- Waktu.
- Lokasi.
- Jumlah peserta.
- Status event.

6.6 Group Card

Informasi:

- Nama grup.
- Cover.
- Deskripsi.
- Jumlah anggota.
- Status publik atau privat.

6.7 Featured Card

Digunakan untuk konten pilihan pada Home dan halaman terkait.

---

7. Feedback Components

7.1 Toast

Untuk pemberitahuan singkat.

Contoh:

- Berhasil disimpan.
- Gagal memuat data.
- Berhasil login.
- Link berhasil disalin.

Toast tidak boleh menutupi informasi penting.

7.2 Alert

Untuk informasi yang membutuhkan perhatian pengguna.

Jenis:

- Informational.
- Success.
- Warning.
- Error.

7.3 Loading Indicator

Digunakan ketika aplikasi sedang memproses data.

Bentuk:

- Spinner.
- Skeleton.
- Progress Indicator.

7.4 Empty State

Ditampilkan ketika belum ada data.

Contoh:

- Belum ada bookmark.
- Belum ada notifikasi.
- Belum ada artikel.
- Belum ada diskusi.

Empty state dapat memiliki ilustrasi dan tindakan lanjutan.

7.5 Error State

Menjelaskan kegagalan proses dan menyediakan tindakan pemulihan jika memungkinkan.

---

8. Overlay Components

8.1 Modal

Untuk informasi atau tindakan yang membutuhkan fokus pengguna.

Contoh:

- Konfirmasi penghapusan.
- Konfirmasi logout.
- Form sederhana.
- Detail informasi.

8.2 Dialog

Untuk keputusan yang membutuhkan respons pengguna.

8.3 Dropdown Menu

Untuk menampilkan pilihan tambahan.

Contoh:

- Profile Menu.
- Card Options.
- Account Actions.

8.4 Popover

Untuk informasi atau kontrol tambahan yang berkaitan dengan elemen tertentu.

8.5 Overlay Rules

- Memiliki mekanisme penutupan yang jelas.
- Mendukung Escape jika sesuai.
- Mengelola fokus keyboard.
- Memiliki accessible label.
- Tidak mengganggu navigasi utama.

---

9. Navigation Components

9.1 Breadcrumb

Menampilkan posisi pengguna dalam hierarki halaman.

9.2 Pagination

Untuk navigasi data yang memiliki banyak halaman.

9.3 Tabs

Untuk berpindah antarbagian dalam satu halaman.

9.4 Slider

Digunakan untuk Hero Banner dan konten horizontal tertentu.

9.5 Indicator

Menampilkan posisi atau status navigasi.

---

10. Search Components

Search digunakan pada pencarian global Aruhetta.

Fitur:

- Expandable Search Input.
- Instant Search.
- Autocomplete.
- Enter untuk membuka hasil.
- Recent Search.
- Delete Search History.
- Empty Result.
- Loading State.

Hasil pencarian harus dapat dibedakan berdasarkan kategori konten.

---

11. Media Components

11.1 Image Component

Mendukung:

- Responsive Image.
- Lazy Loading.
- WebP / AVIF.
- Thumbnail.
- Alt Text.
- Placeholder.

11.2 Video Player

Mendukung:

- Play / Pause.
- Volume.
- Progress.
- Fullscreen.
- Poster Thumbnail.

Kontrol mengikuti kemampuan browser dan sumber video.

11.3 Audio Player

Mendukung:

- Play / Pause.
- Volume.
- Progress.
- Track Information.
- Cover Image.

11.4 File Upload

Mendukung:

- File Selection.
- Drag and Drop jika sesuai.
- File Validation.
- Upload Progress.
- Upload Error.
- Upload Success.

---

12. User Interaction Components

Komponen interaksi pengguna:

- Like Button.
- Follow Button.
- Bookmark Button.
- Share Button.
- Report Button.
- Reply Button.
- Copy Link Button.
- Notification Toggle.
- Theme Switcher.
- Language Switcher.

Setiap komponen harus menampilkan status yang sesuai dengan hasil proses sebenarnya.

---

13. Theme Components

Aruhetta mendukung Dark Mode dan Light Mode.

13.1 Theme Switcher

- Outline Moon Icon.
- Outline Sun Icon.
- Mengikuti theme aktif.
- Menyimpan preferensi pengguna.
- Mendukung preferensi perangkat pada kunjungan pertama.

13.2 Theme Behavior

Perubahan theme berlaku secara global.

Komponen harus menggunakan design tokens agar warna menyesuaikan theme secara konsisten.

---

14. Typography Components

Standar typography mengikuti Plus Jakarta Sans.

Kategori:

- Display.
- Heading.
- Subtitle.
- Body.
- Caption.
- Label.

Ketentuan:

- Hierarki teks harus jelas.
- Panjang teks ditangani secara responsif.
- Kontras harus mudah dibaca.
- Ukuran teks dapat disesuaikan jika fitur tersedia.

---

15. Accessibility Standards

Setiap komponen harus memperhatikan:

- Semantic HTML.
- Keyboard Accessibility.
- Focus Visibility.
- Accessible Name.
- Screen Reader Support.
- Color Contrast.
- Touch Target.
- Reduced Motion.

Target pengembangan mengikuti WCAG 2.2 AA sejauh memungkinkan.

---

16. Responsive Behavior

Komponen harus diuji pada:

- Small Mobile.
- Mobile.
- Tablet.
- Desktop.
- Large Desktop.

Ketentuan:

- Layout menyesuaikan ukuran layar.
- Konten tidak terpotong.
- Tombol tetap mudah digunakan.
- Card menyesuaikan lebar.
- Navigasi tidak bertabrakan.
- Tidak ada horizontal overflow yang tidak disengaja.

---

17. Component Naming Convention

Nama komponen harus konsisten dan mudah dikenali.

Contoh:

- "Header"
- "Sidebar"
- "Footer"
- "PrimaryButton"
- "ArticleCard"
- "CommunityCard"
- "SearchInput"
- "ModalDialog"
- "ToastNotification"
- "LoadingIndicator"

Nama file mengikuti konvensi yang konsisten di seluruh project.

---

18. Component Testing

Pengujian meliputi:

- Rendering.
- Interaction.
- Component States.
- Responsive Layout.
- Accessibility.
- Form Validation.
- Error Handling.
- Theme Compatibility.
- Browser Compatibility.

Komponen global harus diuji sebelum digunakan secara luas.

---

19. Maintenance & Versioning

- Perubahan komponen harus mengikuti Design System.
- Komponen yang digunakan banyak halaman harus diperiksa dampaknya sebelum diubah.
- Komponen lama yang tidak digunakan dapat dihapus setelah pemeriksaan dependensi.
- Perubahan penting dicatat dalam changelog.
- Dokumentasi diperbarui jika perilaku komponen berubah.

---

20. Implementation Notes

Dokumen ini merupakan rancangan standar UI Components Aruhetta.

Komponen belum diimplementasikan. Pembuatan dilakukan bertahap sesuai prioritas pengembangan frontend.

Document Status: Planned
Version: 1.0
