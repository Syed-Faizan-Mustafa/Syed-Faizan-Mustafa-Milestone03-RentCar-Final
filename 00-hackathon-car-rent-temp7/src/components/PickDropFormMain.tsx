"use client";

import { useState } from "react";

export default function PickDropFormMain() {
  const [pickUpDate, setPickUpDate] = useState("20 July 2022");
  const [pickUpTime, setPickUpTime] = useState("07.00");
  const [dropOffDate, setDropOffDate] = useState("21 July 2022");
  const [dropOffTime, setDropOffTime] = useState("01.00");

  return (
    <div>
      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Pick-Up Section */}
        <div className="flex-1 max-w-md order-1">
          <SectionHeader title="Pick - Up" color="bg-blue-500" />
          <div className="flex gap-4 mt-4">
            <DropdownField label="Locations" value="Kota Semarang" />
            <DropdownField label="Date" value="20 July 2022" />
            <DropdownField label="Time" value="07.00" />
          </div>
        </div>

        {/* Swap Icon */}
        <div className="md:self-center w-[60px] h-[60px] bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center order-2">
          <img src="/Swap.png" alt="Switch" className="w-[24px] h-[24px] shadow-lg" />
        </div>

        {/* Drop-Off Section */}
        <div className="flex-1 max-w-md order-3">
          <SectionHeader title="Drop - Off" color="bg-blue-300" />
          <div className="flex gap-4 mt-4">
            <DropdownField label="Locations" value="Kota Semarang"/>
            <DropdownField label="Date" value="21 July 2022" />
            <DropdownField label="Time" value="01.00" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title, color }: { title: string; color: string }) {
  return (
    <div className="flex items-center mb-2">
      <span className={`w-3 h-3 ${color} rounded-full mr-2`}></span>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
}

function DropdownField({
  label,
  value,
  onChange,
  options = [],
  disabled,
}: {
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: string[];
  disabled?: boolean;
}) {
  return (
    <div className="relative w-full">
      <label className="block text-sm font-bold text-black">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="w-full mt-1 py-2 px-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={value}>{value}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
