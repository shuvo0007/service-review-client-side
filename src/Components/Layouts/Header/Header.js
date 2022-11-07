import React from "react";

const Header = () => {
  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="https://flowbite.com" class="flex items-center">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div class="flex items-center">
            <a
              href="tel:5541251234"
              class="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
            >
              (555) 412-1234
            </a>
            <button class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Login
            </button>
          </div>
        </div>
      </nav>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <button
                  class="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </button>
              </li>
              <li>
                <button class="text-gray-900 dark:text-white hover:underline">
                  Company
                </button>
              </li>
              <li>
                <button class="text-gray-900 dark:text-white hover:underline">
                  Team
                </button>
              </li>
              <li>
                <button class="text-gray-900 dark:text-white hover:underline">
                  Features
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
