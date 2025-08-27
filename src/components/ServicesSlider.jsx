import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Building, Package, CalendarDays, Video } from 'lucide-react';

const servicios = [
  {
    id: 'seguridad-personal',
    title: "Protección Ejecutiva",
    slogan: "Discreción y profesionalismo",
    description: "Guardaespaldas certificados con entrenamiento militar y policial. Protección 24/7 para personas de alto perfil.",
    image: "img/img (1).png",
    icon: <Shield className="w-12 h-12" />
  },
  {
    id: 'seguridad-empresarial',
    title: "Seguridad Corporativa",
    slogan: "Tu negocio en buenas manos",
    description: "Sistemas integrados de vigilancia física y electrónica para empresas, bancos y centros comerciales.",
    image: "img/img (2).jpg",
    icon: <Building className="w-12 h-12" />
  },
  {
    id: 'resguardo-bienes',
    title: "Custodia de Activos",
    slogan: "Protección en movimiento",
    description: "Transporte seguro de valores, mercancías y documentos confidenciales con vehículos blindados y protocolos anti-asalto.",
    image: "img/img (3).jpg",
    icon: <Package className="w-12 h-12" />
  },
  {
    id: 'seguridad-eventos',
    title: "Seguridad en Eventos",
    slogan: "Control total de multitudes",
    description: "Equipos especializados en conciertos, convenciones y eventos VIP. Prevención y manejo de situaciones críticas.",
    image: "img/img (4).jpg",
    icon: <CalendarDays className="w-12 h-12" />
  },
  {
    id: 'videovigilancia',
    title: "Vigilancia Inteligente",
    slogan: "Ojos en todas partes",
    description: "Monitoreo remoto con IA para detección de amenazas en tiempo real. Grabación en alta definición con almacenamiento en la nube.",
    image: "img/img (5).png",
    icon: <Video className="w-12 h-12" />
  }
];

const ServicesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === servicios.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? servicios.length - 1 : prev - 1));
  };

  // Auto-rotate (opcional)
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Fondo con overlay oscuro */}
      <div 
        className="absolute inset-0 bg-black/30 z-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url("${servicios[currentIndex].image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'top'
        }}
      />
      
      {/* Contenido */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 text-white bg-black/50">
        <div className="container mx-auto max-w-6xl">
          {/* Icono y título */}
          <div className="flex items-center mb-6">
            <div className="p-3 bg-[#004FAC]/80 rounded-lg">
              {servicios[currentIndex].icon}
            </div>
            <h3 className="ml-4 text-2xl font-light tracking-wider">
              {servicios[currentIndex].slogan}
            </h3>
          </div>
          
          {/* Título principal */}
          <h2 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            {servicios[currentIndex].title}
          </h2>
          
          {/* Descripción */}
          <p className="text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed">
            {servicios[currentIndex].description}
          </p>
          
          {/* Botón CTA */}
          <a href="https://wa.me/51937203853"  target='blank' className="px-8 py-4 bg-green-500 text-white hover:bg-blue-700 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl">
            Solicitar servicio
          </a>
        </div>
      </div>

      {/* Controles */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4 z-20">
        {servicios.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${currentIndex === idx ? 'bg-white w-8' : 'bg-white/50'}`}
          />
        ))}
      </div>

      {/* Flechas (opcional) */}
      <button 
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-3 bg-white/20 rounded-full backdrop-blur-sm z-20 hover:bg-white/30"
      >
        <ChevronLeft className="w-5 h-5 md:w-8 md:h-8" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-3 bg-white/20 rounded-full backdrop-blur-sm z-20 hover:bg-white/30"
      >
        <ChevronRight className="w-5 h-5 md:w-8 md:h-8" />
      </button>
    </section>
  );
};

export default ServicesSlider;