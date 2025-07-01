import React from 'react';

const TimeSlots = ({ slots, selectedSlot, onSlotSelect }) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3">Available Times</h3>
      <div className="grid grid-cols-3 gap-3">
        {slots.map((slot) => (
          <button
            key={slot}
            onClick={() => onSlotSelect(slot)}
            className={`py-2 px-3 rounded-lg border ${
              selectedSlot === slot
                ? 'bg-blue-500 text-white border-blue-500'
                : 'border-gray-300 hover:bg-gray-50'
            }`}
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlots;