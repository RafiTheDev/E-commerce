import Banner from "../../assets/Subscribe/orange-pattern.jpg";
import { useState } from 'react';

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter a valid email address.");
      return;
    }
    setMessage(`Thank you! We'll notify you at ${email} about new products.`);
    setEmail('');
    setError('');
  };

  return (
    <div
      data-aos="zoom-in"
      className="mb-20 relative"
      style={BannerImg}
    >
      {/* Lighter overlay for better visibility */}
      <div className="absolute inset-0 bg-white opacity-30"></div>
      <div className="container backdrop-blur-sm py-10 relative z-10">
        <div className="space-y-6 max-w-xl mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl font-semibold text-gray-900 animate-bounce">
            Get Notified About New Products
          </h1>
          <p className="text-md sm:text-lg text-gray-700">
            Sign up to receive updates on our latest products and exclusive offers!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              data-aos="fade-up"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring focus:ring-blue-500 transition"
            />
            <button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition duration-200 transform hover:scale-105"
            >
              Notify Me
            </button>
          </form>
          {message && <p className="mt-4 text-green-500">{message}</p>}
          {error && <p className="mt-4 text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
