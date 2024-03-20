import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    // Here you can toggle your application's theme or update any other styles accordingly
  };

  return (
    <nav className="flex sm:justify-end sm:items-center gap-4 pt-20 pb-3">
      {/* Navigation links */}
      <ul className="flex gap-4">
        <li>
          <a href="#" className="p-1 px-6 bg-background rounded-full">
            Profile
          </a>
        </li>
        <li>
          <a href="#" className="p-1 px-6 bg-background rounded-full">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#" className="p-1 px-6 bg-background rounded-full active">
            Contact
          </a>
        </li>
      </ul>
      {/* Add dark mode/light mode toggle icon */}
      {darkMode ? (
        <FaSun
          className="text-yellow-500 text-2xl cursor-pointer"
          onClick={toggleDarkMode}
        />
      ) : (
        <FaMoon
          className="text-gray-500 text-2xl cursor-pointer"
          onClick={toggleDarkMode}
        />
      )}
    </nav>
  );
}

export default Navbar;
