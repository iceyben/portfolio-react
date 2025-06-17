import React, { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSpinner } from "react-icons/fa";

const Contacts = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    datetime: "",
    message: "",
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const sheetURL =
      "https://script.google.com/macros/s/AKfycbxk1vO3qpbDzzapgm1ww8pMPXICC2N-HRGF9IJSGR3bSMH0eiETnN7gqWWqLWXwr_1_/exec"; //Paste your Google Script URL here

    try {
      const response = await fetch(sheetURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("Appointment booked successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        datetime: "",
        message: "",
      });
    } catch (error) {
      console.error("Error!", error.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div id="contact" className="contact m-5 mb-25">
      <h2 className="font-bold text-2xl mb-4 ml-4">Contact</h2>
      <form onSubmit={handleSubmit}>
        <p data-aos="fade-up" className="mb-4 text-lg">
          Book Appointment{" "}
        </p>

        <input
          data-aos="fade-up"
          className="inputContact"
          type="text"
          name="firstName"
          required
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <input
          data-aos="fade-up"
          className="inputContact"
          type="text"
          name="lastName"
          required
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          data-aos="fade-up"
          className="inputContact"
          type="email"
          name="email"
          required
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          data-aos="fade-up"
          className="inputContact"
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <div className="flex flex-row bg-red border-2 space-x-2 p-4 mb-6 rounded-lg">
          <label className="flex" htmlFor="datetime">
            <FaCalendarAlt className="text-[40px]" />
          </label>
          <input
            className="text-xl"
            type="datetime-local"
            id="datetime"
            name="datetime"
            value={formData.datetime}
            onChange={handleChange}
          />
        </div>

        <textarea
          data-aos="fade-up"
          className="textField"
          type="text"
          name="message"
          placeholder="Enter Message"
          value={formData.message}
          onChange={handleChange}
        />

        <button
          data-aos="fade-up"
          className="buttonEff bg-[var(--primary-color)] w-full flex justify-center py-3 text-lg font-bold rounded-lg  "
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin" /> Processing...
            </>
          ) : (
            "Book Now"
          )}
        </button>
      </form>
    </div>
  );
};

export default Contacts;
