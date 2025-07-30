
import { useState, useEffect } from "react";
import questions from "../data/questions.json";
import Question from "./Question";
import Result from "./Result";

export default function Exam() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(() => {
    const saved = localStorage.getItem("exam_answers");
    return saved ? JSON.parse(saved) : {};
  });
  const [submitted, setSubmitted] = useState(false);
  const [time, setTime] = useState(0); // in seconds
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem("exam_answers", JSON.stringify(answers));
  }, [answers]);

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [questions[current].id]: value });
  };

  const handleFinalSubmit = () => {
    localStorage.removeItem("exam_answers");
    setSubmitted(true);
  };

  if (submitted) {
    return <Result questions={questions} answers={answers} time={time} />;
  }

  const currentQuestion = questions[current];
  const isAnswered = answers[currentQuestion.id] !== undefined;

  const formatTime = (t) => {
    const minutes = Math.floor(t / 60);
    const seconds = t % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h4>⏱️ Time: {formatTime(time)}</h4>
      <Question
        question={currentQuestion}
        answer={answers[currentQuestion.id]}
        setAnswer={handleAnswer}
      />
      <div>
        {current > 0 && <button onClick={() => setCurrent(current - 1)}>Back</button>}
        {current < questions.length - 1 && (
          <button onClick={() => setCurrent(current + 1)} disabled={!isAnswered}>
            Next
          </button>
        )}
        {current === questions.length - 1 && (
          <button onClick={() => setShowConfirm(true)} disabled={!isAnswered}>Submit</button>
        )}
      </div>

      {showConfirm && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <div style={{ background: "white", padding: "2rem", borderRadius: "10px", textAlign: "center" }}>
            <h3>Are you sure you want to submit?</h3>
            <p>You won't be able to change your answers after this.</p>
            <button onClick={handleFinalSubmit}>Yes, Submit</button>
            <button onClick={() => setShowConfirm(false)} style={{ marginLeft: "1rem" }}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
