import React from "react";
import { useState, useEffect } from "react";

//const [mensaje,setMensaje] = useState('');

const Error = ({children}) => {
  return (
    <div className="bg-red-500 text-white text-center p-3 mb-3">
      <p>{children}</p>
    </div>
  );
};

export default Error;
