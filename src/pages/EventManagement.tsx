import React, { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Plus,
  Trash2,
  Upload,
  X,
  Save,
  Calendar,
  Clock,
  Trophy,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import ImageUpload from "../components/ImageUpload";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "../contexts/AuthContext";
import { API_ENDPOINTS } from "../config/api";

const eventSchema = z.object({
  name: z.string().min(1, "Event name is required"),
  slug: z.string().min(1, "Event slug is required"),
  description: z.string().min(1, "Short description is required"),
  fullDescription: z.string().min(1, "Full description is required"),
  date: z.string().min(1, "Date is required"),
  color: z.string().min(1, "Color is required"),
  image: z.string().url("Valid image URL is required"),
  additionalImages: z.array(z.string().url()).optional(),
  schedule: z
    .array(
      z.object({
        time: z.string().min(1, "Time is required"),
        activity: z.string().min(1, "Activity is required"),
      }),
    )
    .min(1, "At least one schedule item is required"),
  activities: z
    .array(z.string().min(1, "Activity cannot be empty"))
    .min(1, "At least one activity is required"),
  highlights: z
    .array(z.string().min(1, "Highlight cannot be empty"))
    .min(1, "At least one highlight is required"),
});

type EventForm = z.infer<typeof eventSchema>;

const EventManagement = () => {
  const { eventSlug } = useParams<{ eventSlug?: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [additionalImageFiles, setAdditionalImageFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mainImageFile, setMainImageFile] = useState<File | null>(null);

  const colorOptions = [
    {
      value: "border-primary",
      label: "Primary Blue",
      color: "border-blue-500",
    },
    {
      value: "border-secondary",
      label: "Secondary Green",
      color: "border-green-500",
    },
    { value: "border-text-brown", label: "Brown", color: "border-amber-600" },
    { value: "border-red-500", label: "Red", color: "border-red-500" },
    { value: "border-purple-500", label: "Purple", color: "border-purple-500" },
  ];

  const monthOptions = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Mock existing events data - in a real app, this would come from an API
  const existingEvents = [
    {
      name: "Annual Sports Day",
      slug: "annual-sports-day",
      description:
        "A grand celebration of athleticism with inter-house competitions and team spirit",
      fullDescription:
        "Join us for our Annual Sports Day, where students showcase their athletic prowess across various sporting disciplines. This day-long event features inter-house competitions, individual championships, and team-building activities that foster camaraderie and sportsmanship among our students.",
      date: "December",
      image:
        "https://t4.ftcdn.net/jpg/05/02/09/13/360_F_502091326_xIbctUR9TXGKLIKoD75CFvCf5Ve3vHYQ.jpg",
      color: "border-primary",
      additionalImages: [],
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
      fullDescription:
        "Our Cultural Festival is a vibrant celebration of artistic expression and cultural diversity. Students from all grades participate in various performances, showcasing their talents in music, dance, drama, and traditional arts.",
      date: "February",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      color: "border-secondary",
      additionalImages: [],
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
  ];

  const existingEvent = eventSlug
    ? existingEvents.find((e) => e.slug === eventSlug)
    : null;
  const isEditing = !!existingEvent;

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<EventForm>({
    resolver: zodResolver(eventSchema),
    defaultValues: existingEvent
      ? {
          ...existingEvent,
          additionalImages: existingEvent.additionalImages || [],
        }
      : {
          name: "",
          slug: "",
          description: "",
          fullDescription: "",
          date: "",
          color: "border-primary",
          image: "",
          additionalImages: [],
          schedule: [{ time: "", activity: "" }],
          activities: [""],
          highlights: [""],
        },
  });

  const {
    fields: scheduleFields,
    append: appendSchedule,
    remove: removeSchedule,
  } = useFieldArray({
    control,
    name: "schedule",
  });

  const {
    fields: activityFields,
    append: appendActivity,
    remove: removeActivity,
  } = useFieldArray({
    control,
    name: "activities",
  });

  const {
    fields: highlightFields,
    append: appendHighlight,
    remove: removeHighlight,
  } = useFieldArray({
    control,
    name: "highlights",
  });

  const watchedName = watch("name");

  // Auto-generate slug from name
  useEffect(() => {
    if (watchedName && !isEditing) {
      const slug = watchedName
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-");
      setValue("slug", slug);
    }
  }, [watchedName, setValue, isEditing]);

  const onSubmit = async (data: EventForm) => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        toast({
          title: "Authentication Error",
          description: "No access token found. Please log in again.",
          variant: "destructive",
        });
        return;
      }

      // Step 1: Create event without image and images URLs
      const requestData = {
        name: data.name,
        slug: data.slug,
        description: data.description,
        date: data.date,
        color: data.color,
        fullDescription: data.fullDescription,
        schedule: data.schedule,
        activities: JSON.stringify(data.activities),
        highlights: JSON.stringify(data.highlights),
      };

      const response = await fetch(API_ENDPOINTS.EVENTS, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.status === 201) {
        const result = await response.json();
        const eventId = result.id;
        let mainImageUrl: string | null = null;
        const additionalImageUrls: string[] = [];

        // Step 2: Upload main image if a file was selected
        if (mainImageFile) {
          try {
            const formData = new FormData();
            formData.append("file", mainImageFile);

            const imageResponse = await fetch(
              API_ENDPOINTS.UPLOAD_COVER_IMAGE(eventId),
              {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                body: formData,
              },
            );

            if (imageResponse.status === 201) {
              const imageResult = await imageResponse.json();
              mainImageUrl = imageResult.imageUrl;
            } else {
              console.warn("Main image upload failed");
            }
          } catch (imageError) {
            console.error("Error uploading main image:", imageError);
          }
        }

        // Step 3: Upload additional images if they exist (batch upload)
        if (additionalImageFiles && additionalImageFiles.length > 0) {
          try {
            const formData = new FormData();
            // Append all files with the "files" field name for batch upload
            additionalImageFiles.forEach((file) => {
              formData.append("files", file);
            });

            const imageResponse = await fetch(
              API_ENDPOINTS.UPLOAD_EVENT_IMAGES(eventId),
              {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                body: formData,
              },
            );

            if (imageResponse.status === 201) {
              const imageResults = await imageResponse.json();
              // imageResults is an array of objects with imageUrl
              if (Array.isArray(imageResults)) {
                imageResults.forEach((result) => {
                  additionalImageUrls.push(result.imageUrl);
                });
              }
            } else {
              console.warn("Additional images upload failed");
            }
          } catch (imageError) {
            console.error("Error uploading additional images:", imageError);
          }
        } else if (
          data.additionalImages &&
          data.additionalImages.length > 0 &&
          typeof data.additionalImages[0] === "string" &&
          data.additionalImages[0].startsWith("http")
        ) {
          // Images are already URLs (from editing), keep them as is
          additionalImageUrls.push(...data.additionalImages);
        }

        // Step 4: Update event with image URLs if we have them
        if (mainImageUrl || additionalImageUrls.length > 0) {
          const updateData: any = {
            name: data.name,
            slug: data.slug,
            description: data.description,
            date: data.date,
            color: data.color,
            fullDescription: data.fullDescription,
            schedule: data.schedule,
            activities: JSON.stringify(data.activities),
            highlights: JSON.stringify(data.highlights),
          };

          if (mainImageUrl) {
            updateData.image = mainImageUrl;
          }

          if (additionalImageUrls.length > 0) {
            updateData.images = additionalImageUrls;
          }

          const updateResponse = await fetch(
            API_ENDPOINTS.EVENT_BY_ID(eventId),
            {
              method: "PUT",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateData),
            },
          );

          if (updateResponse.status !== 200) {
            console.warn("Event update with image URLs failed");
          }
        }

        toast({
          title: isEditing
            ? "Event updated successfully"
            : "Event created successfully",
          description: `${data.name} has been ${isEditing ? "updated" : "created"}.`,
        });
        navigate("/admin/dashboard");
      } else if (response.status === 400) {
        const errorData = await response.json();
        if (errorData.error === "DUPLICATE_SLUG") {
          toast({
            title: "Duplicate Event Slug",
            description: errorData.message,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Error saving event",
            description:
              errorData.message || "An error occurred while saving the event.",
            variant: "destructive",
          });
        }
      } else if (response.status === 403) {
        toast({
          title: "Unauthorized",
          description: "You do not have permission to perform this action.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error saving event",
          description: "An unexpected error occurred. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error saving event:", error);
      toast({
        title: "Error saving event",
        description:
          "An error occurred while saving the event. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return <div>Access denied. Please log in as admin.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Button
                variant="ghost"
                onClick={() => navigate("/admin/dashboard")}
                className="mr-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <h1 className="text-xl font-primary-bold text-text-black">
                {isEditing ? "Edit Event" : "Add New Event"}
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>
                Enter the basic details of the event
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Event Name *</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="e.g., Annual Sports Day"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="slug">URL Slug *</Label>
                  <Input
                    id="slug"
                    {...register("slug")}
                    placeholder="e.g., annual-sports-day"
                  />
                  {errors.slug && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.slug.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="description">Short Description *</Label>
                <Textarea
                  id="description"
                  {...register("description")}
                  placeholder="Brief description for the events list"
                  rows={2}
                />
                {errors.description && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="fullDescription">Full Description *</Label>
                <Textarea
                  id="fullDescription"
                  {...register("fullDescription")}
                  placeholder="Detailed description for the event detail page"
                  rows={4}
                />
                {errors.fullDescription && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.fullDescription.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Event Month *</Label>
                  <Select onValueChange={(value) => setValue("date", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent>
                      {monthOptions.map((month) => (
                        <SelectItem key={month} value={month}>
                          {month}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.date && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.date.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="color">Theme Color *</Label>
                  <Select onValueChange={(value) => setValue("color", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select color" />
                    </SelectTrigger>
                    <SelectContent>
                      {colorOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div className="flex items-center">
                            <div
                              className={`w-4 h-4 rounded border-2 ${option.color} mr-2`}
                            />
                            {option.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.color && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.color.message}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Images */}
          <Card>
            <CardHeader>
              <CardTitle>Event Images</CardTitle>
              <CardDescription>
                Upload images for the event (main image and additional gallery
                images)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="image">Main Image *</Label>
                <div className="space-y-4">
                  {watch("image") && (
                    <div className="relative w-full h-48 rounded-lg overflow-hidden border">
                      <img
                        src={watch("image")}
                        alt="Main Event"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setValue("image", "");
                          setMainImageFile(null);
                        }}
                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  <div>
                    <input
                      ref={(input) => {
                        if (input) {
                          const handleMainImageSelect = (e: Event) => {
                            const target = e.target as HTMLInputElement;
                            const files = target.files;
                            if (!files) return;

                            const file = files[0];
                            if (file && file.type.startsWith("image/")) {
                              setMainImageFile(file);
                              const reader = new FileReader();
                              reader.onload = (event) => {
                                const result = event.target?.result as string;
                                if (result) {
                                  setValue("image", result);
                                }
                              };
                              reader.readAsDataURL(file);
                            }
                          };
                          input.addEventListener(
                            "change",
                            handleMainImageSelect,
                          );
                        }
                      }}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="mainImageInput"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() =>
                        document.getElementById("mainImageInput")?.click()
                      }
                      className="w-full"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      {watch("image")
                        ? "Change Main Image"
                        : "Select Main Image"}
                    </Button>
                  </div>
                </div>
                {errors.image && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.image.message}
                  </p>
                )}
              </div>

              <div>
                <Label>Additional Images</Label>
                <ImageUpload
                  onImagesChange={(images) =>
                    setValue("additionalImages", images)
                  }
                  onFilesChange={(files) => setAdditionalImageFiles(files)}
                  maxImages={10}
                  initialImages={watch("additionalImages") || []}
                />
              </div>
            </CardContent>
          </Card>

          {/* Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Event Schedule
              </CardTitle>
              <CardDescription>Add the schedule for the event</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduleFields.map((field, index) => (
                  <div key={field.id} className="flex items-center space-x-4">
                    <div className="flex-1">
                      <Input
                        {...register(`schedule.${index}.time`)}
                        placeholder="e.g., 9:00 AM"
                      />
                    </div>
                    <div className="flex-1">
                      <Input
                        {...register(`schedule.${index}.activity`)}
                        placeholder="e.g., Opening Ceremony"
                      />
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeSchedule(index)}
                      disabled={scheduleFields.length === 1}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => appendSchedule({ time: "", activity: "" })}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Schedule Item
                </Button>
              </div>
              {errors.schedule && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.schedule.message}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="w-5 h-5 mr-2" />
                Event Activities
              </CardTitle>
              <CardDescription>
                List the activities that will take place during the event
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activityFields.map((field, index) => (
                  <div key={field.id} className="flex items-center space-x-4">
                    <div className="flex-1">
                      <Input
                        {...register(`activities.${index}`)}
                        placeholder="e.g., 100m Sprint"
                      />
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeActivity(index)}
                      disabled={activityFields.length === 1}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => appendActivity("" as any)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Activity
                </Button>
              </div>
              {errors.activities && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.activities.message}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Highlights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="w-5 h-5 mr-2" />
                Event Highlights
              </CardTitle>
              <CardDescription>
                Key highlights and features of the event
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {highlightFields.map((field, index) => (
                  <div key={field.id} className="flex items-center space-x-4">
                    <div className="flex-1">
                      <Input
                        {...register(`highlights.${index}`)}
                        placeholder="e.g., Inter-house competitions"
                      />
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeHighlight(index)}
                      disabled={highlightFields.length === 1}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => appendHighlight("" as any)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Highlight
                </Button>
              </div>
              {errors.highlights && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.highlights.message}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/admin/dashboard")}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              <Save className="w-4 h-4 mr-2" />
              {isLoading
                ? "Saving..."
                : isEditing
                  ? "Update Event"
                  : "Create Event"}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default EventManagement;
