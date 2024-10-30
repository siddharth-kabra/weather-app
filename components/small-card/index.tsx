import dayjs from 'dayjs';
import { WeatherData } from '@/types/interface';

interface Props {
  item: WeatherData;
}

const SmallCard = ({ item }: Props) => (
  <div className="flex flex-col items-center px-4 py-8 rounded-md w-60 sm:px-12 bg-white shadow mt-5 mx-2">
    <div className="text-center">
      <h2 className="text-base font-semibold">
        {dayjs?.unix(item.datetimeEpoch)?.format('MMMM D, YYYY')}
      </h2>
    </div>
    {/* <Image
            src={item.imageSrc}
            alt={`Logo ${item.name}`}
            width={200}
            height={100}
          /> */}
    <div className="mb-2 text-3xl font-semibold">
      {Math.ceil(item.tempmin)}
      <span className="mx-1 font-normal">/</span>
      {Math.ceil(item.tempmax)}
    </div>
    <p className="dark:text-gray-600">{item.conditions}</p>
  </div>
);

export default SmallCard;
