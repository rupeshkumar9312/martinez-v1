import React from 'react';
import { User, Users, Award, Shield, Phone } from 'lucide-react';
import ramu from '../assets/images/ramu.jpeg'
import rinku from '../assets/images/rinku.jpeg'
import sonu from '../assets/images/sonu.jpeg'
const committeeMembers = [
    // {
    //     name: "Mr. Jogendra Singh",
    //     role: "Founder & Chairperson",
    //     image: "https://randomuser.me/api/portraits/men/4.jpg",
    //     bio: "Visionary educator with 25+ years of experience, dedicated to holistic child development and academic excellence.",
    //     icon: Award,
    //     color: "text-primary"
    // },
    {
        name: "Mr. Ramu Jadon",
        role: "Director (Academics)",
        image: ramu,
        bio: "Expert in curriculum design and teacher training, ensuring the highest academic standards at our school.",
        icon: Users,
        color: "text-secondary",
        contact: "+91 7017044378"
    },
    {
        name: "Mr. Rinku Jadon",
        role: "Principal",
        image: rinku,
        bio: "Oversees school operations, infrastructure, and safety, fostering a secure and nurturing environment.",
        icon: User,
        color: "text-primary",
        contact: "+91 6395766173"
    },

    {
        name: "Mr. Rupesh Kumar",
        role: "Director (Administration)",
        image: "https://media.licdn.com/dms/image/v2/D5603AQHxQHhnwoz1kQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710304751817?e=1753920000&v=beta&t=1hYWK-LYQnJjZVeqYwp1p9aXVCgMHEVHXFxmDrU_r34",
        bio: "Passionate about innovative learning, Rupesh brings a global perspective and a commitment to modern education.",
        icon: Shield,
        color: "text-text-brown",
        contact: "+91 8532077953"
    },
    {
        name: "Mr. Sonu Jadon",
        role: "Co-ordinator",
        image: sonu,
        bio: "Dynamic leader focused on student growth, teacher empowerment, and community engagement.",
        icon: Award,
        color: "text-secondary",
        contact: "+91 9536537058"
    }
];

const Management = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-primary-regular">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-primary-bold mb-6 leading-tight">
                            Our Management
                        </h1>
                        <p className="text-xl md:text-2xl leading-relaxed opacity-90">
                            Meet the visionaries and leaders guiding St. Martinez International School
                        </p>
                    </div>
                </div>
            </section>

            {/* Committee Members */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-primary-bold text-text-black mb-6">Our Founders, Directors & Principal</h2>
                            <p className="text-xl text-text-black/70 max-w-3xl mx-auto">
                                The Managing Committee brings together a wealth of experience, passion, and dedication to ensure the holistic growth and success of every student.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
                            {committeeMembers.map((member, idx) => (
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
                                        <div
                                            className={`absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow ${member.color}`}>
                                            <member.icon className="w-6 h-6"/>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-text-black mb-1">{member.name}</h3>
                                    {/*<div className={`text-lg mb-3 font-semibold ${member.color}`}>{member.role}</div>*/}
                                    {member.contact && (
                                        <p className="text-text-black/80 flex items-center font-semibold justify-center gap-2">
                                            <Phone className="w-4 h-4 text-primary" />
                                            {member.contact}
                                        </p>
                                    )}
                                    <p className="text-text-black/80">{member.bio}</p>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            {/*<section className="py-16 bg-secondary text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Contact the Committee</h2>
                        <p className="mb-6 text-lg opacity-90">
                            For queries or suggestions, reach out to our managing committee at
                            <a href="mailto:committee@stmartinez.edu" className="underline ml-1 text-yellow-200 hover:text-white">committee@stmartinez.edu</a>
                        </p>
                    </div>
                </div>
            </section>*/}
        </div>
    );
};

export default Management;