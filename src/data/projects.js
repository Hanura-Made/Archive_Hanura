export const CATEGORIES = [
  { id: 'ALL', label: 'ALL' },
  { id: 'VISUALS', label: 'VISUALS' },
  { id: 'SYSTEMS', label: 'SYSTEMS' },
  { id: 'INTELLIGENCE', label: 'INTELLIGENCE' },
];

/**
 * Panduan Field:
 * - id: Nomor urut (string, misal: "01", "02")
 * - slug: Identifier unik (kebab-case)
 * - title: Judul proyek
 * - categoryKey: 'VISUALS' | 'SYSTEMS' | 'INTELLIGENCE'
 * - categoryLabel: Label kategori untuk metadata UI
 * - year: Tahun pembuatan/rilis
 * - stack: Array string teknologi yang digunakan
 * - description: 1-3 kalimat penjelasan ringkas
 * - github: URL GitHub (null jika tidak ada)
 * - demo: URL Live Demo / View (null jika tidak ada)
 * - image: URL gambar beresolusi tinggi
 * - span: Class layout Tailwind untuk variasi masonry (default: "col-span-12 md:col-span-6")
 * - aspect: Rasio aspek gambar (misal: "aspect-[16/11]", "aspect-[4/5]", "aspect-[16/10]")
 */
export const ARCHIVE_ITEMS = [
  {
    id: "01",
    slug: "employee-permission-flow",
    title: "Employee Permission Flow",
    categoryKey: "SYSTEMS",
    categoryLabel: "SYSTEMS / FULLSTACK DEVELOPMENT",
    year: "2025",
    stack: ["Laravel 11","React", "Vite", "MySQL", "Telegram Bot API", "Tailwind CSS"],
    description: "An internal digital workflow platform engineered to eliminate paper approvals through real-time notifications, strict authorization states, and automated HR audit trails.",
    github: "https://github.com/Hanura-Made",
    demo: "https://hanuraporto90.vercel.app/",
    span: "col-span-12 md:col-span-7",
    aspect: "aspect-[16/11]",
    image: "projects/izin-karyawan/mockup.png"
  },
  {
    id: "02",
    slug: "periocular-gender-vit",
    title: "Periocular Gender Clasification ViT",
    categoryKey: "INTELLIGENCE",
    categoryLabel: "INTELLIGENCE / DEEP LEARNING",
    year: "2025",
    stack: ["Python", "PyTorch", "ViT-B/16", "OpenCV", "Attention Rollout"],
    description: "Biometric gender classification pipeline trained on constrained periocular ocular crops using Vision Transformers, validated with self-attention rollout interpretability.",
    github: "https://github.com/Hanura-Made",
    demo: null,
    span: "col-span-12 md:col-span-5 md:pt-28",
    aspect: "aspect-[4/5]",
    image: "projects/eye-vit-classification/Mockup4.png"
  },
  {
    id: "03",
    slug: "coffee-roasting-Clasification",
    title: "Coffee Roasting Classification",
    categoryKey: "INTELLIGENCE",
    categoryLabel: "INTELLIGENCE / MECHINE LEARNING",
    year: "2024",
    stack: ["Python", "OpenCV", "Naive Bayes", "Scikit-Learn"],
    description: "Automated roast profile grading pipeline computing colorimetric distributions and reflectance metrics from uncalibrated camera frames under varying color temperatures.",
    github: "https://github.com/Hanura-Made",
    demo: null,
    span: "col-span-12 md:col-span-7 md:pt-24",
    aspect: "aspect-[16/11]",
    image: "projects/coffee-classification/mockup_4.png"
  },
  {
  id: "04",
  slug: "PenidaGo",
  title: "Penida-Go Travel",
  categoryKey: "SYSTEMS",
  categoryLabel: "FRONTEND DEVELOPMENT",
  year: "2025",
  stack: ["Tailwind CSS", "TypeScript", "Astro"],
  description: "High-performance travel landing page for Bali & Nusa Penida transfers. Built with a mobile-first approach, featuring seamless WhatsApp booking integration, SEO-optimized architecture, and fast load times.",
  github: "https://github.com/Hanura-Made/Penida-Go",
  demo: "https://penida-go.vercel.app/", 
  span: "col-span-12 md:col-span-6 md:pt-24",
  aspect: "aspect-[16/10]", 
  image: "projects/PenidaGO/MockupPenida.png"
}
];
