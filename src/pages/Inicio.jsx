"use client"

import { useEffect, useRef, useState } from "react"
import axios from "axios"
import {
  Search,
  Plus,
  FileText,
  User,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  Eye,
  Edit,
  Trash2,
  Download,
  Upload,
  MoreVertical,
  X,
} from "lucide-react"

import { Sidebar } from "../components/Sidebar"



export default function Dashboard() {
  const [tramites, setTramites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterEstado, setFilterEstado] = useState("todos");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedTramite, setSelectedTramite] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Obtener trámites al montar el componente
  useEffect(() => {
    const fetchTramites = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/tramites');
        setTramites(response.data["tramites"]);
        console.log("Trámites obtenidos:", response.data["tramites"]);
        setLoading(false);
      } catch (err) {
        console.error("Error al obtener trámites:", err);
        setError("Error al cargar los trámites");
        setLoading(false);
      }
    };

    fetchTramites();
  }, []);

  // Filtrar trámites
  const tramitesFiltrados = tramites.filter((tramite) => {
    const matchesSearch =
      tramite.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tramite.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tramite._id.toString().includes(searchTerm.toLowerCase());
    const matchesFilter = filterEstado === "todos" || tramite.estado === filterEstado;
    return matchesSearch && matchesFilter;
  });

  // Función para obtener el badge según el estado
  const getEstadoBadge = (estado) => {
    switch (estado) {
      case "pendiente":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            Pendiente
          </span>
        )
      case "en_proceso":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <AlertCircle className="w-3 h-3 mr-1" />
            En Proceso
          </span>
        )
      case "completado":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Completado
          </span>
        )
      case "cancelado":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <XCircle className="w-3 h-3 mr-1" />
            Cancelado
          </span>
        )
      default:
        return (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{estado}</span>
        )
    }
  }

  // Estadísticas
  const stats = {
    total: tramites.length,
    pendientes: tramites.filter((t) => t.estado === "pendiente").length,
    enProceso: tramites.filter((t) => t.estado === "en_proceso").length,
    completados: tramites.filter((t) => t.estado === "completado").length,
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed z-20 bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        {isSidebarOpen ? <X size={24} /> : <Plus size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed md:relative z-10 w-64 h-full transition-all duration-300 ease-in-out ${isSidebarOpen ? 'left-0' : '-left-64'} md:left-0`}>
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3 md:px-6 md:py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">Dashboard de Trámites</h1>
              <p className="text-sm md:text-base text-gray-600">Gestiona todos los trámites notariales</p>
            </div>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors w-full md:w-auto"
            >
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Trámite
            </button>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="bg-white rounded-lg shadow p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-600">Total Trámites</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">{stats.total}</p>
                </div>
                <FileText className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-600">Pendientes</p>
                  <p className="text-xl md:text-2xl font-bold text-yellow-600">{stats.pendientes}</p>
                </div>
                <Clock className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-600">En Proceso</p>
                  <p className="text-xl md:text-2xl font-bold text-blue-600">{stats.enProceso}</p>
                </div>
                <AlertCircle className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-600">Completados</p>
                  <p className="text-xl md:text-2xl font-bold text-green-600">{stats.completados}</p>
                </div>
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
              </div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-lg shadow p-3 md:p-4 mb-4 md:mb-6">
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Buscar por cliente, tipo o ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm md:text-base"
                  />
                </div>
              </div>
              <div className="w-full md:w-48">
                <select
                  value={filterEstado}
                  onChange={(e) => setFilterEstado(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm md:text-base"
                >
                  <option value="todos">Todos los estados</option>
                  <option value="pendiente">Pendiente</option>
                  <option value="en_proceso">En Proceso</option>
                  <option value="completado">Completado</option>
                  <option value="cancelado">Cancelado</option>
                </select>
              </div>
            </div>
          </div>

          {/* Tramites Table */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-4 py-3 md:px-6 md:py-4 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Lista de Trámites</h3>
                  <p className="text-sm text-gray-500">{tramitesFiltrados.length} trámite(s) encontrado(s)</p>
                </div>
              </div>
            </div>
            
            {loading ? (
              <div className="p-6 text-center">
                <p>Cargando trámites...</p>
              </div>
            ) : error ? (
              <div className="p-6 text-center text-red-500">
                <p>{error}</p>
              </div>
            ) : tramitesFiltrados.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                <p>No se encontraron trámites</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tipo
                      </th>
                      <th className="hidden sm:table-cell px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cliente
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Estado
                      </th>
                      <th className="hidden md:table-cell px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Fecha
                      </th>
                      <th className="hidden lg:table-cell px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Vencimiento
                      </th>
                      <th className="hidden sm:table-cell px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Docs
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {tramitesFiltrados.map((tramite) => (
                      <tr key={tramite._id} className="hover:bg-gray-50">
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <span className="truncate max-w-[80px] inline-block">{tramite._id}</span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                          <span className="truncate max-w-[120px] inline-block">{tramite.tipo}</span>
                        </td>
                        <td className="hidden sm:table-cell px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2 text-gray-400" />
                            <span className="truncate max-w-[120px] inline-block">{tramite.cliente}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">{getEstadoBadge(tramite.estado)}</td>
                        <td className="hidden md:table-cell px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                            {new Date(tramite.fecha_creacion).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="hidden lg:table-cell px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                            {new Date(tramite.fecha_cierre).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="hidden sm:table-cell px-4 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {(tramite.documentos && tramite.documentos.length) ? tramite.documentos.length : 0}
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="relative">
                            <button
                              onClick={() => setActiveDropdown(activeDropdown === tramite._id ? null : tramite._id)}
                              className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                            >
                              <MoreVertical className="w-4 h-4" />
                            </button>
                            {activeDropdown === tramite._id && (
                              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                                <div className="py-1">
                                  <button
                                    onClick={() => {
                                      setSelectedTramite(tramite)
                                      setIsViewModalOpen(true)
                                      setActiveDropdown(null)
                                    }}
                                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                  >
                                    <Eye className="mr-2 h-4 w-4" />
                                    Ver detalles
                                  </button>
                                  <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                    <Edit className="mr-2 h-4 w-4" />
                                    Editar
                                  </button>
                                  <hr className="my-1" />
                                  <button className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Eliminar
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Modal de crear trámite */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="px-4 py-3 md:px-6 md:py-4 border-b border-gray-200 sticky top-0 bg-white z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Crear Nuevo Trámite</h3>
                  <p className="text-sm text-gray-500">Completa la información para crear un nuevo trámite</p>
                </div>
                <button 
                  onClick={() => setIsCreateModalOpen(false)} 
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>
            <CreateTramiteForm onClose={() => setIsCreateModalOpen(false)} />
          </div>
        </div>
      )}

      {/* Modal de detalles del trámite */}
      {isViewModalOpen && selectedTramite && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="px-4 py-3 md:px-6 md:py-4 border-b border-gray-200 sticky top-0 bg-white z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Detalles del Trámite</h3>
                  <p className="text-sm text-gray-500">Información completa del trámite seleccionado</p>
                </div>
                <button 
                  onClick={() => setIsViewModalOpen(false)} 
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>
            <TramiteDetails tramite={selectedTramite} />
          </div>
        </div>
      )}

      {/* Overlay para cerrar dropdowns */}
      {activeDropdown && <div className="fixed inset-0 z-10" onClick={() => setActiveDropdown(null)} />}
    </div>
  )
}

// Componente para crear nuevo trámite
function CreateTramiteForm({ onClose }) {
  const [formData, setFormData] = useState({
    tipo: "",
    cliente: "",
    descripcion: "",
    notario: "",
    fecha_cierre: "",
  });
  
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

const tiposTramite = [
  "Escritura de Compraventa",
  "Testamento",
  "Poder General",
  "Constitución de Sociedad",
  "Divorcio de Mutuo Acuerdo",
  "Hipoteca",
  "Donación",
  "Capitulaciones Matrimoniales",
]
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    if (selectedFiles.length + files.length > 10) {
      setError("Máximo 10 archivos permitidos");
      return;
    }
    
    for (const file of selectedFiles) {
      if (file.size > 5 * 1024 * 1024) {
        setError(`El archivo ${file.name} excede el límite de 5MB`);
        return;
      }
    }
    
    setFiles([...files, ...selectedFiles]);
    setError(null);
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const tramiteResponse = await axios.post('http://127.0.0.1:8000/tramites', formData);
      const tramiteId = tramiteResponse.data.data_id;
      
      if (files.length > 0) {
        const formDataDocs = new FormData();
        formDataDocs.append('entidad_id', tramiteId);
        formDataDocs.append('tipo', formData.tipo);
        
        files.forEach(file => {
          formDataDocs.append('files', file);
        });

        await axios.post(
          'http://127.0.0.1:8000/load-documentos', 
          formDataDocs, 
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );
      }
      
      onClose();
    } catch (error) {
      console.error("Error en el proceso:", error);
      setError(error.response?.data?.message || "Error al procesar la solicitud");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 md:p-6">
      <div className="grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Trámite</label>
            <select
              value={formData.tipo}
              onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm md:text-base"
              required
            >
              <option value="">Seleccionar tipo</option>
              {tiposTramite.map((tipo) => (
                <option key={tipo} value={tipo}>
                  {tipo}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cliente</label>
            <input
              type="text"
              value={formData.cliente}
              onChange={(e) => setFormData({ ...formData, cliente: e.target.value })}
              placeholder="Nombre completo del cliente"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm md:text-base"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
          <textarea
            value={formData.descripcion}
            onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
            placeholder="Descripción del trámite"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none text-sm md:text-base"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Notario Asignado</label>
            <select
              value={formData.notario}
              onChange={(e) => setFormData({ ...formData, notario: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm md:text-base"
              required
            >
              <option value="">Seleccionar notario</option>
              <option value="dr-martinez">Dr. Juan Martínez</option>
              <option value="dra-lopez">Dra. Ana López</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Vencimiento</label>
            <input
              type="date"
              value={formData.fecha_cierre}
              onChange={(e) => setFormData({ ...formData, fecha_cierre: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm md:text-base"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Documentos (Máx. 10, 5MB c/u)</label>
          <div 
            className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-6 text-center cursor-pointer hover:bg-gray-50"
            onClick={() => fileInputRef.current.click()}
          >
            <Upload className="mx-auto h-8 w-8 md:h-12 md:w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">Arrastra archivos aquí o haz clic para seleccionar</p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              multiple
              className="hidden"
            />
          </div>
          
          {/* Lista de archivos seleccionados */}
          {files.length > 0 && (
            <div className="mt-3 space-y-2">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm truncate max-w-[180px] md:max-w-xs">{file.name}</span>
                  <span className="text-xs text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)}MB
                  </span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {error && (
          <div className="mt-3 p-3 bg-red-50 text-red-600 rounded text-sm">
            {error}
          </div>
        )}
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-end gap-3 mt-6 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={onClose}
          disabled={isSubmitting}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Procesando...' : 'Crear Trámite'}
        </button>
      </div>
    </form>
  );
}

// Componente para mostrar detalles del trámite
function TramiteDetails({ tramite }) {
  const getEstadoBadge = (estado) => {
    switch (estado) {
      case "pendiente":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            Pendiente
          </span>
        )
      case "en_proceso":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <AlertCircle className="w-3 h-3 mr-1" />
            En Proceso
          </span>
        )
      case "completado":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Completado
          </span>
        )
      case "cancelado":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <XCircle className="w-3 h-3 mr-1" />
            Cancelado
          </span>
        )
      default:
        return (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{estado}</span>
        )
    }
  }

  return (
    <div className="p-4 md:p-6">
      <div className="grid gap-4 md:gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs md:text-sm font-medium text-gray-500">ID del Trámite</label>
            <p className="text-base md:text-lg font-semibold text-gray-900">{tramite._id}</p>
          </div>
          <div>
            <label className="text-xs md:text-sm font-medium text-gray-500">Estado</label>
            <div className="mt-1">{getEstadoBadge(tramite.estado)}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs md:text-sm font-medium text-gray-500">Tipo de Trámite</label>
            <p className="text-base md:text-lg text-gray-900">{tramite.tipo}</p>
          </div>
          <div>
            <label className="text-xs md:text-sm font-medium text-gray-500">Cliente</label>
            <p className="text-base md:text-lg text-gray-900">{tramite.cliente}</p>
          </div>
        </div>

        <div>
          <label className="text-xs md:text-sm font-medium text-gray-500">Descripción</label>
          <p className="text-gray-700 mt-1 text-sm md:text-base">{tramite.descripcion}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs md:text-sm font-medium text-gray-500">Fecha de Creación</label>
            <p className="text-gray-900 text-sm md:text-base">
              {new Date(tramite.fecha_creacion).toLocaleDateString()}
            </p>
          </div>
          <div>
            <label className="text-xs md:text-sm font-medium text-gray-500">Fecha de Vencimiento</label>
            <p className="text-gray-900 text-sm md:text-base">
              {new Date(tramite.fecha_cierre).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div>
          <label className="text-xs md:text-sm font-medium text-gray-500">Notario Asignado</label>
          <p className="text-gray-900 text-sm md:text-base">{tramite.notario}</p>
        </div>

        <div>
          <label className="text-xs md:text-sm font-medium text-gray-500">Documentos Adjuntos</label>
          <div className="mt-2 space-y-2">
            {tramite.documentos && tramite.documentos.length > 0 ? (
              tramite.documentos.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mr-2 md:mr-3" />
                    <span className="text-sm font-medium text-gray-900 truncate max-w-[180px] md:max-w-xs">
                      {doc.nombre}
                    </span>
                  </div>
                  <a href={doc.ruta} className="text-gray-400 hover:text-gray-600 p-1 rounded">
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No hay documentos adjuntos</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}