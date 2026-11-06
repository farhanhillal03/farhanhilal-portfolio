// ============================================================
// Farhan Hilal Portfolio - Main JavaScript (Executive Edition)
// With Dual Language (ID / EN) & Dynamic Logo/Branding System
// ============================================================

// ---- INTERNATIONALIZATION DICTIONARY (ID & EN) ----
const I18N = {
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.education": "Pendidikan",
    "nav.experience": "Pengalaman",
    "nav.portfolio": "Portfolio",
    "nav.certificates": "Sertifikat",
    "nav.leadership": "Organisasi",
    "nav.honors": "Prestasi",
    "nav.contact": "Kontak",
    "nav.download_cv": "Unduh CV",

    // Hero Section
    "hero.status": "Tersedia untuk Posisi Keuangan & Perbankan",
    "hero.greeting": "Portofolio Eksekutif",
    "hero.title": "Spesialis Keuangan Sektor Publik • Operasional Perbankan",
    "hero.edu": "D4 Manajemen Keuangan Sektor Publik | Politeknik Negeri Lhokseumawe",
    "hero.desc": "Lulusan Sarjana Terapan Keuangan Sektor Publik dengan kompetensi mendalam dalam tata kelola anggaran daerah, akuntansi pemerintahan, analisis ekonometrika panel (EViews 12), serta operasional perbankan di PT Bank Tabungan Negara (Persero) Tbk. Berdedikasi untuk memberikan kontribusi nyata berlandaskan integritas, profesionalisme, dan analisis data presisi.",
    "hero.btn_cv": "Unduh CV Terverifikasi",
    "hero.btn_projects": "Lihat Proyek",
    "hero.btn_copy_email": "Salin Email",
    "hero.badge_btn_title": "PT Bank BTN (Persero) Tbk",
    "hero.badge_btn_sub": "Verified Banking Intern",
    "hero.badge_pnl_title": "Politeknik Negeri Lhokseumawe",
    "hero.badge_pnl_sub": "D4 Keuangan Sektor Publik",

    // Hero Stats
    "stat.degree_num": "D4",
    "stat.degree_lbl": "Sarjana Terapan",
    "stat.degree_desc": "Manajemen Keuangan Sektor Publik (PNL)",
    "stat.exp_num": "6+ Bulan",
    "stat.exp_lbl": "Pengalaman Perbankan",
    "stat.exp_desc": "Operasional BTN Kantor Cabang Syariah",
    "stat.research_num": "23",
    "stat.research_lbl": "Kab/Kota Diteliti",
    "stat.research_desc": "Riset Ekonometrika Panel APBK & SiLPA",
    "stat.awards_num": "3x",
    "stat.awards_lbl": "Juara 1 Tingkat Kota",
    "stat.awards_desc": "Bank Indonesia, Scouting, & Paskibra",

    // Trust Bar
    "trust.diktisaintek": "Kementerian Diktisaintek",
    "trust.diktisaintek_sub": "Politeknik Negeri Lhokseumawe",
    "trust.btn": "PT Bank Tabungan Negara (Persero) Tbk",
    "trust.btn_sub": "Kantor Cabang Syariah Lhokseumawe",
    "trust.bi": "Bank Indonesia",
    "trust.bi_sub": "Juara 1 Reels Competition Pase Fest",
    "trust.bem": "Badan Eksekutif Mahasiswa",
    "trust.bem_sub": "Ketua Divisi & Delegasi Nasional FKMPI",

    // About Section
    "about.tag": "Profil Profesional",
    "about.title": "About Me",
    "about.subtitle": "Komitmen tinggi pada integritas finansial, akuntabilitas sektor publik, dan keunggulan operasional perbankan.",
    "about.lead": "Lulusan Sarjana Terapan (D4) Manajemen Keuangan Sektor Publik dari Politeknik Negeri Lhokseumawe dengan fokus keahlian pada akuntansi pemerintahan, tata kelola keuangan daerah, dan operasional perbankan.",
    "about.text": "Memiliki rekam jejak praktis melalui magang 6 bulan di PT Bank Tabungan Negara (Persero) Tbk KCS Lhokseumawe, di mana saya menangani administrasi customer service, verifikasi keamanan kartu ATM, pengelolaan dokumen KPR, hingga rekonsiliasi transfer dana. Terbiasa memadukan ketelitian administratif, analisis ekonometrika dengan EViews 12, dan integritas tinggi dalam setiap tanggung jawab profesional.",
    "about.pillar1_title": "Integritas & Governance",
    "about.pillar1_desc": "Berpegang teguh pada standar kepatuhan akuntansi sektor publik dan etika perbankan.",
    "about.pillar2_title": "Analisis Ekonometrika",
    "about.pillar2_desc": "Menguasai regresi panel data EViews 12 untuk evaluasi kinerja keuangan pemerintah daerah.",
    "about.pillar3_title": "Operasional Perbankan",
    "about.pillar3_desc": "Berpengalaman dalam pelayanan nasabah, kepatuhan KYC, dan administrasi kredit perumahan (KPR).",
    "about.lbl_name": "Nama Lengkap",
    "about.lbl_degree": "Gelar & Jurusan",
    "about.lbl_inst": "Institusi",
    "about.lbl_loc": "Lokasi / Domisili",
    "about.lbl_email": "Gmail / Email",
    "about.lbl_status": "Status Rekrutmen",
    "about.val_status": "Siap Bergabung (Immediate)",
    "about.interests_title": "Bidang Keahlian & Minat Karir",

    // Education Section
    "edu.tag": "Riwayat Akademik",
    "edu.title": "Education Background",
    "edu.subtitle": "Fondasi akademik yang kuat dalam manajemen keuangan publik, perbankan, dan riset ekonometrika terapan.",
    "edu.pnl_degree": "Sarjana Terapan (D4) Manajemen Keuangan Sektor Publik",
    "edu.pnl_dept": "Jurusan Bisnis",
    "edu.pnl_loc": "Aceh, Indonesia",
    "edu.pnl_grad": "Lulus Tepat Waktu",
    "edu.thesis_tag": "Skripsi / Undergraduate Thesis:",
    "edu.thesis_title": "Pengaruh Pendapatan Asli Daerah, Belanja Modal, Dana Perimbangan, dan SiLPA terhadap Kinerja Keuangan Pemerintah Daerah di Aceh Tahun 2020–2024 (Analisis Regresi Data Panel dengan EViews 12)",
    "edu.courses_title": "Mata Kuliah Relevan (Core Competencies)",
    "edu.sma_title": "Sekolah Menengah Atas (SMA)",
    "edu.sma_sub": "Peminatan Ilmu Pengetahuan Alam (IPA)",
    "edu.sma_desc": "Membangun fondasi kuat dalam pemahaman sains, logika matematika, serta kepemimpinan aktif melalui organisasi kepemudaan dan paskibra tingkat kota.",

    // Professional Experience
    "exp.tag": "Pengalaman Kerja",
    "exp.title": "Professional Experience",
    "exp.subtitle": "Pengalaman nyata di industri perbankan nasional BUMN dengan standar operasional yang ketat.",
    "exp.company": "PT Bank Tabungan Negara (Persero) Tbk",
    "exp.branch": "Kantor Cabang Syariah (BTN KCS Lhokseumawe)",
    "exp.badge": "Banking Operations Intern",
    "exp.role_meta": "Posisi: Banking Intern",
    "exp.period_meta": "Periode: Maret – Agustus (6 Bulan)",
    "exp.loc_meta": "Lokasi: Lhokseumawe, Aceh",
    "exp.duty1_title": "Pelayanan Nasabah & Pembukaan Rekening",
    "exp.duty1_desc": "Membantu operasional Customer Service dalam pembukaan buku tabungan baru (Tabungan Batara & iB Syariah) serta kepatuhan prosedur KYC (Know Your Customer).",
    "exp.duty2_title": "Mitigasi Risiko & Pemblokiran Kartu ATM",
    "exp.duty2_desc": "Menangani proses permintaan pemblokiran kartu ATM nasabah yang hilang/tertelan secara cepat dan akurat dengan verifikasi data keamanan berlapis.",
    "exp.duty3_title": "Dukungan Administrasi KPR",
    "exp.duty3_desc": "Mendukung verifikasi berkas dan pengarsipan administratif nasabah terkait Kredit Pemilikan Rumah (KPR) sesuai standar tata laksana BTN.",
    "exp.duty4_title": "Rekonsiliasi Transfer & Administrasi Deposito",
    "exp.duty4_desc": "Membantu verifikasi dokumen transaksi deposito nasabah serta menyusun laporan rekonsiliasi transfer dana masuk yang belum terkonfirmasi.",
    "exp.gallery_title": "Dokumentasi Aktivitas Magang",

    // Portfolio Section
    "port.tag": "Karya & Penelitian",
    "port.title": "Portfolio & Projects",
    "port.subtitle": "Riset empiris ekonometrika, evaluasi anggaran daerah, dan implementasi tata kelola keuangan.",
    "port.filter_all": "Semua Project",
    "port.filter_research": "Ekonometrika & Riset",
    "port.filter_analysis": "Analisis Anggaran",
    "port.filter_banking": "Perbankan",
    "port.filter_admin": "Administrasi Keuangan",
    "port.btn_details": "Detail Metodologi",
    "port.btn_pdf": "Ringkasan PDF",

    // Certificates Section
    "cert.tag": "Sertifikasi & Pelatihan",
    "cert.title": "Certificates & Credentials",
    "cert.subtitle": "Sertifikat resmi yang membuktikan keahlian profesional, kemahiran bahasa, dan kepemimpinan.",
    "cert.btn_view": "Lihat Sertifikat",

    // Organizations Section
    "org.tag": "Pengalaman Organisasi",
    "org.title": "Leadership & Governance",
    "org.subtitle": "Rekam jejak kepemimpinan mahasiswa, koordinasi program masyarakat, dan perwakilan delegasi nasional.",

    // Achievements Section
    "ach.tag": "Penghargaan & Prestasi",
    "ach.title": "Honors & Achievements",
    "ach.subtitle": "Prestasi kompetitif tingkat regional dan nasional yang diraih dengan kerja keras dan kreativitas.",

    // Skills Section
    "skills.tag": "Kompetensi Inti",
    "skills.title": "Skills & Core Competencies",
    "skills.subtitle": "Penguasaan aplikasi finansial, instrumen akuntansi publik, dan etos kerja profesional.",
    "skills.tech_title": "Technical & Financial Skills",
    "skills.prof_title": "Professional & Soft Skills",

    // Gallery Section
    "gal.tag": "Galeri Dokumentasi",
    "gal.title": "Visual Journey",
    "gal.subtitle": "Dokumentasi perjalanan akademik, kepemimpinan organisasi kampus, dan pengabdian masyarakat.",

    // CV Download Section
    "cv.title": "Unduh Curriculum Vitae (CV)",
    "cv.desc": "Dapatkan ringkasan terperinci kualifikasi akademik D4 Manajemen Keuangan Sektor Publik, pengalaman perbankan di Bank BTN, rekam jejak kepemimpinan, dan keahlian ekonometrika dalam format PDF resmi berstandar korporat dan ATS-friendly.",
    "cv.btn_download": "Unduh CV (PDF Resmi)",
    "cv.btn_preview": "Buka Preview PDF",
    "cv.note": "Format A4 Terverifikasi • ATS-Friendly • Siap Ditinjau Tim HRD / Perekrut BUMN & Perbankan",

    // Contact Section
    "contact.tag": "Hubungi Saya",
    "contact.title": "Get in Touch",
    "contact.subtitle": "Terbuka untuk peluang karir di perbankan, BUMN, institusi pemerintah, dan korporasi keuangan.",
    "contact.intro": "Saya selalu antusias berdiskusi mengenai peluang kerja, kolaborasi riset keuangan daerah, atau kesempatan berkontribusi di institusi Anda. Silakan hubungi saya melalui kanal di bawah ini.",
    "contact.email_label": "Gmail / Email",
    "contact.location_label": "Lokasi / Domisili",
    "contact.form_title": "Kirim Pesan Langsung",
    "contact.form_sub": "Isi formulir di bawah ini untuk mengirimkan tawaran kerja atau pesan langsung.",
    "contact.lbl_name": "Nama Lengkap",
    "contact.lbl_email": "Alamat Email",
    "contact.lbl_subject": "Subjek / Topik",
    "contact.lbl_message": "Pesan Anda",
    "contact.ph_name": "Contoh: Budi Santoso",
    "contact.ph_email": "nama@instansi.com",
    "contact.ph_subject": "Contoh: Peluang Karir Finance Officer",
    "contact.ph_message": "Tuliskan pesan atau detail peluang yang ingin didiskusikan...",
    "contact.btn_send": "Kirim Pesan",

    // Footer
    "footer.tagline": "Integritas • Profesionalisme • Tata Kelola Keuangan Sektor Publik",
    "footer.rights": "Hak Cipta Dilindungi Undang-Undang."
  },

  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.portfolio": "Portfolio",
    "nav.certificates": "Certificates",
    "nav.leadership": "Leadership",
    "nav.honors": "Honors",
    "nav.contact": "Contact",
    "nav.download_cv": "Download CV",

    // Hero Section
    "hero.status": "Available for Finance & Banking Roles",
    "hero.greeting": "Executive Portfolio",
    "hero.title": "Public Sector Finance Specialist • Banking Operations",
    "hero.edu": "D4 Public Sector Financial Management | Politeknik Negeri Lhokseumawe",
    "hero.desc": "Applied Bachelor (D4) graduate in Public Sector Financial Management with in-depth competencies in regional budget governance, government accounting, panel econometric analysis (EViews 12), and retail banking operations at PT Bank Tabungan Negara (Persero) Tbk. Dedicated to delivering measurable impact grounded in integrity, professionalism, and empirical precision.",
    "hero.btn_cv": "Download Verified CV",
    "hero.btn_projects": "Explore Projects",
    "hero.btn_copy_email": "Copy Email",
    "hero.badge_btn_title": "PT Bank BTN (Persero) Tbk",
    "hero.badge_btn_sub": "Verified Banking Intern",
    "hero.badge_pnl_title": "Politeknik Negeri Lhokseumawe",
    "hero.badge_pnl_sub": "D4 Public Sector Finance",

    // Hero Stats
    "stat.degree_num": "D4",
    "stat.degree_lbl": "Applied Bachelor Degree",
    "stat.degree_desc": "Public Sector Financial Management (PNL)",
    "stat.exp_num": "6+ Mos",
    "stat.exp_lbl": "Banking Experience",
    "stat.exp_desc": "Operations at BTN Islamic Branch Office",
    "stat.research_num": "23",
    "stat.research_lbl": "Regencies Analyzed",
    "stat.research_desc": "APBK & SiLPA Econometric Panel Research",
    "stat.awards_num": "3x",
    "stat.awards_lbl": "1st Place Honors",
    "stat.awards_desc": "Bank Indonesia, Scouting, & Paskibra",

    // Trust Bar
    "trust.diktisaintek": "Ministry of Higher Education & Science",
    "trust.diktisaintek_sub": "Politeknik Negeri Lhokseumawe",
    "trust.btn": "PT Bank Tabungan Negara (Persero) Tbk",
    "trust.btn_sub": "Lhokseumawe Sharia Branch Office",
    "trust.bi": "Bank Indonesia",
    "trust.bi_sub": "1st Winner Reels Competition Pase Fest",
    "trust.bem": "Student Executive Board",
    "trust.bem_sub": "Division Head & National FKMPI Delegate",

    // About Section
    "about.tag": "Professional Profile",
    "about.title": "About Me",
    "about.subtitle": "Unwavering commitment to financial integrity, public sector accountability, and banking operational excellence.",
    "about.lead": "Applied Bachelor (D4) graduate in Public Sector Financial Management from Politeknik Negeri Lhokseumawe, specializing in government accounting, regional fiscal governance, and retail banking operations.",
    "about.text": "Proven operational capability through a 6-month internship at PT Bank Tabungan Negara (Persero) Tbk KCS Lhokseumawe, managing front-office customer service, debit/ATM security card blocking, mortgage (KPR) file verification, and incoming fund transfer reconciliation. Adept at combining rigorous administrative execution with EViews 12 econometric modeling and absolute institutional integrity.",
    "about.pillar1_title": "Integrity & Governance",
    "about.pillar1_desc": "Committed to public sector accounting compliance, audit readiness, and banking ethics.",
    "about.pillar2_title": "Econometric Analysis",
    "about.pillar2_desc": "Skilled in EViews 12 panel data regression for evaluating local government fiscal health.",
    "about.pillar3_title": "Banking Operations",
    "about.pillar3_desc": "Experienced in front-office customer service, KYC compliance, and mortgage loan processing.",
    "about.lbl_name": "Full Name",
    "about.lbl_degree": "Degree & Major",
    "about.lbl_inst": "Institution",
    "about.lbl_loc": "Location / Domicile",
    "about.lbl_email": "Gmail / Email",
    "about.lbl_status": "Recruitment Status",
    "about.val_status": "Immediate Availability",
    "about.interests_title": "Core Competencies & Career Focus",

    // Education Section
    "edu.tag": "Academic Background",
    "edu.title": "Education Background",
    "edu.subtitle": "A robust academic foundation in public financial management, corporate banking, and applied econometrics.",
    "edu.pnl_degree": "Applied Bachelor (D4) in Public Sector Financial Management",
    "edu.pnl_dept": "Business Department",
    "edu.pnl_loc": "Aceh, Indonesia",
    "edu.pnl_grad": "Graduated On Time",
    "edu.thesis_tag": "Undergraduate Thesis:",
    "edu.thesis_title": "The Effect of Regional Own-Source Revenue (PAD), Capital Expenditure, Balance Funds, and SiLPA on Local Government Financial Performance in Aceh 2020–2024 (Panel Econometric Regression via EViews 12)",
    "edu.courses_title": "Relevant Academic Coursework",
    "edu.sma_title": "Senior High School (SMA)",
    "edu.sma_sub": "Natural Sciences (IPA) Concentration",
    "edu.sma_desc": "Built strong foundational knowledge in natural sciences, mathematical logic, and active leadership through youth organizations and city-level flag hoisting squads (Paskibra).",

    // Professional Experience
    "exp.tag": "Career Journey",
    "exp.title": "Professional Experience",
    "exp.subtitle": "Hands-on experience within a leading Indonesian state-owned bank adhering to stringent corporate standards.",
    "exp.company": "PT Bank Tabungan Negara (Persero) Tbk",
    "exp.branch": "Sharia Branch Office (BTN KCS Lhokseumawe)",
    "exp.badge": "Banking Operations Intern",
    "exp.role_meta": "Role: Banking Intern",
    "exp.period_meta": "Period: March – August (6 Months)",
    "exp.loc_meta": "Location: Lhokseumawe, Aceh",
    "exp.duty1_title": "Customer Service & Account Administration",
    "exp.duty1_desc": "Supported Customer Service frontliners in new savings account openings (Batara & iB Sharia) in full compliance with Know Your Customer (KYC) guidelines.",
    "exp.duty2_title": "Risk Mitigation & ATM Card Blocking Operations",
    "exp.duty2_desc": "Processed urgent customer ATM card blocking requests with speed, accuracy, and multi-tier security verification protocols.",
    "exp.duty3_title": "Mortgage (KPR) Administrative Support",
    "exp.duty3_desc": "Assisted customer dossier verification and administrative archiving for subsidized and commercial KPR housing loan portfolios.",
    "exp.duty4_title": "Transfer Reconciliation & Deposit Records",
    "exp.duty4_desc": "Verified time deposit certificates and compiled daily administrative reconciliation reports for unconfirmed incoming fund transfers.",
    "exp.gallery_title": "Internship Activities Documentation",

    // Portfolio Section
    "port.tag": "Research & Work",
    "port.title": "Portfolio & Projects",
    "port.subtitle": "Empirical econometrics, regional budget evaluations, and public governance implementations.",
    "port.filter_all": "All Projects",
    "port.filter_research": "Econometrics & Research",
    "port.filter_analysis": "Fiscal Analysis",
    "port.filter_banking": "Banking Operations",
    "port.filter_admin": "Public Administration",
    "port.btn_details": "Methodology Details",
    "port.btn_pdf": "Summary PDF",

    // Certificates Section
    "cert.tag": "Certifications & Training",
    "cert.title": "Certificates & Credentials",
    "cert.subtitle": "Official certifications validating professional competence, language proficiency, and leadership.",
    "cert.btn_view": "View Certificate",

    // Organizations Section
    "org.tag": "Leadership & Service",
    "org.title": "Leadership & Governance",
    "org.subtitle": "Verified leadership in university student bodies, community development programs, and national congresses.",

    // Achievements Section
    "ach.tag": "Recognition & Awards",
    "ach.title": "Honors & Achievements",
    "ach.subtitle": "Competitive regional and national awards earned through dedication, creativity, and discipline.",

    // Skills Section
    "skills.tag": "Core Competencies",
    "skills.title": "Skills & Core Competencies",
    "skills.subtitle": "Command of financial applications, government accounting frameworks, and professional work ethics.",
    "skills.tech_title": "Technical & Financial Skills",
    "skills.prof_title": "Professional & Soft Skills",

    // Gallery Section
    "gal.tag": "Visual Journey",
    "gal.title": "Photo Documentation",
    "gal.subtitle": "Moments capturing academic milestones, leadership service, and community initiatives.",

    // CV Download Section
    "cv.title": "Download Curriculum Vitae (CV)",
    "cv.desc": "Obtain a comprehensive overview of my D4 Public Sector Financial Management qualifications, BTN banking internship achievements, leadership background, and econometric skills formatted in a verified, ATS-friendly corporate PDF layout.",
    "cv.btn_download": "Download CV (Official PDF)",
    "cv.btn_preview": "Open PDF Preview",
    "cv.note": "Verified A4 Format • ATS-Friendly • Tailored for Banking, SOE & Corporate HR Review",

    // Contact Section
    "contact.tag": "Get in Touch",
    "contact.title": "Contact Me",
    "contact.subtitle": "Open to professional opportunities in banking, state-owned enterprises, government agencies, and finance corporations.",
    "contact.intro": "I am enthusiastic about exploring career openings, fiscal research collaborations, or contributions to your organization. Reach out through any of the channels below.",
    "contact.email_label": "Gmail / Email",
    "contact.location_label": "Location / Domicile",
    "contact.form_title": "Send a Direct Message",
    "contact.form_sub": "Fill in the form below to propose a job opening or get in direct contact.",
    "contact.lbl_name": "Full Name",
    "contact.lbl_email": "Email Address",
    "contact.lbl_subject": "Subject / Topic",
    "contact.lbl_message": "Your Message",
    "contact.ph_name": "e.g. John Doe",
    "contact.ph_email": "john@company.com",
    "contact.ph_subject": "e.g. Finance Officer Career Opportunity",
    "contact.ph_message": "Write your inquiry or opportunity details here...",
    "contact.btn_send": "Send Message",

    // Footer
    "footer.tagline": "Integrity • Professionalism • Public Sector Financial Governance",
    "footer.rights": "All Rights Reserved."
  }
};


