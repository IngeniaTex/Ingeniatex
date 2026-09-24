import HomeFive from "@/components/pages/homes/home-5";
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION } from "@/components/data/site";

export const metadata = {
    title: { absolute: `${SITE_NAME} — ${SITE_TAGLINE}` },
    description: SITE_DESCRIPTION,
    alternates: { canonical: "/" },
    openGraph: {
        url: "/",
        title: `${SITE_NAME} — ${SITE_TAGLINE}`,
        description: SITE_DESCRIPTION,
    },
};

export default function Home() {
    return (
        <>
            <HomeFive />
        </>
    );
}
