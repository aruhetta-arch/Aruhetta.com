ARUHETTA — Monitoring & Logging Specification

File: "docs/monitoring-logging.md"
Project: Aruhetta
Version: 1.0
Status: Planning
Last Updated: 4 November 2026

---

1. Overview

Monitoring & Logging Specification menetapkan standar pemantauan sistem, pencatatan aktivitas, pengelolaan error, dan analisis kondisi Aruhetta.

Tujuan:

- Memantau kesehatan aplikasi.
- Mendeteksi error dan gangguan.
- Memantau performa frontend dan backend.
- Mempermudah proses debugging.
- Menjaga keamanan dan stabilitas sistem.
- Menyediakan informasi operasional yang dapat ditindaklanjuti.

2. Monitoring Principles

Aruhetta menggunakan prinsip:

- Continuous Monitoring.
- Privacy First.
- Security Aware Logging.
- Actionable Metrics.
- Minimal Data Collection.
- Structured Logging.
- Reliable Error Reporting.

Monitoring tidak boleh mengumpulkan informasi pribadi secara berlebihan.

3. Monitoring Architecture

Komponen yang dipantau:

Component| Monitoring Focus
Frontend| Loading, errors, interactions
GitHub Pages| Deployment availability
Supabase| Backend service health
PostgreSQL| Query performance
Storage| Upload and download
Edge Functions| Execution and errors
Authentication| Login and session events
API| Response time and failures
PWA| Service Worker and cache

4. Frontend Monitoring

Pemantauan frontend mencakup:

- JavaScript errors.
- Failed network requests.
- Page loading performance.
- Navigation failures.
- Component rendering issues.
- Resource loading errors.
- Core Web Vitals.

Error yang ditampilkan kepada pengguna harus menggunakan pesan yang aman dan mudah dipahami.

5. Backend Monitoring

Pemantauan backend mencakup:

- API response time.
- Request failures.
- Edge Function execution.
- Authentication errors.
- Database connectivity.
- Storage operations.
- Rate limiting events.
- Service availability.

Gangguan backend harus dapat dibedakan dari kesalahan input pengguna.

6. Database Monitoring

Pemantauan PostgreSQL mencakup:

- Query execution time.
- Slow queries.
- Database connections.
- Query failures.
- Storage usage.
- Index effectiveness.
- Migration status.
- Database resource utilization.

Query yang lambat harus dianalisis dan dioptimalkan berdasarkan kebutuhan nyata.

7. Performance Monitoring

Metrik yang dipantau:

- Largest Contentful Paint (LCP).
- Interaction to Next Paint (INP).
- Cumulative Layout Shift (CLS).
- API latency.
- Page loading time.
- Asset loading time.
- Build size.
- Memory usage jika tersedia.

Data performa digunakan untuk menentukan prioritas optimasi.

8. Availability Monitoring

Pemantauan ketersediaan mencakup:

- Website availability.
- Backend availability.
- API availability.
- Authentication availability.
- Storage availability.
- Deployment status.

Gangguan harus dicatat bersama waktu mulai, waktu berakhir, dan dampaknya.

9. Logging Architecture

Log dibagi berdasarkan kategori:

Application Logs

Mencatat kejadian operasional aplikasi.

Error Logs

Mencatat kegagalan dan exception.

API Logs

Mencatat metadata request dan response.

Authentication Logs

Mencatat kejadian keamanan terkait autentikasi.

Audit Logs

Mencatat tindakan penting pengguna dan administrator.

Deployment Logs

Mencatat proses build dan deployment.

10. Log Levels

Aruhetta menggunakan tingkat log berikut:

Level| Purpose
DEBUG| Informasi debugging
INFO| Aktivitas normal
WARN| Kondisi yang perlu diperhatikan
ERROR| Kegagalan operasi
FATAL| Gangguan kritis

Penggunaan DEBUG dapat dibatasi pada development dan tidak digunakan secara berlebihan di production.

11. Structured Logging

Log menggunakan format terstruktur seperti JSON.

Field yang dapat digunakan:

- timestamp.
- level.
- service.
- environment.
- event.
- request_id.
- correlation_id.
- status.
- duration_ms.
- error_code.

Contoh:

{
  "timestamp": "2026-11-04T10:00:00Z",
  "level": "ERROR",
  "service": "api",
  "environment": "production",
  "event": "request_failed",
  "request_id": "example-request-id",
  "status": 500,
  "error_code": "INTERNAL_ERROR"
}

Contoh tersebut merupakan format ilustrasi, bukan data produksi.

