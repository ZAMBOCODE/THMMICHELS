import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

const BASE_URL = 'https://thm-michels.de';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;
const SITE_NAME = 'THM Michels';

export default function SEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  noindex = false,
}: SEOProps) {
  const { pathname } = useLocation();
  const fullCanonical = canonical || `${BASE_URL}${pathname}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Meta tags
    const metaTags: Record<string, string> = {
      description,
      robots: noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      // Open Graph
      'og:title': ogTitle || fullTitle,
      'og:description': ogDescription || description,
      'og:url': fullCanonical,
      'og:image': ogImage || DEFAULT_OG_IMAGE,
      'og:type': ogType,
      'og:locale': 'de_DE',
      'og:site_name': SITE_NAME,
      // Twitter
      'twitter:card': 'summary_large_image',
      'twitter:title': ogTitle || fullTitle,
      'twitter:description': ogDescription || description,
      'twitter:image': ogImage || DEFAULT_OG_IMAGE,
      'twitter:url': fullCanonical,
    };

    // Set or update meta tags
    for (const [key, value] of Object.entries(metaTags)) {
      const isOg = key.startsWith('og:');
      const isTwitter = key.startsWith('twitter:');
      const attr = isOg || isTwitter ? 'property' : 'name';

      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    }

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', fullCanonical);

    // Cleanup: restore defaults on unmount
    return () => {
      document.title = `${SITE_NAME} | Individuelle Container & Event-Trailer aus Waiblingen`;
    };
  }, [fullTitle, description, fullCanonical, ogTitle, ogDescription, ogImage, ogType, noindex]);

  return null;
}
