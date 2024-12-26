import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuizList from './pages/QuizList';
import AddEditQuiz from './pages/AddEditQuiz';
import ViewQuiz from './pages/ViewQuiz';

const App = () => {
  const [quizzes, setQuizzes] = useState([
    {
      title: 'Sample Quiz',
      questions: [
        { text: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'] },
      ],
    },
  ]);

  const addQuiz = (newQuiz) => {
    setQuizzes([...quizzes, newQuiz]);
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quizzes" element={<QuizList quizzes={quizzes} />} />
            <Route path="/add-quiz" element={<AddEditQuiz addQuiz={addQuiz} />} />
            <Route path="/view-quiz/:index" element={<ViewQuiz quizzes={quizzes} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
