import React from 'react';

import faqJson from '../../contrib/content/faq.json';
import FAQSection from './FAQSection';
import Link from 'next/link';

function FAQComponent() {
  let faq = faqJson.en;
  return (
    <div>
      <h2 id="faq" className="mb-4">Frequently Asked Questions</h2>
      <div className="horizontalCenter">
        <div className="questionSection">
          <div className="mb-5">
            <h2>General Questions</h2>
            <FAQSection questions={faq.questions.general} />
          </div>
          <div className="mb-5">
            <h2>Questions by Sharers</h2>
            <FAQSection questions={faq.questions.sharer} />
          </div>
          <div className="mb-5">
            <h2>Questions by Listening Volunteers</h2>
            <FAQSection questions={faq.questions.volunteer} />
          </div>
          <div className="mb-5">
            <h2>Questions by LineHayat Community</h2>
            <FAQSection questions={faq.questions.supporters} />
          </div>
          <div className="mb-5 text-center">
            <p>
              Anything else to ask us? Do contact us{' '}
              <Link href="/#contact">
                <span className="highlight">here</span>
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQComponent;
