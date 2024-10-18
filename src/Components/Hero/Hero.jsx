import img1 from "../../assets/Hero/sale-cnpHUeHf.png";
import img2 from "../../assets/Hero/shopping-vpNvhQDE.png";
import img3 from "../../assets/Hero/women-NhG2D3pl.png";
import Slider from "react-slick";

const ImageList = [
    {
        id: 1,
        img: img1,
        title: "Upto 50% off on all Men's Wear",
        description: "Discover amazing deals on men's clothing.",
    },
    {
        id: 2,
        img: img2,
        title: "Upto 50% off on all Women's Wear",
        description: "Stylish outfits at unbelievable prices.",
    },
    {
        id: 3,
        img: img3,
        title: "Upto 50% off on all Accessories",
        description: "Complete your look with our exclusive accessories.",
    },
];

const Hero = () => {
    var settings = {
        dots: true, // Enable dots navigation
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] duration-200 bg-[#F3F4F6] container mx-auto">
            {/* Background pattern */}
            <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 
                right-0 rounded-3xl rotate-45 -z-9 ">
            </div>
            {/* Hero section */}
            <div className="container pb-8 sm:pb-0 px-10">
                <Slider {...settings}>
                    {ImageList.map((item) => (
                        <div key={item.id}>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {/* Text content section */}
                                <div className="flex flex-col justify-center gap-4 lg:pt-12 sm:pt-0 text-center sm:text-left relative z-10">
                                    <h1 
                                    data-aos="zoom-out"
                                    data-aos-duration="500"
                                    data-aos-once="true"
                                    className="text-5xl sm:text-6xl lg:text-7xl font-bold">{item.title}</h1>
                                    <p 
                                    data-aos="zoom-out"
                                    data-aos-duration="500"
                                    data-aos-delay="300"
                                    className="text-sm">{item.description}</p>
                                    <div>
                                        <button 
                                        data-aos="zoom-out"
                                        data-aos-duration="500"
                                        data-aos-delay="200"
                                        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white 
                                            py-2 px-4 rounded-full 
                                            sm:py-3 sm:px-6 sm:text-base 
                                            md:py-4 md:px-8 md:text-lg z-10">
                                            Order Now
                                        </button>
                                    </div>
                                </div>

                                {/* Image section */}
                                <div className="order-1 sm:order-2">
                                    
                                    <div 
                                    data-aos="zoom-in"
                                    data-aos-once="true"
                                    className="relative z-10">
                                        <img src={item.img} 
                                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px]
                                         sm:scale-105 lg:scale-125 object-contain mx-auto" alt={item.title} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;
