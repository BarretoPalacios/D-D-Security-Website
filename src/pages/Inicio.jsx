import {
  ShieldCheck,
  UserSquare,
  Phone,
  Check,
  MapPin,

} from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";
import Navbar from "../components/Navbar";
import Forms from "../components/Forms";
import Footer from "../components/Footer";
import ServicesSlider from "../components/ServicesSlider";
import AdditionalServices from "../components/AdditionalServices";

const Inicio = () => {
  return (
    <div className="bg-white">
      <WhatsAppButton />

      {/* Navbar Mejorado */}
      <Navbar />

      {/* Hero Section con Video de Fondo */}
      <section
        id="home"
        className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden"
      >
        {/* Video de fondo */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="videos/baner.mp4" type="video/mp4" />
            {/* Fallback image */}
            <img
              src="img/istockphoto-842004510-1024x1024.jpg"
              alt="Fondo de seguridad"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white font-bold">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                D&D <span className="text-blue-400">Security SAC</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl font-bold">
                Protegiendo lo que más valoras con más de 10 años de
                experiencia, incluyendo servicio en la Policía Nacional.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <ShieldCheck className="w-6 h-6 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                  <span className="font-bold">Personal de confianza y altamente capacitado</span>
                </li>
                <li className="flex items-start">
                  <UserSquare className="w-6 h-6 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                  <span className="font-bold">Tecnología de punta y monitoreo continuo</span>
                </li>
                <li className="flex items-start">
                  <Phone className="w-6 h-6 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                  <span className="font-bold">Atención inmediata 24/7</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/contacto"
                  className="px-8 py-3 bg-[#004FAC] hover:bg-blue-700 text-white font-semibold rounded-full transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Solicitar Cotización
                </a>
                <a
                  href="tel:937203853"
                  className="px-8 py-3 bg-white text-black font-semibold rounded-full transition-all"
                >
                  Llamar ahora
                </a>
              </div>
            </div>

            {/* Formulario */}
            <Forms />
          </div>
        </div>
      </section>


 {/* experiencia */}
      <section id="experiencia" className="py-20 bg-white ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="/img/nosotros-baner.png"
                alt="Personal de Seguridad"
                className="w-full h-auto "
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">
                Expertos en Protección con Tradición Policial
              </h2>

              <p className="text-lg text-gray-700 mb-4">
                En <span className="font-bold">D&D Security SAC</span>,
                combinamos{" "}
                <span className="font-bold">
                  la disciplina de ex miembros de la Policía Nacional del Perú
                </span>{" "}
                con tecnología moderna para ofrecer seguridad integral en Lima y
                todo el país.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6 border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  ¿Por qué somos tu mejor opción?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <span className="font-bold">
                        Equipo con más de 10 años en fuerza pública:
                      </span>{" "}
                      Nuestros agentes fueron capacitados en la PNP para manejar
                      situaciones de alto riesgo.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <span className="font-bold">Protocolos probados:</span>{" "}
                      Aplicamos métodos usados en seguridad estatal adaptados al
                      sector privado.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <span className="font-bold">Respuesta inmediata:</span>{" "}
                      Patrullas estratégicamente ubicadas para intervención en
                      minutos.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Nuestro diferencial
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <ShieldCheck className="w-8 h-8 text-blue-600 mb-2" />
                    <h4 className="font-bold text-gray-800">
                      Ética comprobada
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Agentes con antecedentes verificados por el Ministerio del
                      Interior.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <MapPin className="w-8 h-8 text-blue-600 mb-2" />
                    <h4 className="font-bold text-gray-800">
                      Cobertura nacional
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Operación en Lima y principales ciudades del Perú.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="text-center bg-blue-100 px-6 py-3 rounded-lg">
                  <div className="text-2xl font-bold text-blue-700">100%</div>
                  <div className="text-gray-700 font-medium">
                    Personal ex-PNP
                  </div>
                </div>
                <div className="text-center bg-blue-100 px-6 py-3 rounded-lg">
                  <div className="text-2xl font-bold text-blue-700">10+</div>
                  <div className="text-gray-700 font-medium">
                    Años de experiencia colectiva
                  </div>
                </div>
                <div className="text-center bg-blue-100 px-6 py-3 rounded-lg">
                  <div className="text-2xl font-bold text-blue-700">24/7</div>
                  <div className="text-gray-700 font-medium">
                    Monitoreo activo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios  */}
      <div className="block py-20 gradient-bg px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Nuestros Servicios
        </h2>
        <p className="text-lg text-gray-200 text-center max-w-3xl mx-auto mb-12">
          Ofrecemos una amplia gama de servicios de seguridad adaptados a las
          necesidades específicas de cada cliente, garantizando la máxima
          protección y tranquilidad.
        </p>
      </div>
      <ServicesSlider />

      {/* servicios adicionales  */}
      <AdditionalServices />

      {/* Contacto (sección idéntica al original) */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Estamos aquí para ayudarte. Contáctanos para una consulta gratuita y
            descubre cómo podemos proteger lo que más valoras.
          </p>

          {/* Formulario */}
          <div className="max-w-3xl mx-auto ">
            <Forms />
          </div>
        </div>
      </section>

      {/* Footer (sección idéntica al original) */}
      <Footer />
    </div>
  );
};

export default Inicio;
