import React, { useState } from "react";
import "./PhysicsQuestion.css";
import { FaRegClock, FaSignOutAlt } from "react-icons/fa";

const questions = [
  {
    id: 1,
    text: "A body of mass 10 kg is moving with a uniform velocity of 5 m/s. What is the net force acting on it?",
    marks: 4,
    options: ["0 N", "50 N", "10 N", "5 N"],
  },
  {
    id: 2,
    text: "Define gravitational potential energy.",
    marks: 4,
    options: ["mgh", "1/2mv²", "mg", "None of these"],
  },
  {
    id: 3,
    text: "State Ohm's Law.",
    marks: 4,
    options: ["V=IR", "F=ma", "P=IV", "E=mc²"],
  },
  {
    id: 4,
    text: "Explain why the sky appears blue.",
    marks: 4,
    options: ["Due to scattering of light", "Due to reflection", "Due to refraction", "None"],
  },
  {
    id: 5,
    text: "What is escape velocity?",
    marks: 4,
    options: ["11.2 km/s", "5 km/s", "9.8 m/s²", "0 m/s"],
  },
  {
    id: 6,
    text: "A body of mass 10 kg is moving with a uniform velocity of 5 m/s. What is the net force acting on it?",
    marks: 4,
    options: ["0 N", "50 N", "10 N", "5 N"],
  },
  {
    id: 7,
    text: "A body of mass 10 kg is moving with a uniform velocity of 5 m/s. What is the net force acting on it?",
    marks: 4,
    options: ["0 N", "50 N", "10 N", "5 N"],
  },
  {
    id: 8,
    text: "A body of mass 10 kg is moving with a uniform velocity of 5 m/s. What is the net force acting on it?",
    marks: 4,
    options: ["0 N", "50 N", "10 N", "5 N"],
  },
  {
    id: 9,
    text: "A body of mass 10 kg is moving with a uniform velocity of 5 m/s. What is the net force acting on it?",
    marks: 4,
    options: ["0 N", "50 N", "10 N", "5 N"],
  },
  {
    id: 10,
    text: "A body of mass 10 kg is moving with a uniform velocity of 5 m/s. What is the net force acting on it?",
    marks: 4,
    options: ["0 N", "50 N", "10 N", "5 N"],
  },
  {
    id: 11,
    text: "A body of mass 10 kg is moving with a uniform velocity of 5 m/s. What is the net force acting on it?",
    marks: 4,
    options: ["0 N", "50 N", "10 N", "5 N"],
  },
  {
    id: 12,
    text: "A body of mass 10 kg is moving with a uniform velocity of 5 m/s. What is the net force acting on it?",
    marks: 4,
    options: ["0 N", "50 N", "10 N", "5 N"],
  },
  {
    id: 13,
    text: "A body of mass 10 kg is moving with a uniform velocity of 5 m/s. What is the net force acting on it?",
    marks: 4,
    options: ["0 N", "50 N", "10 N", "5 N"],
  },
  {
    id: 14,
    text: "A body of mass 10 kg is moving with a uniform velocity of 5 m/s. What is the net force acting on it?",
    marks: 4,
    options: ["0 N", "50 N", "10 N", "5 N"],
  },
  {
    id: 15,
    text: "A body of mass 10 kg is moving with a uniform velocity of 5 m/s. What is the net force acting on it?",
    marks: 4,
    options: ["0 N", "50 N", "10 N", "5 N"],
  },
  {
    id: 16,
    text: "A body of mass 10 kg is moving with a uniform velocity of 5 m/s. What is the net force acting on it?",
    marks: 4,
    options: ["0 N", "50 N", "10 N", "5 N"],
  },
  {
    id: 17,
    text: "A body of mass 10 kg is moving with a uniform velocity of 5 m/s. What is the net force acting on it?",
    marks: 4,
    options: ["0 N", "50 N", "10 N", "5 N"],
  },
  {
    id: 18,
    text: "A body of mass 10 kg is moving with a uniform velocity of 5 m/s. What is the net force acting on it?",
    marks: 4,
    options: ["0 N", "50 N", "10 N", "5 N"],
  },
  {
    id: 19,
    text: "A body of mass 10 kg is moving with a uniform velocity of 5 m/s. What is the net force acting on it?",
    marks: 4,
    options: ["0 N", "50 N", "10 N", "5 N"],
  },
  {
    id: 20,
    text: "A body of mass 10 kg is moving with a uniform velocity of 5 m/s. What is the net force acting on it?",
    marks: 4,
    options: ["0 N", "50 N", "10 N", "5 N"],
  },
  {
    id: 21,
    text: "A body of mass 10 kg is moving with a uniform velocity of 5 m/s. What is the net force acting on it?",
    marks: 4,
    options: ["0 N", "50 N", "10 N", "5 N"],
  },
  {
    id: 22,
    text: "A body of mass 10 kg is moving with a uniform velocity of 5 m/s. What is the net force acting on it?",
    marks: 4,
    options: ["0 N", "50 N", "10 N", "5 N"],
  },
  {
    id: 23,
    text: "A body of mass 10 kg is moving with a uniform velocity of 5 m/s. What is the net force acting on it?",
    marks: 4,
    options: ["0 N", "50 N", "10 N", "5 N"],
  },
  {
    id: 24,
    text: "A body of mass 10 kg is moving with a uniform velocity of 5 m/s. What is the net force acting on it?",
    marks: 4,
    options: ["0 N", "50 N", "10 N", "5 N"],
  },
  
  // ... add more questions as needed
];

