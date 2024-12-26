import React from 'react';
import './QuizCard.scss'

const QuizCard = ({ quiz }) => (
  <div className="quiz-card">
    <h3>{quiz.title}</h3>
    <button>Edit</button>
    <button>Delete</button>
  </div>
);

export default QuizCard;
