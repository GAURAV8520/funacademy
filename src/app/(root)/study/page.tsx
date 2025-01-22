"use client";

import React, { useState } from 'react';
import { Search, Book, Clock, BookOpen, BarChart, Filter, PlayCircle } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const StudyPage = () => {
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const subjects = [
    { id: 'physics', name: 'Physics', icon: '/physics-icon.png', count: 24 },
    { id: 'chemistry', name: 'Chemistry', icon: '/chemistry-icon.png', count: 18 },
    { id: 'math', name: 'Mathematics', icon: '/math-icon.png', count: 32 },
    { id: 'biology', name: 'Biology', icon: '/biology-icon.png', count: 26 }
  ];

  const materials = [
    {
      id: 1,
      title: 'Quantum Mechanics',
      subject: 'physics',
      level: 'advanced',
      duration: '2.5 hours',
      lessons: 12,
      thumbnail: '/quantum.png',
      progress: 65
    },
    {
      id: 2,
      title: 'Organic Chemistry',
      subject: 'chemistry',
      level: 'intermediate',
      duration: '3 hours',
      lessons: 15,
      thumbnail: '/chemistry.png',
      progress: 40
    },
    // Add more materials as needed
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Your Study Dashboard</h1>
          <p className="text-gray-600">Continue your learning journey</p>
        </div>
        
        {/* Search Bar */}
        <div className="w-full md:w-auto flex gap-2">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button className="p-2 border rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Subject Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            onClick={() => setSelectedSubject(subject.id)}
            className={`p-4 rounded-lg border transition-all ${
              selectedSubject === subject.id
                ? 'border-blue-500 bg-blue-50'
                : 'hover:border-gray-300'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={subject.icon}
                alt={subject.name}
                width={40}
                height={40}
                className="mb-2"
              />
              <span className="font-medium">{subject.name}</span>
              <span className="text-sm text-gray-500">{subject.count} courses</span>
            </div>
          </button>
        ))}
      </div>

      {/* Progress Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Continue Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials
            .filter(
              (material) =>
                selectedSubject === 'all' || material.subject === selectedSubject
            )
            .slice(0, 3)
            .map((material) => (
              <Card key={material.id} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={material.thumbnail}
                    alt={material.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="flex justify-between items-center text-white">
                      <span>{material.subject}</span>
                      <span>{material.level}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{material.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {material.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {material.lessons} lessons
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${material.progress}%` }}
                    />
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-2">
                    <PlayCircle className="w-4 h-4" />
                    Continue Learning
                  </button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Study Materials</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <Book className="w-8 h-8 text-blue-500" />
                <div>
                  <h4 className="font-medium">Study Guides</h4>
                  <p className="text-sm text-gray-600">Comprehensive notes and summaries</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <BarChart className="w-8 h-8 text-blue-500" />
                <div>
                  <h4 className="font-medium">Practice Tests</h4>
                  <p className="text-sm text-gray-600">Self-assessment quizzes</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Performance Stats</h3>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">85%</div>
                <div className="text-sm text-gray-600">Average Score</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">12</div>
                <div className="text-sm text-gray-600">Completed Courses</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">24h</div>
                <div className="text-sm text-gray-600">Study Time</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">8</div>
                <div className="text-sm text-gray-600">Active Courses</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudyPage;