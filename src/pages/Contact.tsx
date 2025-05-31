import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = "https://script.google.com/macros/s/AKfycbysbBmi2ys-xUJTClkDLSU-GYvaUY3DeCasxoQtkMCFTHfM5H-diaNPa3YYI7IeQ6Xt/exec";
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: (
            `Name=${formData.name}&Email=${formData.email}&Phone=${formData.phone}&Subject=${formData.subject}&Message=${formData.message}`
        )
      });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      toast.success('Thank you for your message! We will get back to you soon.');
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Near Bypass, Fatehabad Road Shamsabad, Agra - 283125"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["Main: +91 70170 44378", "Admissions: +91 63957 66173"],
      color: "text-secondary"
    },
    // {
    //   icon: Mail,
    //   title: "Email Us",
    //   details: ["info@st.martinez.edu", "admissions@st.martinez.edu"],
    //   color: "text-text-brown"
    // },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Fri: 8:00 AM - 4:00 PM", "Sat: 9:00 AM - 1:00 PM"],
      color: "text-primary"
    }
  ];

  return (
      <div className="min-h-screen relative">
        <ToastContainer position="top-right" autoClose={3500} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
        {/* Loader Overlay */}
        {loading && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
              <div className="flex flex-col items-center">
                <svg className="animate-spin h-12 w-12 text-primary mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                <span className="text-white text-lg font-semibold">Sending...</span>
              </div>
            </div>
        )}
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-primary-bold mb-6 leading-tight">
                Get In Touch
              </h1>
              <p className="text-xl md:text-2xl font-primary-regular leading-relaxed opacity-90">
                We're here to answer your questions and help you start your journey with us
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactInfo.map((info, index) => (
                  <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group">
                    <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6">
                      <info.icon className={`w-8 h-8 ${info.color}`} />
                    </div>
                    <h3 className="text-xl font-primary-bold mb-4 text-text-black">{info.title}</h3>
                    <div className="space-y-2">
                      {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-text-black/70 font-primary-regular">{detail}</p>
                      ))}
                    </div>
                  </div>
              ))}
            </div>

            {/* Main Contact Section */}
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-primary-bold text-text-black mb-4">Send us a Message</h2>
                  <p className="text-text-black/70 font-primary-regular">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-text-black font-primary-bold">Full Name *</Label>
                      <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-2 h-12 border-gray-200 focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-text-black font-primary-bold">Email Address</Label>
                      <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-2 h-12 border-gray-200 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-text-black font-primary-bold">Phone Number *</Label>
                      <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-2 h-12 border-gray-200 focus:border-primary"
                          required
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-text-black font-primary-bold">Subject</Label>
                      <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}

                          className="mt-2 h-12 border-gray-200 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-text-black font-primary-bold">Message *</Label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="mt-2 flex w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button type="submit" className="w-full h-12 text-white bg-primary hover:bg-primary/90 font-primary-bold text-lg" disabled={loading}>
                    <Send className="mr-2 h-5 w-5 text-white" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              {/* Additional Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-primary-bold text-text-black mb-6">Let's Connect</h2>
                  <p className="text-lg text-text-black/80 font-primary-regular leading-relaxed mb-8">
                    We're always happy to hear from prospective families, current parents, and community members.
                    Whether you have questions about our programs, want to schedule a visit, or need assistance
                    with the admission process, we're here to help.
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Calendar className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-xl font-primary-bold text-primary">Schedule a Campus Visit</h3>
                    </div>
                    <p className="text-text-black/70 font-primary-regular mb-4">
                      Experience our learning environment firsthand with a guided tour of our facilities.
                    </p>
                    <Button className="bg-primary hover:bg-primary/90 text-white font-primary-bold">
                      Book a Tour
                    </Button>
                  </div>

                  <div className="bg-secondary/5 border border-secondary/20 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <MessageCircle className="w-6 h-6 text-secondary mr-3" />
                      <h3 className="text-xl font-primary-bold text-secondary">Admission Consultation</h3>
                    </div>
                    <p className="text-text-black/70 font-primary-regular mb-4">
                      Get personalized guidance about our admission process and requirements.
                    </p>
                    <Button className="bg-secondary hover:bg-secondary/90 font-primary-bold text-white">
                      Schedule Call
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-text-black text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-primary-bold mb-4">Emergency Contact</h2>
            <p className="text-xl font-primary-regular mb-6 opacity-90">
              For urgent matters outside office hours
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Phone className="w-6 h-6 text-yellow-300" />
              <span className="text-xl font-primary-bold text-yellow-300">+91 95365 37058</span>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Contact;