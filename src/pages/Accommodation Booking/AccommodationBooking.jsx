// src/components/BookingForm.jsx
import { useState } from 'react';
import "./AccommodationBooking.module.css";
import axios from 'axios';
import Header from "../../components/Blue Header/BlueHeader";
import Footer from '../../components/Footer/Footer';
import style from "../Flight Booking/FlightBooking.module.css";

const Accommodation = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        address: '',
        checkIn: '',
        checkOut: '',
        adults: '',
        children: '',
        purpose: '',
        otherPurpose: '',
        roomType: '',
        otherRoomType: '',
        bedPreference: '',
        viewPreference: '',
        smokingPreference: '',
        accessibility: '',
        accessibilitySpecification: '',
        budget: '',
        otherBudget: '',
        paymentMethod: '',
        amenities: [],
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                amenities: checked
                    ? [...prevData.amenities, value]
                    : prevData.amenities.filter((amenity) => amenity !== value),
            }));
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

const handleSubmit = async (e) => {
    e.preventDefault();

};

    return (
      <section className={style.page}>
          <Header/>
      <form className="form-container" id="bookingForm" >
        <h2>Accommodation Booking Form</h2>
  
        <div className={style.fieldContainer}>
          <h3>1. Personal Information</h3>
          <label>Full Name:</label>
          <input type="text" name="full_name" />
  
          <label>Email Address:</label>
          <input type="email" name="email" />
  
          <label>Contact Number:</label>
          <input type="tel" name="contact_number" />
  
          <label>Address:</label>
          <input type="text" name="address" />
        </div>
  
        <div className={style.fieldContainer}>
          <h3>2. Stay Details</h3>
          <label>Check-in Date:</label>
          <input type="date" name="check_in" />
  
          <label>Check-out Date:</label>
          <input type="date" name="check_out" />
  
          <label>Number of Guests:</label>
          <div className="inline-field">
            <label>Adults:</label>
            <input type="text" name="adults" />
          </div>
          <div className="inline-field">
            <label>Children:</label>
            <input type="text" name="children" />
          </div>
  
          <label>Purpose of Stay:</label>
          <select name="purpose">
            <option value="Leisure">Leisure</option>
            <option value="Business">Business</option>
            <option value="Event/Conference">Event/Conference</option>
            <option value="Other">Other (specify below)</option>
          </select>
          <input type="text" name="other_purpose" placeholder="Specify if other" />
        </div>
  
        <div className={style.fieldContainer}>
          <h3>3. Room Preferences</h3>
          <label>Room Type:</label>
          <select name="room_type">
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Suite">Suite</option>
            <option value="Family Room">Family Room</option>
            <option value="Other">Other (specify below)</option>
          </select>
          <input type="text" name="other_room_type" placeholder="Specify if other" />
  
          <label>Bed Preference:</label>
          <select name="bed_preference">
            <option value="King">King</option>
            <option value="Queen">Queen</option>
            <option value="Twin">Twin</option>
            <option value="Sofa Bed">Sofa Bed</option>
          </select>
  
          <label>View Preference:</label>
          <select name="view_preference">
            <option value="Sea View">Sea View</option>
            <option value="City View">City View</option>
            <option value="Garden View">Garden View</option>
            <option value="Pool View">Pool View</option>
            <option value="No Preference">No Preference</option>
          </select>
  
          <label>Smoking Preference:</label>
          <select name="smoking_preference">
            <option value="Smoking">Smoking</option>
            <option value="Non-Smoking">Non-Smoking</option>
          </select>
  
          <label>Accessibility Requirements:</label>
          <select name="accessibility">
            <option value="Yes">Yes (specify below)</option>
            <option value="No">No</option>
          </select>
          <input type="text" name="accessibility_specification" placeholder="Specify if yes" />
        </div>
  
        <div className={style.fieldContainer}>
          <h3>4. Budget and Payment Preferences</h3>
          <label>Budget Range (per night):</label>
          <select name="budget">
            <option value="$50 - $100">$50 - $100</option>
            <option value="$101 - $200">$101 - $200</option>
            <option value="$201 - $300">$201 - $300</option>
            <option value="$301 - $500">$301 - $500</option>
            <option value="Other">Other (specify below)</option>
          </select>
          <input type="text" name="other_budget" placeholder="Specify if other" />
  
          <label>Preferred Payment Method:</label>
          <select name="payment_method">
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Cash">Cash</option>
            <option value="Cash">Mpesa</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
  
        <div className={style.fieldContainer}>
          <h3>5. Additional Amenities</h3>
          <select name="amenities" multiple>
            <option value="Wi-Fi">Wi-Fi</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Pool Access">Pool Access</option>
            <option value="Gym Access">Gym Access</option>
            <option value="Parking">Parking</option>
            <option value="Airport Shuttle">Airport Shuttle</option>
            <option value="Pet-Friendly Room">Pet-Friendly Room</option>
            <option value="Laundry Services">Laundry Services</option>
            <option value="Kitchenette">Kitchenette</option>
            <option value="Business Center">Business Center</option>
            <option value="Spa">Spa</option>
          </select>
        </div>
  
        <button className={style.submitBtn} type="submit">Submit</button>
      </form>
      <Footer/>
      </section>
        
    );
};

export default Accommodation;




