'use client'

import React, { useState } from 'react';
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
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calculator, Microscope } from 'lucide-react';

const PreviousYearQuestions = () => {
  const [selectedExam, setSelectedExam] = useState('jee');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedSubject, setSelectedSubject] = useState('physics');

  const examTypes = [
    { value: 'jee', label: 'JEE Main', Icon: Calculator },
    { value: 'neet', label: 'NEET', Icon: Microscope },
  ];

  const subjects = {
    jee: ['physics', 'chemistry', 'mathematics'],
    neet: ['physics', 'chemistry', 'biology']
  };

  const years = ['2024', '2023', '2022', '2021', '2020'];

  // Sample questions data
  const questions = [
    {
      id: 1,
      question: "A particle moves in a straight line with constant acceleration. If it travels 20m in the first 2s and 30m in the next 2s, what is its acceleration?",
      options: [
        "2.5 m/s²",
        "5 m/s²",
        "7.5 m/s²",
        "10 m/s²"
      ],
      correctAnswer: 1,
      difficulty: "medium",
      explanation: "Using equations of motion: s = ut + (1/2)at². Compare the distances for different time intervals..."
    },
    {
      id: 2,
      question: "In a p-n junction diode, what happens to the depletion layer width when it is forward biased?",
      options: [
        "Increases",
        "Decreases",
        "Remains the same",
        "First increases then decreases"
      ],
      correctAnswer: 1,
      difficulty: "hard",
      explanation: "In forward bias, the positive terminal reduces the barrier potential..."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Previous Year Questions</CardTitle>
          <CardDescription>Practice questions from past examinations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Select value={selectedExam} onValueChange={setSelectedExam}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Select Exam" />
              </SelectTrigger>
              <SelectContent>
                {examTypes.map((exam) => (
                  <SelectItem key={exam.value} value={exam.value}>
                    <div className="flex items-center gap-2">
                      <exam.Icon size={16} />
                      {exam.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects[selectedExam].map((subject) => (
                  <SelectItem key={subject} value={subject}>
                    {subject.charAt(0).toUpperCase() + subject.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="space-y-4">
        {questions.map((q, index) => (
          <AccordionItem key={q.id} value={`q-${q.id}`} className="bg-white rounded-lg border">
            <AccordionTrigger className="px-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Q{index + 1}.</span>
                <span className="text-left">{q.question}</span>
                <Badge variant="outline" className="ml-auto">
                  {q.difficulty}
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {q.options.map((option, optIndex) => (
                    <Button
                      key={optIndex}
                      variant={optIndex === q.correctAnswer ? "default" : "outline"}
                      className="justify-start text-left"
                    >
                      {String.fromCharCode(65 + optIndex)}. {option}
                    </Button>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-slate-50 rounded-md">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Explanation
                  </h4>
                  <p>{q.explanation}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default PreviousYearQuestions;