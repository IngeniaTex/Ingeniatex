"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle + " - Diseño y desarrollo de páginas web en Mérida";
  }, []);
};

export default SEO;