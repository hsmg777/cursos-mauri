import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import {
  Search,
  Clock,
  PlayCircle,
  Shield,
  Zap,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";

const allCourses = [
  {
    id: 1,
    title: "Fundamentos de Acuarela",
    description: "Domina las tecnicas y materiales esenciales para pintar en acuarela desde cero.",
    fullDescription: "Este curso integral para principiantes cubre todo lo necesario para iniciar tu camino en la acuarela: materiales, mezcla de color, tecnicas de pincel, control del agua y metodos fundamentales.",
    level: "Principiante",
    format: "Pregrabado",
    duration: "6 horas",
    lessons: 12,
    price: 129,
    image: "https://images.unsplash.com/photo-1690743300963-c09faf1d06f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwY29sb3IlMjBwYWxldHRlJTIwYnJ1c2hlc3xlbnwxfHx8fDE3NzA2NTUzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    whatYouLearn: [
      "Comprender materiales y papel para acuarela",
      "Tecnicas y trazos esenciales con pincel",
      "Fundamentos de teoria del color y mezclas",
      "Control del agua y tecnica humedo sobre humedo",
      "Creacion de degradados y lavados",
      "Principios basicos de composicion",
    ],
    includes: [
      "12 lecciones en video HD (6 horas en total)",
      "Hojas de practica descargables",
      "Acceso de por vida al material del curso",
      "Certificado de finalizacion",
    ],
  },
  {
    id: 2,
    title: "Paisajes en Acuarela",
    description: "Aprende a capturar paisajes impactantes con profundidad, atmosfera y tecnicas profesionales.",
    fullDescription: "Lleva tus habilidades al siguiente nivel dominando la pintura de paisajes. Este curso se enfoca en crear profundidad, atmosfera y elementos naturales realistas.",
    level: "Intermedio",
    format: "Pregrabado",
    duration: "8 horas",
    lessons: 15,
    price: 179,
    image: "https://images.unsplash.com/photo-1685013640715-8701bbaa2207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwbGFuZHNjYXBlJTIwcGFpbnRpbmclMjBuYXR1cmV8ZW58MXx8fHwxNzcwNjU1MzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    whatYouLearn: [
      "Crear perspectiva atmosferica",
      "Pintar cielos, nubes y agua",
      "Arboles, follaje y texturas naturales",
      "Tecnicas de composicion para paisajes",
      "Trabajo con referencias fotograficas",
      "Capturar luz y atmosfera",
    ],
    includes: [
      "15 lecciones en video HD (8 horas en total)",
      "Fotos de referencia y plantillas",
      "Acceso de por vida al material del curso",
      "Certificado de finalizacion",
    ],
  },
  {
    id: 3,
    title: "Retrato en Acuarela",
    description: "Domina el arte de capturar el parecido humano con tecnicas profesionales de retrato.",
    fullDescription: "Aprende tecnicas avanzadas para pintar retratos expresivos en acuarela. Este curso cubre anatomia facial, tonos de piel, expresion y semejanza.",
    level: "Avanzado",
    format: "Pregrabado",
    duration: "10 horas",
    lessons: 18,
    price: 199,
    image: "https://images.unsplash.com/photo-1750327324262-319afa34d3e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwcG9ydHJhaXQlMjBmYWNlJTIwYXJ0fGVufDF8fHx8MTc3MDY1NTMyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    whatYouLearn: [
      "Anatomia facial y proporciones",
      "Mezcla de tonos de piel realistas",
      "Rasgos faciales y expresion",
      "Tecnicas para pintar cabello",
      "Creacion de profundidad en retrato",
      "Lograr semejanza y personalidad",
    ],
    includes: [
      "18 lecciones en video HD (10 horas en total)",
      "Guias de referencia anatomica",
      "Acceso de por vida al material del curso",
      "Certificado de finalizacion",
    ],
  },
  {
    id: 4,
    title: "Teoria del Color para Acuarela",
    description: "Desbloquea el poder del color con teoria y tecnicas de mezcla aplicadas a acuarela.",
    fullDescription: "Profundiza en teoria del color para artistas de acuarela. Aprende a mezclar cualquier color y crear paletas armonicas.",
    level: "Principiante",
    format: "Pregrabado",
    duration: "5 horas",
    lessons: 10,
    price: 99,
    image: "https://images.unsplash.com/photo-1690743300963-c09faf1d06f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwY29sb3IlMjBwYWxldHRlJTIwYnJ1c2hlc3xlbnwxfHx8fDE3NzA2NTUzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    whatYouLearn: [
      "Comprender el circulo cromatico",
      "Colores calidos vs frios",
      "Creacion de paletas armonicas",
      "Mezcla de colores secundarios y terciarios",
      "Psicologia del color en el arte",
      "Pintura con paleta limitada",
    ],
    includes: [
      "10 lecciones en video HD (5 horas en total)",
      "Cartas de mezcla de color",
      "Acceso de por vida al material del curso",
      "Certificado de finalizacion",
    ],
  },
  {
    id: 5,
    title: "Taller en Vivo: Pintura de Naturaleza",
    description: "Unete a un taller intensivo en vivo enfocado en temas botanicos y naturaleza.",
    fullDescription: "Este taller en vivo ofrece instruccion y feedback en tiempo real mientras pintamos temas de naturaleza. Ideal para aprendizaje practico y guia inmediata.",
    level: "Intermedio",
    format: "Clase en vivo",
    duration: "3 horas",
    lessons: 1,
    price: 89,
    image: "https://images.unsplash.com/photo-1579167728798-a1cf3d595960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwZmxvd2VycyUyMGJvdGFuaWNhbCUyMHBhaW50aW5nfGVufDF8fHx8MTc3MDY1NTMyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "15 de marzo de 2026",
    seats: 8,
    whatYouLearn: [
      "Tecnicas de ilustracion botanica",
      "Pintura de hojas y petalos",
      "Creacion de texturas organicas",
      "Feedback en vivo sobre tu trabajo",
    ],
    includes: [
      "Sesion en vivo de 3 horas",
      "Preguntas y feedback en tiempo real",
      "Grabacion disponible despues de clase",
      "Lista de materiales del curso",
    ],
  },
  {
    id: 6,
    title: "Taller en Vivo: Sketching Urbano",
    description: "Aprende tecnicas sueltas y expresivas de sketching urbano en este taller intensivo en vivo.",
    fullDescription: "Unete a este taller en vivo para explorar el sketching urbano en acuarela. Aprende a capturar arquitectura, escenas callejeras y vida urbana con confianza.",
    level: "Intermedio",
    format: "Clase en vivo",
    duration: "3 horas",
    lessons: 1,
    price: 99,
    image: "https://images.unsplash.com/photo-1763496974013-389a355aae2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwdXJiYW4lMjBjaXR5c2NhcGUlMjBza2V0Y2h8ZW58MXx8fHwxNzcwNjU1MzIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "8 de abril de 2026",
    seats: 5,
    whatYouLearn: [
      "Tecnicas de sketching rapido",
      "Pintura de arquitectura y perspectiva",
      "Pincelada suelta y expresiva",
      "Feedback en vivo sobre tu trabajo",
    ],
    includes: [
      "Sesion en vivo de 3 horas",
      "Preguntas y feedback en tiempo real",
      "Grabacion disponible despues de clase",
      "Lista de materiales del curso",
    ],
  },
];

