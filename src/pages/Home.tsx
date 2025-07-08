import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Award, Calendar, Star, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import schoolImg from '@/assets/images/school.jpg'
import AdmissionCloseSoonModal from '@/components/ui/AdmissionCloseSoonModal';

const Home = () => {
  const [showAdmissionModal, setShowAdmissionModal] = useState(false);

  useEffect(() => {
    // Show the modal after a short delay (e.g., 1 second)
    const timer = setTimeout(() => setShowAdmissionModal(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: BookOpen,
      title: "Excellence in Education",
      description: "Comprehensive curriculum designed to foster critical thinking and creativity",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Individual attention with optimal teacher-student ratio of 1:15",
      color: "text-secondary"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for academic excellence and innovative teaching methods",
      color: "text-text-brown"
    },
    {
      icon: Calendar,
      title: "Rich Activities",
      description: "Diverse extracurricular programs for holistic development",
      color: "text-primary"
    }
  ];

  const stats = [
    { number: "400+", label: "Students", color: "text-primary" },
    { number: "30+", label: "Expert Teachers", color: "text-secondary" },
    { number: "10+", label: "Years of Excellence", color: "text-text-brown" },
    { number: "98%", label: "Success Rate", color: "text-primary" }
  ];

  return (
      <div className="min-h-screen">
        <AdmissionCloseSoonModal open={showAdmissionModal} onClose={() => setShowAdmissionModal(false)} />
        {/* ...rest of your Home page code remains unchanged... */}
        {/* Hero Section with Background Pattern */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
            <div className="absolute top-40 right-40 w-16 h-16 border border-white/20 rounded-full"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-primary-bold  mb-6 leading-tight">
                  St. Martinez
                  <span className="block text-yellow-300">International School</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 font-primary-regular leading-relaxed opacity-90">
                  Nurturing young minds from Kindergarten to Class 9th with excellence in education and character building
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-primary-bold px-8 py-4 text-lg">
                    <Link to="/admissions">
                      Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-2 border-white text-primary hover:bg-white hover:text-primary font-primary-regular px-8 py-4 text-lg">
                    <Link to="/about">
                      <Play className="mr-2 h-5 w-5" /> Take a Tour
                    </Link>
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
                  {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl md:text-3xl font-primary-bold text-yellow-300 mb-1">
                          {stat.number}
                        </div>
                        <div className="text-sm font-primary-regular opacity-80">
                          {stat.label}
                        </div>
                      </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <img
                      src={schoolImg}
                      alt="Students in classroom"
                      className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-4 rounded-2xl shadow-xl">
                    <Star className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ...rest of your Home page code remains unchanged... */}
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-primary-bold text-text-black mb-6">
                Why Choose Us?
              </h2>
              <p className="text-xl text-text-black/70 font-primary-regular max-w-3xl mx-auto">
                We provide more than education – we shape futures with our commitment to excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                  <div key={index} className="group text-center p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                    <div className="mb-6 relative">
                      <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className={`w-8 h-8 ${feature.color}`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-primary-bold mb-4 text-text-black">{feature.title}</h3>
                    <p className="text-text-black/70 font-primary-regular leading-relaxed">{feature.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>
        {/* Programs Overview */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-primary-bold text-text-black mb-6">
                Our Programs
              </h2>
              <p className="text-xl text-text-black/70 font-primary-regular max-w-3xl mx-auto">
                Comprehensive education from early years to middle school
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <BookOpen className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-primary-bold text-primary mb-2">Academic Programs</h3>
                  <p className="text-text-black/70 font-primary-regular">Explore our comprehensive curriculum from KG to Class 9</p>
                </div>
                <Button asChild className="w-full text-white bg-primary hover:bg-primary/90 font-primary-regular">
                  <Link to="/academics">View Programs</Link>
                </Button>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-secondary">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Users className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-primary-bold text-secondary mb-2">Admission Process</h3>
                  <p className="text-text-black/70 font-primary-regular">Learn about our admission requirements and process </p><br/>
                </div>
                <Button asChild className="w-full text-white bg-secondary hover:bg-secondary/90 font-primary-regular">
                  <Link to="/admissions">Apply Today</Link>
                </Button>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-text-brown">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                    <Calendar className="w-10 h-10 text-text-brown" />
                  </div>
                  <h3 className="text-2xl font-primary-bold text-text-brown mb-2">School Activities</h3>
                  <p className="text-text-black/70 font-primary-regular">Discover our diverse extracurricular programs</p>
                  <br/>
                </div>
                <Button asChild className="w-full text-white bg-text-brown hover:bg-text-brown/90 font-primary-regular">
                  <Link to="/activities">Explore Activities</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Call to Action */}
        <section className="py-16 bg-text-black text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-primary-bold mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl font-primary-regular mb-8 opacity-90 max-w-2xl mx-auto">
              Take the first step towards your child's bright future with quality education and holistic development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 font-primary-bold px-8 py-4">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-primary hover:bg-white hover:text-text-black font-primary-regular px-8 py-4">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Home;