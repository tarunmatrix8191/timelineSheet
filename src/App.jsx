import { useState, useEffect } from "react";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeZone, setTimeZone] = useState("UTC-0");
  const [checkboxData, setCheckboxData] = useState([]);

  const sampleData = [
    {
      day: {
        dayName: "Monday",
        hours: [
          "9:00am",
          "9:30am",
          "10:00am",
          "10:30am",
          "11:00am",
          "11:30am",
          "12:00pm",
          "12:30pm",
          "1:00pm",
          "1:30pm",
          "2:00pm",
          "2:30pm",
          "3:00pm",
          "3:30pm",
          "4:00pm",
          "4:30pm",
          "5:00pm",
          "5:30pm",
          "6:00pm",
          "6:30pm",
          "7:00pm",
          "7:30pm",
          "8:00pm",
          "8:30pm",
          "9:00pm",
          "9:30pm",
          "10:00pm",
          "10:30pm",
          "11:00pm",
        ],
      },
    },
    {
      day: {
        dayName: "Tuesday",
        hours: [
          "9:00am",
          "9:30am",
          "10:00am",
          "10:30am",
          "11:00am",
          "11:30am",
          "12:00pm",
          "12:30pm",
          "1:00pm",
          "1:30pm",
          "2:00pm",
          "2:30pm",
          "3:00pm",
          "3:30pm",
          "4:00pm",
          "4:30pm",
          "5:00pm",
          "5:30pm",
          "6:00pm",
          "6:30pm",
          "7:00pm",
          "7:30pm",
          "8:00pm",
          "8:30pm",
          "9:00pm",
          "9:30pm",
          "10:00pm",
          "10:30pm",
          "11:00pm",
        ],
      },
    },
    {
      day: {
        dayName: "Wednesday",
        hours: [
          "9:00am",
          "9:30am",
          "10:00am",
          "10:30am",
          "11:00am",
          "11:30am",
          "12:00pm",
          "12:30pm",
          "1:00pm",
          "1:30pm",
          "2:00pm",
          "2:30pm",
          "3:00pm",
          "3:30pm",
          "4:00pm",
          "4:30pm",
          "5:00pm",
          "5:30pm",
          "6:00pm",
          "6:30pm",
          "7:00pm",
          "7:30pm",
          "8:00pm",
          "8:30pm",
          "9:00pm",
          "9:30pm",
          "10:00pm",
          "10:30pm",
          "11:00pm",
        ],
      },
    },
    {
      day: {
        dayName: "Thursday",
        hours: [
          "9:00am",
          "9:30am",
          "10:00am",
          "10:30am",
          "11:00am",
          "11:30am",
          "12:00pm",
          "12:30pm",
          "1:00pm",
          "1:30pm",
          "2:00pm",
          "2:30pm",
          "3:00pm",
          "3:30pm",
          "4:00pm",
          "4:30pm",
          "5:00pm",
          "5:30pm",
          "6:00pm",
          "6:30pm",
          "7:00pm",
          "7:30pm",
          "8:00pm",
          "8:30pm",
          "9:00pm",
          "9:30pm",
          "10:00pm",
          "10:30pm",
          "11:00pm",
        ],
      },
    },
    {
      day: {
        dayName: "Friday",
        hours: [
          "9:00am",
          "9:30am",
          "10:00am",
          "10:30am",
          "11:00am",
          "11:30am",
          "12:00pm",
          "12:30pm",
          "1:00pm",
          "1:30pm",
          "2:00pm",
          "2:30pm",
          "3:00pm",
          "3:30pm",
          "4:00pm",
          "4:30pm",
          "5:00pm",
          "5:30pm",
          "6:00pm",
          "6:30pm",
          "7:00pm",
          "7:30pm",
          "8:00pm",
          "8:30pm",
          "9:00pm",
          "9:30pm",
          "10:00pm",
          "10:30pm",
          "11:00pm",
        ],
      },
    },
    {
      day: {
        dayName: "Saturday",
        hours: [
          "9:00am",
          "9:30am",
          "10:00am",
          "10:30am",
          "11:00am",
          "11:30am",
          "12:00pm",
          "12:30pm",
          "1:00pm",
          "1:30pm",
          "2:00pm",
          "2:30pm",
          "3:00pm",
          "3:30pm",
          "4:00pm",
          "4:30pm",
          "5:00pm",
          "5:30pm",
          "6:00pm",
          "6:30pm",
          "7:00pm",
          "7:30pm",
          "8:00pm",
          "8:30pm",
          "9:00pm",
          "9:30pm",
          "10:00pm",
          "10:30pm",
          "11:00pm",
        ],
      },
    },
    {
      day: {
        dayName: "Sunday",
        hours: [
          "9:00am",
          "9:30am",
          "10:00am",
          "10:30am",
          "11:00am",
          "11:30am",
          "12:00pm",
          "12:30pm",
          "1:00pm",
          "1:30pm",
          "2:00pm",
          "2:30pm",
          "3:00pm",
          "3:30pm",
          "4:00pm",
          "4:30pm",
          "5:00pm",
          "5:30pm",
          "6:00pm",
          "6:30pm",
          "7:00pm",
          "7:30pm",
          "8:00pm",
          "8:30pm",
          "9:00pm",
          "9:30pm",
          "10:00pm",
          "10:30pm",
          "11:00pm",
        ],
      },
    },
  ];

  useEffect(() => {
    // Simulated delay for fetching data (replace with actual fetch)
    setTimeout(() => {
      setCheckboxData(sampleData);
    }, 1000); // Adjust timeout as needed
  }, []);

  const handlePreviousWeek = () => {
    const prevDate = new Date(selectedDate);
    prevDate.setDate(prevDate.getDate() - 7);
    setSelectedDate(prevDate);
  };

  const handleNextWeek = () => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(nextDate.getDate() + 7);
    setSelectedDate(nextDate);
  };

  const handleTimeZoneChange = (e) => {
    setTimeZone(e.target.value);
    // Implement logic to display times in the selected timezone
  };

  const getWeekDays = () => {
    const days = [];
    const currDate = new Date(selectedDate);

    for (let i = 0; i < 7; i++) {
      const day = new Date(currDate);
      day.setDate(currDate.getDate() + i - currDate.getDay());
      days.push(day);
    }
    return days;
  };

  const weekDays = getWeekDays();

  return (
    <div className="container mx-auto p-4">
      {/* Button Container */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePreviousWeek}
          className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Previous
        </button>
        <div>{selectedDate.toDateString()}</div>
        <button
          onClick={handleNextWeek}
          className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>

      {/* Select Timeline Container */}
      <div className="mb-8">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Timeline
        </label>
        <select
          onChange={handleTimeZoneChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a Timing</option>
          <option value="UTC-0">UTC-0</option>
          <option value="UTC-1">UTC-1</option>
        </select>
      </div>

      {/* Render Checkboxes */}
      {/* <div className="flex flex-col">
        {checkboxData.map((data) => (
          <div key={data.Id} className="mb-2">
            <label className="inline-flex items-center">
              <input type="checkbox" />
              <span className="ml-2">{`${data.Date} - ${data.Time}`}</span>
            </label>
          </div>
        ))}
      </div> */}
      <table className="w-[100%] border-collapse">
        {/* head */}
        <thead className="bg-white sticky top-0 text-justify">
          <tr>
            <th className="p-2">Days</th>
            <th>Checkboxes</th>
          </tr>
        </thead>

        {/* body */}
        <tbody className="text-sm">
          {checkboxData?.map((day, index) => (
            <tr className={"  border text-start  text-sm "} key={index}>
              <td className="py-4 pl-4">{day?.day?.dayName}</td>
              <td className="flex flex-wrap items-center">
                {day?.day?.hours?.map((data) => (
                  <div key={data.Id} className="mt-2 mx-2">
                    <label className="inline-flex items-center ">
                      <input type="checkbox" />
                      <span className="ml-2">{data}</span>
                    </label>
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DatePicker;
