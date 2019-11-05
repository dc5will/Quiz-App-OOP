"use strict";
/* global Quiz */

// This data is a sample set from the Open Trivia API (https://opentdb.com/api_config.php). It could be stored as
// a static property on Quiz class, but has been extracted out for code
// cleanliness.  Once API is implemented, this data would be removed.

Quiz.QUIZ_DATA = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In any programming language, what is the most common way to iterate through an array?",
    correct_answer: "&#039;For&#039; loops",
    incorrect_answers: [
      "&#039;If&#039; Statements",
      "&#039;Do-while&#039; loops",
      "&#039;While&#039; loops"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does the &quot;MP&quot; stand for in MP3?",
    correct_answer: "Moving Picture",
    incorrect_answers: ["Music Player", "Multi Pass", "Micro Point"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "When Gmail first launched, how much storage did it provide for your email?",
    correct_answer: "1GB",
    incorrect_answers: ["512MB", "5GB", "Unlimited"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does GHz stand for?",
    correct_answer: "Gigahertz",
    incorrect_answers: ["Gigahotz", "Gigahetz", "Gigahatz"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "HTML is what type of language?",
    correct_answer: "Markup Language",
    incorrect_answers: [
      "Macro Language",
      "Programming Language",
      "Scripting Language"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.",
    correct_answer: "Binary",
    incorrect_answers: ["JavaScript", "C++", "Python"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does the Prt Sc button do?",
    correct_answer:
      "Captures what&#039;s on the screen and copies it to your clipboard",
    incorrect_answers: [
      "Nothing",
      "Saves a .png file of what&#039;s on the screen in your screenshots folder in photos",
      "Closes all windows"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
    correct_answer: "HD Graphics 500",
    incorrect_answers: [
      "HD Graphics 700 ",
      "HD Graphics 600",
      "HD Graphics 7000"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the domain name for the country Tuvalu?",
    correct_answer: ".tv",
    incorrect_answers: [".tu", ".tt", ".tl"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How many kilobytes in one gigabyte?",
    correct_answer: "1000000",
    incorrect_answers: ["1024", "1000", "1048576"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00FF00&quot;?",
    correct_answer: "Green",
    incorrect_answers: ["Red", "Blue", "Yellow"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How many values can a single byte represent?",
    correct_answer: "256",
    incorrect_answers: ["8", "1", "1024"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "The C programming language was created by this American computer scientist. ",
    correct_answer: "Dennis Ritchie",
    incorrect_answers: ["Tim Berners Lee", "al-Khwārizmī", "Willis Ware"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In computing, what does LAN stand for?",
    correct_answer: "Local Area Network",
    incorrect_answers: [
      "Long Antenna Node",
      "Light Access Node",
      "Land Address Navigation"
    ]
  }
];
