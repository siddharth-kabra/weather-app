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
  }, []);
  const handleTabClick = (tab: string) => {
    dispatch(setActiveTab(tab));
  };
  return (
    <div data-controller="tabs" className="mx-6 mt-6">
      <ul className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
        {tabs?.map(tab => (
          <li
            key={tab.label}
            className={`mr-2 ${
              activeTab === tab.label ? 'bg-blue-100' : 'inactive'
            }`}
            onClick={() => handleTabClick(tab.label)}
          >
            <p className="inline-block text-blue-600 hover:text-blue-700 rounded-t-lg py-4 px-4 text-sm font-medium text-center">
              {tab.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabComponent;
