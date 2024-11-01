// import Options from "./Options";

import { useQuiz } from "../context/QuizContext";

function Question({ children }) {
  const { question } = useQuiz();

  return (
    <div>
      <h4>{question.question}</h4>
      {children}
    </div>
  );
}

export default Question;
