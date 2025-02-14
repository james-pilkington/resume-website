import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Import images from the src/assets/logos folder
import client1 from "../images/clients/client1.png";
import client2 from "../images/clients/client2.png";
import client3 from "../images/clients/client3.png";
import client4 from "../images/clients/client4.png";
import client5 from "../images/clients/client5.png";
import client6 from "../images/clients/client6.png";
import client7 from "../images/clients/client7.png";
import client8 from "../images/clients/client8.png";
import client9 from "../images/clients/client9.png";

const clients = [client1, client2, client3, client4, client5, client6, client7, client8, client9];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 4 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 2 },
};

const ClientCarousel = () => {
  return (
    <div className="w-full max-w-[60%] mx-auto bg-gray-100 p-4 rounded-lg">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={1000} // Infinite scroll effect
        transitionDuration={5000} // Slow and smooth scrolling
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        customTransition="transform 5s linear" // Smooth movement
        additionalTransfrom={0}
        pauseOnHover={false}
        containerClass="carousel-container"
      >
        {clients.map((client, index) => (
          <img
            key={index}
            src={client}
            alt={`Client ${index + 1}`}
            className="h-[50px] w-auto object-contain mx-2"
            style={{ height: "50px", paddingLeft: "500px" }} // Explicit height fix
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ClientCarousel;