const faqs = [
  {
    question: "Necesito experiencia previa en pintura?",
    answer: "No. Nuestros cursos para principiantes estan disenados para quienes inician desde cero. Empezamos con lo esencial y te guiamos paso a paso.",
  },
  {
    question: "Como accedo al curso despues de comprar?",
    answer: "Al inscribirte, recibes acceso inmediato a todos los materiales en nuestra plataforma. Puedes verlos desde cualquier dispositivo.",
  },
  {
    question: "Puedo ver los cursos en movil?",
    answer: "Si. Todos los cursos estan optimizados para escritorio, tablet y movil.",
  },
  {
    question: "Se graban los talleres en vivo?",
    answer: "Si, todos los talleres en vivo se graban y quedan disponibles por 30 dias para los participantes.",
  },
  {
    question: "Recibo materiales descargables?",
    answer: "Si. Cada curso incluye recursos descargables como imagenes de referencia, hojas de practica y guias.",
  },
];

export function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState("all");
  const [formatFilter, setFormatFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [selectedCourse, setSelectedCourse] = useState<typeof allCourses[0] | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = levelFilter === "all" || course.level === levelFilter;
    const matchesFormat = formatFilter === "all" || course.format === formatFilter;
    return matchesSearch && matchesLevel && matchesFormat;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="bg-white">
      {/* Courses Hero Header */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1749746766518-7d52a30c87cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwcGFpbnRpbmclMjBhYnN0cmFjdCUyMGFydHxlbnwxfHx8fDE3NzA2NTUzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-6 font-light tracking-wide">
            Cursos y Talleres en Linea
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Aprende acuarela con lecciones estructuradas, videos de alta calidad y practica guiada.
          </p>
        </div>
      </section>

      {/* Filter + Search Section */}
      <section className="py-8 px-4 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <Input
                placeholder="Buscar cursos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Todos los Niveles" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los Niveles</SelectItem>
                <SelectItem value="Principiante">Principiante</SelectItem>
                <SelectItem value="Intermedio">Intermedio</SelectItem>
                <SelectItem value="Avanzado">Avanzado</SelectItem>
              </SelectContent>
            </Select>

            <Select value={formatFilter} onValueChange={setFormatFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Todos los Formatos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los Formatos</SelectItem>
                <SelectItem value="Pregrabado">Pregrabado</SelectItem>
                <SelectItem value="Clase en vivo">Clase en Vivo</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Ordenar Por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Mas Populares</SelectItem>
                <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-neutral-200 h-full flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {course.format === "Clase en vivo" && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full">
                        EN VIVO
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3 text-xs">
                      <span className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded">
                        {course.level}
                      </span>
                      <span className="text-neutral-500">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {course.duration}
                      </span>
                    </div>
                    <h3 className="text-xl mb-2 text-neutral-900">
                      {course.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 text-sm leading-relaxed flex-1">
                      {course.description}
                    </p>
                    {course.format === "Clase en vivo" && (
                      <p className="text-sm text-amber-600 mb-3">
                        {course.date} • {course.seats} cupos disponibles
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-2xl text-neutral-900">
                        ${course.price}
                      </span>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white"
                          onClick={() => setSelectedCourse(course)}
                        >
                          Ver Curso
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment / Enrollment Info Section */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 font-light text-neutral-900">
              Inscripcion Facil y Pago Seguro
            </h2>
            <p className="text-lg text-neutral-600">
              Inscribete en minutos y empieza a aprender de inmediato
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-neutral-900">Pago Seguro</h3>
              <p className="text-neutral-600 text-sm">
                Cifrado de nivel industria para proteger tu informacion de pago
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-neutral-900">Acceso Inmediato</h3>
              <p className="text-neutral-600 text-sm">
                Empieza a aprender al instante despues de inscribirte con acceso de por vida
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-neutral-900">
                Soporte Profesional
              </h3>
              <p className="text-neutral-600 text-sm">
                Recibe ayuda cuando la necesites de nuestro equipo de soporte
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 font-light text-neutral-900">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-neutral-200">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="text-lg text-neutral-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-600 transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-neutral-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-6 font-light">
            Elige tu Proximo Curso y Comienza a Crear
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Unete a nuestra comunidad de artistas apasionados por la acuarela
          </p>
          <Button
            size="lg"
            className="bg-white text-neutral-900 hover:bg-neutral-100"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Ver Todos los Cursos
          </Button>
        </div>
      </section>

      {/* Course Detail Modal */}
      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedCourse && (
            <div>
              <div className="aspect-video w-full overflow-hidden rounded-lg mb-6">
                <img
                  src={selectedCourse.image}
                  alt={selectedCourse.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full">
                    {selectedCourse.level}
                  </span>
                  {selectedCourse.format === "Clase en vivo" && (
                    <span className="px-3 py-1 bg-red-600 text-white text-xs rounded-full">
                      EN VIVO
                    </span>
                  )}
                </div>
                <DialogTitle className="text-3xl mb-4">
                  {selectedCourse.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <p className="text-neutral-600 leading-relaxed">
                  {selectedCourse.fullDescription}
                </p>

                {selectedCourse.format === "Clase en vivo" && (
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="text-amber-900">
                      <strong>Fecha:</strong> {selectedCourse.date}
                    </p>
                    <p className="text-amber-900">
                      <strong>Cupos Disponibles:</strong> {selectedCourse.seats} cupos
                    </p>
                  </div>
                )}

                <div>
                  <h3 className="text-xl mb-3 text-neutral-900">
                    Lo que Aprenderas
                  </h3>
                  <ul className="space-y-2">
                    {selectedCourse.whatYouLearn.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl mb-3 text-neutral-900">
                    Este Curso Incluye
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedCourse.includes.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <PlayCircle className="w-5 h-5 text-neutral-600 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-200 flex items-center justify-between">
                  <div>
                    <div className="text-3xl text-neutral-900 mb-1">
                      ${selectedCourse.price}
                    </div>
                    <div className="text-sm text-neutral-500">
                      Pago unico • Acceso de por vida
                    </div>
                  </div>
                  <Button size="lg" className="bg-neutral-900 hover:bg-neutral-800">
                    Inscribirme Ahora
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
