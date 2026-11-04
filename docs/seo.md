ARUHETTA — SEO Specification

File: "docs/seo.md"
Project: Aruhetta
Version: 1.0
Status: Planning
Last Updated: 4 November 2026

---

1. Overview

SEO Specification menetapkan standar optimasi mesin pencari untuk seluruh halaman Aruhetta.

Tujuan:

- Meningkatkan visibilitas Aruhetta di mesin pencari.
- Memastikan halaman dapat ditemukan dan diindeks.
- Menyediakan informasi halaman yang jelas.
- Mengoptimalkan tampilan tautan ketika dibagikan.
- Meningkatkan kualitas struktur dan konten website.

2. SEO Principles

Aruhetta menerapkan prinsip:

- Search Engine Friendly.
- User-Focused Content.
- Semantic HTML.
- Mobile-Friendly.
- Performance Optimization.
- Accessible Content.
- Unique Metadata.

SEO tidak boleh mengorbankan pengalaman pengguna atau kualitas konten.

3. Technical SEO

3.1 URL Structure

- Menggunakan URL yang sederhana dan mudah dibaca.
- Menggunakan huruf kecil.
- Menggunakan tanda hubung sebagai pemisah kata.
- Menghindari parameter yang tidak diperlukan.
- Menggunakan URL konsisten untuk setiap halaman.
- Menghindari duplikasi URL untuk konten yang sama.

Contoh:

/
 /about/
 /articles/
 /articles/example-article/
 /arumunity/
 /tools/

3.2 Canonical URL

- Setiap halaman publik memiliki canonical URL.
- Canonical mengarah ke URL utama halaman.
- Menghindari konflik antara URL dengan dan tanpa trailing slash.
- Halaman duplikat diarahkan ke versi utama yang sesuai.

3.3 Sitemap

Menggunakan "sitemap.xml" untuk mencantumkan halaman publik yang layak diindeks.

Sitemap mencakup:

- Home.
- About.
- Artikel yang sudah dipublikasikan.
- Halaman publik Arumunity yang memenuhi syarat.
- Halaman publik lainnya.

Sitemap tidak mencakup:

- Login dan Sign Up.
- Dashboard pribadi.
- Halaman admin.
- Draft artikel.
- Konten privat.
- Halaman internal yang tidak ditujukan untuk mesin pencari.

3.4 Robots.txt

File "robots.txt" digunakan untuk memberikan arahan kepada crawler.

Ketentuan:

- Mengizinkan crawling halaman publik.
- Mengarahkan crawler ke sitemap.
- Tidak mengandalkan robots.txt sebagai pengamanan data.
- Konten privat tetap dilindungi melalui autentikasi dan otorisasi.

4. Metadata

Setiap halaman publik harus memiliki metadata yang relevan.

Title

- Unik untuk setiap halaman.
- Menjelaskan isi halaman.
- Menggunakan nama Aruhetta jika relevan.
- Menghindari pengulangan kata kunci.

Meta Description

- Menjelaskan isi halaman secara ringkas.
- Dibuat khusus untuk setiap halaman.
- Menggunakan bahasa yang alami.
- Tidak berisi keyword stuffing.

Additional Metadata

- Charset.
- Viewport.
- Theme color.
- Author jika relevan.
- Robots directives sesuai kebutuhan.

5. Open Graph & Social Sharing

Aruhetta menggunakan Open Graph untuk meningkatkan kualitas preview ketika tautan dibagikan.

Metadata yang disiapkan:

- "og:title"
- "og:description"
- "og:image"
- "og:url"
- "og:type"
- "og:site_name"
- "og:locale"

Twitter/X Card metadata juga disediakan jika relevan.

Ketentuan gambar:

- Menggunakan gambar preview yang sesuai.
- Menyediakan ukuran gambar yang optimal.
- Menghindari gambar rusak atau tidak relevan.
- Menggunakan fallback image jika diperlukan.

6. Structured Data

Aruhetta dapat menggunakan Schema.org JSON-LD sesuai jenis konten.

Jenis schema yang relevan:

- Organization.
- WebSite.
- WebPage.
- Article.
- BreadcrumbList.
- ProfilePage jika sesuai.
- Event untuk event publik yang memenuhi syarat.

Ketentuan:

- Data harus sesuai dengan konten yang benar-benar terlihat.
- Tidak boleh membuat rating atau informasi palsu.
- Structured data harus valid.
- Jenis schema dipilih berdasarkan fungsi halaman.

7. Content SEO

Articles

- Judul harus jelas dan relevan.
- Menggunakan heading secara hierarkis.
- Konten harus orisinal dan bermanfaat.
- Gambar memiliki alternative text.
- Menggunakan kategori dan tag yang relevan.
- Menyediakan informasi penulis dan tanggal publikasi jika sesuai.

