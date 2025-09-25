"use client";
import { useParams } from "next/navigation";
import servicesData from "@/components/data/services-data";

const ServicesSingle = () => {
  const { id } = useParams();
  const service = servicesData.find((item) => item.id === id);

  if (!service) {
    return (
      <section className="p-10 text-center">
        <h1 className="text-2xl font-bold">Servicio no encontrado</h1>
      </section>
    );
  }

  return (
    <div className="service__details section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service__details-thumb">
              <img src={service.imageMain} alt={service.title} />
              <div className="service__details-thumb-icon">
                <div className="service__details-thumb-icon-wrapper">
                  <img src={service.icon1} alt="icon" />
                </div>
              </div>
            </div>
            <div className="service__details-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>

              {service.sections?.map( (section, idx) => (
                <div key={idx}>
                  {section.heading && <h2>{section.heading}</h2>}
                  {section.text && <p>{section.text}</p>}
                  {section.subHeading && (
                    <>
                    <h3 className="sub-heading">{section.subHeading}</h3>
                    <p>{section.text}</p>
                  </>
                  )}
                  {section.box1 && (
                    <div className="service__details-content-box">
                      <div className="service__details-content-box-single">
                        <h4>{section.box1.heading}</h4>
                        <p>{section.box1.text}</p>
                        {section.box1.list && (
                          <ul className="service-qualities">
                          {section.box1.list.map((li, i) => <li key={i}>{li}</li>)}
                          </ul>
                       )}
                      </div>
                      <div className="service__details-content-box-single">
                        <div className="icon">
                          <img src={service.icon2} alt="icon" />
                        </div>
                        <h4 className="mb-4">{section.box2.heading}</h4>
                        <p>{section.box2.text}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSingle;