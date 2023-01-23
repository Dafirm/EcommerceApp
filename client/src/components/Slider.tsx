import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = () => {
  return (
    <div style={{ marginTop: "50px" }} className="Slider_img">
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
      >
        <div
          style={{
            width: "100%",
            height: "500px",
            objectFit: "contain",
          }}
        >
          <img
            src="https://themandolinstore.com/wp-content/uploads/2015/04/collings-banner.jpg"
            alt=""
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "500px",
            objectFit: "contain",
          }}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/2400/6121/files/Skip_s_Music_-_Gibson-Epiphone_-_Web_Banner.png?v=1666040753"
            alt=""
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "500px",
            objectFit: "contain",
          }}
        >
          <img
            src="https://www.patsmusic.com.au/wp-content/uploads/slider/cache/6a1afd48b3c9af8b27a52f94f534b027/Fender_Meteora_Guitar_RetailerHPSlide_1366x500-1.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};
export default ImageCarousel;
