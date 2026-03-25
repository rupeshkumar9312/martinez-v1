import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  Users,
  Trophy,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const EventDetail = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventDetail = async () => {
      try {
        const response = await fetch(`/api/events/${eventId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch event details");
        }
        const data = await response.json();

        // Parse activities and highlights if they are JSON strings
        const parsedEvent = {
          ...data,
          activities:
            typeof data.activities === "string"
              ? JSON.parse(data.activities)
              : data.activities || [],
          highlights:
            typeof data.highlights === "string"
              ? JSON.parse(data.highlights)
              : data.highlights || [],
          images: data.images || [data.image],
          schedule: data.schedule || [],
        };

        setEvent(parsedEvent);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (eventId) {
      fetchEventDetail();
    }
  }, [eventId]);

  // Event data - in a real app, this would come from an API or shared data store
  const fallbackEvents = [
    {
      name: "Annual Sports Day",
      slug: "annual-sports-day",
      description:
        "A grand celebration of athleticism with inter-house competitions and team spirit",
      date: "December",
      image:
        "https://t4.ftcdn.net/jpg/05/02/09/13/360_F_502091326_xIbctUR9TXGKLIKoD75CFvCf5Ve3vHYQ.jpg",
      color: "border-primary",
      images: [
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1508606572321-901ea4437073?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1546484959-fd7b4f0f6de4?w=400&h=250&fit=crop",
      ],
      fullDescription:
        "Join us for our Annual Sports Day, where students showcase their athletic prowess across various sporting disciplines. This day-long event features inter-house competitions, individual championships, and team-building activities that foster camaraderie and sportsmanship among our students.",
      schedule: [
        { time: "8:00 AM", activity: "Opening Ceremony" },
        { time: "9:00 AM", activity: "Track Events" },
        { time: "11:00 AM", activity: "Field Events" },
        { time: "1:00 PM", activity: "Team Sports" },
        { time: "4:00 PM", activity: "Closing Ceremony & Prize Distribution" },
      ],
      activities: [
        "100m Sprint",
        "Long Jump",
        "High Jump",
        "Relay Races",
        "Basketball",
        "Football",
        "Volleyball",
        "Tug of War",
      ],
      highlights: [
        "Inter-house competitions",
        "Individual championships",
        "Team spirit building",
        "Prize distribution",
      ],
    },
    {
      name: "Cultural Festival",
      slug: "cultural-festival",
      description:
        "Showcasing student talents in music, dance, drama, and various cultural performances",
      date: "February",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      color: "border-secondary",
      images: [
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1520975910885-9de88a651b89?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1520975910885-9de88a651b89?w=400&h=250&fit=crop",
      ],
      fullDescription:
        "Our Cultural Festival is a vibrant celebration of artistic expression and cultural diversity. Students from all grades participate in various performances, showcasing their talents in music, dance, drama, and traditional arts.",
      schedule: [
        { time: "9:00 AM", activity: "Opening Performance" },
        { time: "10:00 AM", activity: "Music Competitions" },
        { time: "12:00 PM", activity: "Dance Performances" },
        { time: "2:00 PM", activity: "Drama Presentations" },
        { time: "4:00 PM", activity: "Cultural Parade & Closing" },
      ],
      activities: [
        "Classical Music",
        "Folk Dance",
        "Traditional Drama",
        "Instrumental Performances",
        "Choir Singing",
        "Cultural Fashion Show",
      ],
      highlights: [
        "Diverse cultural performances",
        "Student-led productions",
        "Traditional art forms",
        "Community participation",
      ],
    },
    {
      name: "Science Exhibition",
      slug: "science-exhibition",
      description:
        "Students display innovative science projects and experiments to inspire scientific thinking",
      date: "March",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop",
      color: "border-text-brown",
      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=250&fit=crop",
      ],
      fullDescription:
        "The Science Exhibition provides a platform for young scientists to showcase their innovative projects and experiments. Students work throughout the year on various scientific topics, demonstrating their understanding and creativity.",
      schedule: [
        { time: "9:00 AM", activity: "Exhibition Opens" },
        { time: "10:00 AM", activity: "Project Presentations" },
        { time: "12:00 PM", activity: "Interactive Demonstrations" },
        { time: "2:00 PM", activity: "Guest Speaker Session" },
        { time: "4:00 PM", activity: "Awards Ceremony" },
      ],
      activities: [
        "Physics Projects",
        "Chemistry Experiments",
        "Biology Research",
        "Environmental Studies",
        "Robotics",
        "Astronomy",
      ],
      highlights: [
        "Innovative student projects",
        "Interactive experiments",
        "Scientific demonstrations",
        "Research presentations",
      ],
    },
    {
      name: "Art Exhibition",
      slug: "art-exhibition",
      description:
        "Display of student artwork showcasing creativity and artistic development throughout the year",
      date: "April",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=250&fit=crop",
      color: "border-primary",
      images: [
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1511763368359-2b501c0d3b58?w=400&h=250&fit=crop",
      ],
      fullDescription:
        "Our Art Exhibition celebrates the creative journey of our students throughout the academic year. From traditional paintings to digital art, students display their artistic growth and unique perspectives.",
      schedule: [
        { time: "9:00 AM", activity: "Exhibition Opening" },
        { time: "10:00 AM", activity: "Art Walk & Discussions" },
        { time: "12:00 PM", activity: "Artist Talks" },
        { time: "2:00 PM", activity: "Live Art Demonstrations" },
        { time: "4:00 PM", activity: "Awards & Closing" },
      ],
      activities: [
        "Painting & Drawing",
        "Sculpture",
        "Digital Art",
        "Photography",
        "Mixed Media",
        "Traditional Crafts",
      ],
      highlights: [
        "Diverse artistic mediums",
        "Student artist showcases",
        "Creative expression",
        "Artistic development",
      ],
    },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-black/70">Loading event details...</p>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-primary-bold text-text-black mb-4">
            {error ? "Error Loading Event" : "Event Not Found"}
          </h1>
          <p className="text-text-black/70 mb-6">
            {error || "The event you're looking for doesn't exist."}
          </p>
          <Link
            to="/activities"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to Activities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-primary-bold mb-4">{event.name}</h1>
            <p className="text-xl font-primary-regular">{event.description}</p>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-6 py-6">
        <Link
          to="/activities"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Activities
        </Link>
      </div>

      {/* Event Details */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <h2 className="text-3xl font-primary-bold text-text-black mb-6">
                About the Event
              </h2>
              <p className="text-text-black/80 font-primary-regular leading-relaxed mb-8">
                {event.fullDescription}
              </p>

              {event.images?.length ? (
                <div className="mb-8">
                  <h3 className="text-xl font-primary-bold text-text-black mb-4">
                    Event Photos
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {event.images.map((img, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => {
                          setSelectedImageIndex(idx);
                          setLightboxOpen(true);
                        }}
                        className="relative rounded-xl overflow-hidden border focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <img
                          src={img}
                          alt={`${event.name} photo ${idx + 1}`}
                          className="w-full h-28 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>

                  <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
                    <DialogContent className="p-0 bg-black/80 text-white shadow-none max-w-4xl">
                      <div className="relative">
                        <img
                          src={event.images[selectedImageIndex]}
                          alt={`${event.name} photo ${selectedImageIndex + 1}`}
                          className="w-full h-[70vh] object-contain rounded-lg bg-black"
                        />

                        <div className="absolute inset-0 flex items-center justify-between px-4">
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedImageIndex(
                                (prev) =>
                                  (prev - 1 + event.images.length) %
                                  event.images.length,
                              )
                            }
                            className="rounded-full bg-black/40 p-2 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              setSelectedImageIndex(
                                (prev) => (prev + 1) % event.images.length,
                              )
                            }
                            className="rounded-full bg-black/40 p-2 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>
                        </div>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 text-sm text-white">
                          {selectedImageIndex + 1} / {event.images.length}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              ) : null}

              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-primary mr-3" />
                <span className="text-text-black font-primary-regular">
                  Held in {event.date}
                </span>
              </div>

              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-primary mr-3" />
                <span className="text-text-black font-primary-regular">
                  School Campus
                </span>
              </div>

              <div className="flex items-center">
                <Users className="w-6 h-6 text-primary mr-3" />
                <span className="text-text-black font-primary-regular">
                  All Students Welcome
                </span>
              </div>
            </div>

            {/* Schedule */}
            <div>
              <h2 className="text-3xl font-primary-bold text-text-black mb-6">
                Event Schedule
              </h2>
              <div className="space-y-4">
                {event.schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-lg"
                  >
                    <Clock className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <span className="font-primary-bold text-text-black">
                        {item.time}
                      </span>
                      <span className="text-text-black/70 font-primary-regular ml-2">
                        - {item.activity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-primary-bold text-text-black mb-8 text-center">
            Featured Activities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center">
                  <Trophy className="w-6 h-6 text-primary mr-3" />
                  <span className="text-text-black font-primary-regular">
                    {activity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-primary-bold text-text-black mb-8 text-center">
            Event Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {event.highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center p-6 bg-primary/5 rounded-lg"
              >
                <Star className="w-6 h-6 text-primary mr-4" />
                <span className="text-text-black font-primary-regular">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;