// ============================================================
// MAIN APPLICATION LOGIC
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // ---- DUAL LANGUAGE SWITCHER ----
  let currentLang = localStorage.getItem('farhan_portfolio_lang') || 'id';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('farhan_portfolio_lang', lang);

    const dict = I18N[lang] || I18N['id'];

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update input placeholders with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Update active state on language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    document.documentElement.setAttribute('lang', lang);

    // Re-apply customized data from admin panel so custom edits are never overwritten
    if (typeof syncPortfolioData === 'function') {
      syncPortfolioData();
    }
  }

  // Bind language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-lang');
      if (selected && selected !== currentLang) {
        applyLanguage(selected);
        showToast(selected === 'en' ? 'Language switched to English' : 'Bahasa diubah ke Bahasa Indonesia', 'info');
      }
    });
  });

  // Apply saved language initially
  applyLanguage(currentLang);

  // ---- THEME TOGGLE (Dark / Light Mode) ----
  const themeToggleBtn = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem('farhan_portfolio_theme');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('farhan_portfolio_theme', theme);
    if (themeToggleBtn) {
      const icon = themeToggleBtn.querySelector('i');
      if (icon) {
        icon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }
    }
  }

  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (prefersDark.matches) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
      showToast(current === 'dark' ? 'Switched to Light Theme' : 'Switched to Executive Dark Theme', 'info');
    });
  }

  // ---- SCROLL PROGRESS BAR ----
  const scrollProgress = document.getElementById('scroll-progress');
  function updateScrollProgress() {
    if (!scrollProgress) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = `${scrollPercent}%`;
  }
  window.addEventListener('scroll', updateScrollProgress, { passive: true });

  // ---- NAVBAR BEHAVIOR ----
  const navbar = document.querySelector('.navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navLinkItems = document.querySelectorAll('.nav-links a');

  function handleNavScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
  }

  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      if (navToggle) navToggle.classList.remove('active');
      if (navLinks) navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Active nav link spy
  const sections = document.querySelectorAll('section[id]');
  function highlightNavLink() {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
      if (navLink) {
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          navLinkItems.forEach(link => link.classList.remove('active'));
          navLink.classList.add('active');
        }
      }
    });
  }
  window.addEventListener('scroll', highlightNavLink, { passive: true });
  highlightNavLink();

  // ---- SMOOTH SCROLLING ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navbarHeight = navbar ? navbar.offsetHeight : 70;
        const targetPosition = target.offsetTop - navbarHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ---- TOAST NOTIFICATION HELPER ----
  function showToast(message, type = 'info') {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-notification';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i data-lucide="${type === 'success' ? 'check-circle' : 'info'}"></i> <span>${message}</span>`;
    toast.className = 'show';
    if (typeof lucide !== 'undefined') lucide.createIcons();

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
  window.showToast = showToast;

  // ---- COPY GMAIL TO CLIPBOARD ----
  const copyEmailBtns = document.querySelectorAll('.btn-copy-email, .contact-copy-btn');
  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'farhan.hillal03@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(currentLang === 'en' ? 'Gmail address copied: ' + email : 'Alamat Gmail disalin: ' + email, 'success');
        }).catch(() => {
          prompt('Copy Email:', email);
        });
      } else {
        prompt('Copy Email:', email);
      }
    });
  });

  // ---- BACK TO TOP BUTTON ----
  const backToTop = document.getElementById('back-to-top');
  function handleBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 450) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', handleBackToTop, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- PORTFOLIO FILTERING ----
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      document.querySelectorAll('.portfolio-card').forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category.toLowerCase() === filter.toLowerCase()) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // ---- CERTIFICATE LIGHTBOX ----
  const lightbox = document.getElementById('cert-lightbox');
  const lightboxImage = lightbox ? lightbox.querySelector('.lightbox-image') : null;
  const lightboxCaption = lightbox ? lightbox.querySelector('.lightbox-caption') : null;
  const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;

  function bindLightboxEvents() {
    document.querySelectorAll('.cert-view-btn, .cert-img-thumb').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const card = el.closest('.certificate-card');
        if (!card) return;
        const title = card.querySelector('h3') ? card.querySelector('h3').textContent : 'Certificate';
        const img = card.querySelector('.cert-image img');
        if (lightbox && lightboxImage && lightboxCaption) {
          lightboxCaption.textContent = title;
          lightboxImage.src = img ? img.src : '';
          lightboxImage.alt = title;
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    document.querySelectorAll('.gallery-masonry-item, .gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const caption = item.getAttribute('data-caption') || 
                        item.querySelector('span')?.textContent || 'Gallery Photo';
        const img = item.querySelector('img');
        if (lightbox && lightboxImage && lightboxCaption) {
          lightboxCaption.textContent = caption;
          lightboxImage.src = img ? img.src : '';
          lightboxImage.alt = caption;
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });
  }

  function closeLightbox() {
    if (lightbox) lightbox.classList.remove('active');
    const projectModal = document.getElementById('project-modal');
    if (projectModal) projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // ---- PROJECT DETAILS MODAL ----
  const projectDetails = {
    thesis: {
      tag: "Academic Research & Econometrics",
      title: "Pengaruh Pendapatan Asli Daerah, Belanja Modal, Dana Perimbangan, dan SiLPA terhadap Kinerja Keuangan Pemerintah Daerah di Aceh Tahun 2020–2024",
      summary: "This comprehensive undergraduate thesis research analyzes the fiscal performance, budgetary allocation, and financial health across all 23 regencies and cities in Aceh Province over a 5-year empirical observation period (2020–2024).",
      methodology: [
        "Panel Data Econometric Regression utilizing EViews 12.",
        "Model specification tests: Chow Test, Hausman Test, and Lagrange Multiplier to determine optimal estimation (Common Effect vs Fixed Effect vs Random Effect Model).",
        "Classical assumption tests: Multicollinearity (VIF), Heteroskedasticity (Glejser/White), and Autocorrelation (Durbin-Watson) diagnostics.",
        "Hypothesis testing via partial t-statistics, simultaneous F-statistic, and Coefficient of Determination (Adjusted R²)."
      ],
      findings: "The empirical findings prove that PAD and Balance Funds have a statistically significant positive effect on local government fiscal independence, while Capital Expenditure and SiLPA require targeted allocation strategies to prevent fiscal bottlenecks.",
      tools: "EViews 12, Microsoft Excel, Regional Budget Realization (APBK) Datasets, BPK RI Audit Reports."
    },
    analysis: {
      tag: "Financial Analysis & Evaluation",
      title: "Regional Budget Evaluation, Fiscal Autonomy & Revenue Effectiveness",
      summary: "In-depth academic financial analysis assessing local government financial statements, budget absorption variances, and regional fiscal autonomy indices.",
      methodology: [
        "Calculation of Fiscal Decentralization Degree & Autonomy Ratio (Derajat Desentralisasi Fiskal).",
        "Effectiveness and Efficiency Indices for Regional Own-Source Revenue (PAD).",
        "Expenditure Variance and Budget Absorption Timing Analysis.",
        "Regional Liquidity, Solvency, and Debt Coverage Evaluation."
      ],
      findings: "Mapped key fiscal bottlenecks and developed policy recommendations for enhancing own-source revenue mobilization and optimizing capital expenditure ratios.",
      tools: "Financial Statement Modeling, Microsoft Excel, APBK Datasets."
    },
    banking: {
      tag: "Banking Operations & Credit Administration",
      title: "Banking Internship at PT Bank Tabungan Negara (Persero) Tbk – KCS Lhokseumawe",
      summary: "Completed a 6-month corporate internship at BTN Kantor Cabang Syariah (KCS) Lhokseumawe, contributing actively to customer service, retail banking administration, and KPR mortgage processing.",
      methodology: [
        "Assisted Customer Service in front-office customer administration, account consultations, and Know-Your-Customer (KYC) protocols.",
        "Facilitated customer savings account opening (Tabungan Batara & iB Syariah) and passbook issuance procedures.",
        "Handled customer ATM card blocking requests with strict security verification protocols.",
        "Supported KPR (Kredit Pemilikan Rumah) file management, customer dossier audits, and administrative archiving.",
        "Assisted deposit transaction processing and archived supporting banking documentation.",
        "Reconciled daily incoming fund transfers and prepared status tracking reports."
      ],
      findings: "Acquired deep operational expertise in state-owned banking standards, customer confidentiality, credit administration, and regulatory compliance.",
      tools: "BTN Core Banking System, Internal Banking Portals, MS Excel."
    },
    admin: {
      tag: "Public Sector Administration",
      title: "Government Accounting Standards & Public Sector Ledger Bookkeeping",
      summary: "Comprehensive academic and practical coursework focused on government bookkeeping, cash management, and public sector accounting standards.",
      methodology: [
        "General Cash Book (Buku Kas Umum - BKU) bookkeeping and auxiliary ledger reconciliation.",
        "Preparation and audit verification of Surat Pertanggungjawaban (SPJ) administrative packages.",
        "Application of Standar Akuntansi Pemerintahan (SAP) on an accrual basis.",
        "Budget formulation following performance-based budgeting guidelines."
      ],
      findings: "Developed strong competencies in accurate financial record-keeping, audit readiness, internal control systems, and fiscal governance.",
      tools: "SIMDA / Regional Management Systems, MS Excel, MS Word."
    }
  };

  const projectModal = document.getElementById('project-modal');
  const projectModalClose = projectModal ? projectModal.querySelector('.lightbox-close') : null;

  function bindProjectModalButtons() {
    document.querySelectorAll('.project-view-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const pKey = btn.getAttribute('data-project');
        const data = projectDetails[pKey];
        if (!data || !projectModal) return;

        projectModal.querySelector('.project-modal-tag').textContent = data.tag;
        projectModal.querySelector('.project-modal-title').textContent = data.title;
        projectModal.querySelector('.project-modal-summary').textContent = data.summary;
        
        const methList = projectModal.querySelector('.project-modal-methodology');
        methList.innerHTML = '';
        data.methodology.forEach(m => {
          const li = document.createElement('li');
          li.textContent = m;
          methList.appendChild(li);
        });

        projectModal.querySelector('.project-modal-findings').textContent = data.findings;
        projectModal.querySelector('.project-modal-tools').textContent = data.tools;

        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
  }

  if (projectModalClose) projectModalClose.addEventListener('click', closeLightbox);
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // ---- SCROLL REVEAL ANIMATIONS ----
  const revealElements = document.querySelectorAll(
    '.about-grid, .timeline-item, .experience-card, .portfolio-card, .certificate-card, ' +
    '.org-card, .achievement-card, .skills-category, .gallery-masonry-item, .cv-container, ' +
    '.contact-grid, .hero-stat-item, .pillar-card'
  );

  revealElements.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ---- CONTACT FORM ----
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = contactForm.querySelector('#name').value.trim();
      const email = contactForm.querySelector('#email').value.trim();
      const subject = contactForm.querySelector('#subject').value.trim();
      const message = contactForm.querySelector('#message').value.trim();

      if (!name || !email || !subject || !message) {
        showFormStatus(currentLang === 'en' ? 'Please complete all required fields.' : 'Harap lengkapi semua bidang yang wajib diisi.', 'error');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFormStatus(currentLang === 'en' ? 'Please enter a valid email address.' : 'Harap masukkan alamat email yang valid.', 'error');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const origBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Mengirim...</span>`;

      const recipient = 'farhan.hillal03@gmail.com';
      showFormStatus(currentLang === 'en' ? 'Sending message to Farhan...' : 'Sedang mengirim pesan ke email Farhan...', 'info');

      // Send via FormSubmit AJAX service
      fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: `[Portofolio Farhan Hilal] ${subject} - dari ${name}`,
          message: message,
          _replyto: email
        })
      })
      .then(res => res.json())
      .then(resData => {
        const successMsg = currentLang === 'en'
          ? `Thank you, ${name}! Your email has been delivered directly to Farhan's inbox (${recipient}).`
          : `Terima kasih, ${name}! Pesan dan tawaran kerja Anda telah terkirim langsung ke email Farhan (${recipient}).`;
        showFormStatus(successMsg, 'success');
        showToast(currentLang === 'en' ? 'Email sent successfully!' : 'Email berhasil terkirim!', 'success');
        contactForm.reset();
      })
      .catch(err => {
        // Fallback: Open mailto directly
        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Halo Farhan Hilal,\n\nNama: ${name}\nEmail: ${email}\n\nPesan / Tawaran:\n${message}`)}`;
        window.location.href = mailtoLink;
        showFormStatus(currentLang === 'en'
          ? `Opening your email client to send to ${recipient}...`
          : `Membuka aplikasi email Anda untuk mengirim pesan ke ${recipient}...`, 'success');
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origBtnHtml;
        if (typeof lucide !== 'undefined') lucide.createIcons();
      });
    });

    // Kirim via WhatsApp Button
    const btnSendWa = document.getElementById('btn-send-wa');
    if (btnSendWa) {
      btnSendWa.addEventListener('click', () => {
        const name = contactForm.querySelector('#name').value.trim();
        const subject = contactForm.querySelector('#subject').value.trim();
        const message = contactForm.querySelector('#message').value.trim();
        const waNum = '6282315099447';
        const msgText = `Halo Farhan Hilal, perkenalkan saya ${name || 'Rekruter'}.\nPerihal: ${subject || 'Tawaran Kerja / Diskusi'}\n\n${message || 'Saya tertarik dengan profil dan portofolio Anda.'}`;
        const waUrl = `https://wa.me/${waNum}?text=${encodeURIComponent(msgText)}`;
        window.open(waUrl, '_blank');
      });
    }
  }

  function showFormStatus(message, type) {
    if (formStatus) {
      formStatus.textContent = message;
      formStatus.className = `form-status ${type}`;
      formStatus.style.display = 'block';
    }
  }

  // Bind initial buttons
  bindLightboxEvents();
  bindProjectModalButtons();

  // Expose binding functions globally for dynamic re-renders
  window.bindLightboxEvents = bindLightboxEvents;
  window.bindProjectModalButtons = bindProjectModalButtons;

  console.log('Farhan Hilal Executive Portfolio initialized successfully.');
});


