const ContentTwo = () => {
  return (
    <div>
      <div className="flex flex-col space-y-12 items-center justify-center bg-gray-50 w-full py-12">
        <div className="text-center space-y-3 ">
          <p className="text-xl font-medium text-amber-600">WHAT WE OFFER</p>
          <p className="text-4xl font-light text-gray-600">
            See What We Can Do for You
          </p>
        </div>
        <div className="container px-12  lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-4  lg:space-y-0 space-y-2 w-full">
          <div
            className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
            style={{
              backgroundImage: `url(/image_01-4.jpg)`,
            }}
          >
            <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
              <p className="text-white text-2xl font-medium p-8">
                AIRPORT TRANSFER
              </p>
            </div>
          </div>
          <div
            className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
            style={{
              backgroundImage: `url(/image_02-4.jpg)`,
            }}
          >
            <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
              <p className="text-white text-2xl font-medium p-8">
                WORLDWIDE TRANSPORTATION
              </p>
            </div>
          </div>
          <div
            className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
            style={{
              backgroundImage: `url(/image_02-4.jpg)`,
            }}
          >
            <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
              <p className="text-white text-2xl font-medium p-8">
                CORPORATE TRAVEL
              </p>
            </div>
          </div>
          <div
            className="col-span-1 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
            style={{
              backgroundImage: `url(/image_04-4.jpg)`,
            }}
          >
            <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
              <p className="text-white text-2xl font-medium p-8">
                CHARTER SERVICE
              </p>
            </div>
          </div>
          <div
            className="col-span-1 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
            style={{
              backgroundImage: `url(/image_05-2.jpg)`,
            }}
          >
            <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
              <p className="text-white text-2xl font-medium p-8">
                SPECIAL EVENT LIMOUSINE
              </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className=" text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
};
export default ContentTwo;
