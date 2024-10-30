import { useAppSelector } from "@/libs/hooks";
import { FaLocationDot } from "react-icons/fa6";

const SelectedCity = () => {
  const selectedCity = useAppSelector(
    (state) => state.selectedCity.selectedCity
  );

  return (
    <div className="relative flex-shrink-0 mt-3 bg-blue-700 px-5 py-3 rounded-full">
      <div className="flex items-center gap-1 text-white">
        <FaLocationDot />
        <span className="tracking-wide">{selectedCity}</span>
      </div>
    </div>
  );
};

export default SelectedCity;
