
import { Code, Palette, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows industry best practices and modern standards."
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Transforming ideas into visually stunning interfaces that provide exceptional user experiences."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and methodologies to deliver cutting-edge solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience creating digital solutions 
              that make a difference. I specialize in React, Node.js, and modern web technologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 p-8">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop" 
                  alt="Developer workspace"
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                <Code className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                  Building the Future, One Line at a Time
                </h3>
                <p className="text-gray-600 font-inter leading-relaxed mb-6">
                  My journey in web development started with curiosity and has evolved into a passion for 
                  creating meaningful digital experiences. I believe in the power of technology to solve 
                  real-world problems and improve people's lives.
                </p>
                <p className="text-gray-600 font-inter leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 font-inter">{feature.title}</h4>
                      <p className="text-gray-600 font-inter leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
