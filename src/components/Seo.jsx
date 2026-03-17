import { useEffect } from "react";
import { siteConfig } from "../data/site";

function updateMetaTag(selector, attribute, value) {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, selector.match(/"(.+)"/)?.[1] ?? "");
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", value);
}

function Seo({ title, description = siteConfig.metaDescription, keywords = siteConfig.keywords }) {
  useEffect(() => {
    document.title = title;
    updateMetaTag('meta[name="description"]', "name", description);
    updateMetaTag('meta[name="keywords"]', "name", keywords);
  }, [description, keywords, title]);

  return null;
}

export default Seo;
