import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Forms from '../components/Forms';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <>
    <Navbar />
<div className="bg-white">

       {/* Hero Section */}
      <div 
        className="relative h-96 w-full flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('img/contacto.jpg')" , backgroundSize: 'cover' , backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contáctenos</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
             Estamos listos para proteger lo que más valoras
          </p>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Columna izquierda - Información de contacto */}
          <div>
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#004FAC' }}>
              Información de Contacto
            </h2>
            
            {/* Tarjeta de información */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-md mb-10">
              <div className="space-y-6">
                {/* Dirección */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#00A9DD' }}>
                    <MapPin className="text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Oficina Principal</h3>
                    <p className="text-gray-700">Av. Gerardo Unger 3601 dpto 103 </p>
                    <p className="text-gray-700">Independencia</p>
                  </div>
                </div>
                
                {/* Teléfonos */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#00A9DD' }}>
                    <Phone className="text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Teléfonos</h3>
                    <p className="text-gray-700">(+51) 937 203 853</p>
 
                  </div>
                </div>
                
                {/* Correo */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#00A9DD' }}>
                    <Mail className="text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Correo Electrónico</h3>
                    <p className="text-gray-700">contacto@dydsecurity.com</p>
                  </div>
                </div>
                
                {/* Horario */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#00A9DD' }}>
                    <Clock className="text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Horario de Atención</h3>
                    <p className="text-gray-700">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Sábados: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-700" style={{ color: '#004FAC' }}>Emergencias: 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
          
          {/* Columna derecha - Formulario */}
          <div>
            
            {/* Mapa */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.737897720539!2d-77.06006692415356!3d-11.992629340896789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce54bbf31699%3A0x49d19ceb47265d77!2sAv.%20Gerardo%20Unger%203601%2C%20Independencia%2015311!5e0!3m2!1ses-419!2spe!4v1756275621725!5m2!1ses-419!2spe" 
        width="100%" 
        height="450" 
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de nuestra oficina en Av. Gerardo Unger 3601, Independencia"
      >
      </iframe>
            </div>
            {/* Sección de emergencia */}
            <div className="mt-10 bg-red-50 rounded-xl p-6 border-l-4" style={{ borderColor: '#004FAC' }}>
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-red-100 mr-4">
                  <Phone className="w-6 h-6" style={{ color: '#004FAC' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#004FAC' }}>Emergencias 24/7</h3>
                  <p className="text-gray-700 mb-3">Para situaciones urgentes que requieran atención inmediata:</p>
                  <a 
                    href="tel:+15557654321" 
                    className="px-6 py-3 bg-red-600 text-white rounded-lg font-bold inline-flex items-center hover:bg-red-700 transition"
                  >
                    <Phone className="mr-2" />
                    Llamar al (+51) 937 203 853
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
<Footer />
    </>
  );
};

export default ContactPage;