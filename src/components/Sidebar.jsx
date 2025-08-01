"use client"

import { Home, FileText, Users, Calendar, Settings, BarChart3, Bell, Search, Scale } from "lucide-react"

export function Sidebar() {
  const menuItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: FileText, label: "Trámites", count: 12 },
    { icon: Users, label: "Clientes", count: 45 },
    { icon: Calendar, label: "Calendario" },
    { icon: BarChart3, label: "Reportes" },
    { icon: Bell, label: "Notificaciones", count: 3 },
    { icon: Settings, label: "Configuración" },
  ]

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Scale className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">NotarialPro</h1>
            <p className="text-sm text-gray-500">Sistema Notarial</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  item.active ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.count && (
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      item.active ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">JM</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Dr. Juan Martínez</p>
            <p className="text-xs text-gray-500">Notario Principal</p>
          </div>
        </div>
      </div>
    </div>
  )
}