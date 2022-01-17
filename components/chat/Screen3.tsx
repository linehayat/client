interface Props {
  userAcceptsTermsOfUse: boolean;
  setUserAcceptsTermsOfUse(userAcceptsTermsOfUse: boolean): void;
}

function TermsOfUse({ userAcceptsTermsOfUse, setUserAcceptsTermsOfUse }: Props) {
  return (
    <div>
      <p>Terms of Use:</p>
      <p>
        By using LineHayat Support Services, you agree to the Terms and Conditions stated below. LineHayat is a Listening Service delivered by a team of well-trained Listening Volunteers and it is provided for USM students only.
      </p>
      <ol>
        <li>We provide immediate and accessible emotional support to students.</li>
        <li>We listen with an empathic, collaborative, and non-judgmental stance.</li>
        <li>We provide a safe space for you to talk or share feelings and thoughts.</li>
        <li>We do not provide professional counselling, medical advice, or treatment of any conditions.</li>
        <li>We are not and will not be treated as an emergency service or subsitute or alternative to professional health care.</li>
        <li>We have taken three significant steps to ensure a high level of security:</li>
        <ol>
          <li>Both you and the Listening Volunteer will remain anonymous.</li>
          <li>We will never track your IP address.</li>
          <li>We will never save session transcripts. All chats will be automatically deleted as the conversation ends.</li>
        </ol>
      </ol>
      <input type="checkbox" checked={userAcceptsTermsOfUse} onChange={(event) => setUserAcceptsTermsOfUse(event.target.checked)} />
      I agree with all the terms and conditions listed above.
    </div>
  );
}

export default TermsOfUse;