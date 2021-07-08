import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920"
          alt=""
        />
      </div>
      <div className="home__row">
        {" "}
        <Product
          title="A Personal Computer"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg"
          price="199.99"
          rating={4}
        />
        <Product
          title="Hair Clipper"
          image="https://images-na.ssl-images-amazon.com/images/I/81Y9FDkeG6S._SL1500_.jpg"
          price="199.99"
          rating={4}
        />
        <Product
          title="Accessories"
          image="https://m.media-amazon.com/images/I/41VDUqScJFL._AC_SY200_.jpg"
          price="199"
          rating={2}
        />
      </div>
      <div className="home__row">
        <Product
          title="Masks "
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Diwali2019/Rishab/Auto_Biss/BISS/PC_CC/BISS_260x2601._SY304_CB669949363_.jpg"
          price="199"
          rating={4}
        />
        <Product
          title="A Camera"
          image="https://m.media-amazon.com/images/I/514lNN6EfuL.__AC_SY200_.jpg"
          price="199"
          rating={3}
        />
      </div>
      <div className="home__row">
        <Product
          title="Summer Clothes"
          image="https://m.media-amazon.com/images/I/51t0fjVBtwS._AC_UL320_.jpg"
          price="199"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
