import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
const FooterTwo = () => {
  return (
    <div className="py-8 container mx-auto flex flex-row justify-between">
      <p>Copyright 2021 DriverUp Theme by Wael Hassine</p>
      <div className="flex flex-row space-x-3">
        <FaFacebook className="w-5 h-5 text-gray-500" />
        <FaInstagram className="w-5 h-5 text-gray-500" />
        <FaWhatsapp className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  );
};
export default FooterTwo;
