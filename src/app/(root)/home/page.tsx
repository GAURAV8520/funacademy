// "use client";

// import React from "react";
// import Autoplay from "embla-carousel-autoplay";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from "next/image";
// import { title } from "process";
// import { url } from "inspector";

// export function CarouselPlugin() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 3000, stopOnInteraction: true })
//   );

//   return (
//     <Carousel
//       plugins={[plugin.current]}
//       className="w-full max-w-6xl mx-auto mt-4"
//       onMouseEnter={plugin.current.stop}
//       onMouseLeave={plugin.current.reset}
//     >
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index}>
//             <div className="p-2">
//               <Image
//                 src="/sample.png" // Replace with your actual images
//                 alt={`Slide ${index + 1}`}
//                 width={1200}
//                 height={400}
//                 className="rounded-lg shadow-md"
//               />
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }

// function Page() {
//   const examCards = [
//     {
//       title: "Previous Year Paper",
//       url: "/paper2.png",
//     },
//     {
//       title: "Mock test",
//       url: "/batches.png",
//     },
//     {
//       title: "Daily practice",
//       url: "/study.png",
//     },
//   ];

//   const subject = [
//     {
//       title: "Physics",
//       url: "/paper2.png",
//     },
//     {
//       title: "chemistry",
//       url: "/paper2.png",
//     },
//     {
//       title: "Math",
//       url: "/paper2.png",
//     },
//     {
//       title: "biology",
//       url: "/paper2.png",
//     },
//   ];
//   return (
//     <div className="min-h-screen bg-gray-50 px-20 pt-8">
//       {/* Search Bar */}
//       <div className="w-full py-4 px-2">
//         <div className="max-w-6xl mx-auto flex items-center gap-4">
//           <input
//             type="text"
//             placeholder='Search for "batches"...'
//             className="flex-1 border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
//           />
//           <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-500">
//             Study
//           </button>
//         </div>
//       </div>

//       {/* Carousel */}
//       <div className="w-full flex items-center justify-center mt-6">
//         <CarouselPlugin />
//       </div>

//       {/* Grid of Exam Cards */}
//       <h1>Everything you need to succeed</h1>
//       <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//         {examCards.map((card, index) => (
//           <div
//             key={index}
//             className="bg-white border rounded-lg p-10 flex flex-col items-center justify-center hover:shadow-lg hover:bg-slate-50 transition-shadow cursor-pointer text-center"
//           >
//             <div className="mb-4">
//               <Image src={card.url} alt={card.title} width={200} height={200} />
//             </div>
//             <h3 className="font-semibold text-sm sm:text-base">{card.title}</h3>
//           </div>
//         ))}
//       </div>

//       <h1>Master Every Subject</h1>
//       <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//         {subject.map((card, index) => (
//           <div
//             key={index}
//             className="bg-white border rounded-lg p-10 flex flex-col items-center justify-center hover:shadow-lg hover:bg-slate-50 transition-shadow cursor-pointer text-center"
//           >
//             <div className="mb-4">
//               <Image src={card.url} alt={card.title} width={200} height={200} />
//             </div>
//             <h3 className="font-semibold text-sm sm:text-base">{card.title}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Page;

// "use client";

// import React from "react";
// import Autoplay from "embla-carousel-autoplay";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from "next/image";

// export function CarouselPlugin() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 3000, stopOnInteraction: true })
//   );

//   return (
//     <Carousel
//       plugins={[plugin.current]}
//       className="w-full max-w-6xl mx-auto"
//       onMouseEnter={plugin.current.stop}
//       onMouseLeave={plugin.current.reset}
//     >
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index}>
//             <div className="p-2">
//               <Image
//                 src="/sample.png"
//                 alt={`Slide ${index + 1}`}
//                 width={1200}
//                 height={400}
//                 className="rounded-lg shadow-md w-full h-auto object-cover"
//                 priority={index === 0}
//               />
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious className="hidden sm:flex" />
//       <CarouselNext className="hidden sm:flex" />
//     </Carousel>
//   );
// }

// function Page() {
//   const examCards = [
//     {
//       title: "Previous Year Paper",
//       url: "/paper2.png",
//     },
//     {
//       title: "Mock test",
//       url: "/batches.png",
//     },
//     {
//       title: "Daily practice",
//       url: "/study.png",
//     },
//   ];

