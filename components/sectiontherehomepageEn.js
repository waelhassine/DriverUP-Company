import Image from "next/image";
//import Image1 from "../public/img23.jpg";

const ContentThereEn = () => {
  return (
    <div className="flex flex-col space-y-12 items-center justify-center  w-full py-12">
      <div className="text-center space-y-3 ">
        <p className="text-xl font-medium text-main-3">Why us?</p>
        <p className="text-4xl font-light text-main-3">
        We can make your memories become alive.
        </p>
      </div>
      <div className="">
        {/* <Image src={Image1} alt="Picture of the author" /> */}
      </div>
    </div>
  );
};
export default ContentThereEn;
