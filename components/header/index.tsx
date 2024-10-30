import SearchBarComponent from '../search-bar';
import { getUnitedKingdomCities } from '@/utils/api';

const HeaderComponent = async () => {
  const data = await getUnitedKingdomCities();
  return (
    <div className="">
      <div className="flex justify-between py-3 px-6 bg-blue-50 space-x-6 items-center w-full">
        <SearchBarComponent data={data[0]?.cities} />
      </div>
    </div>
  );
};

export default HeaderComponent;
