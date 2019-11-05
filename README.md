# Quiz App OOP

## Objective: Build an engine for a Trivia Quiz application using OOP patterns

## User Experience Requirements
- The initial screen should have a button that users can click to start the quiz.
- Users should be prompted through a series of at least 5 multiple choice questions that they can answer.
- Questions are selected from a larger question set (each new game will produce different questions)
- Users are asked questions one at a time only
- User must submit an answer before being able to continue (cannot skip)
- Users should have a progress meter (e.g. question 2 of 5) and score meter throughout the quiz
- Upon submitting an answer, users should:
- receive textual feedback about their answer
- if they were incorrect, they should be provided the correct answer
- be moved onto the next question (or interact with an element to move on).
- At the end of the quiz, users should be told if their current score has exceeded the currently recorded high score (tracked by local session only)
- Users should be able to start a new quiz, retaining the high score

## Technical Requirements
- Use semantic HTML, CSS, and jQuery
- Responsive Design
- Question set source: https://opentdb.com/

## Object Oriented Programming Review
- Object-Oriented Programming: `Object-oriented programming (OOP) refers to a type of computer programming (software design) in which programmers define not only the data type of a data structure, but also the types of operations (functions) that can be applied to the data structure.`
- The language of JavaScript does not inherently contain some well-established OOP features, but its flexibility allows the use of many programming patterns, including functional programming and OOP.
- JavaScript is a prototypical object-oriented programming language, differently from most classical language, that in fact are classical, they use classes.
- One core tenet of OOP is you have an object with data, but also functions attached to that object that read and manipulate the data.
- Methods that would be appropriate for use with multiple objects can also exist. An OOP concept called polymorphism refers to this practice, among other things.
- **Polymorphism** = methods that can be used with multiple objects. Reuse code, classes, methods written once, tested and implemented. Maby be reused in many ways. 
- **Inheritance** = allows for code reusuability and readility. When child class inherits the properties and functionality of parent class, we dont need to write the same code again in child class. Makes it easier to reuse the code, makes us write less code and code is much more readable.
- Class inheritance is a way for one class to extend another class.

