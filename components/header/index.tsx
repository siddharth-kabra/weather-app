import SearchBarComponent from '../search-bar';
import { getUnitedKingdomCities } from '@/utils/api';

const HeaderComponent = async () => {
  const data = await getUnitedKingdomCities();
  return (
    <div className="flex-1">
      <div className="flex justify-between py-3 px-6 bg-blue-50 space-x-6 items-center">
        <div className="w-full">
          <SearchBarComponent data={data[0]?.cities} />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
