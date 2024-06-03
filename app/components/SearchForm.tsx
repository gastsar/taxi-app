import { FaMapPin } from "react-icons/fa";

function SearchForm() {
  return (
    <form className="flex  gap-2 flex-col  ">
      <div className="flex flex-col gap-1 relative">
        <label
          htmlFor="depart"
          className="text-xs font-medium text-slate-700/70"
        >
          Départ
        </label>
        <input
          type="text"
          id="depart"
          className="border shadow-md border-b-2 pl-6 border-gray-300 rounded-md p-2"
        />
        <FaMapPin className="text-slate-700/70 absolute left-2 top-8" />
      </div>
      <div className="flex flex-col gap-1 relative">
        <label
          htmlFor="destination"
          className="text-xs font-medium text-slate-700/70"
        >
          Déstination
        </label>
        <input
          type="text"
          id="destination"
          className="border shadow-md border-b-2 pl-6 border-gray-300 rounded-md p-2"
        />
        <FaMapPin className="text-slate-700/70 absolute left-2 top-8" />
      </div>
    </form>
  );
}

export default SearchForm;
