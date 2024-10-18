import FooterImg from '../../assets/Footer/footer-pattern.jpg';
import { FaFacebookF, FaInstagram, FaMobileAlt, FaLinkedin, FaLocationArrow } from 'react-icons/fa';
import logo from '../../assets/logoo.png';

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <div 
      className="relative text-white" 
      style={{ backgroundImage: `url(${FooterImg})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
    >
      <div className="container mx-auto">
        <div data-aos="zoom-in" 
        className="grid md:grid-cols-3 pb-10 pt-5 h-[450px] mx-auto px-32">
          {/* Company Details */}
          <div className="py-8 px-4">
            <button><h1 className="sm:text-3xl text-xl font-bold mb-3 flex items-center gap-3">
              <img src={logo} alt="Shopsy Logo" className="max-w-[50px]" />
              Shopsy
            </h1></button>
            
            <p className="text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in beatae ea recusandae blanditiis veritatis.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h2 className="sm:text-xl text-xl font-bold mb-3">Important Links</h2>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    key={link.title}
                  >
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4">
              <h2 className="sm:text-xl text-xl font-bold mb-3">Links</h2>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    key={link.title}
                  >
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="py-8 px-4">
              <h2 className="sm:text-xl text-xl font-bold mb-3">Follow Us</h2>
              <div className="flex items-center gap-3 mb-4">
                <a href="#" className="hover:text-primary duration-300"><FaInstagram className="text-3xl" /></a>
                <a href="#" className="hover:text-primary duration-300"><FaFacebookF className="text-3xl" /></a>
                <a href="#" className="hover:text-primary duration-300"><FaLinkedin className="text-3xl" /></a>
              </div>
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Noida, Uttar Pradesh</p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <FaMobileAlt />
                <p>+91 123456789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
