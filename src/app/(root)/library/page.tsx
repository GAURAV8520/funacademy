"use client";

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Book,
  FileText,
  Video,
  Search,
  BookOpen,
  Download,
  Filter,
  ChevronRight,
  Clock,
  Bookmark,
  Star,
} from 'lucide-react';

const DigitalLibrary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  // Sample library data
  const subjects = [
    { id: 'physics', name: 'Physics' },
    { id: 'chemistry', name: 'Chemistry' },
    { id: 'mathematics', name: 'Mathematics' },
    { id: 'biology', name: 'Biology' }
  ];

  const resourceTypes = [
    { id: 'books', name: 'Books', icon: Book },
    { id: 'notes', name: 'Notes', icon: FileText },
    { id: 'videos', name: 'Video Lectures', icon: Video }
  ];

  const resources = [
    {
      id: 1,
      title: 'Physics Mechanics Complete Guide',
      subject: 'physics',
      type: 'books',
      author: 'Dr. Sarah Johnson',
      description: 'Comprehensive guide covering mechanics, forces, and motion',
      rating: 4.5,
      downloads: 1200,
      thumbnail: '/api/placeholder/200/300',
      fileSize: '25MB'
    },
    {
      id: 2,
      title: 'Organic Chemistry Notes',
      subject: 'chemistry',
      type: 'notes',
      author: 'Prof. Michael Brown',
      description: 'Detailed notes on organic reactions and mechanisms',
      rating: 4.8,
      downloads: 2300,
      thumbnail: '/api/placeholder/200/300',
      fileSize: '15MB'
    },
    // Add more resources...
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || resource.subject === selectedSubject;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    return matchesSearch && matchesSubject && matchesType;
  });

  const ResourceCard = ({ resource }) => {
    const TypeIcon = resourceTypes.find(type => type.id === resource.type)?.icon || FileText;

    return (
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="aspect-[3/4] relative mb-4">
            <img
              src={resource.thumbnail}
              alt={resource.title}
              className="w-full h-full object-cover rounded-md"
            />
            <Badge className="absolute top-2 right-2" variant="secondary">
              <TypeIcon className="w-4 h-4 mr-1" />
              {resourceTypes.find(type => type.id === resource.type)?.name}
            </Badge>
          </div>
          <CardTitle className="text-lg">{resource.title}</CardTitle>
          <CardDescription>{resource.author}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              {resource.rating}
            </div>
            <div className="flex items-center">
              <Download className="w-4 h-4 mr-1" />
              {resource.downloads}
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-between">
          <Button variant="outline" size="sm">
            <Bookmark className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button size="sm">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Digital Library</h1>
        <p className="text-gray-600">Access study materials, books, and resources</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Subject
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setSelectedSubject('all')}>
                All Subjects
              </DropdownMenuItem>
              {subjects.map(subject => (
                <DropdownMenuItem 
                  key={subject.id}
                  onClick={() => setSelectedSubject(subject.id)}
                >
                  {subject.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Resource Type
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setSelectedType('all')}>
                All Types
              </DropdownMenuItem>
              {resourceTypes.map(type => (
                <DropdownMenuItem 
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                >
                  <type.icon className="w-4 h-4 mr-2" />
                  {type.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Quick Access Tabs */}
      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="recent">
            <Clock className="w-4 h-4 mr-2" />
            Recently Added
          </TabsTrigger>
          <TabsTrigger value="popular">
            <Star className="w-4 h-4 mr-2" />
            Popular
          </TabsTrigger>
          <TabsTrigger value="saved">
            <Bookmark className="w-4 h-4 mr-2" />
            Saved
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </TabsContent>
        
        {/* Add content for other tabs */}
      </Tabs>
    </div>
  );
};

export default DigitalLibrary;