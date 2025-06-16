import React from "react";

const Header = () => {
  return (
    <header className="text-center py-16 border-b border-gray-200">
      <div className="animate-fade-in">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">
          Mohamed Yassine Landolsi
        </h1>
        <h2 className="text-xl text-gray-600 mb-6 font-light">
          Computer Science Student
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          I'm a Computer Science student and a passionate developer <br></br>who
          loves solving challenging problems <br></br> and enjoy turning ideas
          into code.
        </p>
      </div>
    </header>
  );
};

export default Header;
