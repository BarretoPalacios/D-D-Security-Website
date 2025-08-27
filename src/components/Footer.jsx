import React from 'react'
import {
  Phone,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Clock,
} from "lucide-react";


function Footer() {
  return (
    <>
    <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                D & D <span className="text-blue-400">SECURITY </span> S.A.C. 
              </h3>
              <h4>
                RUC:  20614206544
              </h4>
              <p className="text-gray-300 mb-6">
                Trabajamos con personal policial en actividad altamente capacitado en prevención y uso de armas de fuego.
              </p>
              <div>
                <h4 className="text-lg font-semibold mb-3 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-400">
                  Síguenos
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-400">
                Servicios
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/servicios"
                    className="text-gray-300 hover:text-blue-400 transition"
                  >
                    Seguridad Personal
                  </a>
                </li>
                <li>
                  <a
                    href="/servicios"
                    className="text-gray-300 hover:text-blue-400 transition"
                  >
                    Seguridad Empresarial
                  </a>
                </li>
                <li>
                  <a
                    href="/servicios"
                    className="text-gray-300 hover:text-blue-400 transition"
                  >
                    Resguardo de Bienes
                  </a>
                </li>
                <li>
                  <a
                    href="/servicios"
                    className="text-gray-300 hover:text-blue-400 transition"
                  >
                    Videovigilancia
                  </a>
                </li>
                <li>
                  <a
                    href="/servicios"
                    className="text-gray-300 hover:text-blue-400 transition"
                  >
                    Seguridad de Eventos
                  </a>
                </li>
                <li>
                  <a
                    href="/servicios"
                    className="text-gray-300 hover:text-blue-400 transition"
                  >
                    Respuesta Inmediata
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-400">
                Contacto
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-white mr-3 mt-1 flex-shrink-0" />
                  <a
                    href="tel:937203853"
                    className="text-gray-300 hover:text-white transition"
                  >
                    937 203 853
                  </a>
                </li>
                <li className="flex items-start">
                  <Send className="w-5 h-5 text-white mr-3 mt-1 flex-shrink-0" />
                  <a
                    href="mailto:info@ddsecurity.com"
                    className="text-gray-300 hover:text-white transition"
                  >
                    info@ddsecurity.com
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-white mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Lima, Perú</span>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-white mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Disponibilidad 24/7</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            © {new Date().getFullYear()} D&D Security SAC. Todos los derechos
            reservados.
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer