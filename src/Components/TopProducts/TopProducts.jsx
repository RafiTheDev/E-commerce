import Img1 from '../../assets/TopProducts/shirt.png';
import Img2 from '../../assets/TopProducts/shirt2.png';
import Img3 from '../../assets/TopProducts/shirt3.png';
import { FaStar } from "react-icons/fa6";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
        aosDelay: "200",
    },
    {
        id: 2,
        img: Img2,
        title: "Printed Shirt",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
        aosDelay: "400",
    },
    {
        id: 3,
        img: Img3,
        title: "Women Shirt",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
        aosDelay: "800",
    },
];

const TopProducts = () => {
    return (
        <div>
            <div data-aos="fade-up" className="bg-[#FFDDAE] h-full mb-10 py-10">
                {/** Header Section */}
                <div className="text-left mb-10 mx-16 ">
                    <p data-aos="fade-up" className="text-[#FEBC58] font-bold text-sm hover:text-white ">Top Rated Products for You</p>
                    <h1 data-aos="fade-up" className="text-[#000000] font-bold text-3xl ">Best Products</h1>
                    <p data-aos="fade-up" className="text-xs text-[#A3A9B5]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi.</p>
                </div>
                {/** Body Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-20 md:gap-5 place-items-center mx-16 max-h-[300]">
    
    {ProductsData.map((data) => (
        <div 
            key={data.id} 
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="group bg-white p-4 rounded-2xl shadow-md flex flex-col justify-center items-center text-center place-items-center relative duration-300 max-w-[300px] max-h-[550px] hover:text-white hover:bg-black/80"
        >
            {/** Image Section */}
            <div className='h-[100px]'>
                <img 
                    src={data.img} 
                    alt={data.title} 
                    className="max-w-[100px] block mx-auto transform duration-700 -translate-y-14 group-hover:scale-150 drop-shadow-2xl"
                />
            </div>
            <h2 className="text-lg font-semibold group-hover:text-white duration-500">{data.title}</h2>
            <p className="text-sm text-gray-600 group-hover:text-white duration-500">{data.description}</p>
            <div className="flex mt-2">
                <FaStar className="text-yellow-500 " />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
            </div>
            <button className="bg-[#FEA928] px-4 py-1 mt-5 rounded-full text-white group-hover:bg-white group-hover:text-black">Order Now</button>
        </div>
    ))}
</div>

            </div>
        </div>
    );
};

export default TopProducts;
