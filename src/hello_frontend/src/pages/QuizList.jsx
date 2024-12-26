import React from 'react';
import { Link } from 'react-router-dom';
import './QuizList.scss';

const QuizList = ({ quizzes }) => (
  <div className="quiz-list">
    <h2>Available Quizzes</h2>
    {quizzes.map((quiz, index) => (
      <div key={index} className="quiz-card">
        <h3>{quiz.title}</h3>
        <Link to={`/view-quiz/${index}`}>
          <button>View Quiz</button>
        </Link>
      </div>
    ))}
  </div>
);

export default QuizList;
