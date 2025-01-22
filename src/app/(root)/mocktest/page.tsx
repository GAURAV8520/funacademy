"use client";

import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  Clock, 
  AlertCircle, 
  Flag, 
  ChevronLeft, 
  ChevronRight,
  BarChart2
} from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const MockTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(7200); // 2 hours in seconds
  const [reviewLater, setReviewLater] = useState([]);
  const [showResult, setShowResult] = useState(false);

  // Sample mock test data
  const mockTest = {
    title: "JEE Main Mock Test - Physics",
    duration: 7200,
    totalQuestions: 30,
    questions: [
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
        marks: 4,
        negativeMarks: -1
      },
      {
        id: 2,
        question: "Two identical balls are thrown vertically upward with initial velocities in the ratio 2:1. The ratio of their maximum heights will be:",
        options: [
          "4:1",
          "2:1",
          "1:1",
          "1:2"
        ],
        correctAnswer: 0,
        marks: 4,
        negativeMarks: -1
      },
      // Add more questions here...
    ]
  };

  useEffect(() => {
    if (isTestStarted && timeLeft > 0 && !showResult) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isTestStarted, timeLeft, showResult]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const toggleReviewLater = (questionId) => {
    setReviewLater(prev => 
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const calculateScore = () => {
    let score = 0;
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    mockTest.questions.forEach(question => {
      if (selectedAnswers[question.id] === undefined) {
        unattempted++;
      } else if (selectedAnswers[question.id] === question.correctAnswer) {
        score += question.marks;
        correct++;
      } else {
        score += question.negativeMarks;
        incorrect++;
      }
    });

    return { score, correct, incorrect, unattempted };
  };

  const submitTest = () => {
    setShowResult(true);
  };

  if (!isTestStarted) {
    return (
      <Card className="max-w-2xl mx-auto my-8">
        <CardHeader>
          <CardTitle>{mockTest.title}</CardTitle>
          <CardDescription>Duration: {formatTime(mockTest.duration)}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <h3 className="font-semibold">Instructions:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Total questions: {mockTest.totalQuestions}</li>
              <li>Each correct answer: +4 marks</li>
              <li>Each incorrect answer: -1 mark</li>
              <li>Unattempted questions: 0 marks</li>
              <li>You can flag questions for review later</li>
              <li>Timer will start as soon as you begin the test</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setIsTestStarted(true)} className="w-full">
            Start Test
          </Button>
        </CardFooter>
      </Card>
    );
  }

  if (showResult) {
    const result = calculateScore();
    return (
      <Card className="max-w-2xl mx-auto my-8">
        <CardHeader>
          <CardTitle>Test Results</CardTitle>
          <CardDescription>{mockTest.title}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{result.score}</CardTitle>
                  <CardDescription>Total Score</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {((result.correct / mockTest.totalQuestions) * 100).toFixed(1)}%
                  </CardTitle>
                  <CardDescription>Accuracy</CardDescription>
                </CardHeader>
              </Card>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Correct Answers</span>
                  <span className="text-green-600">{result.correct}</span>
                </div>
                <Progress value={(result.correct / mockTest.totalQuestions) * 100} className="bg-green-100" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Incorrect Answers</span>
                  <span className="text-red-600">{result.incorrect}</span>
                </div>
                <Progress value={(result.incorrect / mockTest.totalQuestions) * 100} className="bg-red-100" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Unattempted</span>
                  <span className="text-gray-600">{result.unattempted}</span>
                </div>
                <Progress value={(result.unattempted / mockTest.totalQuestions) * 100} className="bg-gray-100" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {/* Header with timer and progress */}
      <div className="sticky top-0 bg-white z-10 p-4 border-b mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-lg">
              <Clock className="w-4 h-4 mr-2" />
              {formatTime(timeLeft)}
            </Badge>
            <Badge variant="outline">
              Question {currentQuestion + 1} of {mockTest.totalQuestions}
            </Badge>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Submit Test</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. You have attempted {Object.keys(selectedAnswers).length} out of {mockTest.totalQuestions} questions.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={submitTest}>Submit</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <Progress 
          value={(Object.keys(selectedAnswers).length / mockTest.totalQuestions) * 100} 
          className="mt-4"
        />
      </div>

      {/* Question Card */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg font-medium">
              Q{currentQuestion + 1}. {mockTest.questions[currentQuestion].question}
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => toggleReviewLater(mockTest.questions[currentQuestion].id)}
              className={reviewLater.includes(mockTest.questions[currentQuestion].id) ? "bg-yellow-100" : ""}
            >
              <Flag className="w-4 h-4 mr-2" />
              Review Later
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedAnswers[mockTest.questions[currentQuestion].id]?.toString()}
            onValueChange={(value) => handleAnswerSelect(mockTest.questions[currentQuestion].id, parseInt(value))}
          >
            <div className="space-y-4">
              {mockTest.questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-grow">{option}</Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </CardContent>
        <CardFooter className="justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
            disabled={currentQuestion === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button
            onClick={() => setCurrentQuestion(prev => Math.min(mockTest.questions.length - 1, prev + 1))}
            disabled={currentQuestion === mockTest.questions.length - 1}
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </CardFooter>
      </Card>

      {/* Question Navigator */}
      <Card className="max-w-4xl mx-auto mt-6">
        <CardHeader>
          <CardTitle>Question Navigator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {mockTest.questions.map((_, index) => (
              <Button
                key={index}
                variant={currentQuestion === index ? "default" : "outline"}
                className={`
                  ${selectedAnswers[index + 1] !== undefined ? "bg-green-100" : ""}
                  ${reviewLater.includes(index + 1) ? "!bg-yellow-100" : ""}
                `}
                onClick={() => setCurrentQuestion(index)}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MockTest;