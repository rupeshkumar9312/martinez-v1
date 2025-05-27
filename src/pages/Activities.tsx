
import React from 'react';
import { Music, Palette, Trophy, Drama, Calendar, Star, Users, Award } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      category: 'Sports & Athletics',
      icon: Trophy,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      items: ['Basketball', 'Cricket', 'Football', 'Athletics', 'Swimming', 'Badminton', 'Table Tennis', 'Volleyball'],
      description: 'Physical fitness and team spirit through competitive sports'
    },
    {
      category: 'Arts & Crafts',
      icon: Palette,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      items: ['Drawing & Painting', 'Clay Modeling', 'Origami', 'Craft Work', 'Calligraphy', 'Photography', 'Sculpture', 'Digital Art'],
      description: 'Creative expression and artistic skill development'
    },
    {
      category: 'Music & Dance',
      icon: Music,
      color: 'text-text-brown',
      bgColor: 'bg-orange-100',
      items: ['Vocal Music', 'Instrumental Music', 'Classical Dance', 'Folk Dance', 'Choir', 'Band', 'Orchestra', 'Music Theory'],
      description: 'Cultural enrichment through musical and dance performances'
    },
    {
      category: 'Drama & Literature',
      icon: Drama,
      color: 'text-primary',
      bgColor: 'bg-blue-100',
      items: ['Theatre', 'Storytelling', 'Debate', 'Elocution', 'Creative Writing', 'Poetry', 'Public Speaking', 'Drama Club'],
      description: 'Communication skills and literary appreciation'
    }
  ];

  const events = [
    {
      name: 'Annual Sports Day',
      description: 'A grand celebration of athleticism with inter-house competitions and team spirit',
      date: 'December',
      image: 'https://images.unsplash.com/photo-1461897104016-0b3b00cc81c6?w=400&h=250&fit=crop',
      color: 'border-primary'
    },
    {
      name: 'Cultural Festival',
      description: 'Showcasing student talents in music, dance, drama, and various cultural performances',
      date: 'February',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop',
      color: 'border-secondary'
    },
    {
      name: 'Science Exhibition',
      description: 'Students display innovative science projects and experiments to inspire scientific thinking',
      date: 'March',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop',
      color: 'border-text-brown'
    },
    {
      name: 'Art Exhibition',
      description: 'Display of student artwork showcasing creativity and artistic development throughout the year',
      date: 'April',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=250&fit=crop',
      color: 'border-primary'
    }
  ];

  const clubs = [
    {
      name: 'Science Club',
      description: 'Explore the wonders of science through experiments, projects, and scientific inquiry',
      color: 'text-primary',
      bgColor: 'bg-primary/5',
      borderColor: 'border-primary',
      activities: ['Weekly Experiments', 'Science Fair Participation', 'Guest Scientist Visits', 'Research Projects']
    },
    {
      name: 'Eco Club',
      description: 'Learn about environmental conservation and participate in green initiatives',
      color: 'text-secondary',
      bgColor: 'bg-secondary/5',
      borderColor: 'border-secondary',
      activities: ['Tree Plantation', 'Recycling Projects', 'Environmental Awareness', 'Garden Maintenance']
    },
    {
      name: 'Literature Club',
      description: 'Develop reading, writing, and communication skills through literary activities',
      color: 'text-text-brown',
      bgColor: 'bg-orange-50',
      borderColor: 'border-text-brown',
      activities: ['Book Reading Sessions', 'Creative Writing', 'Poetry Competitions', 'Author Interactions']
    },
    /*{
      name: 'Tech Club',
      description: 'Explore technology, coding, and digital innovation in a collaborative environment',
      color: 'text-primary',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500',
      activities: ['Coding Workshops', 'App Development', 'Robotics Projects', 'Tech Competitions']
    }*/
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-text-brown to-primary text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-primary-bold mb-6 leading-tight">
              Activities & Events
            </h1>
            <p className="text-xl md:text-2xl font-primary-regular leading-relaxed opacity-90">
              Enriching student life through diverse extracurricular activities and memorable events
            </p>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-primary-bold text-text-black mb-6">Extracurricular Activities</h2>
            <p className="text-xl text-text-black/70 font-primary-regular max-w-3xl mx-auto">
              Holistic development through diverse activities that nurture talents and build character
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`${activity.bgColor} p-4 rounded-2xl mr-6`}>
                      <IconComponent className={`w-8 h-8 ${activity.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-primary-bold text-text-black mb-2">{activity.category}</h3>
                      <p className="text-text-black/70 font-primary-regular">{activity.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {activity.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                        <span className="text-text-black font-primary-regular text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Annual Events */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-primary-bold text-text-black mb-6">Annual Events</h2>
            <p className="text-xl text-text-black/70 font-primary-regular max-w-3xl mx-auto">
              Memorable celebrations that bring our school community together
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 ${event.color}`}>
                <img 
                  src={event.image} 
                  alt={event.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-primary-bold text-text-black">{event.name}</h3>
                    <span className="bg-gray-100 text-text-black px-3 py-1 rounded-full text-sm font-primary-bold">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-text-black/70 font-primary-regular leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-primary-bold text-text-black mb-6">Clubs & Societies</h2>
            <p className="text-xl text-text-black/70 font-primary-regular max-w-3xl mx-auto">
              Specialized interest groups fostering deeper learning and community building
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {clubs.map((club, index) => (
              <div key={index} className={`${club.bgColor} p-8 rounded-2xl border-l-4 ${club.borderColor} hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-center mb-6">
                  <Users className={`w-8 h-8 ${club.color} mr-4`} />
                  <h3 className="text-2xl font-primary-bold text-text-black">{club.name}</h3>
                </div>
                <p className="text-text-black/80 font-primary-regular mb-6 leading-relaxed">{club.description}</p>
                
                <div className="space-y-3">
                  {club.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="flex items-center">
                      <Star className={`w-4 h-4 ${club.color} mr-3`} />
                      <span className="text-text-black font-primary-regular">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      {/*<section className="py-16 bg-text-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-primary-bold mb-6">Recent Achievements</h2>
            <p className="text-xl font-primary-regular opacity-90 max-w-3xl mx-auto">
              Our students' outstanding performance in various competitions and events
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Award className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <div className="text-2xl font-primary-bold text-yellow-300 mb-2">15+</div>
              <div className="font-primary-regular opacity-90">State Awards</div>
            </div>
            <div>
              <Trophy className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <div className="text-2xl font-primary-bold text-yellow-300 mb-2">50+</div>
              <div className="font-primary-regular opacity-90">Sports Medals</div>
            </div>
            <div>
              <Star className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <div className="text-2xl font-primary-bold text-yellow-300 mb-2">100+</div>
              <div className="font-primary-regular opacity-90">Art Exhibitions</div>
            </div>
            <div>
              <Calendar className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <div className="text-2xl font-primary-bold text-yellow-300 mb-2">25+</div>
              <div className="font-primary-regular opacity-90">Events Organized</div>
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  );
};

export default Activities;
