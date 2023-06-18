const ContactPage = () => {
  return (
    <div className="contactPage">
      <div className="contact">
        <h1>Contact</h1>
        <h3>
          If you have a comment or question, please use the form below to
          contact us.
        </h3>
        <form action="" className="contactForm">
          <label for="name">Your Name: </label>
          <input type="text" name="name" id="name"></input>
          <label for="email">Your Email: </label>
          <input type="text" name="email" id="email"></input>
          <label for="comment">Your Comments: </label>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            className="textComment"
          ></textarea>
        </form>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default ContactPage;
