import React, { useState } from 'react';
import './TourBooking.module.css'; // Import your CSS file for styling

const TourBooking = () => {
    const [activities, setActivities] = useState({
        arrivalDay: ['Check-in', 'Welcome Dinner'],
        departureDay: ['Breakfast', 'Check-out'],
        commonDays: [
            { day: 'Day 2', activities: ['Activity 1', 'Activity 2'], times: ['', ''] },
            { day: 'Day 3', activities: ['Activity 1', 'Activity 2'], times: ['', ''] },
            // Add more common days as needed
        ],
    });

    const handleTimeChange = (dayIndex, activityIndex, time) => {
        // Update the times array based on the time input
        const updatedActivities = [...activities.commonDays];
        updatedActivities[dayIndex].times[activityIndex] = time;
        setActivities({ ...activities, commonDays: updatedActivities });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the form data to your backend (Strapi)
        console.log(activities); // Just for demonstration, you should send this data to your backend
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Booking Form</h2>
            <fieldset>
                <legend>Day of Arrival</legend>
                {activities.arrivalDay.map((activity, index) => (
                    <div key={index}>
                        <label>
                            <input type="checkbox" disabled />
                            {activity}
                        </label>
                    </div>
                ))}
            </fieldset>
            {activities.commonDays.map((day, dayIndex) => (
                <fieldset key={day.day}>
                    <legend>{day.day}</legend>
                    {day.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="checkbox-container">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    name={`activity-${dayIndex}-${activityIndex}`}
                                    onChange={() => {}}
                                />
                                {activity}
                            </label>
                            <input
                                type="time"
                                value={day.times[activityIndex]}
                                onChange={(e) => handleTimeChange(dayIndex, activityIndex, e.target.value)}
                            />
                        </div>
                    ))}
                </fieldset>
            ))}
            <fieldset>
                <legend>Day of Departure</legend>
                {activities.departureDay.map((activity, index) => (
                    <div key={index}>
                        <label>
                            <input type="checkbox" />
                            {activity}
                        </label>
                    </div>
                ))}
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TourBooking;
