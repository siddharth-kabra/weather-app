import SearchBarComponent from '../search-bar';
import { getUnitedKingdomCities } from '@/utils/api';

const HeaderComponent = async () => {
  const data = await getUnitedKingdomCities();
  return (
    <div className="flex-1">
      <div className="flex justify-between py-3 px-6 bg-gray-50 border-b space-x-6 items-center">
        <div className="w-full">
          <SearchBarComponent data={data} />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
