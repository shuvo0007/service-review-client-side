import React, { useState } from "react";
import useTitle from "../../../../Hooks/useTitle";

const AddCategory = () => {
  useTitle("AddCategory");
  const [category, setCategory] = useState({});

  const handleAddService = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/category", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(category),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Service added successfully");
        event.target.reset();
      });
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newCategory = { ...category };
    newCategory[field] = value;
    setCategory(newCategory);
  };

  return (
    <div className="m-28 px-36">
      <form onSubmit={handleAddService}>

          <div className="">
            <label
              for="last_name"
              className="block mb-2 text-xl font-medium text-white float-left dark:text-gray-300"
            >
              Title
            </label>
            <input
              onBlur={handleInputBlur}
              type="text"
              name="name"
              id="last_name"
              className="bg-transparent border border-gray-300 text-white float-left text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Title of the Service"
              required
            />
          </div>
          <div>
            <label
              for="company"
              className="block mb-2 text-xl font-medium text-white float-left dark:text-gray-300"
            >
              Image URL
            </label>
            <input
              onBlur={handleInputBlur}
              type="text"
              name="image"
              id="company"
              className="bg-transparent border border-gray-300 text-white float-left text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="http://.....com/abcd.jpg .png"
              required
            />
          </div>
          <div>
            <label
              for="phone"
              className="block mb-2 text-xl font-medium text-white float-left dark:text-gray-300"
            >
              Price
            </label>
            <input
              onBlur={handleInputBlur}
              type="text"
              name="price"
              id="phone"
              className="bg-transparent border border-gray-300 text-white float-left text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="123.00"
              required
            />
          </div>
          <div>
            <label
              for="website"
              className="block mb-2 text-xl font-medium text-white float-left dark:text-gray-300"
            >
              Description
            </label>
            <textarea rows='10'
              onBlur={handleInputBlur}
              type="text"
              name="details"
              id="website"
              className="bg-transparent border border-gray-300 text-white float-left text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Write something about the service"
              required
            />
          </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddCategory;
