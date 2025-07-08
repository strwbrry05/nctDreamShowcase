import React, { useState } from "react";
import lm_IMG from "../assets/images/lightMode/lm_QA.png";
import dm_IMG from "../assets/images/darkMode/dm_QA.png";

const QA = (props) => {
  const [faq, setFaq] = useState([
    {
      question: "When did they debut?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl",
      opened: true,
    },
    {
      question: "How many albums have they released since debut?",
      answer: "lorem",
      opened: false,
    },
    {
      question: "How many members are in NCT Dream?",
      answer: "lorem",
      opened: false,
    },
    {
      question: "Why should I listen to their music?",
      answer:
        "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.",
      opened: true,
    },
    { question: "What is kpop?", answer: "lorem", opened: false },
    {
      question: "Tempus leo eu aenean sed diam urna tempor?",
      answer: "lorem",
      opened: false,
    },
    {
      question: "Ad litora torquent per conubia nostra?",
      answer: "lorem",
      opened: false,
    },
  ]);

  const toggleOpen = (index) => {
    setFaq(
      faq.map((qa, i) => {
        if (i === index) {
          qa.opened = !qa.opened;
        }
        return qa;
      })
    );
  };

  return (
    <div
      className="flex flex-col justify-center items-center
    md:flex-row xl:w-[1200px] xl:m-auto"
    >
      <div className="md:w-[47%]">
        {props.isDark ? (
          <img
            src={dm_IMG}
            alt="full group nct dream"
            className="w-[500px] h-[700px] object-cover md:ml-[1em]"
          ></img>
        ) : (
          <img
            src={lm_IMG}
            alt="full group nct dream"
            className="w-[500px] h-[700px] object-cover md:ml-[1em]"
          />
        )}
      </div>
      <div
        className=" md:w-[65%]
      p-[1em] pt-[2em] pb-[5em] bg-(--color-red) font-(family-name:--font-text) text-(--color-white)"
      >
        <h2 className="font-(family-name:--font-solid) text-[3.25rem] w-[80%] m-auto">
          Q&A
        </h2>
        {faq.map((qa, index) => {
          return (
            <div key={index}>
              <div
                className="flex justify-between items-center 
                text-[1.05rem] w-[80%] m-auto border-b-2 pb-[0.5em]"
                onClick={() => toggleOpen(index)}
              >
                <p className="">{qa.question}</p>
                {qa.opened ? (
                  <p className="qa_symbol rotate-180 transition-all duration-300 ease-out">
                    -
                  </p>
                ) : (
                  <p className="qa_symbol rotate-90 transition-all duration-400 ease-in-out">
                    +
                  </p>
                )}
              </div>
              <div
                className={`text-[0.9rem] w-[80%] m-auto 
              mb-[1.25em] bg-(--color-dark-red)
              ${
                qa.opened
                  ? "max-h-[500px] opacity-100 transition-all duration-300 ease-in-out"
                  : "max-h-[0px] opacity-0 overflow-hidden transition-all duration-300 ease-in-out"
              }`}
              >
                <p className="w-[85%] m-auto font-light pt-[1em] pb-[1em]">
                  {qa.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QA;
