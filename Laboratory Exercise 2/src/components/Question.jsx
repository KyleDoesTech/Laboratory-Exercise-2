
export default function Question({ question, answer, setAnswer }) {
  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div>
      <h2>{question.question}</h2>
      {question.type === "multiple" && question.choices.map(choice => (
        <label key={choice.id}>
          <input
            type="radio"
            name={`q${question.id}`}
            value={choice.id}
            checked={answer === choice.id}
            onChange={handleChange}
          />
          {choice.value}
        </label>
      ))}
      {question.type === "binary" && (
        <>
          <label><input type="radio" value="true" checked={answer === "true"} onChange={handleChange} /> True</label>
          <label><input type="radio" value="false" checked={answer === "false"} onChange={handleChange} /> False</label>
        </>
      )}
      {question.type === "identification" && (
        <input type="text" value={answer || ""} onChange={handleChange} />
      )}
    </div>
  );
}