About

- Menjelaskan identitas dan tujuan Aruhetta.
- Menggunakan struktur konten yang jelas.
- Menyediakan informasi yang konsisten.

Arumunity

- Hanya konten publik yang layak diindeks.
- Konten privat tidak boleh ditampilkan di hasil pencarian.
- Konten pengguna mengikuti aturan moderasi dan privasi.

Tools

- Setiap halaman tool memiliki judul dan deskripsi yang sesuai.
- Menjelaskan fungsi tool.
- Menghindari halaman kosong atau konten tipis.

8. Heading Structure

Menggunakan struktur heading yang teratur:

- H1: Judul utama halaman.
- H2: Bagian utama.
- H3: Subbagian.
- H4–H6: Digunakan jika diperlukan.

Setiap halaman memiliki satu judul utama yang jelas.

9. Image SEO

- Menggunakan nama file deskriptif.
- Menyediakan alt text.
- Mengoptimalkan ukuran gambar.
- Mengutamakan WebP dan AVIF jika didukung.
- Menggunakan responsive images.
- Menghindari gambar dekoratif dengan alt text yang tidak diperlukan.

10. Internal Linking

- Menghubungkan artikel yang relevan.
- Menyediakan navigasi antarkategori.
- Menggunakan anchor text yang deskriptif.
- Menghindari tautan rusak.
- Menyediakan breadcrumb pada halaman yang membutuhkannya.

11. Indexing Strategy

Indexable Pages

Halaman publik yang memiliki konten bermanfaat dan layak ditemukan.

Non-Indexable Pages

- Login.
- Sign Up.
- Dashboard.
- Admin Panel.
- Halaman pengaturan pribadi.
- Draft.
- Konten privat.
- Halaman internal yang tidak memiliki nilai pencarian.

Gunakan meta robots "noindex" pada halaman yang memang tidak ingin ditampilkan di hasil pencarian. Jangan menganggap robots.txt sebagai pengganti noindex atau kontrol akses.

12. JavaScript & Rendering

- Konten penting harus dapat dipahami crawler.
- Setiap halaman memiliki title dan metadata yang tepat.
- Navigasi menggunakan tautan yang dapat dikenali crawler.
- Menghindari ketergantungan berlebihan pada interaksi JavaScript untuk menampilkan konten utama.
- Memeriksa hasil rendering halaman publik.

13. Multilingual SEO

Aruhetta mendukung Bahasa Indonesia dan English.

Ketentuan:

- Setiap bahasa memiliki metadata sesuai bahasa konten.
- URL versi bahasa dibuat konsisten.
- Menggunakan "hreflang" jika tersedia halaman alternatif yang benar-benar setara.
- Menyediakan canonical URL yang tepat.
- Tidak mencampur metadata dua bahasa secara sembarangan.

14. SEO & GitHub Pages

Karena frontend Aruhetta direncanakan menggunakan GitHub Pages:

- Memastikan URL produksi konsisten.
- Mengatur base path Vite sesuai target deployment.
- Memastikan canonical mengarah ke domain produksi.
- Memastikan sitemap menggunakan URL produksi.
- Memastikan robots.txt tersedia pada lokasi yang benar.
- Menguji routing dan halaman langsung melalui URL masing-masing.
- Menguji konfigurasi setelah custom domain "aruhetta.com" aktif.

15. SEO Security & Privacy

- Tidak mengindeks data pribadi.
- Tidak menampilkan email atau informasi sensitif.
- Tidak mengindeks halaman privat.
- Tidak memasukkan token atau informasi rahasia ke URL.
- Memastikan konten publik sesuai pengaturan visibilitas.

16. SEO Testing & Validation

Pengujian menggunakan:

- Google Search Console.
- Google Rich Results Test.
- Schema Markup Validator.
- Lighthouse.
- Bing Webmaster Tools.

Pemeriksaan:

- Title dan description.
- Canonical URL.
- Sitemap.
- Robots.txt.
- Structured data.
- Open Graph.
- Broken links.
- Mobile usability.
- Indexing status.

17. SEO Monitoring

Pemantauan mencakup:

- Jumlah halaman terindeks.
- Search impressions.
- Search clicks.
- Click-through rate.
- Search queries.
- Halaman dengan error indexing.
- Broken links.
- Performa halaman publik.

18. Maintenance

- Memperbarui sitemap ketika konten berubah.
- Memeriksa metadata halaman baru.
- Memperbaiki tautan rusak.
- Memvalidasi structured data.
- Meninjau halaman yang tidak lagi relevan.
- Memperbarui dokumentasi ketika strategi SEO berubah.

---

End of Document

Aruhetta SEO Specification — Version 1.0
