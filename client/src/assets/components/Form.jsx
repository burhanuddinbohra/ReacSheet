import React, { useState } from "react";
import axios from "axios";
function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    alternateMobileNumber: "",
    address: "",
    email: "",
    gstin: "",
    gstAddress: "",
    productPackage: "1000",
    productCategory: "Website Lite",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Show spinner
    console.log(JSON.stringify(formData));
    const url = "http://192.168.185.229:5000/proxy";
    axios
      .post(
        url, // Replace with your web app URL
        formData, // Data you want to send
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data); // Handle the success response
        setIsSuccess(true);
        setFormData({
          fullName: "",
          mobileNumber: "",
          alternateMobileNumber: "",
          address: "",
          email: "",
          gstin: "",
          gstAddress: "",
          productPackage: "6490",
          productCategory: "Website Lite",
        });
        setTimeout(() => setIsSuccess(false), 3000); // Reset success state after 3 seconds
      })
      .catch((error) => {
        console.error("Error:", error); // Handle the error
      })
      .finally(() => {
        setIsSubmitting(false); // Hide spinner
      });
  };

  return (
    <div className="form-container w-full max-w-5xl mx-auto p-6 bg-opacity-90 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-6">
        Register With Us!
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label
              className="block text-gray-300 text-sm font-medium mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 bg-gray-700 rounded-lg text-white"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 gap-y-4 md:gap-y-0">
            <div className="flex-1">
              <label
                className="block text-gray-300 text-sm font-medium mb-2"
                htmlFor="mobileNumber"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                pattern="[0-9]*"
                className="w-full p-3 border border-gray-600 bg-gray-700 rounded-lg text-white"
                required
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-gray-300 text-sm font-medium mb-2"
                htmlFor="alternateMobileNumber"
              >
                Alternate Mobile Number
              </label>
              <input
                type="tel"
                id="alternateMobileNumber"
                name="alternateMobileNumber"
                value={formData.alternateMobileNumber}
                onChange={handleChange}
                pattern="[0-9]*"
                className="w-full p-3 border border-gray-600 bg-gray-700 rounded-lg text-white"
              />
            </div>
          </div>
          <div>
            <label
              className="block text-gray-300 text-sm font-medium mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 bg-gray-700 rounded-lg text-white"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-300 text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 bg-gray-700 rounded-lg text-white"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 gap-y-4 md:gap-y-0">
            <div className="flex-1">
              <label
                className="block text-gray-300 text-sm font-medium mb-2"
                htmlFor="gstin"
              >
                GSTin
              </label>
              <input
                type="text"
                id="gstin"
                name="gstin"
                value={formData.gstin}
                onChange={handleChange}
                className="w-full p-3 border border-gray-600 bg-gray-700 rounded-lg text-white"
                required
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-gray-300 text-sm font-medium mb-2"
                htmlFor="gstAddress"
              >
                GST Address
              </label>
              <input
                type="text"
                id="gstAddress"
                name="gstAddress"
                value={formData.gstAddress}
                onChange={handleChange}
                className="w-full p-3 border border-gray-600 bg-gray-700 rounded-lg text-white"
                required
              />
            </div>
          </div>
          <div>
            <label
              className="block text-gray-300 text-sm font-medium mb-2"
              htmlFor="productPackage"
            >
              Product Package
            </label>
            <select
              id="productPackage"
              name="productPackage"
              value={formData.productPackage}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 bg-gray-700 rounded-lg text-white"
              required
            >
              <option value="6490">₹6490</option>
              <option value="7080">₹7080</option>
            </select>
          </div>
          <div>
            <label
              className="block text-gray-300 text-sm font-medium mb-2"
              htmlFor="productCategory"
            >
              Product Category
            </label>
            <select
              id="productCategory"
              name="productCategory"
              value={formData.productCategory}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 bg-gray-700 rounded-lg text-white"
              required
            >
              <option value="Website Lite">Website Lite</option>
              <option value="Website Pro">Website Pro</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className={`w-full h-12 py-3 px-4 font-semibold rounded-lg ${
            isSuccess
              ? "bg-green-600 hover:bg-green-700"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white`}
        >
          {isSubmitting ? (
            <span className="loading loading-spinner w-6 h-6"></span>
          ) : (
            <span>{isSuccess ? "Thank You!!" : "Submit"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default Form;
