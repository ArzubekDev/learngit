import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-indigo-700 text-white/90">
      <h1>About Us</h1>
      <p className="w-96">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
        consequatur doloribus cum velit porro dolores asperiores quasi aut
        obcaecati molestias at est aliquam dolor alias nihil, cupiditate eius
        excepturi perspiciatis?
      </p>
      <form >
        <input type="text" placeholder="Title"/>
        <input type="text" placeholder="Price"/>
        <button>Add</button>
      </form>
    </div>
  );
};

export default page;
