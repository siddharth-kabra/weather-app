import { useAppSelector } from "@/libs/hooks";
import { FaLocationDot } from "react-icons/fa6";

const SelectedCity = () => {
  const selectedCity = useAppSelector(
    (state) => state.selectedCity.selectedCity
  );

  return (
    <div className="relative flex-shrink-0 mt-3">
      <div className="flex items-center gap-1">
        <FaLocationDot />
        <span>{selectedCity}</span>
      </div>
    </div>
  );
};

export default SelectedCity;
