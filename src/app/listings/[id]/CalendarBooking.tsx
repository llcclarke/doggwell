"use client";
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Mock data for services
const servicesData = [
  { id: 1, title: "Service A", duration: 30, price: 50 },
  { id: 2, title: "Service B", duration: 45, price: 75 },
];
type CalendarBookingProps = {
  businessId: number; // Define your prop types here
};

const CalendarBooking: React.FC<CalendarBookingProps> = ({ businessId }) => {
  const [availableSlots, setAvailableSlots] = useState<{ [key: string]: string[] }>({});
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [selectedService, setSelectedService] = useState<{ id: number; title: string; duration: number; price: number } | null>(null);
  
  // Fetch available slots from static JSON file
  useEffect(() => {
    const fetchAvailableSlots = async () => {
      const response = {
        "2024-10-10": ["09:00", "10:30", "12:00"],
        "2024-10-11": ["11:00", "14:00", "15:30"],
        "2024-10-12": []
      };
      setAvailableSlots(response);
    };
    fetchAvailableSlots();
  }, []);

  // Disable days with no available slots
  const isDayDisabled = (date: Date) => {
    const formattedDate = date.toISOString().split('T')[0];
    return !(formattedDate in availableSlots) || availableSlots[formattedDate].length === 0;
  };

  // When a date is selected, fetch time slots for that day
  const handleDateChange = (date: Date | null) => {
    console.log(businessId)

    setSelectedDate(date);
    if (date) {
      const formattedDate = date.toISOString().split('T')[0];
      setTimeSlots(availableSlots[formattedDate] || []);
    }
  };

  // Handle service selection
  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const serviceId = Number(event.target.value);
    const selected = servicesData.find(service => service.id === serviceId) || null;
    setSelectedService(selected);
  };

  return (
    <div className="calendar-module">

<h3>Select a Service</h3>
      <select onChange={handleServiceChange}>
        <option value="">Select a service</option>
        {servicesData.map(service => (
          <option key={service.id} value={service.id}>
            {service.title} - {service.price}$
          </option>
        ))}
      </select>
      <h2>Select a Date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        filterDate={(date) => !isDayDisabled(date)}
        placeholderText="Select a date"
        inline
      />

      {selectedDate && selectedService && (
        <div>
          <h3>Available Time Slots:</h3>
          {timeSlots.length > 0 ? (
            <ul>
              {timeSlots.map((time, index) => (
                <li key={index}>
                  {time} (Duration: {selectedService.duration} mins)
                </li>
              ))}
            </ul>
          ) : (
            <p>No available slots for this day.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CalendarBooking;
