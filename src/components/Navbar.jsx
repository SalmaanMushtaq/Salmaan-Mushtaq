//  backgroundColor: ""
function Navbar() {
  return (
    <ul className="flex sm:justify-end sm:items-center gap-4 pt-20">
      <li>
        <a href="#" className="p-1 px-6 bg-background rounded-full active">
          Profile
        </a>
      </li>
      <li>
        <a href="#" className="p-1 px-6 bg-background rounded-full">
          Portfolio
        </a>
      </li>
      <li className="me-10">
        <a href="#" className="p-1 px-6 bg-background rounded-full">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
