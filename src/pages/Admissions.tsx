import React, { useState } from 'react';
import { Calendar, FileText, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admissions = () => {

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    class: '',
    previousSchool: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
            `Name=${formData.studentName}&Parent=${formData.parentName}&Email=${formData.email}&Phone=${formData.phone}&Class=${formData.class}&PreviousSchool=${formData.previousSchool}&query='Admissions'`
        )
      });
      // setFormData({ studentName: '', parentName: '', email: '', phone: '', class: '', previousSchool: '' });
      toast.success('Thank you for your message! We will get back to you soon.');
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
                <span className="text-white text-lg font-semibold">Submitting...</span>
              </div>
            </div>
        )}
        {/* Hero Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join our academic community and give your child the best foundation for their future
            </p>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Admission Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Application</h3>
                <p className="text-gray-600">Submit online application form with required documents</p>
              </div>
              <div className="text-center p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Assessment</h3>
                <p className="text-gray-600">Age-appropriate assessment for academic readiness</p>
              </div>
              <div className="text-center p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Interview</h3>
                <p className="text-gray-600">Parent-student interview with admission committee</p>
              </div>
              <div className="text-center p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Enrollment</h3>
                <p className="text-gray-600">Complete enrollment and fee payment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Admission Dates</h3>
                <p className="text-gray-600">Applications open: January 1st<br />Deadline: March 31st</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Required Documents</h3>
                <p className="text-gray-600">Birth certificate, previous school records, medical certificate</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Age Criteria</h3>
                <p className="text-gray-600">KG: 3-4 years<br />Class 1: 5-6 years<br />Other classes: Age appropriate</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">School Hours</h3>
                <p className="text-gray-600">8:00 AM - 2:30 PM<br />Extended care available until 5:00 PM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Apply Now</h2>
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="studentName">Student Name *</Label>
                    <Input
                        id="studentName"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleInputChange}
                        required
                    />
                  </div>
                  <div>
                    <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                    <Input
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="class">Applying for Class *</Label>
                    <select
                        id="class"
                        name="class"
                        value={formData.class}
                        onChange={handleInputChange}
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select Class</option>
                      <option value="KG">Kindergarten (KG)</option>
                      <option value="1">Class 1</option>
                      <option value="2">Class 2</option>
                      <option value="3">Class 3</option>
                      <option value="4">Class 4</option>
                      <option value="5">Class 5</option>
                      <option value="6">Class 6</option>
                      <option value="7">Class 7</option>
                      <option value="8">Class 8</option>
                      <option value="9">Class 9</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="previousSchool">Previous School (if any)</Label>
                    <Input
                        id="previousSchool"
                        name="previousSchool"
                        value={formData.previousSchool}
                        onChange={handleInputChange}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full text-white bg-primary hover:bg-secondary" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Admissions;