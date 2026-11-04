ARUHETTA — Frontend Architecture

Version: 1.0
Status: Planned
Project: Aruhetta
Last Updated: 4 November 2026

---

1. Overview

Frontend Architecture menjelaskan struktur dan cara kerja bagian frontend Aruhetta.

Frontend bertanggung jawab terhadap:

- Tampilan dan navigasi website.
- Interaksi pengguna.
- Pengelolaan halaman.
- Pengelolaan komponen UI.
- Pengelolaan state aplikasi.
- Validasi input dasar.
- Komunikasi dengan backend.
- Pengalaman pengguna pada berbagai perangkat.

1.1 Technology Stack

Technology| Purpose
HTML5| Struktur halaman
CSS3| Styling dan layout
JavaScript ES Modules| Interaksi dan logic
Vite| Development dan build
Lucide Icons| Ikon
Plus Jakarta Sans| Typography
Supabase JS Client| Integrasi backend

1.2 Architecture Principles

- Modular Architecture.
- Reusable Components.
- Mobile First.
- Separation of Concerns.
- Progressive Enhancement.
- Accessibility First.
- Performance Optimization.
- Maintainable Code.

---

2. Frontend Architecture Structure

Frontend menggunakan pendekatan modular berbasis fitur.

Setiap bagian memiliki tanggung jawab yang jelas agar mudah dikembangkan dan diperbaiki.

2.1 Main Layers

1. Presentation Layer — tampilan dan komponen UI.
2. Page Layer — struktur setiap halaman.
3. Feature Layer — logic berdasarkan fitur.
4. Service Layer — komunikasi dengan backend.
5. Core Layer — konfigurasi dan fungsi utama.
6. Utility Layer — fungsi bantuan umum.

2.2 Application Flow

Alur umum:

"User Interaction → UI Component → Feature Logic → Service → Backend"

Hasil dari backend diproses melalui service dan ditampilkan kembali pada UI.

---

3. Directory Structure

Struktur direktori frontend yang direncanakan:

Aruhetta/
├── index.html
├── about.html
├── arumunity.html
├── tools.html
├── login.html
├── signup.html
├── profile.html
├── articles.html
├── 404.html
│
├── public/
│   ├── favicon.svg
│   ├── manifest.webmanifest
│   ├── robots.txt
│   └── icons/
│
├── src/
│   ├── main.js
│   ├── styles/
│   │   ├── main.css
│   │   ├── variables.css
│   │   ├── reset.css
│   │   ├── typography.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   ├── utilities.css
│   │   └── responsive.css
│   │
│   ├── core/
│   │   ├── config.js
│   │   ├── router.js
│   │   ├── state.js
│   │   ├── events.js
│   │   └── constants.js
│   │
│   ├── components/
│   │   ├── header/
│   │   ├── sidebar/
│   │   ├── footer/
│   │   ├── buttons/
│   │   ├── cards/
│   │   ├── forms/
│   │   ├── modals/
│   │   ├── toast/
│   │   ├── search/
│   │   └── loading/
│   │
│   ├── pages/
│   │   ├── home/
│   │   ├── about/
│   │   ├── arumunity/
│   │   ├── tools/
│   │   ├── login/
│   │   ├── signup/
│   │   ├── profile/
│   │   └── articles/
│   │
│   ├── features/
│   │   ├── authentication/
│   │   ├── accounts/
│   │   ├── bookmarks/
│   │   ├── notifications/
│   │   ├── search/
│   │   ├── community/
│   │   ├── articles/
│   │   ├── groups/
│   │   ├── events/
│   │   ├── messaging/
│   │   ├── tools/
│   │   └── media/
│   │
│   ├── services/
│   │   ├── supabase/
│   │   ├── api/
│   │   ├── storage/
│   │   └── analytics/
│   │
│   ├── utils/
│   │   ├── format.js
│   │   ├── validation.js
│   │   ├── date.js
│   │   ├── dom.js
│   │   └── helpers.js
│   │
│   └── assets/
│       ├── images/
│       ├── icons/
│       ├── fonts/
│       └── media/
│
├── docs/
├── tests/
├── .github/
├── .gitignore
├── .env.example
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

Struktur ini merupakan rancangan target. Folder dan file akan dibuat secara bertahap ketika implementasi dimulai.

---

4. Page Architecture

Setiap halaman memiliki struktur dan tanggung jawab tersendiri.

4.1 Public Pages

- Home
- About
- Arumunity
- Tools
- Articles
- Article Detail

4.2 Authentication Pages

- Login
- Sign Up
- Forgot Password
- Reset Password
- Email Verification

4.3 User Pages

- Profile
- Account Settings
- Bookmarks
- Notifications
- Reading History
- Dashboard

4.4 Administrative Pages

- Contributor Dashboard
- Moderator Dashboard
- Admin Dashboard
- Owner Dashboard

Halaman administratif harus memiliki pemeriksaan autentikasi dan izin sebelum konten ditampilkan.

---

5. Multi-Page Application

