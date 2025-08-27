import React from 'react';
import { Shield, Building, Package, CalendarDays, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicios = [
  {
    id: 'seguridad-personal',
    title: "Protección Ejecutiva",
    slogan: "Discreción y profesionalismo",
    description: "Guardaespaldas certificados con entrenamiento militar y policial. Protección 24/7 para personas de alto perfil.",
    icon: <Shield className="w-12 h-12" />,
  },
  {
    id: 'seguridad-empresarial',
    title: "Seguridad Corporativa",
    slogan: "Tu negocio en buenas manos",
    description: "Sistemas integrados de vigilancia física y electrónica para empresas, bancos y centros comerciales.",
    icon: <Building className="w-12 h-12" />,
  },
  {
    id: 'resguardo-bienes',
    title: "Custodia de Activos",
    slogan: "Protección en movimiento",
    description: "Transporte seguro de valores, mercancías y documentos confidenciales con vehículos blindados y protocolos anti-asalto.",
    icon: <Package className="w-12 h-12" />,
  },
  {
    id: 'seguridad-eventos',
    title: "Seguridad en Eventos",
    slogan: "Control total de multitudes",
    description: "Equipos especializados en conciertos, convenciones y eventos VIP. Prevención y manejo de situaciones críticas.",
    icon: <CalendarDays className="w-12 h-12" />,
  },
  {
    id: 'videovigilancia',
    title: "Vigilancia Inteligente",
    slogan: "Ojos en todas partes",
    description: "Monitoreo remoto con IA para detección de amenazas en tiempo real. Grabación en alta definición con almacenamiento en la nube.",
    icon: <Video className="w-12 h-12" />,
  }
];

const ServiceCards = () => {
  return (
    <div className="gradient-bg py-12 px-4">
      <div className="max-w-7xl mx-auto">
       <div className="block py-10 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
          Nuestros Servicios
        </h2>
        <p className="text-lg text-gray-200 text-center max-w-3xl mx-auto mb-12">
          Ofrecemos una amplia gama de servicios de seguridad adaptados a las
          necesidades específicas de cada cliente, garantizando la máxima
          protección y tranquilidad.
        </p>
      </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio) => (
            <div 
              key={servicio.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <div className="text-blue-600">
                      {servicio.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{servicio.title}</h3>
                </div>
                
                <p className="text-blue-600 font-medium mb-2">{servicio.slogan}</p>
                <p className="text-gray-600 mb-4">{servicio.description}</p>
                
                
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            href="/servicios" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#004FAC] hover:bg-blue-700 transition-colors duration-300"
          >
            Ver todos los servicios
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;