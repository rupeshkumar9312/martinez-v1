
import React from 'react';
import { Target, Heart, Globe, Users, Award, BookOpen, Lightbulb, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in education and character development",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Creating a nurturing environment where every child feels valued and supported",
      color: "text-secondary"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Building strong moral foundations and ethical decision-making skills",
      color: "text-text-brown"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing modern teaching methods and creative learning approaches",
      color: "text-primary"
    }
  ];

  const milestones = [
    { year: "2005", event: "Foundation of St. Martinez International School with 50 students" },
    { year: "2008", event: "Expanded to include middle school programs" },
    { year: "2012", event: "Achieved 100% pass rate in board examinations" },
    { year: "2015", event: "Introduced digital learning platforms" },
    { year: "2018", event: "Won State Award for Educational Excellence" },
    { year: "2020", event: "Successfully adapted to online learning during pandemic" },
    { year: "2023", event: "Reached 800+ students and 40+ faculty members" }
  ];

  const facilities = [
    { name: "Smart Classrooms", description: "Interactive learning with modern technology", icon: BookOpen },
    { name: "Science Laboratories", description: "Well-equipped labs for hands-on experiments", icon: Award },
    { name: "Library & Resource Center", description: "Extensive collection of books and digital resources", icon: Globe },
    { name: "Sports Complex", description: "Indoor and outdoor facilities for physical development", icon: Users },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-primary-bold mb-6 leading-tight">
              Our Mission, Vision and Core Values
            </h1>
            <p className="text-xl md:text-2xl font-primary-regular leading-relaxed opacity-90">
              Dedicated to providing quality education and nurturing young minds since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-4xl font-primary-bold text-text-black mb-6">Our Mission</h2>
                <p className="text-lg text-text-black/80 font-primary-regular leading-relaxed mb-6">
                  To provide quality education that develops critical thinking, creativity, and character
                  in students from kindergarten through class 9th, preparing them for success in their
                  academic journey and beyond.
                </p>
                <p className="text-lg text-text-black/80 font-primary-regular leading-relaxed">
                  We believe in nurturing the whole child – academically, socially, emotionally, and physically –
                  to help them become confident, compassionate, and capable individuals.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop"
                  alt="Students learning"
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
                  <Target className="w-8 h-8" />
                </div>
              </div>
            </div>

            {/* Values Grid */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-primary-bold text-text-black mb-6">Our Core Values</h2>
              <p className="text-xl text-text-black/70 font-primary-regular max-w-3xl mx-auto">
                The principles that guide everything we do at St. Martinez International School
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-md mb-4">
                    <value.icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-primary-bold mb-3 text-text-black">{value.title}</h3>
                  <p className="text-text-black/70 font-primary-regular leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* School History Timeline */}
      {/*<section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-primary-bold text-text-black mb-6">Our Journey</h2>
              <p className="text-xl text-text-black/70 font-primary-regular">
                From humble beginnings to educational excellence
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>

              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-primary-bold text-sm relative z-10">
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="ml-6 bg-white p-6 rounded-xl shadow-md flex-1">
                    <div className="text-lg font-primary-bold text-primary mb-2">{milestone.year}</div>
                    <p className="text-text-black font-primary-regular">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>*/}

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-primary-bold text-text-black mb-6">World-Class Facilities</h2>
              <p className="text-xl text-text-black/70 font-primary-regular max-w-3xl mx-auto">
                Modern infrastructure designed to enhance learning and development
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {facilities.map((facility, index) => (
                <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <facility.icon className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-primary-bold text-text-black mb-2">{facility.name}</h3>
                      <p className="text-text-black/70 font-primary-regular leading-relaxed">{facility.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-text-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-primary-bold text-yellow-300 mb-2">400+</div>
              <div className="font-primary-regular opacity-90">Students</div>
            </div>
            <div>
              <div className="text-4xl font-primary-bold text-yellow-300 mb-2">30+</div>
              <div className="font-primary-regular opacity-90">Teachers</div>
            </div>
            <div>
              <div className="text-4xl font-primary-bold text-yellow-300 mb-2">10+</div>
              <div className="font-primary-regular opacity-90">Years</div>
            </div>
            <div>
              <div className="text-4xl font-primary-bold text-yellow-300 mb-2">100%</div>
              <div className="font-primary-regular opacity-90">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
