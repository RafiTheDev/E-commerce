import { data } from 'autoprefixer';
import img1 from '../../assets/Women/1.png';
import img2 from '../../assets/Women/2..jpg'; // Fixed file extension typo
import img3 from '../../assets/Women/3.jpg';
import img4 from '../../assets/Women/4.jpg';
import { FaStar } from 'react-icons/fa6';

const productsData = [
    {
        id: 1,
        img: img1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "white",
        aosDelay: "0",
    },
    {
        id: 2,
        img: img2,
        title: "Women Western",
        rating: 4.5,
        color: "Red",
        aosDelay: "200",
    },
    {
        id: 3,
        img: img3,
        title: "Goggles",
        rating: 4.7,
        color: "brown",
        aosDelay: "400",
    },
    {
        id: 4,
        img: img4,
        title: "Printed T-Shirt",
        rating: 4.4,
        color: "Yellow",
        aosDelay: "600",
    },
    {
        id: 5,
        img: img2, // Changed Img2 to img2
        title: "Fashion T-Shirt",
        rating: 4.5,
        color: "Pink",
        aosDelay: "800",
    },
];

const Products = () => {
    return (
        <div className="mt-14 mb-12">
            <div className="container">
                {/* Header section */}
                <div 
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                
                className="text-center mb-10 max-w-[600px] mx-auto">
                    <p className="text-[#FEBC58] font-semibold text-sm">Top Selling Products for you</p>
                    <h1 className="text-[#000000] font-bold text-3xl">Products</h1>
                    <p className="text-xs text-[#A3A9B5]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda labore quo eligendi repellat itaque!</p>
                </div>

                {/* Body section */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                        {/* Card section */}
                        {productsData.map((data) => (
                            <div 
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={data.id} className="space-y-3">
                                <img 
                                    src={data.img} 
                                    alt={data.title} // Added meaningful alt text
                                    className='h-[220px] w-[150px] object-cover rounded-md'
                                />
                                <h3 className="mt-2 font-semibold">{data.title}</h3>
                                <p className='text-sm text-gray-600'>{data.color}</p>
                                <div className="flex items-center gap-1">
                                    <FaStar className='text-yellow-400'/>
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className='flex justify-center items-center py-10'>
            <button className='bg-[#FEA928] px-3 py-1 rounded-md text-white'>View All Button</button>
            </div>
        </div>
    );
};

export default Products;
