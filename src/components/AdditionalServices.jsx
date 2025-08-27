import { Phone } from "lucide-react";

const AdditionalServices = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-4 md:px-8 relative">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: "url('img/nosotros.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-blue-800/10"></div>
      </div>

      {/* Sección de diferenciales */}
      <div className="max-w-6xl mx-auto mb-20 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-blue-800">
          ¿Por qué elegirnos?
        </h2>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Más de 15 años protegiendo lo que más valoras con tecnología de punta y personal altamente calificado
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Certificaciones Internacionales",
              description: "Personal entrenado bajo estándares ISO y protocolos de seguridad NATO",
              icon: (
                <svg className="w-12 h-12 mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              )
            },
            {
              title: "Tecnología de Vanguardia",
              description: "Equipos con inteligencia artificial y sistemas de monitoreo predictivo",
              icon: (
                <svg className="w-12 h-12 mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              )
            },
            {
              title: "Respuesta Inmediata",
              description: "Equipos de reacción en menos de 8 minutos en zonas urbanas",
              icon: (
                <svg className="w-12 h-12 mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              )
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 backdrop-blur-sm bg-white/95">
              <div className="text-center">
                <div className="flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de testimonios */}
      <div className="max-w-6xl mx-auto mb-20 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">
          Confían en nosotros
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              quote: "Desde que contratamos su servicio, nuestros ejecutivos viajan con total tranquilidad. Profesionalismo absoluto.",
              author: "Carlos Mendieta - Director Financiero",
              company: "Grupo Bancario Continental"
            },
            {
              quote: "La implementación de su sistema de vigilancia redujo los incidentes en nuestras sucursales en un 90% el primer mes.",
              author: "Gerente de Operaciones",
              company: "Castro Import S.A.C"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-[#004FAC] p-8 rounded-xl text-white shadow-md relative backdrop-blur-sm ">
              <svg className="absolute top-6 left-6 w-8 h-8 opacity-20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-lg italic mb-6 pl-10 relative z-10">"{testimonial.quote}"</p>
              <div className="border-t border-blue-400 pt-4">
                <p className="font-semibold">{testimonial.author}</p> 
                <p className="text-blue-200">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <div className="max-w-4xl mx-auto p-12 rounded-xl text-center bg-[#004FAC] shadow-xl relative z-10 backdrop-blur-sm ">
        <h3 className="text-3xl font-bold mb-4 text-white">¿Listo para potenciar tu seguridad?</h3>
        <p className="text-xl mb-8 text-blue-100">Nuestros expertos están disponibles 24/7 para asesorarte</p>
        <button 
          onClick={() => window.open('https://wa.me/1234567890', '_blank')}
          className="px-8 py-4 bg-white text-blue-800 rounded-full font-bold flex items-center justify-center mx-auto hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          Contactar a un especialista
        </button>
      </div>
    </div>
  );
};

export default AdditionalServices;