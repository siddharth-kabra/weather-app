import dayjs from 'dayjs';
import { WeatherData } from '@/types/interface';
import WeatherIcon from '@/utils/elements';

interface Props {
  item: WeatherData;
}

const SmallCard = ({ item }: Props) => (
  <div className="relative flex md:flex-1 flex-col items-center px-4 py-8 rounded-md bg-blue-50 shadow shadow-blue-100 mt-5 mx-2 hover:shadow-lg hover:shadow-blue-100 cursor-pointer md:first:ml-0 md:last:mr-0">
    <WeatherIcon weatherCondition={item?.icon} />
    <div className="mb-2 text-3xl font-semibold pt-8">
      {Math.ceil(item.tempmin)}
      <span className="mx-1 font-normal">/</span>
      {Math.ceil(item.tempmax)}°
    </div>
    <p className="dark:text-gray-600 text-center">{item.conditions}</p>
    <h2 className="text-sm text-gray-400 text-center">
      {dayjs?.unix(item.datetimeEpoch)?.format('MMMM D, YYYY')}
    </h2>
  </div>
);

export default SmallCard;
