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
    title: "Watercolor Foundations",
    description: "Master the essential techniques and materials for watercolor painting from the ground up.",
    fullDescription: "This comprehensive beginner course covers everything you need to start your watercolor journey. Learn about materials, color mixing, brush techniques, water control, and fundamental painting methods.",
    level: "Beginner",
    format: "Pre-recorded",
    duration: "6 hours",
    lessons: 12,
    price: 129,
    image: "https://images.unsplash.com/photo-1690743300963-c09faf1d06f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwY29sb3IlMjBwYWxldHRlJTIwYnJ1c2hlc3xlbnwxfHx8fDE3NzA2NTUzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    whatYouLearn: [
      "Understanding watercolor materials and paper",
      "Essential brush techniques and strokes",
      "Color theory and mixing fundamentals",
      "Water control and wet-on-wet techniques",
      "Creating gradients and washes",
      "Basic composition principles",
    ],
    includes: [
      "12 HD video lessons (6 hours total)",
      "Downloadable practice sheets",
      "Lifetime access to course materials",
      "Certificate of completion",
    ],
  },
  {
    id: 2,
    title: "Watercolor Landscapes",
    description: "Learn to capture stunning landscapes with depth, atmosphere, and professional techniques.",
    fullDescription: "Take your watercolor skills to the next level by mastering landscape painting. This course focuses on creating depth, atmosphere, and realistic natural elements.",
    level: "Intermediate",
    format: "Pre-recorded",
    duration: "8 hours",
    lessons: 15,
    price: 179,
    image: "https://images.unsplash.com/photo-1685013640715-8701bbaa2207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwbGFuZHNjYXBlJTIwcGFpbnRpbmclMjBuYXR1cmV8ZW58MXx8fHwxNzcwNjU1MzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    whatYouLearn: [
      "Creating atmospheric perspective",
      "Painting skies, clouds, and water",
      "Trees, foliage, and natural textures",
      "Compositional techniques for landscapes",
      "Working from photo references",
      "Capturing light and mood",
    ],
    includes: [
      "15 HD video lessons (8 hours total)",
      "Reference photos and templates",
      "Lifetime access to course materials",
      "Certificate of completion",
    ],
  },
  {
    id: 3,
    title: "Portrait Painting in Watercolor",
    description: "Master the art of capturing human likeness with professional portrait techniques.",
    fullDescription: "Learn advanced techniques for painting expressive watercolor portraits. This course covers facial anatomy, skin tones, expression, and achieving likeness.",
    level: "Advanced",
    format: "Pre-recorded",
    duration: "10 hours",
    lessons: 18,
    price: 199,
    image: "https://images.unsplash.com/photo-1750327324262-319afa34d3e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwcG9ydHJhaXQlMjBmYWNlJTIwYXJ0fGVufDF8fHx8MTc3MDY1NTMyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    whatYouLearn: [
      "Facial anatomy and proportions",
      "Mixing realistic skin tones",
      "Capturing facial features and expression",
      "Hair painting techniques",
      "Creating depth in portrait work",
      "Achieving likeness and personality",
    ],
    includes: [
      "18 HD video lessons (10 hours total)",
      "Anatomy reference guides",
      "Lifetime access to course materials",
      "Certificate of completion",
    ],
  },
  {
    id: 4,
    title: "Color Theory for Watercolor",
    description: "Unlock the power of color with comprehensive color theory and mixing techniques.",
    fullDescription: "Deep dive into color theory specifically tailored for watercolor artists. Learn to mix any color you need and create harmonious color palettes.",
    level: "Beginner",
    format: "Pre-recorded",
    duration: "5 hours",
    lessons: 10,
    price: 99,
    image: "https://images.unsplash.com/photo-1690743300963-c09faf1d06f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwY29sb3IlMjBwYWxldHRlJTIwYnJ1c2hlc3xlbnwxfHx8fDE3NzA2NTUzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    whatYouLearn: [
      "Understanding the color wheel",
      "Warm vs cool colors",
      "Creating harmonious palettes",
      "Mixing secondary and tertiary colors",
      "Color psychology in art",
      "Limited palette painting",
    ],
    includes: [
      "10 HD video lessons (5 hours total)",
      "Color mixing charts",
      "Lifetime access to course materials",
      "Certificate of completion",
    ],
  },
  {
    id: 5,
    title: "Live Workshop: Nature Painting",
    description: "Join a live intensive workshop focused on botanical and nature subjects.",
    fullDescription: "This live workshop provides real-time instruction and feedback as we paint nature subjects together. Perfect for hands-on learning and immediate guidance.",
    level: "Intermediate",
    format: "Live class",
    duration: "3 hours",
    lessons: 1,
    price: 89,
    image: "https://images.unsplash.com/photo-1579167728798-a1cf3d595960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwZmxvd2VycyUyMGJvdGFuaWNhbCUyMHBhaW50aW5nfGVufDF8fHx8MTc3MDY1NTMyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "March 15, 2026",
    seats: 8,
    whatYouLearn: [
      "Botanical illustration techniques",
      "Painting leaves and petals",
      "Creating organic textures",
      "Live feedback on your work",
    ],
    includes: [
      "3-hour live session",
      "Real-time Q&A and feedback",
      "Recording available after class",
      "Course materials list",
    ],
  },
  {
    id: 6,
    title: "Live Workshop: Urban Sketching",
    description: "Learn loose, expressive urban sketching techniques in this live intensive workshop.",
    fullDescription: "Join this live workshop to explore the art of urban sketching with watercolor. Learn to capture architecture, street scenes, and city life with confidence.",
    level: "Intermediate",
    format: "Live class",
    duration: "3 hours",
    lessons: 1,
    price: 99,
    image: "https://images.unsplash.com/photo-1763496974013-389a355aae2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwdXJiYW4lMjBjaXR5c2NhcGUlMjBza2V0Y2h8ZW58MXx8fHwxNzcwNjU1MzIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "April 8, 2026",
    seats: 5,
    whatYouLearn: [
      "Quick sketching techniques",
      "Painting architecture and perspective",
      "Loose, expressive brushwork",
      "Live feedback on your work",
    ],
    includes: [
      "3-hour live session",
      "Real-time Q&A and feedback",
      "Recording available after class",
      "Course materials list",
    ],
  },
];

