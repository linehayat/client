import React from 'react';
import styles from '../../styles/Faq.module.css';
import faqJson from '../../assets/json/faq.json';

function FAQComponent() {
  const faq = faqJson.en;
  const questionOutput = (questions : Array<{questionText : string, answerText: string}>) => {
    return questions.map(question => (
      <div key={"Q" + question.questionText} className={styles.qna}>
        <li className={styles.question}>{question.questionText}</li>
        <li className={styles.answer}>{question.answerText}</li>
      </div>
    ))
  }
  return (
    <div className={styles.faq}>
      <h1>Frequently Asked Questions</h1>
      <div>
        <div className={styles.type}>
          <h2>General Questions</h2>
          <ul>
            {questionOutput(faq.questions.general)}
          </ul>
        </div>
        <div className={styles.type}>
          <h2>Questions by Sharers</h2>
          <ul>
            {questionOutput(faq.questions.sharer)}
          </ul>
        </div>
        <div className={styles.type}>
          <h2>Questions by Listening Volunteers</h2>
          <ul>
            {questionOutput(faq.questions.volunteer)}
          </ul>
        </div>
        <div className={styles.type}>
          <h2>Questions by LineHayat Community</h2>
          <ul>
            {questionOutput(faq.questions.supporters)}
          </ul>
        </div>

        <div>
          <p>
            Anything else to ask us? Do contact us{' '}
            <a href="mailto:linehayat@usm.my"><span>here</span></a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQComponent;
