import Social from "@/components/data/social";
import Link from "next/link";
import logo from "../../../public/assets/img/logo-1.png";
import subscribe from "../../../public/assets/img/subscribe/subscribe-three-shape.png";
import ctaBg from "../../../public/assets/img/subscribe/subscribe-three-bg.png";
import servicesData from "@/components/data/services-data";

const FooterSix = () => {
    return (
        <>
		{/* <div className="subscribe__one three">
			<img src={subscribe.src} className="subscribe__three-shape" alt="image" />
			<div className="container">
				<div className="row justify-content-center text-center subscribe__one-content" style={{backgroundImage: `url(${ctaBg.src})`}}>
					<div className="col-xl-7 col-lg-8">
						<div className="subscribe__one-title">
							<h3>Join Our Newsletter</h3>
							<p>Don't miss out on the essential IT news and updates - join our newsletter community today!</p>
						</div>
						<form action="#" className="subscribe__one-form">
							<input type="email" placeholder="Enter Your Email" />
							<button className="btn-two" type="submit">subscribe now</button>
						</form>
					</div>
				</div>
			</div>
		</div> */}
		<div className="footer__five">
			<div className="container pb-80">
				<div className="row gy-4 justify-content-between">
					<div className="col-xl-3 col-md-6 col-sm-7 xl-mb-30">
						<div className="footer__five-widget">
							<div className="footer__five-widget-about">
								<Link href="/"><img src={logo.src} alt="image" /></Link>
								<p>En Ingeniatex creamos soluciones digitales diseñadas para impulsar el crecimiento de tu empresa.</p>
								<div className="footer__five-widget-about-social">
									<Social />
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6 col-sm-5 sm-mb-30">
						<div className="footer__five-widget border-one">
							<h4 className="ml-60">Recursos</h4>
							<div className="footer__five-widget-solution ml-60">
								<ul>
									{/* <li><Link href="/services"><i className="far fa-chevron-double-right"></i>Servicios</Link></li> */}
									<li><Link href="/faq"><i className="far fa-chevron-double-right"></i>Preguntas frecuentes</Link></li>
									{/* <li><Link href="/testimonial"><i className="far fa-chevron-double-right"></i>Testimonios</Link></li> */}
									<li><Link href="/about"><i className="far fa-chevron-double-right"></i>Sobre nosotros</Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6 col-sm-5 sm-mb-30">
						<div className="footer__five-widget border-one">
							<h4>Service</h4>
							<div className="footer__five-widget-solution">
								<ul>
									{servicesData.slice(0, 4).map((data, id) => {
										const words = data.title.split(' ');
										const firstAndSecondWord = words.slice(0, 3).join(' ');
										return (
											<li key={id}><Link href={`/services/${data.id}`}><i className="far fa-chevron-double-right"></i>{firstAndSecondWord}</Link></li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6 col-sm-6 sm-mb-30">
						<div className="footer__five-widget border-one">
							<h4>Contact</h4>
							<div className="footer__five-widget-location">
								<p>Contáctanos para recibir asesoría experta en nuestras soluciones digitales.</p>
								<div className="footer__five-widget-location-item">
									<div className="footer__five-widget-location-item-icon">
										<i className="flaticon-telephone-call"></i>
									</div>
									<div className="footer__five-widget-location-item-info email">
										<span>Llámanos</span>
										<Link href="tel:+09(307)555-0133">+52 999-279-8371</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="copyright__one two">
				<div className="container">
					<div className="row justify-content-between copyright__one-container-area">
						<div className="col-xl-5 col-lg-6"> 
							<div className="copyright__one-left">
								<p>© Ingeniatex 2025 | Todos los derechos reservados</p>
							</div>
						</div>
						<div className="col-xl-5 col-lg-6">
							<div className="copyright__one-right">
								<Link href="/about">Política de privacidad</Link>
								<Link href="/contact">Contáctanos</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        </>
    );
};

export default FooterSix;