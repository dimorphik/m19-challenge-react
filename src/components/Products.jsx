import { useEffect } from "react";

const Products = (props) => {
  useEffect(() => {
    document.title = "Gulp Roast Coffee - Products";
  }, []);

  return (
    <section class="products">
      <h1>Our Products</h1>
      <div id="product-container">
        <picture>
          <img
            src={`${process.env.PUBLIC_URL}/media/images/gulp-espresso.jpg`}
            alt="A cup of espresso. It's good for you! Really!"
          />
        </picture>
        <article>
          <h2>Columbian-Blended Espresso Beans</h2>
          <p>
            With our Columbian-Blended Espresso Beans, you can finally feel like a professional
            barista. Bright and clean with an intense burst of flavor, these full-bodied beans
            strike a perfect balance between the most delicate roasts and fruitful aromas.
          </p>
        </article>
        <picture>
          <source
            srcset={`${process.env.PUBLIC_URL}/media/images/gulp-coffee-beans.jpg`}
            media="(min-width: 768px)"
          />
          <img
            src={`${process.env.PUBLIC_URL}/media/images/gulp-coffee-beans-sm.jpg`}
            alt="Three beautiful piles of beautiful coffee beans, just lying there being beautiful"
          />
        </picture>
        <article>
          <h2>Triple-Blended Coffee Beans</h2>
          <p>
            Skillfully roasted and carefully blended, our Triple-Blended Coffee Beans don’t just
            wake you up in the morning, they pack a lasting punch that's sure to leave you wanting
            more. With silky smoothness and layered flavors, there’s really no better way to start
            your day.
          </p>
        </article>
        <picture>
          <source
            srcset={`${process.env.PUBLIC_URL}/media/images/gulp-pouring-coffee-horizontal.jpg`}
            media="(min-width: 768px)"
          />
          <img
            src={`${process.env.PUBLIC_URL}/media/images/gulp-pouring-coffee-horizontal-sm.jpg`}
            alt="A barista making one of our live-giving pourovers."
          />
        </picture>
        <article class="product-detail">
          <h2>Lightly Roasted Coffee Beans</h2>
          <p>
            Our Lightly Roasted Coffee Beans offer the world a chance to brighten every day with a
            whole lot of flavor and inspiration. Try these to receive the perfect balance between
            bold flavor and subtle sweetness.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Products;