// ============================================================
// DYNAMIC DATA & LOGO SYNCHRONIZATION (CMS & Offline Fallback)
// ============================================================
async function syncPortfolioData() {
  let data = null;

  // 1. Try Flask API endpoint
  try {
    const res = await fetch('/api/data');
    if (res.ok) data = await res.json();
  } catch (e) {}

  // 2. Try static assets/data.json fallback
  if (!data) {
    try {
      const res = await fetch('assets/data.json');
      if (res.ok) data = await res.json();
    } catch (e) {}
  }

  // 3. Try LocalStorage fallback
  if (!data) {
    try {
      const local = localStorage.getItem('farhan_portfolio_data');
      if (local) data = JSON.parse(local);
    } catch (e) {}
  }

  if (!data) return;

  const lang = localStorage.getItem('farhan_portfolio_lang') || 'id';
  const dict = I18N[lang] || I18N['id'];

  // 1. Update Logo & Branding
  if (data.branding) {
    const navLogoImg = document.getElementById('nav-custom-logo');
    const navLogoBadge = document.getElementById('nav-logo-badge');
    const navLogoName = document.getElementById('nav-logo-name');
    const navLogoSub = document.getElementById('nav-logo-sub');

    if (data.branding.logoUrl && data.branding.logoUrl.trim() !== '') {
      if (navLogoImg) {
        navLogoImg.src = data.branding.logoUrl;
        navLogoImg.style.display = 'block';
      }
      if (navLogoBadge) navLogoBadge.style.display = 'none';
    } else {
      if (navLogoImg) {
        navLogoImg.src = '';
        navLogoImg.style.display = 'none';
      }
      if (navLogoBadge) {
        navLogoBadge.style.display = 'flex';
        navLogoBadge.textContent = data.branding.logoBadge || 'FH';
      }
    }

    if (data.branding.logoText && navLogoName) navLogoName.textContent = data.branding.logoText;
    if (data.branding.logoSub && navLogoSub) navLogoSub.textContent = data.branding.logoSub;
  }

  // 2. Update Hero Section (Bilingual Support)
  if (data.hero) {
    const greetingEl = document.querySelector('.hero-greeting');
    if (greetingEl) {
      greetingEl.textContent = (lang === 'en' ? (data.hero.greetingEn || dict['hero.greeting'] || data.hero.greeting) : (data.hero.greeting || dict['hero.greeting']));
    }
    if (data.hero.name) {
      const heroNameEl = document.querySelector('.hero-name');
      if (heroNameEl) {
        const parts = data.hero.name.trim().split(/\s+/);
        if (parts.length > 1) {
          const first = parts.slice(0, -1).join(' ');
          const last = parts[parts.length - 1];
          heroNameEl.innerHTML = `<span class="hero-name-first">${first}</span> <span class="hero-name-last hero-name-highlight">${last}</span>`;
        } else {
          heroNameEl.innerHTML = `<span class="hero-name-first hero-name-highlight">${data.hero.name}</span>`;
        }
      }
    }
    const heroTitleEl = document.querySelector('.hero-title-text');
    if (heroTitleEl) {
      heroTitleEl.textContent = (lang === 'en' ? (data.hero.titleEn || dict['hero.title'] || data.hero.title) : (data.hero.title || dict['hero.title']));
    }
    const heroDescEl = document.querySelector('.hero-description');
    if (heroDescEl) {
      heroDescEl.textContent = (lang === 'en' ? (data.hero.descriptionEn || dict['hero.desc'] || data.hero.description) : (data.hero.description || dict['hero.desc']));
    }
    if (data.hero.portraitImage) {
      const el = document.querySelector('.hero-portrait-img');
      if (el) el.src = data.hero.portraitImage;
    }
  }

  // 3. Update About Section (Bilingual Support)
  if (data.about) {
    const aboutLeadEl = document.querySelector('.about-lead, .about-intro-text');
    if (aboutLeadEl) {
      aboutLeadEl.textContent = (lang === 'en' ? (data.about.introEn || dict['about.lead'] || data.about.intro) : (data.about.intro || dict['about.lead']));
    }
    if (data.about.aboutImage) {
      const el = document.querySelector('.about-portrait-img');
      if (el) el.src = data.about.aboutImage;
    }
    // Dynamic Interests Tags
    const interestsList = (lang === 'en' ? (data.about.interestsEn || data.about.interests) : data.about.interests);
    if (Array.isArray(interestsList) && interestsList.length > 0) {
      const interestContainer = document.querySelector('.interest-tags');
      if (interestContainer) {
        interestContainer.innerHTML = interestsList.map(item => `<span class="interest-tag">${item}</span>`).join('');
      }
    }
  }

  // 3b. Update Education Section (Bilingual Support)
  if (data.education) {
    const pnlTitle = document.querySelector('.timeline-item:not(.timeline-secondary) h3');
    if (pnlTitle) pnlTitle.textContent = (lang === 'en' ? (data.education.institutionEn || data.education.institution) : data.education.institution);
    
    const pnlDegree = document.querySelector('.timeline-item:not(.timeline-secondary) .timeline-subtitle');
    if (pnlDegree) {
      pnlDegree.textContent = (lang === 'en' ? (dict['edu.pnl_degree'] || data.education.majorEn || data.education.major) : (data.education.major || dict['edu.pnl_degree']));
    }
    
    const pnlBadge = document.querySelector('.timeline-item:not(.timeline-secondary) .timeline-badge');
    if (pnlBadge) pnlBadge.textContent = (lang === 'en' ? (data.education.degreeEn || 'Applied Bachelor (D4)') : (data.education.degree || 'Sarjana Terapan (D4)'));
    
    const pnlDept = document.querySelector('[data-i18n="edu.pnl_dept"]');
    if (pnlDept) pnlDept.textContent = (lang === 'en' ? (data.education.departmentEn || dict['edu.pnl_dept']) : (data.education.department || dict['edu.pnl_dept']));

    const subjList = (lang === 'en' ? (data.education.subjectsEn || data.education.subjects) : data.education.subjects);
    if (Array.isArray(subjList) && subjList.length > 0) {
      const subjContainer = document.querySelector('.subject-tags');
      if (subjContainer) {
        subjContainer.innerHTML = subjList.map(s => `<span class="subject-tag">${s}</span>`).join('');
      }
    }

    // SMA Secondary Education
    const sma = data.education.sma || {};
    const smaTitle = document.getElementById('edu-sma-title') || document.querySelector('.timeline-secondary h3');
    if (smaTitle) {
      smaTitle.textContent = (lang === 'en' ? (sma.schoolEn || dict['edu.sma_title'] || sma.school) : (sma.school || dict['edu.sma_title']));
    }

    const smaSub = document.getElementById('edu-sma-sub') || document.querySelector('.timeline-secondary .timeline-subtitle');
    if (smaSub) {
      smaSub.textContent = (lang === 'en' ? (sma.majorEn || dict['edu.sma_sub'] || sma.major) : (sma.major || dict['edu.sma_sub']));
    }

    const smaPeriod = document.getElementById('edu-sma-period') || document.querySelector('.timeline-secondary .timeline-badge');
    if (smaPeriod) {
      smaPeriod.textContent = sma.period || '2019 – 2022';
    }

    const smaCity = document.getElementById('edu-sma-city');
    if (smaCity) {
      smaCity.innerHTML = `<i data-lucide="map-pin"></i> ${(lang === 'en' ? (sma.cityEn || sma.city || 'Lhokseumawe City, Aceh') : (sma.city || 'Kota Lhokseumawe, Aceh'))}`;
    }

    const smaAct = document.getElementById('edu-sma-activities');
    if (smaAct) {
      smaAct.innerHTML = `<i data-lucide="trophy"></i> ${(lang === 'en' ? (sma.activitiesEn || sma.activities || 'Active in Leadership & Student Orgs') : (sma.activities || 'Aktif Berorganisasi (Paskibra & PIK-R)'))}`;
    }

    const smaDesc = document.getElementById('edu-sma-desc') || document.querySelector('.timeline-secondary p');
    if (smaDesc) {
      smaDesc.textContent = (lang === 'en' ? (sma.descriptionEn || dict['edu.sma_desc'] || sma.description) : (sma.description || dict['edu.sma_desc']));
    }
  }

  // 3c. Update Professional Experience Section (Bilingual Support)
  if (data.experience) {
    const compEl = document.querySelector('[data-i18n="exp.company"]');
    if (compEl && data.experience.company) compEl.textContent = data.experience.company;

    const branchEl = document.querySelector('[data-i18n="exp.branch"]');
    if (branchEl) {
      branchEl.textContent = (lang === 'en' ? (data.experience.branchEn || dict['exp.branch'] || data.experience.branch) : (data.experience.branch || dict['exp.branch']));
    }

    const badgeEl = document.querySelector('[data-i18n="exp.badge"]');
    if (badgeEl) {
      badgeEl.textContent = (lang === 'en' ? (data.experience.badgeEn || dict['exp.badge'] || data.experience.badge) : (data.experience.badge || dict['exp.badge']));
    }

    const roleMeta = document.querySelector('[data-i18n="exp.role_meta"]');
    if (roleMeta) {
      roleMeta.textContent = (lang === 'en' ? `Role: ${data.experience.positionEn || 'Banking Intern'}` : `Posisi: ${data.experience.position || 'Banking Intern'}`);
    }

    const periodMeta = document.querySelector('[data-i18n="exp.period_meta"]');
    if (periodMeta) {
      periodMeta.textContent = (lang === 'en' ? `Period: ${data.experience.periodEn || 'March – August (6 Months)'}` : `Periode: ${data.experience.period || 'Maret – Agustus (6 Bulan)'}`);
    }

    const respList = (lang === 'en' ? (data.experience.responsibilitiesEn || data.experience.responsibilities) : data.experience.responsibilities);
    if (Array.isArray(respList) && respList.length > 0) {
      const dutyParas = document.querySelectorAll('.duty-item p');
      respList.forEach((resp, idx) => {
        if (dutyParas[idx]) dutyParas[idx].textContent = resp;
      });
    }
  }

  // 3d. Update Organizations Section (Bilingual Support)
  if (data.organizations && Array.isArray(data.organizations) && data.organizations.length > 0) {
    const orgTimeline = document.querySelector('.org-timeline');
    if (orgTimeline) {
      orgTimeline.innerHTML = data.organizations.map((org, idx) => {
        const name = (lang === 'en' ? (org.nameEn || org.name) : (org.nameId || org.name));
        const pos = (lang === 'en' ? (org.positionEn || org.position) : (org.positionId || org.position));
        const acts = (lang === 'en' ? (org.activitiesEn || org.activities) : (org.activitiesId || org.activities));
        return `
          <div class="org-card reveal revealed">
            <div class="org-icon">
              <i data-lucide="${idx === 0 ? 'award' : 'heart-handshake'}"></i>
            </div>
            <div class="org-content">
              <div class="org-header">
                <h3>${name}</h3>
                <span class="org-period">${org.period}</span>
              </div>
              <p class="org-position"><i data-lucide="star"></i> ${pos}</p>
              ${Array.isArray(acts) && acts.length ? `
                <ul class="org-activities">
                  ${acts.map(act => `<li>${act}</li>`).join('')}
                </ul>
              ` : ''}
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 3e. Update Achievements Section (Bilingual Support)
  if (data.achievements && Array.isArray(data.achievements) && data.achievements.length > 0) {
    const achGrid = document.querySelector('.achievements-grid');
    if (achGrid) {
      const icons = ['trophy', 'medal', 'flag', 'award', 'star'];
      achGrid.innerHTML = data.achievements.map((ach, idx) => {
        const rank = (lang === 'en' ? (ach.rankEn || ach.rank) : (ach.rankId || ach.rank));
        const title = (lang === 'en' ? (ach.titleEn || ach.title) : (ach.titleId || ach.title));
        const org = (lang === 'en' ? (ach.organizerEn || ach.organizer) : (ach.organizerId || ach.organizer));
        return `
          <div class="achievement-card reveal revealed">
            <div class="achievement-icon">
              <i data-lucide="${icons[idx % icons.length]}"></i>
            </div>
            <h3 class="achievement-rank">${rank}</h3>
            <p class="achievement-title">${title}</p>
            <p class="achievement-org"><i data-lucide="map-pin" style="width:13px;height:13px;display:inline-block;vertical-align:middle;"></i> ${org}</p>
          </div>
        `;
      }).join('');
    }
  }

  // 3f. Update Skills Section (Bilingual Support)
  if (data.skills) {
    const techSkills = (lang === 'en' ? (data.skills.technicalEn || data.skills.technical) : (data.skills.technicalId || data.skills.technical));
    if (Array.isArray(techSkills) && techSkills.length > 0) {
      const techList = document.querySelector('.skills-category:nth-child(1) .skills-list');
      if (techList) {
        techList.innerHTML = techSkills.map(s => `
          <div class="skill-item"><i data-lucide="check"></i><span>${s}</span></div>
        `).join('');
      }
    }
    const profSkills = (lang === 'en' ? (data.skills.professionalEn || data.skills.professional) : (data.skills.professionalId || data.skills.professional));
    if (Array.isArray(profSkills) && profSkills.length > 0) {
      const profList = document.querySelector('.skills-category:nth-child(2) .skills-list');
      if (profList) {
        profList.innerHTML = profSkills.map(s => `
          <div class="skill-item"><i data-lucide="check"></i><span>${s}</span></div>
        `).join('');
      }
    }
  }

  // 4. Update Dynamic Certificates (Bilingual Support & Image Thumbnails)
  if (data.certificates && Array.isArray(data.certificates) && data.certificates.length > 0) {
    const certGrid = document.querySelector('.certificates-grid');
    if (certGrid) {
      certGrid.innerHTML = data.certificates.map(c => {
        const title = (lang === 'en' ? (c.titleEn || c.title) : (c.titleId || c.title));
        const issuer = (lang === 'en' ? (c.issuerEn || c.issuer) : (c.issuerId || c.issuer));
        const btnView = dict['cert.btn_view'] || (lang === 'en' ? 'View Certificate' : 'Lihat Sertifikat');
        return `
          <div class="certificate-card reveal revealed">
            <div class="cert-image">
              <img src="${c.image}" alt="${title}" class="cert-img-thumb" title="${lang === 'en' ? 'Click to preview' : 'Klik untuk memperbesar'}">
              <div class="cert-seal"><i data-lucide="check"></i></div>
            </div>
            <div class="cert-body">
              <h3>${title}</h3>
              <p class="cert-issuer"><i data-lucide="building"></i> ${issuer}</p>
              <p class="cert-year"><i data-lucide="calendar"></i> ${c.year || ''}</p>
              <button class="btn btn-small btn-outline cert-view-btn"><i data-lucide="eye"></i> <span>${btnView}</span></button>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 5. Update Dynamic Projects (Bilingual Support)
  if (data.projects && Array.isArray(data.projects) && data.projects.length > 0) {
    const projGrid = document.querySelector('.portfolio-grid');
    if (projGrid) {
      projGrid.innerHTML = data.projects.map(p => {
        const title = (lang === 'en' ? (p.titleEn || p.title) : p.title);
        const category = (lang === 'en' ? (p.categoryEn || p.category) : p.category);
        const subtitle = (lang === 'en' ? (p.subtitleEn || p.subtitle) : p.subtitle);
        const desc = (lang === 'en' ? (p.descriptionEn || p.description) : p.description);
        const btnDetails = dict['port.btn_details'] || (lang === 'en' ? 'Methodology Details' : 'Detail Metodologi');
        const btnPdf = dict['port.btn_pdf'] || (lang === 'en' ? 'Summary PDF' : 'Ringkasan PDF');
        return `
          <div class="portfolio-card reveal revealed" data-category="${(p.category || 'research').toLowerCase()}">
            <div class="card-image">
              <img src="${p.image}" alt="${title}" class="card-img-cover">
              <span class="card-category">${category}</span>
            </div>
            <div class="card-body">
              <h3>${title}</h3>
              ${subtitle ? `<p class="card-title-detail">${subtitle}</p>` : ''}
              <p class="card-desc">${desc}</p>
              <div class="card-actions">
                <button class="btn btn-small btn-primary project-view-btn" data-project="${p.id || 'thesis'}"><i data-lucide="info"></i> <span>${btnDetails}</span></button>
                ${p.pdfUrl ? `<a href="${p.pdfUrl}" target="_blank" class="btn btn-small btn-ghost"><i data-lucide="file-text"></i> <span>${btnPdf}</span></a>` : ''}
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 6. Update Dynamic Experience Activities
  if (data.experience && Array.isArray(data.experience.activities) && data.experience.activities.length > 0) {
    const expGal = document.querySelector('#experience .gallery-grid');
    if (expGal) {
      expGal.innerHTML = data.experience.activities.map(act => `
        <div class="gallery-item" data-caption="${act.caption || act.title || 'Aktivitas Magang Bank BTN'}">
          <img src="${act.image}" alt="${act.title || 'Aktivitas'}">
          <div class="gallery-item-overlay"><i data-lucide="maximize-2"></i></div>
        </div>
      `).join('');
    }
  }

  // 7. Update Dynamic Gallery Masonry
  if (data.gallery && Array.isArray(data.gallery) && data.gallery.length > 0) {
    const galleryGrid = document.querySelector('.gallery-masonry');
    if (galleryGrid) {
      galleryGrid.innerHTML = data.gallery.map(g => `
        <div class="gallery-masonry-item" data-caption="${g.caption || g.title || ''}">
          <img src="${g.image}" alt="${g.title || 'Dokumentasi Farhan Hilal'}">
          <div class="gallery-overlay"><span>${g.title || g.caption || ''}</span></div>
        </div>
      `).join('');
    }
  }

  // 8. Update CV Download Links
  if (data.cv && data.cv.pdfUrl) {
    document.querySelectorAll('a[download]').forEach(a => {
      a.setAttribute('href', data.cv.pdfUrl);
    });
    document.querySelectorAll('.cv-actions a[target="_blank"]').forEach(a => {
      a.setAttribute('href', data.cv.pdfUrl);
    });
  }

  // 9. Update Contact Links
  if (data.contact) {
    if (data.contact.email) {
      document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
        a.setAttribute('href', `mailto:${data.contact.email}`);
        if (a.classList.contains('contact-email-text')) a.textContent = data.contact.email;
      });
    }
    if (data.contact.linkedin) {
      const lUrl = data.contact.linkedin.startsWith('http') ? data.contact.linkedin : `https://${data.contact.linkedin}`;
      const el = document.getElementById('contact-linkedin-link');
      if (el) { el.href = lUrl; el.textContent = data.contact.linkedin; }
      const fEl = document.getElementById('footer-linkedin-link');
      if (fEl) fEl.href = lUrl;
    }
    if (data.contact.instagram) {
      const igHandle = data.contact.instagram.replace('@', '');
      const igUrl = data.contact.instagram.startsWith('http') ? data.contact.instagram : `https://instagram.com/${igHandle}`;
      const el = document.getElementById('contact-instagram-link');
      if (el) { el.href = igUrl; el.textContent = `@${igHandle}`; }
      const fEl = document.getElementById('footer-instagram-link');
      if (fEl) fEl.href = igUrl;
    }
    if (data.contact.whatsapp) {
      const cleanWa = data.contact.whatsapp.replace(/[^0-9]/g, '');
      const intlWa = cleanWa.startsWith('0') ? '62' + cleanWa.slice(1) : cleanWa;
      const waLink = document.getElementById('contact-whatsapp-link');
      if (waLink) {
        waLink.href = `https://wa.me/${intlWa}`;
        waLink.textContent = data.contact.whatsapp;
      }
      const footerWa = document.getElementById('footer-whatsapp-link');
      if (footerWa) {
        footerWa.href = `https://wa.me/${intlWa}`;
      }
    }
    if (data.contact.github) {
      const gUrl = data.contact.github.startsWith('http') ? data.contact.github : `https://${data.contact.github}`;
      const cGit = document.getElementById('contact-github-link');
      if (cGit) {
        cGit.href = gUrl;
        cGit.textContent = data.contact.github.replace(/^https?:\/\//, '');
      }
      const fGit = document.getElementById('footer-github-link');
      if (fGit) fGit.href = gUrl;
      const hGit = document.getElementById('hero-github-link');
      if (hGit) hGit.href = gUrl;
    }
  }

  // Re-bind interactive events for dynamically generated elements
  if (typeof window.bindLightboxEvents === 'function') {
    window.bindLightboxEvents();
  }
  if (typeof window.bindProjectModalButtons === 'function') {
    window.bindProjectModalButtons();
  }
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Run synchronization
syncPortfolioData();
