import React from 'react';
import { useParams } from 'react-router-dom';

const ViewQuiz = ({ quizzes }) => {
  const { index } = useParams();
  const quiz = quizzes[index];

  if (!quiz) {
    return <div>Quiz not found!</div>;
  }

  return (
    <div className="view-quiz">
      <h2>{quiz.title}</h2>
      {quiz.questions.map((question, idx) => (
        <div key={idx} className="question">
          <h4>{`Q${idx + 1}: ${question.text}`}</h4>
          <ul>
            {question.options.map((option, optIdx) => (
              <li key={optIdx}>{option}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ViewQuiz;
