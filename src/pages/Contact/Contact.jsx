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
           
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1918.229446228687!2d22.286710976919768!3d60.46354701972169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c768d54d4bb07%3A0x17ed47c76b4f411b!2s11C%2C%20Yo-kyl%C3%A4%2011C%2C%2020540%20Turku!5e1!3m2!1sen!2sfi!4v1731454534332!5m2!1sen!2sfi"
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