Aruhetta menggunakan pendekatan Multi-Page Application (MPA) dengan Vite.

5.1 Page Entry Points

Setiap halaman HTML menjadi entry point yang dapat diproses Vite.

5.2 Shared Resources

Komponen dan stylesheet yang digunakan bersama dapat diimpor melalui modul JavaScript dan CSS.

5.3 Page Initialization

Setiap halaman hanya menginisialisasi fitur yang dibutuhkan.

Tujuannya:

- Mengurangi JavaScript yang tidak diperlukan.
- Menghindari proses duplikat.
- Mempercepat pemuatan halaman.
- Mempermudah pemeliharaan.

5.4 Navigation

Navigasi menggunakan URL halaman yang jelas dan konsisten.

Halaman detail dapat menggunakan parameter atau pola URL yang sesuai dengan kebutuhan SEO dan hosting.

---

6. Component Architecture

Komponen UI dibuat agar dapat digunakan kembali.

6.1 Global Components

- Header
- Sidebar
- Footer
- Search
- Theme Switcher
- Notification Toast
- Modal
- Loading Indicator
- Error State
- Empty State

6.2 Content Components

- Article Card
- Community Card
- Tool Card
- User Card
- Event Card
- Group Card
- Featured Card

6.3 Component Principles

- Satu komponen memiliki tanggung jawab yang jelas.
- Tampilan dipisahkan dari business logic.
- Komponen menerima data melalui parameter atau konfigurasi.
- Komponen tidak boleh membuat request backend tanpa pengelolaan yang jelas.
- Komponen harus responsif dan dapat diakses.

---

7. CSS Architecture

CSS menggunakan pendekatan modular.

7.1 Stylesheet Organization

- "variables.css": design tokens.
- "reset.css": normalisasi dasar.
- "typography.css": aturan teks.
- "layout.css": struktur layout.
- "components.css": komponen UI.
- "utilities.css": helper classes.
- "responsive.css": media queries.

7.2 Design Tokens

Nilai visual global menggunakan CSS custom properties.

Kategori:

- Colors.
- Typography.
- Spacing.
- Border Radius.
- Shadows.
- Transitions.
- Z-index.
- Container Width.

Sumber utama design tokens mengikuti "docs/design-system.md".

7.3 CSS Rules

- Hindari duplikasi aturan.
- Gunakan penamaan class yang konsisten.
- Hindari selector yang terlalu spesifik.
- Batasi penggunaan "!important".
- Gunakan media query sesuai kebutuhan.
- Hormati "prefers-reduced-motion".

---

8. JavaScript Architecture

JavaScript menggunakan ES Modules.

8.1 Module Responsibilities

- "core/": fungsi dasar aplikasi.
- "components/": interaksi komponen UI.
- "pages/": inisialisasi halaman.
- "features/": logic fitur.
- "services/": komunikasi backend.
- "utils/": fungsi bantuan.

8.2 Code Organization

- Gunakan "import" dan "export".
- Hindari global variables yang tidak diperlukan.
- Pisahkan business logic dari DOM manipulation.
- Gunakan fungsi dengan tanggung jawab jelas.
- Tangani error secara konsisten.
- Hindari circular dependencies.

8.3 Event Management

Event listener harus dikelola dengan baik.

Hindari:

- Event listener duplikat.
- Memory leak.
- Manipulasi DOM berulang tanpa kebutuhan.
- Ketergantungan berlebihan pada inline event handlers.

---

9. State Management

State aplikasi dikelola secara modular.

9.1 State Categories

- Authentication State.
- User Profile State.
- Theme State.
- Language State.
- Notification State.
- Search State.
- Bookmark State.
- UI State.

9.2 State Sources

Data| Storage
Authentication| Supabase Auth
User Data| Supabase Database
Preferences| Account / Local Storage
Guest Bookmarks| Local Storage
Temporary UI State| Memory
Temporary Form Data| Memory

Data sensitif tidak boleh disimpan sembarangan di Local Storage.

9.3 State Synchronization

- Perubahan akun disinkronkan dengan backend.
- Preferensi lokal dapat disinkronkan setelah login.
- Data yang gagal disinkronkan harus ditangani secara aman.
- Konflik data harus memiliki aturan penyelesaian.

---

10. Routing & Navigation

Frontend menggunakan navigasi berbasis halaman HTML.

10.1 Routing Responsibilities

- Membuka halaman.
- Mengelola navigasi internal.
- Menangani halaman tidak ditemukan.
- Memeriksa kondisi halaman.
- Mengarahkan pengguna sesuai status autentikasi.

10.2 GitHub Pages Compatibility

Karena hosting awal menggunakan GitHub Pages:

- Path asset harus mengikuti konfigurasi Vite "base".
- Link internal harus kompatibel dengan repository path.
- Build harus mengatur entry point setiap halaman.
- Halaman 404 harus tersedia.
- Custom domain dapat menggunakan konfigurasi path yang berbeda.

10.3 Navigation UX

