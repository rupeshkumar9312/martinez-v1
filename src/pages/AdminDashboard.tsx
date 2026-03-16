import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FileText,
  Image,
  Calendar,
  Settings,
  LogOut,
  BarChart3,
  Edit,
  Plus,
  Trash2,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of the admin dashboard.",
    });
    navigate("/");
  };

  // Mock data for demonstration
  const stats = [
    {
      title: "Total Pages",
      value: "12",
      icon: FileText,
      color: "text-blue-600",
    },
    {
      title: "Active Events",
      value: "4",
      icon: Calendar,
      color: "text-green-600",
    },
    {
      title: "Faculty Members",
      value: "24",
      icon: Users,
      color: "text-purple-600",
    },
    { title: "Images", value: "156", icon: Image, color: "text-orange-600" },
  ];

  const recentPages = [
    {
      id: 1,
      title: "Home Page",
      status: "Published",
      lastModified: "2024-03-15",
    },
    {
      id: 2,
      title: "About Us",
      status: "Published",
      lastModified: "2024-03-14",
    },
    { id: 3, title: "Academics", status: "Draft", lastModified: "2024-03-13" },
    {
      id: 4,
      title: "Admissions",
      status: "Published",
      lastModified: "2024-03-12",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Sports Day",
      date: "December 2024",
      status: "Active",
    },
    {
      id: 2,
      title: "Cultural Festival",
      date: "February 2025",
      status: "Planning",
    },
    {
      id: 3,
      title: "Science Exhibition",
      date: "March 2025",
      status: "Planning",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <LayoutDashboard className="w-8 h-8 text-primary mr-3" />
              <h1 className="text-xl font-primary-bold text-text-black">
                Admin Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 font-primary-regular">
                Welcome, {user?.email}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="flex items-center"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-primary-regular text-gray-600">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-primary-bold text-text-black">
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="pages">Pages</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Pages */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Recent Pages
                  </CardTitle>
                  <CardDescription>
                    Recently modified pages on your website
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPages.map((page) => (
                      <div
                        key={page.id}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div>
                          <h4 className="font-primary-bold text-text-black">
                            {page.title}
                          </h4>
                          <p className="text-sm text-gray-600 font-primary-regular">
                            Last modified: {page.lastModified}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={
                              page.status === "Published"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {page.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Upcoming Events
                  </CardTitle>
                  <CardDescription>
                    Events scheduled for the coming months
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div
                        key={event.id}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div>
                          <h4 className="font-primary-bold text-text-black">
                            {event.title}
                          </h4>
                          <p className="text-sm text-gray-600 font-primary-regular">
                            {event.date}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={
                              event.status === "Active"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {event.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Pages Tab */}
          <TabsContent value="pages" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-primary-bold text-text-black">
                Manage Pages
              </h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add New Page
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    { name: "Home", path: "/", status: "Published" },
                    { name: "About", path: "/about", status: "Published" },
                    {
                      name: "Academics",
                      path: "/academics",
                      status: "Published",
                    },
                    {
                      name: "Admissions",
                      path: "/admissions",
                      status: "Published",
                    },
                    {
                      name: "Activities",
                      path: "/activities",
                      status: "Published",
                    },
                    { name: "Contact", path: "/contact", status: "Published" },
                    {
                      name: "Management",
                      path: "/management",
                      status: "Published",
                    },
                    {
                      name: "Faculty",
                      path: "/faculty-members",
                      status: "Published",
                    },
                  ].map((page, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div>
                        <h4 className="font-primary-bold text-text-black">
                          {page.name}
                        </h4>
                        <p className="text-sm text-gray-600 font-primary-regular">
                          {page.path}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant={
                            page.status === "Published"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {page.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-primary-bold text-text-black">
                Manage Events
              </h2>
              <Button onClick={() => navigate("/admin/events/new")}>
                <Plus className="w-4 h-4 mr-2" />
                Add New Event
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      name: "Annual Sports Day",
                      date: "December",
                      status: "Active",
                      slug: "annual-sports-day",
                    },
                    {
                      name: "Cultural Festival",
                      date: "February",
                      status: "Planning",
                      slug: "cultural-festival",
                    },
                    {
                      name: "Science Exhibition",
                      date: "March",
                      status: "Planning",
                      slug: "science-exhibition",
                    },
                    {
                      name: "Art Exhibition",
                      date: "April",
                      status: "Planning",
                      slug: "art-exhibition",
                    },
                  ].map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div>
                        <h4 className="font-primary-bold text-text-black">
                          {event.name}
                        </h4>
                        <p className="text-sm text-gray-600 font-primary-regular">
                          {event.date}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant={
                            event.status === "Active" ? "default" : "secondary"
                          }
                        >
                          {event.status}
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            navigate(`/admin/events/edit/${event.slug}`)
                          }
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  System Settings
                </CardTitle>
                <CardDescription>
                  Configure your website settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-primary-bold text-text-black mb-2">
                      Website Information
                    </h4>
                    <p className="text-sm text-gray-600 font-primary-regular mb-4">
                      Basic information about your school website
                    </p>
                    <Button variant="outline">Edit Website Info</Button>
                  </div>

                  <div>
                    <h4 className="font-primary-bold text-text-black mb-2">
                      User Management
                    </h4>
                    <p className="text-sm text-gray-600 font-primary-regular mb-4">
                      Manage admin users and permissions
                    </p>
                    <Button variant="outline">Manage Users</Button>
                  </div>

                  <div>
                    <h4 className="font-primary-bold text-text-black mb-2">
                      SEO Settings
                    </h4>
                    <p className="text-sm text-gray-600 font-primary-regular mb-4">
                      Configure search engine optimization
                    </p>
                    <Button variant="outline">SEO Settings</Button>
                  </div>

                  <div>
                    <h4 className="font-primary-bold text-text-black mb-2">
                      Backup & Export
                    </h4>
                    <p className="text-sm text-gray-600 font-primary-regular mb-4">
                      Backup your website data and content
                    </p>
                    <Button variant="outline">Backup Data</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
