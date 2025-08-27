import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  PhoneIcon,
  Twitter,
} from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar Mejorado */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-2 bg-white shadow-lg"
            : "py-4 bg-white backdrop-blur-sm"
        }`}
      >
        <div className="hidden md:block text-sm py-2">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Información de contacto */}
              <div className="flex flex-col sm:flex-row sm:space-x-6 mb-2 md:mb-0">
                <div className="flex items-center mb-1 sm:mb-0">
                  <MapPin size={14} className="mr-1 text-blue-400" />
                  <span className="font-medium">Av. Gerardo Ungre 3601 Independencia</span>
                </div>
                <div className="flex items-center mb-1 sm:mb-0">
                  <PhoneIcon size={14} className="mr-1 text-blue-400" />
                  <span className="font-medium">+51 937203853</span>
                </div>
                
              </div>

              {/* Información adicional y redes sociales */}
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center">
                  <Clock size={14} className="mr-1 text-blue-400" />
                  <span className="font-medium"> Lun-Vie: 9:00-18:00</span>
                </div>
              
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center">
              <img
                src="img/logo.png"
                alt="D&D Security SAC"
                className="h-12  object-contain"
              />
            </a>

            {/* Menú Desktop */}
            <nav className="hidden md:flex items-center space-x-2">
              <Link
                to="/"
                className="px-4 py-2 rounded-full font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Inicio
              </Link>
              |
              <Link
                to="/nosotros"
                className=" px-4 py-2 rounded-full font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Nosotros
              </Link>
              |
              <Link
                to="/servicios"
                className="px-4 py-2 rounded-full font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Servicios
              </Link>
              |
              <Link
                to="/contacto"
                className="px-4 py-2 rounded-full font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Contacto
              </Link>
              |
              <a
                href="tel:937203853"
                className="ml-2 px-6 py-2 bg-[#004FAC] text-white rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                937 203 853
              </a>
            </nav>

            {/* Botón Mobile */}
            <Link
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Link>
          </div>

          {/* Menú Mobile */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <Link
                to="/"
                className="block w-full px-4 py-2 text-left rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Inicio
              </Link>
              <Link
                to="/nosotros"
                className="block w-full px-4 py-2 text-left rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Nosotros
              </Link>
              <Link
                to="/servicios"
                className="block w-full px-4 py-2 text-left rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Servicios
              </Link>
              <Link
                to="/contacto"
                className="block w-full px-4 py-2 text-left rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Contacto
              </Link>
              <a
                href="tel:937203853"
                className="block px-4 py-2 bg-[#004FAC] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mt-2"
              >
                <Phone className="w-4 h-4 mr-2" />
                Llamar ahora
              </a>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
