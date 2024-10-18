import { GrSecure } from 'react-icons/gr';
import winterImage from './../../assets/winter/winter.jpg';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const offers = [
  { icon: <GrSecure className='text-lg h-14 w-14 shadow-sm p-4 rounded-full bg-[#EDE9FE]' />, text: "Quality Products" },
  { icon: <IoFastFood className='text-lg h-14 w-14 shadow-sm p-4 rounded-full bg-[#FFEDD5]' />, text: "Fast Delivery" },
  { icon: <GiFoodTruck className='text-lg h-14 w-14 shadow-sm p-4 rounded-full bg-[#DCFCE7]' />, text: "Easy Payment Method" },
  { icon: <GiFoodTruck className='text-lg h-14 w-14 shadow-sm p-4 rounded-full bg-[#FEF9C3]' />, text: "Get Offers" },
];

const WinterSale = () => {
  return (
    <div className="min-h-[700px] flex justify-center items-center py-12 sm:py-0 bg-gray-50">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-center">
          {/* Image section */}
          <div data-aos='zoom-in' className='shadow-sm flex justify-center'>
            <img 
              src={winterImage} 
              alt="Promotional winter sale image" 
              className='max-w-[400px] h-[350px] w-full rounded-lg shadow-lg object-cover'
            />
          </div>
          {/* Detail section */}
          <div className='flex flex-col justify-start items-center gap-6 sm:pt-0'>
            <h1 className='text-4xl font-bold text-center text-blue-600'>Winter Sale Up to 50% Off</h1>
            <p className='text-base text-gray-600 tracking-wide text-center px-4'>
              Discover amazing deals on winter essentials. Don’t miss out on our exclusive offers!
            </p>
            <div className='flex flex-col gap-4 w-full'>
              {offers.map((offer, index) => (
                <div key={index} data-aos="fade-up" className='flex items-center justify-start gap-4 p-4 border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow'>
                  {offer.icon}
                  <p className='text-lg font-semibold text-gray-800'>{offer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinterSale;
