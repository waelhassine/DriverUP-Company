import {
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaRegClock,
  FaAngleRight,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneSquareAlt,
  FaVoicemail,
  FaCalendarWeek,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import Logo from "../public/logo.png";
const footer = () => {
  return (
    <div>
      <div className="bg-gray-100 py-16 px-16">
        <div className="container mx-auto flex flex-col space-y-24 ">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="col-span-1 flex flex-row space-x-3">
              <FaMapMarkedAlt className="w-12 h-12 text-amber-600  p-1" />
              <div className="space-y-2">
                <p className="text-gray-500">ADDRESS</p>
                <p className="text-gray-600 font-medium">
                  2507 PARKER BOULEVARD OAKLAND, CA 76107
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaPhoneAlt className="w-12 h-12 text-amber-600  p-1" />
              <div className="space-y-2">
                <p className="text-gray-500">PHONES</p>
                <p className="text-gray-600 font-medium">
                  BOOK A RIDE: (0481) 123 987 2411 OFFICE: (0481) 123 987 2412
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaRegClock className="w-12 h-12 text-amber-600  p-1" />
              <div className="space-y-2">
                <p className="text-gray-500">WORKING HOURS</p>
                <p className="text-gray-600 font-medium">
                  MON-SAT: 07:00 - 17:00 SUN: CLOSED
                </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="col-span-1 space-y-8">
              <Image src={Logo} alt="Logo" />

              <p className="text-gray-500">
                DriverUP has provided car services in Oakland area since 2005.
                What started as a small company has grown into a premier
                limousine and private transportation company.
              </p>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">OUR SERVICES</p>
                <p className="border-solid border border-amber-500  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Experiential Tours</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Wedding Limousine</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Corporate Travel</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Airport Transportation</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Nationwide Transportation</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">DriverUP</p>
                <p className="border-solid border border-amber-500  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row items-center space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-gray-500  font-light" />
                  <p className="text-gray-500">
                    2507 Parker Boulevard, Oakland
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaPhone className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500">(0481) 123 987 2411</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaPhoneSquareAlt className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500">(0481) 123 987 2412</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaVoicemail className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500"> contact@autoride.com</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaCalendarWeek className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500">Mon-Sat: 07:00 - 17:00</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">SUBSCRIBE</p>
                <p className="border-solid border border-amber-500  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="name@flowbite.com"
                  required
                />
                <button
                  type="submit"
                  className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-blue-300 font-medium   w-full sm:w-auto px-5 py-2.5 text-center "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 container mx-auto flex flex-row justify-between">
        <p>Copyright 2021 DriverUp Theme by Wael Hassine</p>
        <div className="flex flex-row space-x-3">
          <FaFacebook className="w-5 h-5 text-gray-500" />
          <FaInstagram className="w-5 h-5 text-gray-500" />
          <FaWhatsapp className="w-5 h-5 text-gray-500" />
        </div>
      </div>
    </div>
  );
};
export default footer;
