import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-[#FAFAFA]">
      <div>
        {/* Header Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="text-center mb-10 max-w-[600px] mx-auto"
        >
          <p className="text-[#FEBC58] font-semibold text-sm">What our customers are saying</p>
          <h1 className="text-[#000000] font-bold text-3xl">Testimonials</h1>
          <p className="text-xs text-[#A3A9B5]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi.</p>
        </div>

        {/* Testimonial Cards */}
        <div>
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div 
                key={data.id} 
                className="flex flex-col items-start p-6 rounded-lg shadow-lg m-4 bg-[#FFF6E9] h-[320px] transition-transform transform hover:scale-105"
              >
                <img 
                  src={data.img} 
                  alt={`${data.name}'s testimonial`} 
                  className="rounded-full mb-4 w-24 h-24 object-cover border-4 border-white shadow-md"
                />
                
                <p className="text-left mt-2 w-full flex-grow overflow-hidden text-ellipsis whitespace-nowrap">
                  {data.text}
                </p>
                <h3 className="font-extrabold text-xl text-left w-full mt-3">{data.name}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
