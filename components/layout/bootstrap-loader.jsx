"use client";
import { useEffect } from "react";

// Carga el JS de Bootstrap en el cliente. Vive en su propio componente para que
// app/layout.jsx pueda ser Server Component y exportar metadata real.
const BootstrapLoader = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.min.js");
    }, []);
    return null;
};

export default BootstrapLoader;
