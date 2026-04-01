/**
 * Cloudinary Next.js Loader and Utilities
 * Useful for optimizing latency leveraging Cloudinary's global CDN.
 */

// Image loader function for next/image
export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
  
  // Example implementation. Replace with actual cloud name.
  // We check if it is already a full URL or a relative path from the public directory
  const path = src.startsWith('/') ? src.slice(1) : src;
  
  // NOTE: Requires a valid Cloudinary cloud name.
  return `https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/${params.join(',')}/${path}`;
}

// Helper for `<video>` tags using Cloudinary CDN
export function getCloudinaryVideoUrl(publicId: string) {
  return `https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/q_auto,f_auto/${publicId}`;
}
