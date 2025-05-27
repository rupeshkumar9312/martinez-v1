import React from 'react';
import { User, BookOpen, GraduationCap, Star } from 'lucide-react';

const facultyMembers = [
    {
        name: "Ms. Priya Sharma",
        subject: "Mathematics",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
        bio: "Passionate about numbers and problem-solving, Ms. Sharma brings 10+ years of teaching experience and innovative math instruction.",
        icon: BookOpen,
        color: "text-primary"
    },
    {
        name: "Mr. Arjun Patel",
        subject: "Science",
        image: "https://randomuser.me/api/portraits/men/34.jpg",
        bio: "Dedicated to hands-on learning, Mr. Patel inspires curiosity and scientific thinking in every student.",
        icon: Star,
        color: "text-secondary"
    },
    {
        name: "Mrs. Kavita Rao",
        subject: "English",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        bio: "With a love for literature and language, Mrs. Rao fosters creativity and communication skills.",
        icon: GraduationCap,
        color: "text-text-brown"
    },
    {
        name: "Mr. Rakesh Singh",
        subject: "Social Studies",
        image: "https://randomuser.me/api/portraits/men/56.jpg",
        bio: "Mr. Singh connects history and current events, making learning relevant and engaging.",
        icon: User,
        color: "text-primary"
    },
    {
        name: "Ms. Anjali Mehta",
        subject: "Computer Science",
        image: "https://randomuser.me/api/portraits/women/67.jpg",
        bio: "Ms. Mehta empowers students with coding and digital skills for the future.",
        icon: BookOpen,
        color: "text-secondary"
    },
    {
        name: "Mr. Sandeep Kumar",
        subject: "Physical Education",
        image: "https://randomuser.me/api/portraits/men/78.jpg",
        bio: "Promoting health and teamwork, Mr. Kumar leads dynamic sports and fitness programs.",
        icon: Star,
        color: "text-text-brown"
    }
];

const Faculty = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-primary-regular">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-primary-bold mb-6 leading-tight">
                            Our Faculty
                        </h1>
                        <p className="text-xl md:text-2xl leading-relaxed opacity-90">
                            Meet the dedicated educators shaping the future at St. Martinez International School
                        </p>
                    </div>
                </div>
            </section>

            {/* Faculty Members */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-primary-bold text-text-black mb-6">Our Esteemed Faculty</h2>
                            <p className="text-xl text-text-black/70 max-w-3xl mx-auto">
                                Our faculty members are passionate, experienced, and committed to nurturing every student's academic and personal growth.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {facultyMembers.map((member, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-50 rounded-2xl p-8 text-center shadow hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col items-center"
                                >
                                    <div className="relative mb-4">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-28 h-28 object-cover rounded-full border-4 border-primary shadow"
                                        />
                                        <div className={`absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow ${member.color}`}>
                                            <member.icon className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-text-black mb-1">{member.name}</h3>
                                    <div className={`text-lg mb-1 font-semibold ${member.color}`}>{member.subject}</div>
                                    <p className="text-text-black/80">{member.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faculty;