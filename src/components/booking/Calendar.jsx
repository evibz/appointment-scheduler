import React, { useState } from 'react';
import { format, addDays, startOfWeek, isSameDay } from 'date-fns';

const Calendar = ({ selectedDate, onDateSelect }) => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  
  const startDate = startOfWeek(currentWeek, { weekStartsOn: 1 });
  const weekDays = Array.from({ length: 7 }).map((_, i) => addDays(startDate, i));

  const nextWeek = () => setCurrentWeek(addDays(currentWeek, 7));
  const prevWeek = () => setCurrentWeek(addDays(currentWeek, -7));

  return (
    <div className="calendar bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevWeek} className="p-2 rounded-full hover:bg-gray-100">
          &larr;
        </button>
        <h3 className="font-semibold">{format(currentWeek, 'MMMM yyyy')}</h3>
        <button onClick={nextWeek} className="p-2 rounded-full hover:bg-gray-100">
          &rarr;
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-2">
        {weekDays.map(day => (
          <button
            key={day.toString()}
            onClick={() => onDateSelect(day)}
            className={`p-3 rounded-lg text-center ${
              isSameDay(day, selectedDate) 
                ? 'bg-blue-500 text-white' 
                : 'hover:bg-gray-100'
            }`}
          >
            <div className="text-sm">{format(day, 'EEE')}</div>
            <div className="text-lg font-medium">{format(day, 'd')}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;