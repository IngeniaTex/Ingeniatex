"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle + " - Ingeniatex - Web Services & Automation";
  }, []);
};

export default SEO;