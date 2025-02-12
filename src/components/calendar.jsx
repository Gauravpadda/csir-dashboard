import React, { useState, useEffect, useRef } from "react";
import { FiCalendar } from "react-icons/fi"; // Using Heroicons for the calendar icon

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const datepickerRef = useRef(null);

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysArray = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const day = new Date(year, month, i).toLocaleDateString("en-US");
      let className =
        "flex h-10 w-10 items-center justify-center rounded-full cursor-pointer text-black transition-all duration-200 hover:bg-gray-200";

      if (selectedStartDate === day) className += " bg-blue-500 text-white";
      if (selectedEndDate === day) className += " bg-red-500 text-white";
      if (
        selectedStartDate &&
        selectedEndDate &&
        new Date(day) > new Date(selectedStartDate) &&
        new Date(day) < new Date(selectedEndDate)
      ) {
        className += " bg-blue-300";
      }

      daysArray.push(
        <div
          key={i}
          className={className}
          onClick={() => handleDayClick(day)}
          role="button"
          aria-label={`Select date ${day}`}
        >
          {i}
        </div>
      );
    }

    return daysArray;
  };

  const handleDayClick = (selectedDay) => {
    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      setSelectedStartDate(selectedDay);
      setSelectedEndDate(null);
    } else {
      if (new Date(selectedDay) < new Date(selectedStartDate)) {
        setSelectedEndDate(selectedStartDate);
        setSelectedStartDate(selectedDay);
      } else {
        setSelectedEndDate(selectedDay);
      }
    }
  };

  const updateInput = () =>
    selectedStartDate && selectedEndDate
      ? `${selectedStartDate} - ${selectedEndDate}`
      : selectedStartDate || "";

  const toggleDatepicker = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (datepickerRef.current && !datepickerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  return (
    <div
      className="relative w-96 bg-[#c3bef7] rounded-lg border shadow-md transition-all duration-300 h-full"
      ref={datepickerRef}
    >
      {/* Input Field with Icon */}
      <div className="relative p-1 h-fit">
        <input
          type="text"
          placeholder="Select date range"
          className="w-full p-3 h-10 border rounded-lg cursor-pointer text-black bg-[#eeeeff] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
          value={updateInput()}
          onClick={toggleDatepicker}
          readOnly
          aria-label="Date picker input"
        />
        {/* Calendar Icon */}
        <FiCalendar
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 cursor-pointer"
          onClick={toggleDatepicker}
        />
      </div>

      {/* Calendar Popup */}
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full max-w-[400px] bg-[#c3bef7] shadow-lg rounded-lg border p-4 text-black transition-opacity duration-300 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-medium">
              {currentDate.toLocaleString("default", { month: "long" })}{" "}
              {currentDate.getFullYear()}
            </p>
            <div className="flex space-x-2">
              <button
                onClick={() =>
                  setCurrentDate(
                    new Date(currentDate.setMonth(currentDate.getMonth() - 1))
                  )
                }
                className="px-2 py-1 border rounded text-black hover:bg-gray-200 transition-all"
                aria-label="Previous month"
              >
                {"<"}
              </button>
              <button
                onClick={() =>
                  setCurrentDate(
                    new Date(currentDate.setMonth(currentDate.getMonth() + 1))
                  )
                }
                className="px-2 py-1 border rounded text-black hover:bg-gray-200 transition-all"
                aria-label="Next month"
              >
                {">"}
              </button>
            </div>
          </div>

          {/* Days of the Week */}
          <div className="grid grid-cols-7 text-center text-gray-700 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="font-semibold">
                {day}
              </div>
            ))}
          </div>

          {/* Dates Grid */}
          <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
        </div>
      )}
    </div>
  );
}
