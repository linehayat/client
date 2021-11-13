function FeedbackForm() {
  return (
    <form>
      <p>
        LineHayat Live Chat
      </p>
      <p>
        Feedback for LineHayat Live Chat
      </p>
      <p>
        Kindly rate this chat session
      </p>
      <div>
        {[1, 2, 3, 4, 5].map((rating) => <input type="radio" name="rating" value={rating} key={rating} />)}
      </div>
      <p>
        Feel free to leave your comments...
      </p>
      <textarea placeholder="Type your message here..."></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;