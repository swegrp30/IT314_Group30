import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text, Box, Container } from "@chakra-ui/react";

const FAQs = () => {
  return (
    <Container maxW="lg" mt={10}>
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={6}>
        Frequently Asked Questions
      </Text>

      <Accordion allowToggle>
        {faqData.map((faq, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text>{faq.answer}</Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

     
    </Container>
  );
};

const faqData = [
  {
    question: "How accurate are stock market predictions?",
    answer: "Stock market predictions vary in accuracy. They're based on analysis, historical data, and various models, but the market can be unpredictable.",
  },
  {
    question: "What methods are used for stock market predictions?",
    answer: "Predictions often use technical analysis (chart patterns, trends), fundamental analysis (company financials), and sometimes sentiment analysis or machine learning algorithms.",
  },
  // ... Add other questions and answers
];

export default FAQs;
