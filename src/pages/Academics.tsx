
import React from 'react';
import { GraduationCap, BookOpen, Calculator, Beaker, Users, Award, Target, Star } from 'lucide-react';

const Academics = () => {
  const classes = [
    { 
      range: 'Kindergarten (KG)', 
      description: 'Foundation learning through play-based activities, basic literacy and numeracy',
      subjects: ['English', 'Math Concepts', 'Science Exploration', 'Art & Craft', 'Physical Education'],
      icon: Star,
      color: 'text-primary'
    },
    { 
      range: 'Classes 1-3', 
      description: 'Building fundamental skills in reading, writing, and arithmetic',
      subjects: ['English', 'Mathematics', 'Environmental Science', 'Hindi', 'Art', 'Physical Education'],
      icon: BookOpen,
      color: 'text-secondary'
    },
    { 
      range: 'Classes 4-6', 
      description: 'Developing deeper understanding and critical thinking skills',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi', 'Computer Science', 'Art', 'Physical Education'],
      icon: Calculator,
      color: 'text-text-brown'
    },
    { 
      range: 'Classes 7-9', 
      description: 'Advanced curriculum preparing students for high school',
      subjects: ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'History', 'Geography', 'Hindi', 'Computer Science', 'Physical Education'],
      icon: Beaker,
      color: 'text-primary'
    }
  ];

  const specialPrograms = [
    {
      title: "Advanced Learning",
      description: "Accelerated programs for gifted students with enhanced curriculum",
      icon: GraduationCap,
      color: "text-primary",
      features: ["Gifted & Talented Program", "Advanced Mathematics", "Science Research Projects", "Critical Thinking Workshops"]
    },
    {
      title: "Reading Excellence",
      description: "Comprehensive literacy development through innovative methods",
      icon: BookOpen,
      color: "text-secondary",
      features: ["Phonics Foundation", "Reading Comprehension", "Creative Writing", "Library Programs"]
    },
    {
      title: "STEM Focus",
      description: "Science, Technology, Engineering, and Mathematics integration",
      icon: Beaker,
      color: "text-text-brown",
      features: ["Hands-on Experiments", "Coding Classes", "Robotics Club", "Math Olympiad Training"]
    },
    {
      title: "Holistic Development",
      description: "Balanced approach to academic and personal growth",
      icon: Users,
      color: "text-primary",
      features: ["Social Skills", "Emotional Intelligence", "Leadership Training", "Community Service"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-primary text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-primary-bold mb-6 leading-tight">
              Academic Excellence
            </h1>
            <p className="text-xl md:text-2xl font-primary-regular leading-relaxed opacity-90">
              Comprehensive curriculum designed to foster academic excellence and personal growth from KG to Class 9
            </p>
          </div>
        </div>
      </section>

      {/* Class Structure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-primary-bold text-text-black mb-6">Our Academic Journey</h2>
            <p className="text-xl text-text-black/70 font-primary-regular max-w-3xl mx-auto">
              Structured learning paths designed for each developmental stage
            </p>
          </div>
          
          <div className="space-y-8">
            {classes.map((classInfo, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md mr-4">
                        <classInfo.icon className={`w-6 h-6 ${classInfo.color}`} />
                      </div>
                      <h3 className="text-2xl font-primary-bold text-text-black">{classInfo.range}</h3>
                    </div>
                    <p className="text-text-black/70 font-primary-regular leading-relaxed">{classInfo.description}</p>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="font-primary-bold mb-4 text-text-black">Subjects Offered:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {classInfo.subjects.map((subject, subIndex) => (
                        <div key={subIndex} className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                          <span className="text-text-black font-primary-regular text-sm">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-primary-bold text-text-black mb-6">Special Programs</h2>
            <p className="text-xl text-text-black/70 font-primary-regular max-w-3xl mx-auto">
              Enhanced learning opportunities to nurture every student's potential
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {specialPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mr-4">
                    <program.icon className={`w-8 h-8 ${program.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-primary-bold text-text-black">{program.title}</h3>
                    <p className="text-text-black/70 font-primary-regular">{program.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      <span className="text-text-black font-primary-regular">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Evaluation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-primary-bold text-text-black mb-6">Assessment & Evaluation</h2>
              <p className="text-xl text-text-black/70 font-primary-regular max-w-3xl mx-auto">
                Comprehensive evaluation methods to track progress and ensure success
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-primary mr-4" />
                  <h3 className="text-2xl font-primary-bold text-primary">Continuous Assessment</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-primary-bold text-text-black mb-1">Regular Evaluations</h4>
                      <p className="text-text-black/70 font-primary-regular">Weekly tests and quizzes to monitor progress</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-primary-bold text-text-black mb-1">Project-Based Learning</h4>
                      <p className="text-text-black/70 font-primary-regular">Hands-on projects and practical applications</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-primary-bold text-text-black mb-1">Oral Assessments</h4>
                      <p className="text-text-black/70 font-primary-regular">Presentations and verbal evaluations</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/5 border border-secondary/20 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Award className="w-8 h-8 text-secondary mr-4" />
                  <h3 className="text-2xl font-primary-bold text-secondary">Formal Examinations</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-primary-bold text-text-black mb-1">Semester Exams</h4>
                      <p className="text-text-black/70 font-primary-regular">Comprehensive mid-term and final examinations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-primary-bold text-text-black mb-1">Board Preparation</h4>
                      <p className="text-text-black/70 font-primary-regular">Special coaching for board examinations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-primary-bold text-text-black mb-1">Progress Reports</h4>
                      <p className="text-text-black/70 font-primary-regular">Detailed feedback to parents and students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-text-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-primary-bold mb-6">Academic Year 2024-25</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-2xl font-primary-bold text-yellow-300 mb-2">April - September</div>
              <div className="font-primary-regular opacity-90">First Semester</div>
            </div>
            <div>
              <div className="text-2xl font-primary-bold text-yellow-300 mb-2">October - March</div>
              <div className="font-primary-regular opacity-90">Second Semester</div>
            </div>
            <div>
              <div className="text-2xl font-primary-bold text-yellow-300 mb-2">May - June</div>
              <div className="font-primary-regular opacity-90">Summer Break</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
