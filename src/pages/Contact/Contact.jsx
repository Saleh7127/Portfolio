import emailjs from 'emailjs-com';

emailjs.init({
  publicKey: "aaQw5LkpOdJVrbW1Y",
});

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      fullname: event.target.fullname.value,
      email: event.target.email.value,
      message: event.target.message.value
    };

    emailjs.send('service_28b9ih8', 'template_yjz5lei', formData, 'aaQw5LkpOdJVrbW1Y')
      .then((response) => {
        console.log('Email sent:', response);
        alert('Message sent successfully!');
        event.target.reset();
      }, (error) => {
        console.error('Error occurred while sending email:', error);
        alert('Error occurred while sending message. Please try again later.');
      });
  };

  return (
    <section className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1567.5176496944282!2d90.34783275348188!3d23.82858998731663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1710965377954!5m2!1sen!2sbd"
            width="400"
            height="300"
            loading="lazy"
            title="Google Map"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form onSubmit={handleSubmit} className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