const totalQuestions = 24;

const PhysicsQuestion = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(1);
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [testEnded, setTestEnded] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  

  const handleButtonClick = (id) => {
    if (!selectedButtons.includes(id)) {
      setSelectedButtons([...selectedButtons, id]);
    }
    setSelectedQuestion(id);
  };

  const handleOptionChange = (questionId, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: option,
    });

    if (!selectedButtons.includes(questionId)) {
      setSelectedButtons([...selectedButtons, questionId]);
    }
  };

  const handleNext = () => {
    // Check if current question is answered or not
    const currentAnswer = selectedAnswers[selectedQuestion];

    if (!currentAnswer) {
      if (!selectedButtons.includes(selectedQuestion)) {
        setSelectedButtons([...selectedButtons, selectedQuestion]);
      }
    }

    // Move to next
    if (selectedQuestion < totalQuestions) {
      setSelectedQuestion(selectedQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedQuestion > 1) {
      setSelectedQuestion(selectedQuestion - 1);
    }
  };

  const handleEndTest = () => {
    setTestEnded(true);
  };

  const getButtonClass = (id) => {
    if (!selectedButtons.includes(id)) {
      return "not-visited"; // Gray
    } else if (!selectedAnswers[id]) {
      return "not-answered"; // Red
    } else {
      return "answered"; // Green
    }
  };

  const currentQuestionData =
    questions.find((q) => q.id === selectedQuestion) || {
      id: selectedQuestion,
      text: "Question not available.",
      marks: "-",
      options: [],
    };

  const optionLabels = ["A", "B", "C", "D"];

  if (testEnded) {
    return (
      <div className="full-container">
        <div className="sidebar">
          <div className="profile-btn">Profile</div>
        </div>
        <div className="content-area" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h1>Thank you!</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="full-container">
      <div className="sidebar">
        <div className="question-grid">
          {[...Array(totalQuestions)].map((_, i) => (
            <button
              key={i}
              className={`number-btn ${getButtonClass(i + 1)}`}
              onClick={() => handleButtonClick(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div className="legend">
          <p>
            <span className="dot gray"></span> Not Visited
          </p>
          <p>
            <span className="dot red"></span> Not Answered
          </p>
          <p>
            <span className="dot green"></span> Answered
          </p>
          <p>
            <span className="dot purple"></span> Marked for Review
          </p>
          <p>
            <span className="dot orange"></span> Answered & Marked for Review
          </p>
        </div>
        <div className="profile-btn">Profile</div>
      </div>

      <div className="content-area">
        <div className="top-bar">
          <div className="section-title">Section A - Physics</div>
          <div className="right-controls">
            <div className="timer">
              <FaRegClock /> 16:00
            </div>
            <button className="end-test-btn" onClick={handleEndTest}>
              <FaSignOutAlt style={{ marginRight: "5px" }} />
              End Test
            </button>
          </div>
        </div>

        <div className="question-content">
          <div className="question-header">
            <h3>Q.{currentQuestionData.id}</h3>
            <span className="marks">{currentQuestionData.marks} Mark</span>
          </div>
          <p>{currentQuestionData.text}</p>
        </div>

        <div className="answer-section">
          <label>Select your answer:</label>
          {currentQuestionData.options.length > 0 ? (
            currentQuestionData.options.map((option, idx) => (
              <div key={idx} className="option-row">
                <label className="option-label">
                  <input
                    type="radio"
                    name={`question-${currentQuestionData.id}`}
                    value={option}
                    checked={selectedAnswers[currentQuestionData.id] === option}
                    onChange={() => handleOptionChange(currentQuestionData.id, option)}
                  />
                  <span className="option-letter">{optionLabels[idx]}.</span>
                  <span className="option-text">{option}</span>
                </label>
              </div>
            ))
          ) : (
            <p>No options available for this question.</p>
          )}

          <div className="nav-buttons">
            <button onClick={handlePrevious} disabled={selectedQuestion === 1}>
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={selectedQuestion === totalQuestions}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicsQuestion;
