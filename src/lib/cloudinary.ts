/**
 * Cloudinary Next.js Loader and Utilities
 * Useful for optimizing latency leveraging Cloudinary's global CDN.
 */

// Use environment variable for Cloudinary Cloud Name.
const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '';

/**
 * Generates an optimized Cloudinary URL for images.
 */
export function getCloudinaryImageUrl(publicId: string, width?: number, quality?: number) {
  const path = publicId.startsWith('/') ? publicId.slice(1) : publicId;
  const params = ['f_auto', 'c_limit'];
  if (width) params.push(`w_${width}`);
  params.push(`q_${quality || 'auto'}`);

  return `https://res.cloudinary.com/${cloudName}/image/upload/${params.join(',')}/${path}`;
}

/**
 * Image loader function for next/image
 * Usage in Next.js Image component:
 * <Image loader={cloudinaryLoader} src="my_image.png" width={500} height={500} />
 */
export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  return getCloudinaryImageUrl(src, width, quality);
}

/**
 * Helper for `<video>` tags using Cloudinary CDN
 */
export function getCloudinaryVideoUrl(publicId: string) {
  const path = publicId.startsWith('/') ? publicId.slice(1) : publicId;
  return `https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_auto/${path}`;
}
