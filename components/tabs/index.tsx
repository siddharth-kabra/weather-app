'use client';
import { useEffect } from 'react';
import { setActiveTab } from '@/libs/features/tabs';
import { useAppDispatch, useAppSelector } from '@/libs/hooks';

interface Props {
  tabs: { label: string; content: string }[];
}
const TabComponent = ({ tabs }: Props) => {
  const activeTab = useAppSelector(state => state.selectedTab.activeTab);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setActiveTab('Today'));
  }, [dispatch]);

  const handleTabClick = (tab: string) => {
    dispatch(setActiveTab(tab));
  };
  return (
    <div data-controller="tabs" className="">
      <ul className="flex rounded bg-grey w-full overflow-auto">
        {tabs?.map(tab => (
          <li
            key={tab.label}
            className={`mr-2 cursor-pointer  flex-[0_1_150px] rounded text-center text-blue-700 hover:bg-blue-700 hover:text-white transition ${
              activeTab === tab.label ? 'bg-blue-700 text-white' : 'inactive border border-blue-700'
            }`}
            onClick={() => handleTabClick(tab.label)}
          >
            <p className="inline-block rounded-t-lg py-2 text-sm font-medium text-center">
              {tab.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabComponent;
