import React from "react";

export default function Footer() {
  return (
    <footer
      className="bottom-0 p-5 flex 
    items-start text-gray-500 max-w-7xl mx-auto z-20"
    >
      <p>&copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
