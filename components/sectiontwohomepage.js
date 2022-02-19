const ContentTwo = () => {
  return (
    <div>
      <div className="flex flex-col space-y-12 items-center justify-center bg-gray-50 w-full py-12">
        <div className="text-center space-y-3 ">
          <p className="text-xl font-medium text-main-3">რას გთავაზობთ?</p>
          <p className="text-4xl font-light text-main-3">
            იხილეთ ჩვენი შემოთავაზებები
          </p>
        </div>
        <div className="container px-12  lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-4  lg:space-y-0 space-y-2 w-full">
          <div
            className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
            style={{
              backgroundImage: `url(/8.jpg)`,
            }}
          >
            <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
              <p className="text-white text-2xl font-medium p-8">
                მიწოდება საქართველოს მაშტაბით
              </p>
            </div>
          </div>
          <div
            className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
            style={{
              backgroundImage: `url(/5.jpg)`,
            }}
          >
            <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
              <p className="text-white text-2xl font-medium p-8 ml-16">
                ხეზე ბეჭდვა
              </p>
            </div>
          </div>
          <div
            className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
            style={{
              backgroundImage: `url(/6.jpg)`,
            }}
          >
            <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full flex items-end justify-start">
              <p className="text-white text-2xl font-medium p-8">
              ლამაზი შეფუთვა
              </p>
            </div>
          </div>
          <div
            className="col-span-1 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
            style={{
              backgroundImage: `url(/7.jpg)`,
            }}
          >
            <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
              <p className="text-white text-2xl font-medium p-8">
                ვიდეო კადრის გაცოცხლება
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
                ვიდეო
              </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className=" text-white  bg-green hover:bg-main   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
        >
          CONTACT US
        </button>
        
      </div>
    </div>
  );
};
export default ContentTwo;