const faqs = [
  {
    question: "Do I need previous painting experience?",
    answer: "No! Our beginner courses are designed for complete beginners. We start with the fundamentals and guide you step by step.",
  },
  {
    question: "How do I access the course after purchase?",
    answer: "Once enrolled, you'll receive instant access to all course materials through our learning platform. You can watch on any device.",
  },
  {
    question: "Can I watch the courses on mobile?",
    answer: "Yes! All courses are optimized for viewing on desktop, tablet, and mobile devices.",
  },
  {
    question: "Are live workshops recorded?",
    answer: "Yes, all live workshops are recorded and made available to participants for 30 days after the session.",
  },
  {
    question: "Do I get downloadable materials?",
    answer: "Yes! Each course includes downloadable resources such as reference images, practice sheets, and guides.",
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
            Online Courses & Workshops
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Learn watercolor painting through structured lessons, high-quality
            videos, and guided practice.
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
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>

            <Select value={formatFilter} onValueChange={setFormatFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Formats" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Formats</SelectItem>
                <SelectItem value="Pre-recorded">Pre-recorded</SelectItem>
                <SelectItem value="Live class">Live Class</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
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
                    {course.format === "Live class" && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full">
                        LIVE
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
                    {course.format === "Live class" && (
                      <p className="text-sm text-amber-600 mb-3">
                        {course.date} • {course.seats} seats remaining
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
                          View Course
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
              Easy Enrollment & Secure Payment
            </h2>
            <p className="text-lg text-neutral-600">
              Enroll in minutes and start learning immediately
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-neutral-900">Secure Payment</h3>
              <p className="text-neutral-600 text-sm">
                Industry-standard encryption protects your payment information
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-neutral-900">Instant Access</h3>
              <p className="text-neutral-600 text-sm">
                Start learning immediately after enrollment with lifetime access
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-neutral-900">
                Professional Support
              </h3>
              <p className="text-neutral-600 text-sm">
                Get help whenever you need it from our dedicated support team
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
              Frequently Asked Questions
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
            Choose Your Next Course and Start Creating
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Join our community of passionate watercolor artists
          </p>
          <Button
            size="lg"
            className="bg-white text-neutral-900 hover:bg-neutral-100"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Browse All Courses
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
                  {selectedCourse.format === "Live class" && (
                    <span className="px-3 py-1 bg-red-600 text-white text-xs rounded-full">
                      LIVE
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

                {selectedCourse.format === "Live class" && (
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="text-amber-900">
                      <strong>Date:</strong> {selectedCourse.date}
                    </p>
                    <p className="text-amber-900">
                      <strong>Available Seats:</strong> {selectedCourse.seats} remaining
                    </p>
                  </div>
                )}

                <div>
                  <h3 className="text-xl mb-3 text-neutral-900">
                    What You'll Learn
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
                    This Course Includes
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
                      One-time payment • Lifetime access
                    </div>
                  </div>
                  <Button size="lg" className="bg-neutral-900 hover:bg-neutral-800">
                    Enroll Now
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
