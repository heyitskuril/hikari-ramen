# Hikari Ramen House — Modern Web Experience

[![Live Demo](https://shields.io)](https://hikari-ramen.vercel.app)
[![Tech Stack](https://shields.io)](https://react.dev)

**Hikari Ramen House** adalah platform *landing page* premium yang dirancang khusus untuk industri F&B (Food & Beverage). Proyek ini menggabungkan estetika visual yang kuat dengan fungsionalitas konversi tinggi untuk menghadirkan pengalaman digital restoran Jepang yang otentik.

---

## Tech Stack

Membangun performa maksimal dengan teknologi modern:

- **Core:** React 19 & Vite (Fastest Development & Build Tool)
- **Language:** TypeScript (Type Safety & Maintainability)
- **Styling:** TailwindCSS 4 (Modern Utility-First CSS)
- **Animation:** Framer Motion (Fluid & Natural Transitions)
- **Icons:** Lucide Icons (Clean & Scalable Vectors)

---

## Project Goals

Proyek ini dikembangkan dengan tiga pilar utama:
1. **Showcase Portfolio:** Demonstrasi keahlian pengembangan web di niche F&B.
2. **UMKM Empowerment:** Studi kasus nyata dalam mendigitalisasi bisnis lokal agar tampil profesional.
3. **Reusable Framework:** Arsitektur yang dapat digunakan kembali sebagai boilerplate klien restoran atau kafe.

---

## Fitur Unggulan

- **Fast Loading:** Optimasi aset dan penggunaan Vite memastikan pemuatan instan.
- **Mobile-First:** Dirancang secara presisi agar nyaman diakses melalui smartphone.
- **Digital Menu:** Katalog visual berbasis kategori yang menggugah selera.
- **WhatsApp Integration:** Jalur pemesanan langsung untuk meningkatkan konversi.
- **Smooth Experience:** Animasi mikro yang memberikan kesan mewah pada setiap scroll.
- **Modular Design:** Komponen yang independen dan mudah untuk dikembangkan.

---

## Arsitektur Proyek

Menerapkan **Feature-Based Architecture** untuk memastikan kode tetap bersih dan mudah dikelola seiring berkembangnya fitur:

```text
src/features/
├── hero/           # First impression & branding
├── about/          # Brand story & values
├── menu/           # Dynamic menu catalog
├── testimonials/   # Social proof & trust builder
├── how-to-order/   # User journey guide
├── gallery/        # Visual ambiance
└── contact/        # Direct communication
```

### Mengapa ini penting?
*   **Scalability:** Memudahkan penambahan fitur baru tanpa merusak kode lama.
*   **Separation of Concern:** Logika antar-section terisolasi dengan rapi.
*   **Team Friendly:** Sangat mendukung kolaborasi tim atau manajemen agensi di masa depan.

---

## Struktur Folder

```text
src/
├── components/   # UI universal (Buttons, Cards, Modals)
├── features/     # Modul per halaman/section
├── constants/    # Data statis (Menu list, Branch info, Testimonials)
├── hooks/        # Custom React hooks logic
├── utils/        # Fungsi pembantu (Link WA builder, Formatters)
├── types/        # Definisi interface TypeScript
└── assets/       # Gambar, video, dan styling global
```

---

## Strategi Konversi (Sales-Driven)

Website ini bukan sekadar pajangan, tapi dirancang sebagai mesin penjualan:
- **Hero Hook:** Visual produk utama yang langsung disambung dengan tombol *Call to Action* (CTA).
- **Social Proof:** Menampilkan testimoni nyata untuk membangun kepercayaan calon pembeli.
- **Friction Reducer:** Section "How to Order" menjelaskan alur pemesanan agar pelanggan tidak bingung.
- **Floating WA:** Akses instan untuk bertanya atau memesan yang selalu tersedia di pojok layar.

---

## Kasus Penggunaan (UMKM)

Template arsitektur ini sangat ideal diadaptasi untuk:
*   Kedai Ramen & Sushi
*   Coffee Shop & Bistro
*   Street Food Brand
*   Cloud Kitchen & Catering Service

---

## Scripts

Gunakan perintah berikut untuk mengelola proyek:

```bash
# Jalankan development server
npm run dev

# Build untuk produksi
npm run build

# Preview hasil build secara lokal
npm run preview

# Cek kesalahan tipe data (TypeScript)
npm run lint
```

---

## SEO & Digital Presence

Dilengkapi dengan dasar SEO yang solid:
- **Meta Description & Keywords:** Optimasi mesin pencari.
- **Open Graph:** Tampilan rapi saat link dibagikan di media sosial.
- **Mobile Responsive:** Google memprioritaskan situs yang ramah perangkat seluler.
- **Performance Focused:** Skor performa tinggi untuk pengalaman pengguna yang baik.

---

## Penulis

**Kuril — Web Developer**
*Spesialis membantu UMKM & Bisnis Lokal Go Digital.*

- **WhatsApp:** [0898-5175-971](https://wa.me)
- **Instagram:** [@heyitskuril](https://instagram.com)
- **Portfolio:** [kuril.dev](https://kuril.dev)

---

## Catatan
*Proyek ini adalah **concept project** untuk keperluan demo portofolio dan bukan merupakan website resmi dari brand tertentu.*

---

## Dukungan
Jika proyek ini membantu atau menginspirasi Anda, jangan ragu untuk memberikan **Star** pada repo ini! ⭐



hikari-ramen/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── FloatingWhatsApp.tsx
│   │       └── FloatingDevBadge.tsx
│   ├── features/
│   │   ├── hero/
│   │   │   └── HeroSection.tsx
│   │   ├── about/
│   │   │   └── AboutSection.tsx
│   │   ├── menu/
│   │   │   ├── MenuSection.tsx
│   │   │   └── ProductCard.tsx
│   │   ├── testimonials/
│   │   │   └── TestimonialsSection.tsx
│   │   ├── how-to-order/
│   │   │   └── HowToOrderSection.tsx
│   │   ├── gallery/
│   │   │   └── GallerySection.tsx
│   │   └── contact/
│   │       └── ContactSection.tsx
│   ├── constants/
│   │   ├── business.ts
│   │   ├── navigation.ts
│   │   ├── products.ts
│   │   ├── testimonials.ts
│   │   └── steps.ts
│   ├── hooks/
│   │   └── useScrollDetection.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── whatsapp.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts