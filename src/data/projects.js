export const CATEGORIES = [
  { id: 'ALL', label: 'ALL' },
  { id: 'VISUALS', label: 'VISUALS' },
  { id: 'SYSTEMS', label: 'SYSTEMS' },
  { id: 'INTELLIGENCE', label: 'INTELLIGENCE' },
];

/**
 * ARCHIVE_ITEMS
 * Untuk menambah/menghapus proyek, cukup edit array di bawah.
 * 
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
    categoryLabel: "SYSTEMS / GOVERNANCE",
    year: "2025",
    stack: ["Laravel 11", "Vite", "MySQL", "Telegram Bot API", "Tailwind CSS"],
    description: "An internal digital workflow platform engineered to eliminate paper approvals through real-time notifications, strict authorization states, and automated HR audit trails.",
    github: "https://github.com/Hanura-Made",
    demo: "https://hanuraporto90.vercel.app/",
    span: "col-span-12 md:col-span-7",
    aspect: "aspect-[16/11]",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: "02",
    slug: "periocular-gender-vit",
    title: "Periocular Gender ViT",
    categoryKey: "INTELLIGENCE",
    categoryLabel: "INTELLIGENCE / VISION AI",
    year: "2025",
    stack: ["Python", "PyTorch", "ViT-B/16", "OpenCV", "Attention Rollout"],
    description: "Biometric gender classification pipeline trained on constrained periocular ocular crops using Vision Transformers, validated with self-attention rollout interpretability.",
    github: "https://github.com/Hanura-Made",
    demo: null,
    span: "col-span-12 md:col-span-5 md:pt-28",
    aspect: "aspect-[4/5]",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "03",
    slug: "penidago-exploration-ui",
    title: "PenidaGo Spatial UI",
    categoryKey: "VISUALS",
    categoryLabel: "VISUALS / SPATIAL DESIGN",
    year: "2024",
    stack: ["Figma", "Design Systems", "Micro-Interactions", "Spatial Layouts"],
    description: "Experimental mobile itinerary interface engineered for high-contrast sunlight readability across Nusa Penida, focusing on tactile cards and typographic hierarchy.",
    github: null,
    demo: "https://hanuraporto90.vercel.app/",
    span: "col-span-12 md:col-span-5",
    aspect: "aspect-[4/5]",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "04",
    slug: "coffee-roasting-spectrum",
    title: "Coffee Roasting Spectrum",
    categoryKey: "INTELLIGENCE",
    categoryLabel: "INTELLIGENCE / COLORIMETRY",
    year: "2024",
    stack: ["Python", "OpenCV", "CIELAB Colorspace", "Scikit-Learn"],
    description: "Automated roast profile grading pipeline computing colorimetric distributions and reflectance metrics from uncalibrated camera frames under varying color temperatures.",
    github: "https://github.com/Hanura-Made",
    demo: null,
    span: "col-span-12 md:col-span-7 md:pt-24",
    aspect: "aspect-[16/11]",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: "05",
    slug: "monochrome-editorial",
    title: "Monochrome Editorial Engine",
    categoryKey: "VISUALS",
    categoryLabel: "VISUALS / BRUTALISM",
    year: "2024",
    stack: ["Typography", "Grid Systems", "Art Direction", "Motion Specs"],
    description: "Experimental typographic layouts exploring extreme clamp scales, high negative space, and architectural grid frameworks for digital archives.",
    github: null,
    demo: "https://hanuraporto90.vercel.app/",
    span: "col-span-12 md:col-span-6",
    aspect: "aspect-[16/10]",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
  },
  {
    id: "06",
    slug: "telemetry-sync-gateway",
    title: "Telemetry Sync Gateway",
    categoryKey: "SYSTEMS",
    categoryLabel: "SYSTEMS / DISTRIBUTED",
    year: "2025",
    stack: ["Node.js", "WebSocket", "Redis", "TypeScript", "Docker"],
    description: "Low-latency message routing service dispatching live sensor telemetry across edge nodes with automatic reconnection backoff and load balancing.",
    github: "https://github.com/Hanura-Made",
    demo: null,
    span: "col-span-12 md:col-span-6 md:pt-24",
    aspect: "aspect-[16/10]",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
  }
];
