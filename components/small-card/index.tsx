import dayjs from "dayjs";
import { WeatherData } from "@/types/interface";
import Image from "next/image";

interface Props {
  item: WeatherData;
}

const SmallCard = ({ item }: Props) => (
  <div className="relative flex flex-1 flex-col items-center px-4 py-8 rounded-md bg-blue-50 shadow shadow-blue-100 mt-5 mx-2 hover:shadow-lg hover:shadow-blue-100 cursor-pointer first:ml-0 last:mr-0">
    <Image
      src="/images/rainy.svg"
      alt={`Logo`}
      width={100}
      height={50}
      className="absolute top-[-50px] left-0 right-0 m-auto"
    />
    <div className="mb-2 text-3xl font-semibold pt-8">
      {Math.ceil(item.tempmin)}
      <span className="mx-1 font-normal">/</span>
      {Math.ceil(item.tempmax)}
    </div>
    <p className="dark:text-gray-600">{item.conditions}</p>
    <h2 className="text-sm text-gray-400">
      {dayjs?.unix(item.datetimeEpoch)?.format("MMMM D, YYYY")}
    </h2>
  </div>
);

export default SmallCard;
