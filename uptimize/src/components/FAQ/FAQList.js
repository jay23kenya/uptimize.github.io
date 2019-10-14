import React from "react";

import Faq from "./FAQ2";
import { StyledFaqsList } from "./faqStyles";
// this data could come from anywhere
const faqsData = [
  { 
    question: "What does FAQ stand for?",
    answer: "Frequently Asked Question"
  },
  {
    question: "What is the best ice cream flavor?",
    answer: "Coffee with fudge ripple, or homemade strawberry."
  }
];

const FaqsList = () => {
  return (
    <StyledFaqsList>
      {faqsData.map((faq, i) => (
        <Faq key={"faq_" + i} question={faq.question} answer={faq.answer} />
      ))}
    </StyledFaqsList>
  );
};

export default FaqsList;    