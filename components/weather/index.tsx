'use client';
import { useAppSelector } from '@/libs/hooks';

const WeatherComponent = () => {
  const selectedCity = useAppSelector(state => state.selectedCity.selectedCity);
  console.log(selectedCity);
  return (
    <main className="p-5">
      <div
        data-controller="tabs"
        data-tabs-index-value="0"
        className="mx-6 mt-6"
      >
        <ul className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
          <li
            className="mr-2 bg-gray-100"
            data-action="click->tabs#change"
            data-tabs-target="tab"
          >
            <a
              href="#"
              className="inline-block text-blue-600 hover:text-blue-700 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center"
            >
              Today
            </a>
          </li>
          <li
            className="mr-2 inactive"
            data-action="click->tabs#change"
            data-tabs-target="tab"
          >
            <a
              href="#"
              className="inline-block text-blue-600  hover:text-blue-700 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center"
            >
              Tomorrow
            </a>
          </li>
          <li
            className="mr-2 inactive"
            data-action="click->tabs#change"
            data-tabs-target="tab"
          >
            <a
              href="#"
              className="inline-block text-blue-600  hover:text-blue-700 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center"
            >
              Next 5 Days
            </a>
          </li>
        </ul>
        <div className="hidden px-1 py-2" data-tabs-target="panel">
          <h3 className="text-lg font-semibold">Today</h3>
        </div>
        <div className="hidden px-1 py-2" data-tabs-target="panel">
          <h3 className="text-lg font-semibold">Tomorrow</h3>
        </div>
        <div className="hidden px-1 py-2" data-tabs-target="panel">
          <h3 className="text-lg font-semibold">Next 5 Days </h3>
        </div>
      </div>
    </main>
  );
};

export default WeatherComponent;
