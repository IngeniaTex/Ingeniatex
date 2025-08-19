import workBg from "../../../../public/assets/img/work-process/work-process-bg-2.png";
import arrow1 from "../../../../public/assets/img/work-process/work-process-arrow-1.png";
import arrow2 from "../../../../public/assets/img/work-process/work-process-arrow-2.png";
import arrow3 from "../../../../public/assets/img/work-process/work-process-arrow-1.png";

const WorkAreaFive = () => {
    return (        
        <div className="work-process__three" style={{backgroundImage: `url(${workBg.src})`}}>
            <div className="container">
                <div className="row justify-content-center text-center mb-50">
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <span className="subtitle-one">Nuestro proceso</span>
                        <h2>Así trabajamos contigo</h2>
                    </div>
                </div>
                <div className="work-process__three-card">
                    <div className="work-process__three-card-arrows">
                        <img src={arrow1.src} alt="arrow" className="arrow-1" />
                        <img src={arrow2.src} alt="arrow" className="arrow-2" />
                        <img src={arrow3.src} alt="arrow" className="arrow-3" />
                    </div>
                    <div className="work-process__three-card-single">
                        <h3>01</h3>
                        <h5>Escuchamos tus ideas</h5>
                        <p>El primer paso es conocerte: entendemos tus retos y objetivos para 
                        transformar tu visión en un plan claro.</p>
                    </div>
                    <div className="work-process__three-card-single middle">
                        <h3>02</h3>
                        <h5>Diseñamos la solución</h5>
                        <p>Convertimos las ideas en propuestas reales, aplicando tecnología de 
                        vanguardia y las mejores prácticas de desarrollo.</p>
                    </div>
                    <div className="work-process__three-card-single">
                        <h3>03</h3>
                        <h5>Entregamos resultados</h5>
                        <p>Ponemos en tus manos la solución final: funcional, intuitiva y lista 
                        para impulsar el crecimiento de tu negocio.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkAreaFive;