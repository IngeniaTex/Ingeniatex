import RequestQuote from "@/components/pages/request-quote";

const description =
    "Cuéntanos qué necesita tu negocio y te enviamos una cotización sin compromiso: páginas web, desarrollo a la medida, mantenimiento o integraciones.";

export const metadata = {
    title: "Solicitar cotización",
    description,
    alternates: { canonical: "/request-quote" },
    openGraph: { url: "/request-quote", title: "Solicitar cotización | Ingeniatex", description },
};

const RequestQuotePage = () => {
    return (
        <>
            <RequestQuote />
        </>
    );
};

export default RequestQuotePage;
