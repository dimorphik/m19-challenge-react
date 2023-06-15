const About = (props) => {
  return (
    <section class="about">
      <article>
        <h1>About Us</h1>
        <p>
          Life without coffee is a gloomy place. That’s why Gulp Roast has been proudly serving up
          fresh coffee to the{" "}
          <a href="https://goo.gl/maps/3rAyszfwSDx8Si2Y9" rel="noreferrer" target="_blank">
            San Francisco area
          </a>{" "}
          since 2000. Our coffee is locally sourced with the most delicious blends coming directly
          to your home, right from coffee farmers near you. Our coffee makes even the most difficult
          days just a tad easier to get through.
        </p>
        <p>
          For us, this isn’t just brewing coffee. This is an active life mission to bring our
          customers the most flavorful, full-bodied beverages we can get our hands on. Browse our
          site to learn more about our locations and sourcing techniques.
        </p>
        <a class="button" href="https://uxuicurriculum.wixsite.com/gulproast">
          Contact Us
        </a>
      </article>
      <figure>
        <picture>
          <source
            srcset="./media/images/gulp-pouring-coffee-horizontal.jpg"
            media="(min-width: 1266px)"
          />
          <source
            srcset="./media/images/gulp-pouring-coffee-vertical.jpg"
            media="(min-width: 768px) and (max-width: 1265px)"
          />
          <img
            src="./media/images/gulp-pouring-coffee-horizontal-sm.jpg"
            alt="Making pour-over coffee at our shop."
          />
        </picture>
        <figcaption>Our pour-over coffee is known for its freshness and amazing taste.</figcaption>
      </figure>
    </section>
  );
};

export default About;
