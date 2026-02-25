import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Mail, MapPin, Instagram, Youtube, Facebook, Send } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Mensaje enviado con exito. Te responderemos pronto.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      inquiryType: "",
      message: "",
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-white">
      {/* Contact Hero */}
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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl mb-6 font-light tracking-wide"
          >
            Hablemos de tu siguiente paso artistico
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            Contactame para mentoria privada, talleres en vivo o consultas sobre cursos
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-neutral-200">
                <CardContent className="p-8">
                  <h2 className="text-3xl mb-6 font-light text-neutral-900">
                    Envia un Mensaje
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Nombre Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Correo Electronico *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="inquiryType">Tipo de Consulta *</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, inquiryType: value }))
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Selecciona el tipo de consulta" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="course">Consulta de Curso</SelectItem>
                          <SelectItem value="live-class">
                            Consulta de Clase en Vivo
                          </SelectItem>
                          <SelectItem value="private-mentoring">
                            Mentoria Privada
                          </SelectItem>
                          <SelectItem value="other">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Asunto *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="Asunto breve de tu mensaje"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Mensaje *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1 min-h-[150px]"
                        placeholder="Cuentame sobre tu consulta..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-neutral-900 hover:bg-neutral-800"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl mb-6 font-light text-neutral-900">
                  Ponte en Contacto
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-8">
                  Estoy aqui para ayudarte en tu camino con la acuarela. Si
                  tienes preguntas sobre cursos, quieres unirte a un taller en
                  vivo o te interesa mentoria privada, sera un gusto leerte.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-neutral-700" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-neutral-900">Correo</h3>
                    <a
                      href="mailto:hello@maurivirtanen.com"
                      className="text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      hello@maurivirtanen.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-neutral-700" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-neutral-900">Estudio</h3>
                    <p className="text-neutral-600">
                      Helsinki, Finlandia
                      <br />
                      (Cursos remotos disponibles en todo el mundo)
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-neutral-200">
                <h3 className="text-lg mb-4 text-neutral-900">Sigueme</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Response Time Info */}
              <Card className="border-neutral-200 bg-neutral-50">
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2 text-neutral-900">
                    Tiempo de Respuesta
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Normalmente respondo en un plazo de 24 a 48 horas. Para
                    temas urgentes relacionados con talleres en vivo, incluye
                    "Urgente" en el asunto.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Private Mentoring CTA */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1752649937334-f5c3c2136b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBzdHVkaW8lMjB3b3Jrc3BhY2UlMjBwYWludGluZ3xlbnwxfHx8fDE3NzA2NTUzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Mentoria privada"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 bg-amber-100 text-amber-900 text-xs uppercase tracking-wider rounded-full mb-4">
                Oportunidad Exclusiva
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 font-light text-neutral-900">
                Mentoria Privada Disponible
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed mb-8">
                <p>
                  Lleva tus habilidades en acuarela al siguiente nivel con
                  guia personalizada uno a uno, adaptada a tus metas.
                </p>
                <p>
                  Las sesiones de mentoria privada incluyen:
                </p>
                <ul className="space-y-2 ml-5">
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-900">•</span>
                    <span>Plan personalizado segun tu nivel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-900">•</span>
                    <span>Retroalimentacion directa sobre tus obras</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-900">•</span>
                    <span>Horarios flexibles segun tus necesidades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-900">•</span>
                    <span>Asesoria para desarrollar tu portafolio</span>
                  </li>
                </ul>
                <p className="text-amber-700 font-medium">
                  Cupos limitados • Solicitudes revisadas cada mes
                </p>
              </div>
              <Button
                size="lg"
                className="bg-neutral-900 hover:bg-neutral-800"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                Solicitar Mentoria
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-6 font-light text-neutral-900">
            Tienes Preguntas?
          </h2>
          <p className="text-neutral-600 mb-8">
            Revisa nuestras preguntas frecuentes o explora los cursos disponibles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white"
            >
              <Link to="/courses">Ver Todos los Cursos</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-neutral-900 hover:bg-neutral-800"
            >
              <Link to="/">Volver al Inicio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
