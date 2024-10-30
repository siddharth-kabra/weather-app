"use client";
import { useEffect } from "react";
import { setActiveTab } from "@/libs/features/tabs";
import { useAppDispatch, useAppSelector } from "@/libs/hooks";

interface Props {
  tabs: { label: string; content: string }[];
}
const TabComponent = ({ tabs }: Props) => {
  const activeTab = useAppSelector((state) => state.selectedTab.activeTab);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setActiveTab("Today"));
  }, [dispatch]);

  const handleTabClick = (tab: string) => {
    dispatch(setActiveTab(tab));
  };
  return (
    <div data-controller="tabs" className="mx-6">
      <ul className="flex flex-wrap rounded">
        {tabs?.map((tab) => (
          <li
            key={tab.label}
            className={`mr-2 cursor-pointer  flex-1 rounded-full text-center ${
              activeTab === tab.label ? "bg-blue-50" : "inactive"
            }`}
            onClick={() => handleTabClick(tab.label)}
          >
            <p className="inline-block text-blue-700 hover:text-blue-700 rounded-t-lg py-2 text-sm font-medium text-center">
              {tab.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabComponent;
