import Image from "next/image";
import Image1 from "../public/3.jpg";
import Image2 from "../public/image_06.jpg";
import Image3 from "../public/image_07.jpg";
import { FaCheck, FaMale, FaGlobe } from "react-icons/fa";
import About from "../components/about";

const AboutUs = (props) => {
  return (
    <div>
      <About lang={props.lang} />
    </div>
  );
};
export default AboutUs;
