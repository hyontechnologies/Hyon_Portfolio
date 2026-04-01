# Project Updates & Changelog

## 🚀 Architectural & Performance Optimizations
An extensive audit of the Framer Motion animations and browser rendering pipeline was conducted to address layout thrashing and JS-thread scroll jank.

* **Precise Intersection Observers:** Replaced standard `whileInView` props across `page.tsx` with a custom `<ScrollReveal>` wrapper. This implements `useInView({ once: true })` and `useAnimation()` under the hood to completely prevent expensive scroll-back re-trigger calculations.
* **Redundant React Tree Reconciliation:** Removed the `<AnimatePresence>` wrapper around the mapped cards in `card-stack.tsx`. Since none of the child components defined an `exit` animation behavior, this component was adding unnecessary reconciliation overhead.
* **Selective GPU Layering (`will-change`):** The card stack previously mapped the Tailwind `will-change-transform` class to *every* card equally. This was refactored into a highly-optimized inline prop: `willChange: isActive ? "transform" : "auto"`. This reserves hardware-accelerated memory strictly for the card being actively interacted with, avoiding GPU context/layer inflation across static elements.
* **Transform vs Geometry verification:** Audited all motion values to ensure interactive drag physics, hover scales, and scroll-linked parallaxes seamlessly natively animate `x`, `y`, `scale`, and `rotateZ` directly on the GPU. Verified that CSS positional layout properties (`top`, `margin`, `width`, `height`) are not arbitrarily animated inside `useScroll` or `useTransform`.

## 🐛 Bug Fixes
* Added missing `useEffect` import from `"react"` triggering IDE errors in `src/app/page.tsx`.
* Corrected mismatched JSX closing tags to correctly close the `<ScrollReveal>` tag on line 784 in `src/app/page.tsx` (previously incorrectly closed with `</motion.div>`).

## 🔧 Version Control & Infrastructure
* **Fixed HTTP 403 Git Errors:** Successfully cleared suspended GitHub account credentials overlapping inside the Windows Credential Manager.
* **Repository Hookup:** Initialized Git and successfully pushed the newly optimized codebase to the new remote configuration at: `https://github.com/ADITYA1122004/Ark-site.git` on the `main` branch.
