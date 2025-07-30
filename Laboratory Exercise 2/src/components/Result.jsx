
export default function Result({ questions, answers, time }) {
  const score = questions.reduce((acc, q) => {
    const userAnswer = answers[q.id];
    const correct = q.type === "binary"
      ? String(q.answer) === userAnswer
      : q.type === "identification"
        ? q.answer.toLowerCase() === (userAnswer || "").toLowerCase()
        : q.answer === userAnswer;
    return acc + (correct ? 1 : 0);
  }, 0);

  const formatTime = (t) => {
    const minutes = Math.floor(t / 60);
    const seconds = t % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>🎉 Exam Complete</h2>
      <p>✅ Your Score: {score} / {questions.length}</p>
      <p>⏱️ Time Taken: {formatTime(time)}</p>
    </div>
  );
}
