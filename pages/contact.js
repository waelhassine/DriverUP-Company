import MapSection from "../components/map";

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
};
const Contact = () => {
  return (
    <div>
      {/* Content */}
      <div>
        <MapSection location={location} zoomLevel={17} />
        <div className="lg:grid lg:grid-cols-2">
          <div className="col-span-1 p-24 flex flex-col space-y-8">
            <p className="text-2xl text-gray-600">
              AutoRide <br />
              Transportation Services
            </p>
            <p className="text-xl font-light text-gray-500">
              2507 Parker Boulevard
              <br /> Oakland, CA 76107
            </p>
            <p className="text-xl font-light text-gray-500">
              Phone: (620) 255 7005 <br />
              Toll Free: (825) 840 0440
            </p>
            <p className="text-xl font-light text-gray-500">
              Email: info@autoride.com
            </p>
          </div>
          <div className="col-span-1 bg-gray-100 p-24 flex flex-col space-y-8">
            <p className="text-2xl text-gray-600">Chairman of the Board</p>
            <p className="text-xl font-light text-gray-500">
              Mark Peter
              <br /> Phone: (620) 252 8021, Fax: (620) 252 8022 <br />
              Email: mark.peter@autoride.com
            </p>
            <p className="text-2xl text-gray-600">Director of Development</p>
            <p className="text-xl font-light text-gray-500">
              John Green
              <br /> Phone: (620) 252 8021, Fax: (620) 252 8022 <br />
              Email: mark.peter@autoride.com
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center  space-y-4 py-24">
          <p className="text-3xl text-center font-light text-gray-600">
            Private chauffeur, sightseeing tour? <br />
            Please fill out the form below with questions or comments
          </p>
          <div className=" container mx-auto px-16 lg:grid  lg:grid-cols-2 lg:grid-rows-3   w-full">
            <div className="col-span-1 row-span-1  p-4 px-8 border">
              <label htmlFor="email" className="block mb-2  text-gray-900 ">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="text-gray-900  block w-full p-2.5 "
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="col-span-1 row-span-3 p-4  border">
              <label forHtml="message" className="block mb-2  text-gray-900 ">
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-gray-900  "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="col-span-1 row-span-1  p-4 px-8 border">
              <label htmlFor="email" className="block mb-2  text-gray-900 ">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className=" text-gray-900 "
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="col-span-1 row-span-1 p-4 px-8 border">
              <label htmlFor="email" className="block mb-2  text-gray-900 ">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="  text-gray-900 "
                placeholder="name@flowbite.com"
                required
              />
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
      {/* End of Content */}
    </div>
  );
};
export default Contact;
