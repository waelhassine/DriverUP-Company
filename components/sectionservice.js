import { FaEnvira, FaCodepen, FaBusAlt, FaDrawPolygon } from "react-icons/fa";
const Service = () => {
  return (
    <div className="container mx-auto lg:grid lg:grid-cols-8 gap-6 py-24 px-12 items-center place-content-center justify-center">
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaEnvira className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Safety First</p>
        <p className="text-gray-600">
          Experienced staff and professionally trained chauffeurs
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaCodepen className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Reasonable Rates</p>
        <p className="text-gray-600">
          We can offer you the right vehicle at the right price to fit your
          budget
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaBusAlt className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Largest Fleet</p>
        <p className="text-gray-600">
          We offer an extensive fleet of vehicles including sedans, limousines
          and coach buses
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaDrawPolygon className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Nationwide Service</p>
        <p className="text-gray-600">
          We provide our transportation services nationwide
        </p>
      </div>
    </div>
  );
};
export default Service;
