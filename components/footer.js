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
import Logo from "../public/VBlogo.jpg";
const Footer = (props) => {
  const some = props.lang.lang

  function FooterEn (){
    return(
      <div>
      <div className="bg-gray-100 py-16 px-16">
        <div className="container mx-auto flex place-items-center flex-col space-y-24 ">
          <div className="grid lg:grid-cols-3 gap-20 ">
            <div className="col-span-1 flex flex-row space-x-3">
              <FaMapMarkedAlt className="w-12 h-12 text-green  p-1" />
              <div className="space-y-2">
                <p className="text-main-3">Address</p>
                <p className="text-main-3 font-medium">
                (Petre) Kavtradzse street 32, Tbilisi 0186
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaPhoneAlt className="w-12 h-12 text-green  p-1" />
              <div className="space-y-2">
                <p className="text-main-3">Phone Number</p>
                <p className="text-main-3 font-medium">
                  (995) 551 009 054
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaRegClock className="w-12 h-12 text-green  p-1" />
              <div className="space-y-2">
                <p className="text-main-3">Working Hours</p>
                <p className="text-main-3 font-medium">
                  Mon-Sat: 07:00 - 17:00 Sunday: Closed
                </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="col-span-1 space-y-8">
              <Image src={Logo} alt="Logo" />

              <p className="text-main-3">
                Videbook is helping people bring to life
                their digital memories and to create
                unforgattable gifts.
              </p>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2 text-main-3">
                <p className="text-gray-600 font-medium">Our Services</p>
                <p className="border-solid border border-green  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-1 text-main-3">
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-green  p-1" />
                  <p className="text-gray-500">Collecting the Photos</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-green  p-1" />
                  <p className="text-gray-500">Video Editing</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-green  p-1" />
                  <p className="text-gray-500">Printing on Wood</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-green  p-1" />
                  <p className="text-gray-500">Delivery Anywhere</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-main-3 font-medium">VideoBook</p>
                <p className="border-solid border border-green  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-4 text-main-3">
                <div className="flex flex-row items-center space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-green  font-light" />
                  <p className="text-gray-500">
                    (Petre) Kavtaradze street 32, Tbilisi 0186
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaPhone className="w-6 h-6 text-green" />
                  <p className="text-gray-500">(995) 551 009 054</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaVoicemail className="w-6 h-6 text-green" />
                  <p className="text-gray-500"> onapetvaridze@gmail.com</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaCalendarWeek className="w-6 h-6 text-green" />
                  <p className="text-gray-500">Mon-Sat: 07:00 - 17:00</p>
                </div>
              </div>
            </div>
            {/* <div className="col-span-1 space-y-8">
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
            </div> */}
          </div>
        </div>
      </div>

      <div className="py-8 container mx-auto flex flex-row justify-center">
        
        <div className="flex flex-row space-x-3 text-green">
          <FaFacebook className="w-5 h-5 text-gray-500" />
          <FaInstagram className="w-5 h-5 text-gray-500" />
          <FaWhatsapp className="w-5 h-5 text-gray-500" />
        </div>
      </div>
    </div>
  
    )
  }

  function FooterGe (){
    return(
      <div>
      <div className="bg-gray-100 py-16 px-16">
        <div className="container mx-auto flex place-items-center flex-col space-y-24 ">
          <div className="grid lg:grid-cols-3 gap-20 ">
            <div className="col-span-1 flex flex-row space-x-3">
              <FaMapMarkedAlt className="w-12 h-12 text-green  p-1" />
              <div className="space-y-2">
                <p className="text-main-3">მისამართი</p>
                <p className="text-main-3 font-medium">
                (პეტრე) ქავთარაძის ქ. 32, თბილისი 0186
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaPhoneAlt className="w-12 h-12 text-green  p-1" />
              <div className="space-y-2">
                <p className="text-main-3">ტელეფონი</p>
                <p className="text-main-3 font-medium">
                  (995) 551 009 054
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaRegClock className="w-12 h-12 text-green  p-1" />
              <div className="space-y-2">
                <p className="text-main-3">სამუშაო საათები</p>
                <p className="text-main-3 font-medium">
                  ორშ-შაბ: 07:00 - 17:00 კვირა: დაკეტილია
                </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="col-span-1 space-y-8">
              <Image src={Logo} alt="Logo" />

              <p className="text-main-3">
                ვიდეობუქი უკვე რამდენიმე წელია ეხმარება
                ადამიანებს თავიანთი ციფრული მოგონებების
                გაცოცხლებაში და ულამაზესი საჩუქრის 
                დამზადებაში.
              </p>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2 text-main-3">
                <p className="text-gray-600 font-medium">ჩვენი სერვისები</p>
                <p className="border-solid border border-green  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-1 text-main-3">
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-green  p-1" />
                  <p className="text-gray-500">ფოტოების შეკრება</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-green  p-1" />
                  <p className="text-gray-500">ვიდეოს დამუშავება</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-green  p-1" />
                  <p className="text-gray-500">სურათის ხეზე ბეჭდვა</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-green  p-1" />
                  <p className="text-gray-500">მიწოდება ყველგან</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-main-3 font-medium">VideoBook</p>
                <p className="border-solid border border-green  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-4 text-main-3">
                <div className="flex flex-row items-center space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-green  font-light" />
                  <p className="text-gray-500">
                    (პეტრე) ქავთარაძის ქ. 32, თბილისი 0186
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaPhone className="w-6 h-6 text-green" />
                  <p className="text-gray-500">(995) 551 009 054</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaVoicemail className="w-6 h-6 text-green" />
                  <p className="text-gray-500"> onapetvaridze@gmail.com</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaCalendarWeek className="w-6 h-6 text-green" />
                  <p className="text-gray-500">ორშ-შაბ: 07:00 - 17:00</p>
                </div>
              </div>
            </div>
            {/* <div className="col-span-1 space-y-8">
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
            </div> */}
          </div>
        </div>
      </div>

      <div className="py-8 container mx-auto flex flex-row justify-center">
        
        <div className="flex flex-row space-x-3 text-green">
          <FaFacebook className="w-5 h-5 text-gray-500" />
          <FaInstagram className="w-5 h-5 text-gray-500" />
          <FaWhatsapp className="w-5 h-5 text-gray-500" />
        </div>
      </div>
    </div>
  
    )
  }

  return (
    <div>{some ? <FooterGe/> :<FooterEn/>}</div>
    
  );
};
export default Footer;
