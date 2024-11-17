// src/components/BookingForm.jsx
import { useState } from 'react';
import "./AccommodationBooking.module.css";
import Header from "../../components/Blue Header/BlueHeader";
import Footer from '../../components/Footer/Footer';

const BookingForm = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Handle form submission (e.g., send data to backend or display confirmation)
    };

    return (
        <div className="form-container" id="bookingForm">
            <Header/>
            <h2>Accommodation Booking Form</h2>

            <div className="section">
                <h3>1. Personal Information</h3>
                <label>Full Name:</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />

                <label>Email Address:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />

                <label>Contact Number:</label>
                <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />

                <label>Address:</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} />
            </div>

            <div className="section">
                <h3>2. Stay Details</h3>
                <label>Check-in Date:</label>
                <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} />

                <label>Check-out Date:</label>
                <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} />

                <label>Number of Guests:</label>
                <div className="inline-field">
                    <label>Adults:</label>
                    <input type="text" name="adults" value={formData.adults} onChange={handleChange} />
                </div>
                <div className="inline-field">
                    <label>Children:</label>
                    <input type="text" name="children" value={formData.children} onChange={handleChange} />
                </div>

                <label>Purpose of Stay:</label>
                <select name="purpose" value={formData.purpose} onChange={handleChange}>
                    <option value="Leisure">Leisure</option>
                    <option value="Business">Business</option>
                    <option value="Event/Conference">Event/Conference</option>
                    <option value="Other">Other</option>
                </select>
                {formData.purpose === 'Other' && (
                    <input
                        type="text"
                        name="otherPurpose"
                        placeholder="Specify if other"
                        value={formData.otherPurpose}
                        onChange={handleChange}
                    />
                )}
            </div>

            <div className="section">
                <h3>3. Room Preferences</h3>
                <label>Room Type:</label>
                <select name="roomType" value={formData.roomType} onChange={handleChange}>
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Suite">Suite</option>
                    <option value="Family Room">Family Room</option>
                    <option value="Other">Other</option>
                </select>
                {formData.roomType === 'Other' && (
                    <input
                        type="text"
                        name="otherRoomType"
                        placeholder="Specify if other"
                        value={formData.otherRoomType}
                        onChange={handleChange}
                    />
                )}

                <label>Bed Preference:</label>
                <select name="bedPreference" value={formData.bedPreference} onChange={handleChange}>
                    <option value="King">King</option>
                    <option value="Queen">Queen</option>
                    <option value="Twin">Twin</option>
                    <option value="Sofa Bed">Sofa Bed</option>
                </select>

                <label>View Preference:</label>
                <select name="viewPreference" value={formData.viewPreference} onChange={handleChange}>
                    <option value="Sea View">Sea View</option>
                    <option value="City View">City View</option>
                    <option value="Garden View">Garden View</option>
                    <option value="Pool View">Pool View</option>
                    <option value="No Preference">No Preference</option>
                </select>

                <label>Smoking Preference:</label>
                <select name="smokingPreference" value={formData.smokingPreference} onChange={handleChange}>
                    <option value="Smoking">Smoking</option>
                    <option value="Non-Smoking">Non-Smoking</option>
                </select>

                <label>Accessibility Requirements:</label>
                <select name="accessibility" value={formData.accessibility} onChange={handleChange}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                {formData.accessibility === 'Yes' && (
                    <input
                        type="text"
                        name="accessibilitySpecification"
                        placeholder="Specify if yes"
                        value={formData.accessibilitySpecification}
                        onChange={handleChange}
                    />
                )}
            </div>

            <div className="section">
                <h3>4. Budget and Payment Preferences</h3>
                <label>Budget Range (per night):</label>
                <select name="budget" value={formData.budget} onChange={handleChange}>
                    <option value="$50 - $100">$50 - $100</option>
                    <option value="$101 - $200">$101 - $200</option>
                    <option value="$201 - $300">$201 - $300</option>
                    <option value="$301 - $500">$301 - $500</option>
                    <option value="Other">Other</option>
                </select>
                {formData.budget === 'Other' && (
                    <input
                        type="text"
                        name="otherBudget"
                        placeholder="Specify if other"
                        value={formData.otherBudget}
                        onChange={handleChange}
                    />
                )}

                <label>Preferred Payment Method:</label>
                <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Debit Card">Debit Card</option>
                    <option value="PayPal">PayPal</option>
                    <option value="Cash">Cash</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                </select>
            </div>

            <div className="section">
                <h3>5. Additional Amenities</h3>
                <div className="checkbox-group">
                    {["Wi-Fi", "Breakfast", "Pool Access", "Gym Access", "Parking", "Airport Shuttle", "Pet-Friendly Room", "Laundry Services", "Kitchenette", "Business Center", "Spa"].map((amenity) => (
                        <label key={amenity}>
                            <input
                                type="checkbox"
                                name="amenities"
                                value={amenity}
                                checked={formData.amenities.includes(amenity)}
                                onChange={handleChange}
                            />
                            {amenity}
                        </label>
                    ))}
                </div>
            </div>

            <div className="section">
                <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit</button>
            </div>

            <Footer/>
        </div>
    );
};

export default BookingForm;
