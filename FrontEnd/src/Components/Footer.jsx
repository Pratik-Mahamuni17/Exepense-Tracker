import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-4 border-t border-blue-400">
      <p className="text-sm tracking-wide">
        © {new Date().getFullYear()} <span className="font-semibold">Expense Tracker</span> | 
        Built with ❤️ using <span className="font-medium">React</span> & <span className="font-medium">Spring Boot</span>
      </p>
    </footer>
  );
};

export default Footer;
