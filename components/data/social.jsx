import Link from 'next/link';
import React from 'react';

// Redes sociales de Ingeniatex. Se usa en los footers y en el panel lateral (offcanvas).
const Social = () => {
    return (
        <>
            <ul>
                <li>
                    <Link
                        href="https://www.facebook.com/profile.php?id=61580352764109"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook de Ingeniatex"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                </li>
                <li>
                    <Link
                        href="https://www.instagram.com/ingeniatex_mx/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram de Ingeniatex"
                    >
                        <i className="fab fa-instagram"></i>
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default Social;
