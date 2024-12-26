import React, { useState } from 'react';
import './QuestionForm.scss'

const QuestionForm = ({ question, onChange, onRemove }) => {
  const handleOptionChange = (index, value) => {
    const updatedOptions = [...question.options];
    updatedOptions[index] = value;
    onChange({ ...question, options: updatedOptions });
  };

  const handleAddOption = () => {
    onChange({ ...question, options: [...question.options, ''] });
  };

  return (
    <div className="question-form">
      <input
        type="text"
        placeholder="Question Text"
        value={question.text}
        onChange={(e) => onChange({ ...question, text: e.target.value })}
      />
      <div className="options">
        {question.options.map((option, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        ))}
        <button type="button" onClick={handleAddOption}>
          Add Option
        </button>
      </div>
      <button type="button" onClick={onRemove}>
        Remove Question
      </button>
    </div>
  );
};

export default QuestionForm;