//   const subject = [
//     {
//       title: "Physics",
//       url: "/paper2.png",
//     },
//     {
//       title: "Chemistry",
//       url: "/paper2.png",
//     },
//     {
//       title: "Math",
//       url: "/paper2.png",
//     },
//     {
//       title: "Biology",
//       url: "/paper2.png",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-20 pt-4 sm:pt-6 md:pt-8">
//       {/* Search Bar */}
//       <div className="w-full py-2 sm:py-4">
//         <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
//           <input
//             type="text"
//             placeholder='Search for "batches"...'
//             className="w-full flex-1 border border-gray-300 rounded-lg p-2 sm:p-3 shadow-sm focus:outline-none focus:ring focus:ring-blue-300 text-sm sm:text-base"
//           />
//           <button className="w-full sm:w-auto bg-blue-600 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg shadow-md hover:bg-blue-500 text-sm sm:text-base transition-colors">
//             Study
//           </button>
//         </div>
//       </div>

//       {/* Carousel */}
//       <div className="w-full flex items-center justify-center mt-4 sm:mt-6">
//         <CarouselPlugin />
//       </div>

//       {/* Section Headers */}
//       <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 sm:mt-12 mb-4 sm:mb-6">
//         Everything you need to succeed
//       </h1>

//       {/* Grid of Exam Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//         {examCards.map((card, index) => (
//           <div
//             key={index}
//             className="bg-white border rounded-lg p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center hover:shadow-lg hover:bg-slate-50 transition-all cursor-pointer text-center"
//           >
//             <div className="mb-3 sm:mb-4">
//               <Image
//                 src={card.url}
//                 alt={card.title}
//                 width={200}
//                 height={200}
//                 className="w-32 sm:w-40 md:w-48 h-auto object-contain"
//               />
//             </div>
//             <h3 className="font-semibold text-sm sm:text-base md:text-lg">
//               {card.title}
//             </h3>
//           </div>
//         ))}
//       </div>

//       <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 sm:mt-12 mb-4 sm:mb-6">
//         Master Every Subject
//       </h1>

//       {/* Grid of Subjects */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
//         {subject.map((card, index) => (
//           <div
//             key={index}
//             className="bg-white border rounded-lg p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center hover:shadow-lg hover:bg-slate-50 transition-all cursor-pointer text-center"
//           >
//             <div className="mb-3 sm:mb-4">
//               <Image
//                 src={card.url}
//                 alt={card.title}
//                 width={200}
//                 height={200}
//                 className="w-24 sm:w-32 md:w-40 h-auto object-contain"
//               />
//             </div>
//             <h3 className="font-semibold text-sm sm:text-base md:text-lg">
//               {card.title}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Page;.

"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  BookOpen,
  Clock,
  FileText,
  GraduationCap,
  BarChart2,
  Calendar,
  Award,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { connect } from "@/dbConfig/db";




const HomePage = async () => {
  // Sample notification data
  await connect();
  const notifications = [
    {
      id: 1,
      source: "NTA",
      title: "JEE Main 2025 Registration Opens",
      date: "2025-01-15",
      link: "https://nta.ac.in",
      priority: "high",
    },
    {
      id: 2,
      source: "MHTCET",
      title: "MHT CET 2025 Exam Schedule Released",
      date: "2025-01-18",
      link: "https://mhtcet.org",
      priority: "high",
    },
    // Add more notifications...
  ];

  const features = [
    {
      title: "Mock Tests",
      description: "Practice with our extensive collection of mock tests",
      icon: FileText,
      link: "/mock-tests",
    },
    {
      title: "Digital Library",
      description: "Access study materials and resources",
      icon: BookOpen,
      link: "/library",
    },
    {
      title: "Previous Year Questions",
      description: "Solve previous year papers",
      icon: Clock,
      link: "/pyq",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Prepare Smarter, Score Better
            </h1>
            <p className="text-xl mb-8">
              Comprehensive preparation platform for JEE, NEET, and MHT CET
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="secondary">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-white">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notifications Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Important Notifications</h2>
            <Button variant="outline">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notifications.map((notification) => (
              <Card
                key={notification.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge
                      variant={
                        notification.priority === "high"
                          ? "destructive"
                          : "secondary"
                      }
                    >
                      {notification.source}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {notification.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg mt-2">
                    {notification.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0" asChild>
                    <a
                      href={notification.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Official Website{" "}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <feature.icon className="h-8 w-8 mb-4 text-blue-600" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={feature.link}>
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-sm">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm">Mock Tests</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-sm">Resources</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Study Material Carousel */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Latest Study Materials</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[1, 2, 3].map((item) => (
                <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Physics Formula Sheet</CardTitle>
                      <CardDescription>
                        Quick reference for important formulas
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Badge>Live Session</Badge>
                <CardTitle className="text-lg">
                  JEE Main Problem Solving
                </CardTitle>
                <CardDescription>Jan 25, 2025 • 6:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Register Now</Button>
              </CardContent>
            </Card>
            {/* Add more event cards */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
