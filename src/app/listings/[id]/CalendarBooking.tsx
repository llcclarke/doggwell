"use client";
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Mock data for services
type Service = {
  title: string;
  description: string;
  minimum_time: number;
  price: number;
};


type CalendarBookingProps = {
  businessId: number; // Define your prop types here
  services: Service[];  // Services specific to the business
};

const CalendarBooking: React.FC<CalendarBookingProps> = ({ businessId, services }) => {
  const [availableSlots, setAvailableSlots] = useState<{ [key: string]: string[] }>({});
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null); // To store selected time slot

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

  const [isDivVisible, setIsDivVisible] = useState(false);



  const handleBooking = () => {
    if (selectedService && selectedTimeSlot && selectedDate) {
      setIsDivVisible(true);
      // const bookingData = {
      //   businessId,
      //   service: selectedService.title,
      //   date: selectedDate.toISOString().split('T')[0],
      //   time: selectedTimeSlot,
      //   duration: Math.ceil(selectedService.minimum_time / 10) * 10,
      //   price: selectedService.price
      // };
      

    } else {
      alert('Please select a service and a time slot.');
    }
  };

  // Handle service selection
  

  return (
    <div className="calendar-module">
<div className="service-selector">
<h3 className="select-title">Select a Service</h3>
<select onChange={(e) => {
        const service = services.find(s => s.title === e.target.value);
        setSelectedService(service || null);
      }}>
        <option value="">Services</option>
        {services.map((service, index) => (
          <option key={index} value={service.title}>{service.title}</option>
        ))}
      </select>
      </div>
      <h2>Select a Date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        filterDate={(date) => !isDayDisabled(date)}
        placeholderText="Select a date"
        inline
      />


{selectedDate && (
        <div>
          <h3>Available Time Slots for {selectedService?.title || "selected service"}:</h3>
          {timeSlots.length > 0 ? (
            <ul>
              {timeSlots.map((time, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedTimeSlot(time)} // Select the time slot on click
                  style={{
                    cursor: 'pointer',
                    fontWeight: selectedTimeSlot === time ? 'bold' : 'normal'
                  }}
                >
                  {time} (Duration: {(Math.ceil((selectedService?.minimum_time || 1) / 10) * 10)  || 0} mins)
                </li>
              ))}
            </ul>
          ) : (
            <p>No available slots for this day.</p>
          )}
        </div>
      )}

      {selectedTimeSlot && selectedService && (
        <div className='timeslot'>
          <h4>Selected Time Slot: {selectedTimeSlot}</h4>
          <button onClick={handleBooking}>Book Now</button>
          {isDivVisible && (
        <div className='timeslot'>
          <h3>Thank you for booking!</h3>
          <p> We will see you at {selectedTimeSlot} on for a {selectedService.title}.</p>
        </div>
      )}
        </div>
      )}
    </div>
  );
};

export default CalendarBooking;
