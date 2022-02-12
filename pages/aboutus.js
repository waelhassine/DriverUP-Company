import Image from "next/image";
import Image1 from "../public/image_01-6.jpg";
import Image2 from "../public/image_06.jpg";
import Image3 from "../public/image_07.jpg";
import { FaCheck, FaMale, FaGlobe } from "react-icons/fa";
const AboutUs = () => {
  return (
    <div>
      {/* Content */}
      <div>
        <div
          className="bg-no-repeat bg-cover bg-center  h-72"
          style={{
            backgroundImage: `url(/heading_02.jpg)`,
          }}
        >
          <div className="bg-black   bg-opacity-50 w-full h-full  flex items-center justify-center">
            <p className="text-white text-5xl font-light  p-8">About Us</p>
          </div>
        </div>
        <div className="container mx-auto lg:grid lg:grid-cols-2 gap-16 py-24 px-16">
          <div className="col-span-1 space-y-8 text-gray-600">
            <p className="text-xl font-medium">
              For over a dozen years we have been providing the best transport
              services. We offer bus, passenger transport and limousine rental.
            </p>
            <p className="text-gray-500">
              We address our offer to all who want to travel in comfortable
              conditions. We have over 120 top-class vehicles, so our customers
              can be assured of comfort and safety.
            </p>
            <div className="space-y-3 text-gray-500">
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p>Professionally Trained Chauffeurs</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p>24/7 Full-Service Transportation</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p>Global network of Transportation Partners</p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <Image src={Image1} alt="Picture of the author" />
          </div>
        </div>
        <div className="bg-gray-100 flex items-center justify-center text-center">
          <div className="container mx-auto py-24 px-16 space-y-2">
            <p className="text-xl font-medium text-amber-600">
              COMMITMENT TO WORK
            </p>
            <p className="text-4xl font-light text-gray-600">Our Competences</p>
            <div className="grid lg:grid-cols-2 gap-12 py-8">
              <div className="col-span-1 bg-white space-y-3">
                <Image src={Image2} alt="Picture of the author" />

                <div className="space-y-5 p-8">
                  <p className="text-xl font-medium text-amber-600">
                    PROFESSIONALISM
                  </p>
                  <p className="text-gray-500">
                    Our experienced staff and highly professional chauffeurs are
                    committed to providing safe, reliable transportation,
                    exceptional customer service, and consistent pricing. We
                    provide in-house dispatchers who support our clients.
                  </p>
                </div>
              </div>
              <div className="col-span-1 bg-white space-y-3">
                <Image src={Image3} alt="Picture of the author" />

                <div className="space-y-5 p-8">
                  <p className="text-xl font-medium text-amber-600">
                    COMMITMENT
                  </p>
                  <p className="text-gray-500">
                    Our office is open twenty four hours a day, seven days a
                    week. You name the occasion – we’ll make the ride flawless.
                    Whether you require a chauffeured vehicle for business or
                    pleasure, close to home or in a new city we are always
                    there.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center justify-center text-center py-24  space-y-2">
          <p className="text-xl font-medium text-amber-600">OUR FLEET</p>
          <p className="text-4xl font-light text-gray-600">Browse Our Limos</p>
          <div className="lg:grid lg:grid-cols-3 gap-12 px-4 py-24 w-full">
            <div className="col-span-1 flex flex-col space-y-3 border border-gray-300">
              <div
                className="bg-no-repeat bg-cover bg-center w-full h-64"
                style={{
                  backgroundImage: `url(/image_10-1-768x512.jpg)`,
                }}
              >
                <div className="bg-black  bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-xl  p-8">Audi A8</p>
                </div>
              </div>
              <div className="py-1 flex flex-row space-x-2 items-center justify-center">
                <FaMale className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">4</p>
                <FaGlobe className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">4</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col space-y-3 border border-gray-300">
              <div
                className="bg-no-repeat bg-cover bg-center w-full h-64"
                style={{
                  backgroundImage: `url(/image_10-1-768x512.jpg)`,
                }}
              >
                <div className="bg-black  bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-xl  p-8">Audi A8</p>
                </div>
              </div>
              <div className="py-1 flex flex-row space-x-2 items-center justify-center">
                <FaMale className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">4</p>
                <FaGlobe className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">4</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col space-y-3 border border-gray-300">
              <div
                className="bg-no-repeat bg-cover bg-center w-full h-64"
                style={{
                  backgroundImage: `url(/image_10-1-768x512.jpg)`,
                }}
              >
                <div className="bg-black  bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-xl  p-8">Audi A8</p>
                </div>
              </div>
              <div className="py-1 flex flex-row space-x-2 items-center justify-center">
                <FaMale className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">4</p>
                <FaGlobe className="w-5 h-5 text-gray-500" />
                <p className="border rounded-full p-2 text-gray-500">4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Content */}
    </div>
  );
};
export default AboutUs;
