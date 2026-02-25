import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { HomeHero } from "../components/HomeHero";
import { FourSteps } from "../components/FourSteps";

const featuredCourses = [
  {
    id: 1,
    title: "Fundamentos de Acuarela",
    description: "Domina las tecnicas y materiales esenciales para pintar en acuarela desde cero.",
    price: "$129",
    image: "https://images.unsplash.com/photo-1690743300963-c09faf1d06f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwY29sb3IlMjBwYWxldHRlJTIwYnJ1c2hlc3xlbnwxfHx8fDE3NzA2NTUzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    level: "Principiante",
  },
  {
    id: 2,
    title: "Masterclass de Paisajes",
    description: "Aprende a capturar paisajes impactantes con profundidad, atmosfera y tecnicas profesionales.",
    price: "$179",
    image: "https://images.unsplash.com/photo-1685013640715-8701bbaa2207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwbGFuZHNjYXBlJTIwcGFpbnRpbmclMjBuYXR1cmV8ZW58MXx8fHwxNzcwNjU1MzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    level: "Intermedio",
  },
  {
    id: 3,
    title: "Luz y Sombra en Acuarela",
    description: "Descubre tecnicas avanzadas para crear efectos dramaticos de iluminacion en tus obras.",
    price: "$149",
    image: "https://images.unsplash.com/photo-1579167728798-a1cf3d595960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwZmxvd2VycyUyMGJvdGFuaWNhbCUyMHBhaW50aW5nfGVufDF8fHx8MTc3MDY1NTMyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    level: "Intermedio",
  },
];

const liveWorkshops = [
  {
    id: 1,
    title: "Taller de Naturaleza en Primavera",
    date: "15 de marzo de 2026",
    seats: "8 cupos disponibles",
    price: "$89",
    image: "https://images.unsplash.com/photo-1579167728798-a1cf3d595960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwZmxvd2VycyUyMGJvdGFuaWNhbCUyMHBhaW50aW5nfGVufDF8fHx8MTc3MDY1NTMyMXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Intensivo de Sketching Urbano",
    date: "8 de abril de 2026",
    seats: "5 cupos disponibles",
    price: "$99",
    image: "https://images.unsplash.com/photo-1763496974013-389a355aae2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwdXJiYW4lMjBjaXR5c2NhcGUlMjBza2V0Y2h8ZW58MXx8fHwxNzcwNjU1MzIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Anderson",
    country: "Estados Unidos",
    rating: 5,
    text: "El estilo de ensenanza de Mauri es inspirador y claro. Pase de cero a crear mis propias piezas con seguridad en pocos meses.",
  },
  {
    id: 2,
    name: "Carlos Mendez",
    country: "Espana",
    rating: 5,
    text: "El enfoque estructurado y la retroalimentacion profesional transformaron mi pintura. Los cursos valen cada centavo.",
  },
  {
    id: 3,
    name: "Emma Laurent",
    country: "Francia",
    rating: 5,
    text: "Lecciones completas y hermosas, con el equilibrio perfecto entre tecnica y libertad creativa. Muy recomendado.",
  },
];

export function Home() {
  return (
    <div className="bg-white">
      <HomeHero />

      {/* Trust / Brand Statement Section */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-8 font-light text-neutral-900">
            Un viaje artístico único
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            Lecciones para quienes quieren aprender a controlar la luz y las emociones en sus obras <br />
            Imagina plasmar nuestro mundo a traves de tus ojos en cada pincelada.
          </p>
          <div className="w-32 h-0.5 bg-neutral-300 mx-auto" />
        </div>
      </section>

      <FourSteps />

      {/* Featured Courses Preview */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 font-light text-neutral-900">
              Cursos Destacados
            </h2>
            <p className="text-lg text-neutral-600">
              Comienza tu camino en la acuarela con nuestros cursos mas populares
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-neutral-200 h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-xs text-neutral-500 mb-2 tracking-wider uppercase">
                      {course.level}
                    </div>
                    <h3 className="text-xl mb-3 text-neutral-900">
                      {course.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl text-neutral-900">
                        {course.price}
                      </span>
                      <Button
                        asChild
                        variant="outline"
                        className="border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white"
                      >
                        <Link to="/courses">Ver Detalles</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-neutral-900 hover:bg-neutral-800"
            >
              <Link to="/courses">Ver Todos los Cursos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Live Classes / Workshops Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 font-light text-neutral-900">
              Talleres en Vivo y Acompanamiento Personal
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Unete a sesiones en vivo con feedback en tiempo real e instruccion
              personalizada. Cupos limitados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {liveWorkshops.map((workshop, index) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-neutral-200">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="px-3 py-1 bg-neutral-900 text-white text-xs rounded-full">
                        EN VIVO
                      </div>
                      <span className="text-sm text-neutral-500">
                        {workshop.date}
                      </span>
                    </div>
                    <h3 className="text-2xl mb-2 text-neutral-900">
                      {workshop.title}
                    </h3>
                    <p className="text-sm text-amber-600 mb-4">
                      {workshop.seats}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl text-neutral-900">
                        {workshop.price}
                      </span>
                      <Button className="bg-neutral-900 hover:bg-neutral-800">
                        Reservar Cupo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-neutral-600 italic">
              Cupos limitados para una atencion personalizada
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 font-light text-neutral-900">
              Lo Que Dicen Nuestros Estudiantes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-neutral-200 h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-neutral-700 mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <div className="text-neutral-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-neutral-500">
                        {testimonial.country}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Artist Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-[3/4] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1752649935095-ac8f23ec446b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBhaW50aW5nfGVufDF8fHx8MTc3MDY1NTMyMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mauri Virtanen"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 font-light text-neutral-900">
                Conoce a la Artista
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed mb-8">
                <p>
                  Con mas de 15 anos de experiencia profesional en acuarela y
                  educacion artistica, he dedicado mi carrera a ayudar a
                  artistas de todos los niveles a descubrir su voz creativa.
                </p>
                <p>
                  Mi filosofia de ensenanza se centra en construir bases
                  tecnicas solidas mientras se potencia la expresion artistica
                  individual. Cada curso esta cuidadosamente estructurado.
                </p>
                <p>
                  Ya sea que tomes un pincel por primera vez o quieras perfeccionar
                  tecnicas avanzadas, estoy aqui para guiarte con cursos
                  estructurados y acompanamiento personalizado.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white"
              >
                <Link to="/contact">Contacto para Mentoria Privada</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1752649937334-f5c3c2136b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBzdHVkaW8lMjB3b3Jrc3BhY2UlMjBwYWludGluZ3xlbnwxfHx8fDE3NzA2NTUzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-light">
            Empieza a Pintar con Confianza Hoy
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Unete a cientos de estudiantes que transformaron sus habilidades artisticas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-neutral-900 hover:bg-neutral-100 text-base px-8"
            >
              <Link to="/courses">Explorar Cursos</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-base px-8"
            >
              <Link to="/courses">Inscribirme a una Clase en Vivo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