- Sidebar menjadi navigasi utama.
- Header konsisten pada halaman publik.
- Navigasi mobile mudah digunakan.
- Link memiliki status aktif jika sesuai.
- Perubahan halaman tidak boleh menyebabkan navigasi membingungkan.

---

11. Backend Integration

Frontend terhubung dengan Supabase melalui service layer.

11.1 Supabase Client

Digunakan untuk operasi yang memang aman dilakukan melalui client dengan kebijakan RLS yang benar.

11.2 Edge Functions

Digunakan untuk:

- Proses bisnis khusus.
- Operasi administratif yang diotorisasi.
- Integrasi pihak ketiga.
- Operasi yang memerlukan secret server-side.

11.3 Custom REST API

Endpoint custom menggunakan standar "/api/v1/" sesuai "docs/api.md".

Tidak semua operasi harus melalui custom REST API.

11.4 Error Handling

Frontend harus menangani:

- Network Error.
- Unauthorized.
- Forbidden.
- Not Found.
- Validation Error.
- Rate Limit.
- Server Error.
- Timeout.

Pesan error harus mudah dipahami pengguna.

---

12. Authentication Integration

Frontend mengintegrasikan sistem autentikasi melalui Supabase Auth.

Tanggung jawab frontend:

- Menampilkan halaman autentikasi.
- Mengirim permintaan login dan registrasi.
- Menampilkan status verifikasi.
- Mengelola tampilan session.
- Menangani logout.
- Mengarahkan pengguna berdasarkan status akun.

Frontend tidak menjadi sumber utama penentuan izin pengguna.

---

13. Responsive Architecture

Aruhetta menggunakan pendekatan Mobile First.

13.1 Breakpoints

Breakpoint awal yang direncanakan:

Device| Width
Small Mobile| 320–374px
Mobile| 375–767px
Tablet| 768–1023px
Desktop| 1024–1439px
Large Desktop| 1440px+

Breakpoint dapat disesuaikan berdasarkan kebutuhan layout.

13.2 Responsive Requirements

- Tidak ada horizontal overflow yang tidak disengaja.
- Sidebar menyesuaikan layar.
- Grid dan card adaptif.
- Typography fleksibel.
- Gambar responsif.
- Form mudah digunakan di layar kecil.
- Area interaksi nyaman untuk perangkat sentuh.

---

14. Accessibility

Frontend harus memperhatikan aksesibilitas.

Standar:

- Semantic HTML.
- Keyboard Navigation.
- Screen Reader Labels.
- Alt Text.
- Visible Focus.
- Color Contrast.
- Form Labels.
- Accessible Dialogs.
- Reduced Motion Support.

Target pengembangan adalah mengikuti pedoman WCAG 2.2 AA sejauh memungkinkan.

---

15. Performance Optimization

Optimasi frontend mencakup:

- Code splitting jika diperlukan.
- Lazy loading.
- Responsive images.
- WebP dan AVIF.
- Minification.
- Tree shaking.
- Pengurangan dependency.
- Penggunaan cache.
- Pengurangan request yang tidak diperlukan.
- Prioritas pemuatan konten penting.

Setiap halaman hanya memuat resource yang diperlukan.

---

16. PWA Integration

Frontend mendukung pengembangan Progressive Web App.

Komponen:

- Web App Manifest.
- Service Worker.
- Install Experience.
- Offline Fallback.
- Cache Management.
- Update Notification.

PWA harus memperhatikan path deployment GitHub Pages dan custom domain.

Data privat tidak boleh dimasukkan ke cache publik secara sembarangan.

---

17. Error & Loading States

Setiap fitur yang mengambil data harus memiliki kondisi:

- Loading.
- Success.
- Empty.
- Error.
- Retry.

Tujuannya agar pengguna memahami kondisi aplikasi tanpa mengalami halaman kosong yang membingungkan.

---

18. Testing Strategy

Pengujian frontend meliputi:

- Component Testing.
- Page Testing.
- Navigation Testing.
- Responsive Testing.
- Accessibility Testing.
- Form Validation.
- Authentication UI.
- API Integration.
- Browser Compatibility.
- Performance Testing.

Pengujian dilakukan pada development dan staging sebelum production.

---

19. Build & Deployment

Build menggunakan Vite.

19.1 Development

- Menjalankan development server.
- Menggunakan konfigurasi development.
- Memeriksa perubahan secara lokal.

19.2 Production Build

- Menghasilkan file statis.
- Mengoptimalkan CSS dan JavaScript.
- Mengatur asset path.
- Memastikan seluruh entry point tersedia.

19.3 Deployment

Deployment frontend menggunakan GitHub Pages dan GitHub Actions.

Branch "main" menjadi sumber production, sedangkan "development" menjadi lingkungan pengembangan.

---

20. Implementation Notes

Dokumen ini merupakan rancangan arsitektur frontend Aruhetta.

Struktur direktori, komponen, dan sistem routing akan dibuat secara bertahap saat implementasi dimulai.

Perubahan arsitektur harus tetap konsisten dengan dokumentasi utama Aruhetta.

Document Status: Planned
Version: 1.0
