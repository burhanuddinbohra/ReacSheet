import React, { useState } from "react";

function Edit({ dropdowns, setDropdowns }) {
  const [newPackage, setNewPackage] = useState("");
  const [newCategory, setNewCategory] = useState("");

  // Add new package option
  const handleAddPackage = () => {
    setDropdowns((prev) => ({
      ...prev,
      productPackageOptions: [...prev.productPackageOptions, newPackage],
    }));
    setNewPackage(""); // Reset input field
  };

  // Add new category option
  const handleAddCategory = () => {
    setDropdowns((prev) => ({
      ...prev,
      productCategoryOptions: [...prev.productCategoryOptions, newCategory],
    }));
    setNewCategory(""); // Reset input field
  };

  // Delete a package option
  const handleDeletePackage = (packageToDelete) => {
    setDropdowns((prev) => ({
      ...prev,
      productPackageOptions: prev.productPackageOptions.filter(
        (pkg) => pkg !== packageToDelete
      ),
    }));
  };

  // Delete a category option
  const handleDeleteCategory = (categoryToDelete) => {
    setDropdowns((prev) => ({
      ...prev,
      productCategoryOptions: prev.productCategoryOptions.filter(
        (cat) => cat !== categoryToDelete
      ),
    }));
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Dropdown Options</h2>

      {/* Add New Product Package */}
      <div className="mb-4">
        <input
          type="text"
          value={newPackage}
          onChange={(e) => setNewPackage(e.target.value)}
          placeholder="Add new package"
          className="input text-black input-bordered input-primary w-full mb-2 "
        />
        <button onClick={handleAddPackage} className="btn btn-primary w-full">
          Add Package
        </button>
      </div>

      {/* Add New Product Category */}
      <div className="mb-4">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Add new category"
          className="input input-bordered input-primary w-full mb-2"
        />
        <button onClick={handleAddCategory} className="btn btn-primary w-full">
          Add Category
        </button>
      </div>

      {/* Display and Delete Packages */}
      <h3 className="text-xl font-semibold mb-2">Current Product Packages</h3>
      <ul className="list-disc list-inside mb-4">
        {dropdowns.productPackageOptions.map((pkg, index) => (
          <li key={index} className="flex justify-between">
            {pkg}
            <button
              onClick={() => handleDeletePackage(pkg)}
              className="btn btn-error btn-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Display and Delete Categories */}
      <h3 className="text-xl font-semibold mb-2">Current Product Categories</h3>
      <ul className="list-disc list-inside">
        {dropdowns.productCategoryOptions.map((cat, index) => (
          <li key={index} className="flex justify-between">
            {cat}
            <button
              onClick={() => handleDeleteCategory(cat)}
              className="btn btn-error btn-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Edit;
