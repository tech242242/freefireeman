import { useEffect } from "react";

/**
 * A custom hook to dynamically update document metadata for search engine optimization (SEO).
 * Supports standard meta tags, Open Graph (OG), Twitter Cards, and Canonical URL.
 * 
 * @param {Object} seoOptions - SEO configuration options
 * @param {string} seoOptions.title - Page title
 * @param {string} seoOptions.description - Page meta description
 * @param {string} seoOptions.keywords - Comma-separated list of keywords
 * @param {string} seoOptions.canonical - Canonical URL of the page (defaults to current window location path)
 * @param {string} seoOptions.ogImage - Specific open graph image URL (optional)
 * @param {string} seoOptions.ogType - Open graph type (defaults to 'website')
 */
export default function useSEO({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website"
}) {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // Helper to find or create meta/link elements
    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // 2. Update Meta Description
    if (description) {
      setMetaTag("name", "description", description);
      setMetaTag("property", "og:description", description);
      setMetaTag("name", "twitter:description", description);
    }

    // 3. Update Keywords
    if (keywords) {
      setMetaTag("name", "keywords", keywords);
    }

    // 4. Update Canonical Link
    const currentHref = canonical || window.location.href;
    setLinkTag("canonical", currentHref);
    setMetaTag("property", "og:url", currentHref);

    // 5. Update Open Graph Titles & Twitter Titles
    if (title) {
      setMetaTag("property", "og:title", title);
      setMetaTag("name", "twitter:title", title);
    }

    // 6. Update Image if provided
    if (ogImage) {
      setMetaTag("property", "og:image", ogImage);
      setMetaTag("name", "twitter:image", ogImage);
    }

    // 7. Update Type
    if (ogType) {
      setMetaTag("property", "og:type", ogType);
    }

  }, [title, description, keywords, canonical, ogImage, ogType]);
}
