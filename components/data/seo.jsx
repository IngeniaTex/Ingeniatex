"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle + " - Páginas web y Automatización";
  }, []);
};

export default SEO;