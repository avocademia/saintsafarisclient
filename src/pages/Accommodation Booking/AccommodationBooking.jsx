// src/components/BookingForm.jsx
import { useState } from "react";
import "./AccommodationBooking.module.css";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import "react-phone-input-2/lib/style.css";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
import Header from "../../components/Blue Header/BlueHeader";
import Footer from "../../components/Footer/Footer";
import style from "../Flight Booking/FlightBooking.module.css";
import accommodationBooking from "../../hooks/AccommodationBooking";
const AccommodationBooking = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    contact_number: "",
    address: "",
    check_in: "",
    check_out: "",
    adults: "",
    children: "",
    purpose: "",
    other_purpose : "",
    room_type: "",
    other_room_type: "",
    bed_preference: "",
    view_preference: "",
    smoking_preference: "",
    accessibility: "",
    accessibility_specification: "",
    budget: "",
    other_budget: "",
    payment_method: "",
    amenities: [],
  });


  const [loading, setLoading] = useState(false)
  const [selectedAccommodation, setSelectedAccommodation] = useState("");

  const accommodationFeatures = {
    lodging: [
      "Wi-Fi",
      "Room Service",
      "Daily Housekeeping",
      "Swimming Pool",
      "On-site Restaurant",
    ],
    private_rental: [
      "Fully Equipped Kitchen",
      "Private Entrance",
      "Free Parking",
      "Washer/Dryer",
      "Pet-Friendly",
    ],
  };

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone })
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "accommodationBooking") {
      setSelectedAccommodation(value);
      setFormData((prevData) => ({ ...prevData, amenities: [] })); // Reset amenities on type change
    }
  };
  const handleAmenityChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const updatedAmenities = checked
        ? [...prevData.amenities, value]
        : prevData.amenities.filter((amenity) => amenity !== value);

      return { ...prevData, amenities: updatedAmenities };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true)

    if (loading === true ){
        return <LoadingSpinner/>
      }
  
    try {
      const response = await accommodationBooking(formData); // Use the hook to submit data
      if (response) {
        toast.success("Booking submitted successfully!"); // Success notification
        console.log("Booking response:", response); // Log the response for debugging
        // Reset form data after successful submission
        setFormData({
            full_name: "",
            email: "",
            contact_number: "",
            address: "",
            check_in: "",
            check_out: "",
            adults: "",
            children: "",
            purpose: "",
            other_purpose : "",
            room_type: "",
            other_room_type: "",
            bed_preference: "",
            view_preference: "",
            smoking_preference: "",
            accessibility: "",
            accessibility_specification: "",
            budget: "",
            other_budget: "",
            payment_method: "",
            amenities: [],
        });
      }
    } catch (error) {
      toast.error("Failed to submit booking. Please try again."); // Failure notification
      console.error("Error submitting booking:", error); // Log the error for debugging
    }
  };
  

  return (
    <section className={style.page}>
      <Header />
      <form className="form-container" id="bookingForm" onSubmit={handleSubmit}>
        <h2>Accommodation Booking Form</h2>

        <div className={style.fieldContainer}>
          <h3>1. Personal Information</h3>
          <label>Full Name:</label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleInputChange}
          />

          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <label>Phone Number:</label>
          <PhoneInput
            country={"ke"}
            value={formData.contact_number}
            onChange={handlePhoneChange}
            inputStyle={{ width: "100%" }}
          />

          <label>Accommodation Type:</label>
          <select
            name="accommodationBooking"
            id="accommodation"
            value={formData.accommodationBooking}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            <option value="lodging">Lodging</option>
            <option value="private_rental">Private Rental</option>
          </select>

          {selectedAccommodation && (
            <div>
              <h3>Select Amenities:</h3>
              {accommodationFeatures[selectedAccommodation].map((feature) => (
                <label key={feature} className={style.checkboxLabel}>
                  <input
                    type="checkbox"
                    value={feature}
                    checked={formData.amenities.includes(feature)}
                    onChange={handleAmenityChange}
                  />
                  {feature}
                </label>
              ))}
            </div>
          )}
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
  
        {/* <div className={style.fieldContainer}>
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
        </div> */}
  
        <div className={style.fieldContainer}>
          <h3>3. Budget and Payment Preferences</h3>
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
  {/* <h3>5. Additional Amenities</h3>
  <div className={style.checkboxContainer}>
    {[
      "Wi-Fi",
      "Breakfast",
      "Pool Access",
      "Gym Access",
      "Parking",
      "Airport Shuttle",
      "Pet-Friendly Room",
      "Laundry Services",
      "Kitchenette",
      "Business Center",
      "Spa",
    ].map((amenity) => (
      <label key={amenity} className={style.checkboxLabel}>
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
  </div> */}

  {/* <div className={style.selectedContainer}>
    <h4>Selected Amenities:</h4>
    {formData.amenities.length > 0 ? (
      <ul>
        {formData.amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>
    ) : (
      <p>No amenities selected</p>
    )}
  </div> */}
</div>


        <button className={style.submitBtn} type="submit">
          Submit
        </button>
      </form>
      <Footer />
    </section>
  );
};

export default AccommodationBooking;