12. Privacy & Sensitive Data

Informasi berikut tidak boleh dicatat dalam log:

- Password.
- Access token.
- Refresh token.
- Service Role Key.
- API secrets.
- Informasi autentikasi sensitif.
- Data pribadi yang tidak diperlukan.
- Isi pesan pribadi secara default.

Email, IP address, dan identifier pengguna harus ditangani dengan pembatasan akses, minimisasi data, serta kebijakan retensi yang sesuai.

13. Error Tracking

Error tracking digunakan untuk mengelompokkan dan menganalisis masalah.

Informasi yang dapat dicatat:

- Error code.
- Error category.
- Timestamp.
- Environment.
- Affected service.
- Request identifier.
- Safe diagnostic context.

Stack trace hanya tersedia untuk pihak yang berwenang dan tidak ditampilkan kepada pengguna.

14. Alerting System

Alert digunakan untuk kondisi yang membutuhkan perhatian.

Contoh kondisi:

- Website tidak dapat diakses.
- API mengalami peningkatan kegagalan.
- Database tidak tersedia.
- Error kritis berulang.
- Storage mengalami gangguan.
- Deployment gagal.
- Penggunaan resource mendekati batas.

Alert memiliki tingkat prioritas:

- Critical.
- High.
- Medium.
- Low.

Threshold alert ditentukan setelah baseline performa tersedia.

15. Audit Logging

Audit log digunakan untuk mencatat aktivitas penting.

Contoh:

- Perubahan role pengguna.
- Perubahan permission.
- Publikasi dan penghapusan artikel.
- Perubahan konfigurasi sistem.
- Tindakan moderasi.
- Perubahan pengaturan keamanan.
- Aktivitas administratif penting.

Audit log harus:

- Memiliki timestamp.
- Mencatat jenis tindakan.
- Mencatat actor identifier yang sesuai.
- Mencatat target tindakan jika relevan.
- Membatasi akses.
- Melindungi integritas catatan.

Password, token, dan secret tidak boleh masuk ke audit log.

16. Monitoring Dashboard

Dashboard monitoring direncanakan menampilkan:

System Overview

- Overall status.
- Website availability.
- Backend availability.
- Active incidents.

Performance

- Core Web Vitals.
- API response time.
- Slow queries.
- Resource usage.

Errors

- Error count.
- Error categories.
- Recent incidents.
- Unresolved issues.

Deployment

- Latest deployment.
- Build status.
- Deployment history.
- Failed workflows.

17. Retention Policy

Retensi log ditentukan berdasarkan jenis dan kebutuhan.

Log Type| Retention
Debug Logs| Singkat
Application Logs| Sesuai kebutuhan operasional
Error Logs| Sesuai kebutuhan investigasi
Audit Logs| Sesuai kebutuhan keamanan
Deployment Logs| Sesuai kebutuhan maintenance

Ketentuan:

- Menghapus log yang tidak lagi diperlukan.
- Membatasi akses terhadap log lama.
- Mempertimbangkan kebutuhan keamanan dan privasi.
- Menyesuaikan retensi dengan kapasitas layanan.

Durasi final ditetapkan ketika infrastruktur monitoring dipilih.

18. Monitoring Tools

Tools yang dapat dipertimbangkan:

- Supabase Dashboard.
- GitHub Actions.
- Browser Developer Tools.
- Lighthouse.
- Google Search Console.
- Error tracking service.
- Uptime monitoring service.

Pemilihan layanan tambahan mempertimbangkan biaya, privasi, dan kebutuhan Aruhetta.

19. Incident Management

Alur penanganan insiden:

1. Detection.
2. Classification.
3. Investigation.
4. Containment.
5. Resolution.
6. Verification.
7. Documentation.
8. Post-Incident Review.

Setiap insiden penting harus memiliki catatan penyebab, dampak, dan tindakan perbaikan.

20. Monitoring Environments

Development

- Debugging.
- Detailed development logs.
- Error inspection.

Staging

- Integration monitoring.
- Performance validation.
- Release verification.

Production

- Availability monitoring.
- Error tracking.
- Security event monitoring.
- Performance monitoring.
- Audit logging.

21. Maintenance

- Memeriksa alert secara berkala.
- Meninjau error berulang.
- Mengoptimalkan query yang lambat.
- Mengevaluasi threshold monitoring.
- Memeriksa kebijakan retensi.
- Memastikan log tidak menyimpan secret.
- Memperbarui dashboard sesuai perkembangan sistem.

---

End of Document

Aruhetta Monitoring & Logging Specification — Version 1.0
