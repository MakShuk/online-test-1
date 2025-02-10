import React, { useState } from "react";
import Question from "./components/Question";
import Results from "./components/Results";

// Константы
const INITIAL_ANSWERS = new Array(8).fill([]);  // 8 вопросов в тесте


// Константы
const INITIAL_TEST = {
  "testName": "Как говорить так, чтобы вас услышали?",
  "description": "Тест о психотипах, мотивации и сотрудничестве",
  "modules": [
    {
      "name": "Типология людей на основе ценностей и функций",
      "questions": [
        {
          "id": 1,
          "text": "Отметьте 4 параметра, которые характерны для Производителя",
          "options": [
            "Нацелен на краткосрочный результат",
            "Нацелен на долгосрочный процесс",
            "Волнует вопрос «Что нужно делать?»",
            "Волнуют вопросы «Когда делать и зачем?»",
            "Фокус внимания глобальный",
            "Фокус внимания детальный",
            "Скорость принятия решения медленная",
            "Скорость принятия решения быстрая"
          ],
          "correctAnswers": [0, 2, 5, 7],
          "type": "multipleChoice"
        },
        {
          "id": 2,
          "text": "Отметьте 4 параметра, которые характерны для Администратора",
          "options": [
            "Нацелен на краткосрочный процесс",
            "Нацелен на долгосрочный результат",
            "Волнует вопрос «Кто будет делать?»",
            "Волнует вопрос «Как нужно делать?»",
            "Фокус внимания глобальный",
            "Фокус внимания детальный",
            "Скорость принятия решения медленная",
            "Скорость принятия решения быстрая"
          ],
          "correctAnswers": [0, 3, 5, 6],
          "type": "multipleChoice"
        },
        {
          "id": 3,
          "text": "Отметьте 4 параметра, которые характерны для Предпринимателя",
          "options": [
            "Нацелен на краткосрочный процесс",
            "Нацелен на долгосрочный результат",
            "Волнует вопрос «Что нужно делать?»",
            "Волнуют вопросы «Когда делать и зачем?»",
            "Фокус внимания глобальный",
            "Фокус внимания детальный",
            "Скорость принятия решения медленная",
            "Скорость принятия решения быстрая"
          ],
          "correctAnswers": [1, 3, 4, 7],
          "type": "multipleChoice"
        },
        {
          "id": 4,
          "text": "Отметьте 4 параметра, которые характерны для Интегратора",
          "options": [
            "Нацелен на краткосрочный результат",
            "Нацелен на долгосрочный процесс",
            "Волнуют вопросы «Когда делать и зачем?»",
            "Волнует вопрос «Кто будет делать?»",
            "Фокус внимания глобальный",
            "Фокус внимания детальный",
            "Скорость принятия решения медленная",
            "Скорость принятия решения быстрая"
          ],
          "correctAnswers": [1, 3, 4, 6],
          "type": "multipleChoice"
        },
        {
          "id": 5,
          "text": "Какие 2 качества отличают Производителя?",
          "options": [
            "Знающий",
            "Свободолюбивый",
            "Все держит под контролем",
            "Целеустремленный",
            "Готов рисковать",
            "Эмпатия",
            "Исполнительный",
            "Общительный"
          ],
          "correctAnswers": [0, 3],
          "type": "multipleChoice"
        },
        {
          "id": 6,
          "text": "Какие 2 качества отличают Администратора?",
          "options": [
            "Знающий",
            "Свободолюбивый",
            "Все держит под контролем",
            "Целеустремленный",
            "Готов рисковать",
            "Эмпатия",
            "Исполнительный",
            "Общительный"
          ],
          "correctAnswers": [2, 6],
          "type": "multipleChoice"
        },
        {
          "id": 7,
          "text": "Какие 2 качества отличают Предпринимателя?",
          "options": [
            "Знающий",
            "Свободолюбивый",
            "Все держит под контролем",
            "Целеустремленный",
            "Готов рисковать",
            "Эмпатия",
            "Исполнительный",
            "Общительный"
          ],
          "correctAnswers": [1, 4],
          "type": "multipleChoice"
        },
        {
          "id": 8,
          "text": "Какие 2 качества отличают Интегратора?",
          "options": [
            "Знающий",
            "Свободолюбивый",
            "Все держит под контролем",
            "Целеустремленный",
            "Готов рисковать",
            "Эмпатия",
            "Исполнительный",
            "Общительный"
          ],
          "correctAnswers": [5, 7],
          "type": "multipleChoice"
        }
      ]
    }
  ]
}


export default function TestPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(INITIAL_ANSWERS);
  const [showResults, setShowResults] = useState(false);
  const [test] = useState(INITIAL_TEST);

  const questions = test.modules[0].questions;
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answers) => {
    setUserAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = answers;
      return newAnswers;
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(new Array(questions.length).fill([]));
    setShowResults(false);
  };

  if (showResults) {
    return <Results userAnswers={userAnswers} questions={questions} onRetry={handleRetry} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-2 sm:py-12">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-3 sm:p-6 bg-blue-600">
            <h1 className="text-2xl font-bold text-white">{test.testName}</h1>
            <p className="text-blue-100 mt-2">{test.description}</p>
          </div>

          <div className="p-2 sm:p-4">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span
                  className="text-sm text-gray-600"
                  role="status"
                  aria-label={`Вопрос ${currentQuestionIndex + 1} из ${questions.length}`}
                >
                  Вопрос {currentQuestionIndex + 1} из {questions.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                  }}
                  role="progressbar"
                  aria-valuenow={currentQuestionIndex + 1}
                  aria-valuemin={1}
                  aria-valuemax={questions.length}
                />
              </div>
            </div>

            <Question
              question={currentQuestion}
              selectedAnswers={userAnswers[currentQuestionIndex] || []}
              onAnswerSelect={handleAnswerSelect}
            />

            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="px-4 sm:px-6 py-2 rounded-lg bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none"
                aria-label="Перейти к предыдущему вопросу"
              >
                Назад
              </button>

              <button
                onClick={handleNext}
                disabled={!userAnswers[currentQuestionIndex]?.length}
                className="px-4 sm:px-6 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                aria-label={currentQuestionIndex === questions.length - 1 ? "Завершить тест" : "Перейти к следующему вопросу"}
              >
                {currentQuestionIndex === questions.length - 1 ? "Завершить" : "Далее"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}