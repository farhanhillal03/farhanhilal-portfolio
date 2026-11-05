# Farhan Hilal – Executive Portfolio & CV

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Website-success?style=for-the-badge&logo=github)](https://farhanhilal.github.io/farhan-portfolio/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20%7C%20Tablet%20%7C%20Desktop-orange?style=for-the-badge)](#)

Website portofolio eksekutif modern dan responsif untuk **Farhan Hilal**, Sarjana Terapan Keuangan Sektor Publik (Politeknik Negeri Lhokseumawe) dengan pengalaman operasional perbankan di PT Bank BTN (Persero) Tbk.

---

## ✨ Fitur Utama

- **🎨 Desain Eksekutif Modern**: Palet warna Deep Navy (`#0B192C`), Slate Blue (`#1E3E62`), dan Champagne Gold (`#C59B27`) dengan tipografi modern *Plus Jakarta Sans*.
- **🌐 Dual Language Support (ID / EN)**: Pengalihan bahasa instan antara Bahasa Indonesia dan English tanpa reload halaman.
- **🌓 Dark & Light Theme**: Toggle mode gelap dan terang dengan deteksi preferensi sistem dan penyimpanan status di local storage.
- **🖼️ Logo & Branding Management**: Mendukung tampilan inisial badge eksklusif ("FH") atau unggah logo kustom resmi via Admin Panel.
- **⚙️ Built-in Admin CMS Panel (`admin.html`)**: Kelola seluruh teks, data pengalaman kerja, sertifikat, logo, dan foto langsung dari browser.
- **🏅 Lencana Verifikasi Interaktif**: Kartu floating verified dengan animasi dinamis untuk PT Bank BTN (Persero) Tbk dan Politeknik Negeri Lhokseumawe.
- **📱 100% Responsif & Ringan**: Nol ketergantungan library pihak ketiga yang berat, performa cepat dengan Lucide Icons dan native CSS3.

---

## 📁 Struktur Direktori

```text
farhan-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD Deployment
├── assets/
│   ├── css/
│   │   └── style.css           # Desain modern, tema dark/light & animasi
│   ├── js/
│   │   └── script.js          # Logika interaktif, kamus i18n & dynamic sync
│   ├── img/                   # Foto profil, dokumentasi, dan sertifikat
│   ├── docs/
│   │   └── Farhan_Hilal_CV.pdf # Dokumen CV resmi yang dapat diunduh
│   └── data.json              # Data portfolio terstruktur (CMS data source)
├── index.html                 # Halaman utama portofolio
├── admin.html                 # Panel administrasi CMS
├── dev-server.js              # Server lokal Node.js dengan Auto Live-Reload
├── package.json               # Konfigurasi npm scripts
├── .gitignore
└── README.md
```

---

## 🚀 Menjalankan Secara Lokal

1. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```
2. Buka browser dan kunjungi:
   - Portofolio: `http://localhost:3000`
   - Panel Admin: `http://localhost:3000/admin.html`

Server dilengkapi dengan fitur **SSE Live-Reload** otomatis saat ada berkas yang diubah.

---

## 🌐 Akses Publik & Deploy ke GitHub Pages

Proyek ini telah dikonfigurasi dengan **GitHub Actions** otomatis (`.github/workflows/deploy.yml`).

### Langkah Cepat Membuka Akses Publik di GitHub:
1. Buat repositori publik baru di akun GitHub Anda bernama `farhan-portfolio`.
2. Jalankan perintah berikut di terminal komputer Anda:
   ```bash
   git remote add origin https://github.com/<USERNAME_GITHUB_ANDA>/farhan-portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. Di repositori GitHub:
   - Buka menu **Settings** > **Pages**.
   - Pada bagian **Build and deployment** > **Source**, pilih **GitHub Actions**.
4. Website portofolio Anda langsung aktif secara publik di:
   ```text
   https://<USERNAME_GITHUB_ANDA>.github.io/farhan-portfolio/
   ```

---

## 👨‍💼 Kontak & Profil
- **Nama**: Farhan Hilal
- **Pendidikan**: D4 Manajemen Keuangan Sektor Publik, Politeknik Negeri Lhokseumawe
- **Pengalaman**: PT Bank BTN (Persero) Tbk (Internship)
- **Email**: farhanhilal26@gmail.com
- **Lokasi**: Lhokseumawe, Aceh, Indonesia
