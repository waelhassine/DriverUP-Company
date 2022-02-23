import Image from "next/image";
import Image1 from "../public/3.jpg";
import Image2 from "../public/image_06.jpg";
import Image3 from "../public/image_07.jpg";
import { FaCheck, FaMale, FaGlobe } from "react-icons/fa";

const About = (props) => {
  const lang = props.lang;

  function AboutUsEn() {
    return (
      <div>
        <div
          className="bg-no-repeat bg-cover bg-center  h-72"
          style={{
            backgroundImage: `url(/4.jpg)`,
          }}
        >
          <div className="bg-black   bg-opacity-50 w-full h-full  flex items-center justify-center">
            <p className="text-white text-5xl font-light  p-8">About Us</p>
          </div>
        </div>
        <div className="container mx-auto lg:grid lg:grid-cols-2 gap-16 py-24 px-16">
          <div className="col-span-1 space-y-8 text-gray-600">
            <p className="text-xl font-medium">
              We can relive any video, be it precious memories If a shot from a
              favorite movie.
            </p>
            <p className="text-gray-500">
              We can also create any image you send High quality illustrated
              wooden souvenir
            </p>
            <div className="space-y-3 text-gray-500">
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p>Professionally Video Editing</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p>Full-Service</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p>Global Delivery</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 ">
            <Image src={Image1} alt="Picture of the author" height="1200px" />
          </div>
        </div>
      </div>
    );
  }

  function AboutUsGe() {
    return (
      <div>
        <div
          className="bg-no-repeat bg-cover bg-center  h-72"
          style={{
            backgroundImage: `url(/4.jpg)`,
          }}
        >
          <div className="bg-black   bg-opacity-50 w-full h-full  flex items-center justify-center">
            <p className="text-white text-5xl font-light  p-8">ჩვენს შესახებ</p>
          </div>
        </div>
        <div className="container mx-auto lg:grid lg:grid-cols-2 gap-16 py-24 px-16">
          <div className="col-span-1 space-y-8 text-gray-600">
            <p className="text-xl font-medium">
              ჩვენ შეგვიძლია გავაცოცხლოთ ნებისმიერი ვიდეო, იქნება ეს ძვირფასი
              მოგონებები თუ საყვარელი ფილმიდან კადრი.
            </p>
            <p className="text-gray-500">
              ასევე შეგვიძლია თქვენს მიერს გამოგზავნილი ნებისმიერი სურათით
              შევქმნათ უმაღლესი ხარისხის ილუსტრირებული ხის სუვენირი.
            </p>
            <div className="space-y-3 text-gray-500">
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p>პროფესიული ვიდეო დამუშავება</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p>სრული სერვისი</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p>მიწოდება მსოფლიოს მაშტაბით</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 ">
            <Image src={Image1} alt="Picture of the author" height="1200px" />
          </div>
        </div>
      </div>
    );
  }

  return <div>{lang ? <AboutUsGe /> : <AboutUsEn />}</div>;
};
export default About;
