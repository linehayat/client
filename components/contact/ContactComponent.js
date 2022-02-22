import React from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

function ContactComponent() {
  return (
    <div className="contactView" style={{ textAlign: "center" }}>
      <img src="/paper-plane.svg" alt="Paper plane" style={{ marginBottom: "2rem", maxWidth: "30rem", width: "100%" }} />
      <h1 id="contact" className="mb-4 text-center">Get Connected</h1>
      <div className="mb-4 text-center">
        <p>We would love to hear from you!</p>
        <p>For any enquiries and feedback, please get in touch with us via:</p>
      </div>
      <div className="mb-5 horizontalCenter">
        <table className="mx-auto">
          <tr>
            <td>
              <a href="https://www.instagram.com/linehayat_usm">
                <img className="socialsIcon" src="/igIcon.svg" style={{ minHeight: "3rem", maxHeight: "3rem" }} />
                {/*<i className="fab fa-instagram socialsIcon"></i>*/}
              </a>
            </td>
            <td>
              <a href="https://www.instagram.com/linehayat_usm">
                <p className="socialsText">@linehayat_usm</p>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.linkedin.com/company/linehayatusm/">
                <img className="socialsIcon" src="/linkedInIcon.svg" style={{ minHeight: "3rem", maxHeight: "3rem" }} />
                {/*<i className="fab fa-linkedin socialsIcon"></i>*/}
              </a>
            </td>
            <td>
              <a href="https://www.linkedin.com/company/linehayatusm/">
                <p className="socialsText">/linehayatusm</p>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.facebook.com/linehayat.usm">
                <img className="socialsIcon" src="/fbIcon.svg" style={{ minHeight: "3rem", maxHeight: "3rem" }} />
              </a>
            </td>
            <td>
              <a href="https://www.facebook.com/linehayat.usm">
                <p className="socialsText">/linehayat.usm</p>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="mailto:linehayat@usm.my">
                <img className="socialsIcon" src="/emailIcon.svg" style={{ minHeight: "3rem", maxHeight: "3rem" }} />
                {/*<i className="far fa-envelope socialsIcon"></i>*/}
              </a>
            </td>
            <td>
              <a href="mailto:linehayat@usm.my">
                <p className="socialsText">linehayat@usm.my</p>
              </a>
            </td>
          </tr>
        </table>
      </div>
      <div className="pb-4">
        <h1 id="contact" className="mb-4 text-center">Feedback to LineHayat </h1>
        <p className="text-center">
          We are delighted to be able to help you in your most challenging time.
          If you have used our service, it would be wonderful to know your
          experience to provide better services in the future.
        </p>
        <p className="text-center">
          Worry not, as we promise a completely confidential service, your
          comments would be anonymous.
        </p>
        <div className="mt-3 text-center">
          <a href="https://docs.google.com/forms/d/1sS2esF4vrfVe9bhoo0TBOn4rrPTSpCGnwfbSiKOZINY/viewform?edit_requested=true">
            <Button variant="secondary" className="buttonHome">
              Feedback Form
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
