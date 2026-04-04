# Hyon Technologies - Architecture & Refactoring Guide

## Codebase Organization

The codebase has been refactored to emphasize modularity, separation of concerns, and reusable components. 
It follows standard Next.js constraints while leveraging clean file segregation.

### Folder Structure Overview

- **`src/app/`**: Next.js App Router root. Contains route handlers, static generation (`page.tsx`), and metadata definitions.
- **`src/components/ui/`**: Pure, generic UI components. Components here are designed to be highly reusable, presentation-only, and domain-agnostic (e.g., `button.tsx`, `card.tsx`).
- **`src/components/webgl/`**: Specialized folder for heavy 3D visualizations and graphics. Separation ensures they do not clutter standard UI structures and manages webGL contexts locally (`Globe`, `Galaxy`, `Radar`).
- **`src/sections/`**: Full-page sections or layout blocks. These components typically glue together several UI pieces and often include localized state, logic, or data-fetching hooks. Examples include `navbar.tsx`, `clients-section.tsx`, `projects-modal.tsx`.
- **`src/lib/`**: Core utilities, third-party adapters, and configurations.
- **`src/services/`**: Centralized content/data management logic.

## Reusable Utilities

### Cloudinary Integration

We have adopted a global Cloudinary utility, found in `src/lib/cloudinary.ts`.
This cleanly supports fetching optimized images directly from Cloudinary’s CDN via dynamic scaling based on client specs.

**Usage with `next/image`:**
```tsx
import Image from "next/image";
import cloudinaryLoader from "@/lib/cloudinary";

// Seamlessly passes the Next.js `src`, `width`, and `quality` to Cloudinary.
<Image 
  loader={cloudinaryLoader} 
  src="/your-image-id-or-path.png" 
  alt="Optimized" 
  width={800} 
  height={600} 
/>
```

**Manual / Raw URL usage:**
```tsx
import { getCloudinaryImageUrl, getCloudinaryVideoUrl } from "@/lib/cloudinary";

const bgUrl = getCloudinaryImageUrl('hero-background', 1920, 80);
const rawVideoUrl = getCloudinaryVideoUrl('hero-loop-video');
```

*Note: The environment variable `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` must be set in your `.env.local` file for these URLs to generate properly.*

## Clean Code Rules
- **D.R.Y (Don’t Repeat Yourself)**: If a specific UI button or layout block is used more than twice, extract it to `src/components/ui`.
- **Vertical Slices for Sections**: If building a large portion of a landing page (like the Features Grid or Testimonials layout), build it within a new file in `src/sections/`. Keep `src/app/page.tsx` as mostly imports of Section wrappers.
- **Dangling Files**: Do not commit commented-out `.bak` files, dead scripts, or untested features. Keep the tree pruned.
+
+## SEO & Performance Architecture
+
+### Search Engine Optimization (SEO)
+
+We have implemented a robust, automated SEO system designed for maximum crawlability and search visibility:
+
+- **Dynamic Sitemap (`src/app/sitemap.ts`)**: Automatically generates a `sitemap.xml` containing all static pages, category detail pages, and individual service pages. This ensures every deep link is indexed.
+- **Robots.txt (`src/app/robots.ts`)**: Dynamically serves `robots.txt` using the Next.js Metadata API, pointing to the sitemap and managing crawler access.
+- **Structured Data (JSON-LD)**: We use inline JSON-LD scripts in the `<head>` (via `layout.tsx` and detail pages) rather than `afterInteractive` scripts. This ensures that search engine crawlers can see the structured data in the initial HTML response.
+- **Metadata API**: All pages leverage the Next.js Metadata API for dynamic titles, descriptions, canonical URLs, and Open Graph/Twitter tags.
+
+### Homepage SSR Refactor (Server/Client Split)
+
+To balance high-performance WebGL animations with SEO requirements, the homepage follows a specific split:
+
+1.  **`src/app/page.tsx` (Server Component)**: The entry point is a Server Component. This allows us to export static `metadata` and perform server-side rendering of the initial page shell.
+2.  **`src/app/HomeClient.tsx` (Client Component)**: Contains the interactive logic, Framer Motion animations, and WebGL overlays.
+3.  **Selective SSR for Sections**: Heavy interactive sections like `FeaturesCards`, `ClientsSection`, and `RadialOrbitalTimeline` are dynamically imported *with* SSR enabled. This ensures that their text content and internal links are present in the initial HTML for SEO, while the JavaScript hydration happens on the client.
+4.  **No-SSR for WebGL**: Graphics-heavy components (e.g., `Galaxy`, `OrbRenderer`) use `ssr: false` to prevent server-side errors and reduce the initial bundle size.
