import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id ="11223"
            title="The lean startup: How Constant Innovation Creates Radically Successful Business Paperback"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="45678"
            title="Kenwood KMix Stand Mixer for Baking, Stylish kitchen Mixer with K-Beater, Dough Hook and White, 5 litre glass Bowl"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/719dFlNg0wL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product 
            id = '12345'
            title = "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price = {199.99}
            rating = {3}
            image = "https://m.media-amazon.com/images/I/81GJkTKuLnL._AC_UY327_FMwebp_QL65_.jpg"/>
          <Product 
            id = '23456'
            title = "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal fabric"
            price = {98.99}
            rating = {5}
            image = "https://m.media-amazon.com/images/I/51vuAEcgqvL._AC_UY327_FMwebp_QL65_.jpg"/>
          <Product 
            id = '34567'
            title = "New Apple iPad Pro (12.9-inch, wifi, 128gb) - Silver (4th Generation)"
            price = {298.99}
            rating = {4}
            image = "https://m.media-amazon.com/images/I/81FKBk0BvKL._AC_UY327_FMwebp_QL65_.jpg"/>
        </div>
        <div className="home__row">
          <Product 
            id = '46789'
            title = "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price = {1094.98}
            rating = {4}
            image = "https://m.media-amazon.com/images/I/71916r38cNL._AC_UY327_FMwebp_QL65_.jpg"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
