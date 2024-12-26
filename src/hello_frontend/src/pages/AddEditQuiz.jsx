import React, { useState } from 'react';
import './AddEditQuiz.scss';
import QuestionForm from '../components/QuestionForm';

const AddEditQuiz = ({ addQuiz }) => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { text: '', options: [''] }]);
  };

  const handleUpdateQuestion = (index, updatedQuestion) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = updatedQuestion;
    setQuestions(updatedQuestions);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    addQuiz({ title, questions });
    setTitle('');
    setQuestions([]);
    alert('Quiz added successfully!');
  };

  return (
    <div className="add-edit-quiz">
      <h2>Add a New Quiz</h2>
      <input
        type="text"
        placeholder="Quiz Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {questions.map((question, index) => (
        <QuestionForm
          key={index}
          question={question}
          onChange={(updatedQuestion) => handleUpdateQuestion(index, updatedQuestion)}
          onRemove={() => handleRemoveQuestion(index)}
        />
      ))}
      <button type="button" onClick={handleAddQuestion}>
        Add Question
      </button>
      <button type="button" onClick={handleSubmit}>
        Save Quiz
      </button>
    </div>
  );
};

export default AddEditQuiz;
