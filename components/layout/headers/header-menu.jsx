import Link from 'next/link';

const MainMenu = () => {
  return (
    <>
      <ul>
        <li className="menu-item-has-children">
          <Link href="/">Home</Link>
        </li>
        <li className="menu-item-has-children">
          <Link href="#">Servicios <i className="fas fa-angle-down"></i></Link>
          <ul className="sub-menu">
            <li><Link href="/services/paginas-web">Páginas Web</Link></li>
            <li><Link href="/services/qa-automation">Automatización QA/RPA</Link></li>
            <li><Link href="/services/aplicaciones-web">Aplicaciones Web</Link></li>
          </ul>
        </li>
        <li><Link href="/about">Nosotros</Link></li>
        <li><Link href="/request-quote">Contacto</Link></li>
      </ul>
    </>
  );
};

export default MainMenu;