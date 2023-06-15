import { useEffect } from "react";

const ContactUs = (props) => {
  useEffect(() => {
    document.title = "Gulp Roast Coffee - Contact Us";
  }, []);

  return (
    <section class="contact">
      <article>
        <h1>Contact Us</h1>
        <p>200 Fisherman's Dock</p>
        <p>San Francisco, CA 94158</p>
        <p>
          <a href="tel:1234567890">(123) 456-7890</a>
        </p>
      </article>
      <picture>
        <source srcset="./media/images/gulp-menu.jpg" media="(min-width: 768px)" />
        <img
          src="./media/images/gulp-menu-sm.jpg"
          alt="Our famous shop in San Francisco, where it all started."
        />
      </picture>
    </section>
  );
};

export default ContactUs;
