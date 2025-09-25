"use client";
import { useParams } from "next/navigation";
import servicesData from "@/components/data/services-data";

const ServicesSingle = () => {
  const { id } = useParams(); // obtiene el [id] de la URL
  const service = servicesData.find((item) => item.id === id);

  if (!service) {
    return (
      <section className="p-10 text-center">
        <h1 className="text-2l font-bold">Servio no encontrado!</h1>
        <p>El servicio que buscas no existe o fue removido.</p>
      </section>
    );
  }

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="mb-6">{service.description}</p>
  
      {service.features && (
        <ul className="grid md:grid-cols-2 gap-6">
          {service.features.map((feature, index) => (
            <li key={index} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="font-semibole text-lg mb-2">{feature.title}</h2>
              <p>{feature.text}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ServicesSingle;