import ErrorPage from "@/components/pages/error";

// 404 real de Next (responde con status 404, no 200).
export const metadata = {
    title: "Página no encontrada",
    robots: { index: false, follow: false },
};

const NotFound = () => {
    return (
        <>
            <ErrorPage />
        </>
    );
};

export default NotFound;
