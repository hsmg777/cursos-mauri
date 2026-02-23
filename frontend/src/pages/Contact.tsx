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
    toast.success("Message sent successfully! We'll get back to you soon.");
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
            Let's Talk About Your Next Artistic Step
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            Contact me for private mentoring, live workshops, or course inquiries
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
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
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
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, inquiryType: value }))
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="course">Course Question</SelectItem>
                          <SelectItem value="live-class">
                            Live Class Inquiry
                          </SelectItem>
                          <SelectItem value="private-mentoring">
                            Private Mentoring
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="Brief subject of your message"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1 min-h-[150px]"
                        placeholder="Tell me about your inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-neutral-900 hover:bg-neutral-800"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
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
                  Get in Touch
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-8">
                  I'm here to help you on your watercolor journey. Whether you
                  have questions about courses, want to join a live workshop, or
                  are interested in private mentoring, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-neutral-700" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-neutral-900">Email</h3>
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
                    <h3 className="text-lg mb-1 text-neutral-900">Studio</h3>
                    <p className="text-neutral-600">
                      Helsinki, Finland
                      <br />
                      (Remote courses available worldwide)
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-neutral-200">
                <h3 className="text-lg mb-4 text-neutral-900">Follow Me</h3>
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
                    Response Time
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    I typically respond to inquiries within 24-48 hours. For
                    urgent matters related to upcoming live workshops, please
                    mention "Urgent" in your subject line.
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
                  alt="Private mentoring"
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
                Exclusive Opportunity
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 font-light text-neutral-900">
                Private Mentoring Available
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed mb-8">
                <p>
                  Take your watercolor skills to the next level with personalized
                  one-on-one guidance tailored to your specific goals and
                  challenges.
                </p>
                <p>
                  Private mentoring sessions include:
                </p>
                <ul className="space-y-2 ml-5">
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-900">•</span>
                    <span>Customized curriculum based on your skill level</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-900">•</span>
                    <span>Direct feedback on your artwork</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-900">•</span>
                    <span>Flexible scheduling to fit your needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-900">•</span>
                    <span>Portfolio development guidance</span>
                  </li>
                </ul>
                <p className="text-amber-700 font-medium">
                  Limited slots available • Applications reviewed monthly
                </p>
              </div>
              <Button
                size="lg"
                className="bg-neutral-900 hover:bg-neutral-800"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                Request Mentoring
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-6 font-light text-neutral-900">
            Have Questions?
          </h2>
          <p className="text-neutral-600 mb-8">
            Check out our frequently asked questions or browse available courses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white"
            >
              <Link to="/courses">View All Courses</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-neutral-900 hover:bg-neutral-800"
            >
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
