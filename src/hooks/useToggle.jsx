import React, { useState } from "react";

const useToggle = () => {
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow(!show);
  };
  return {
    show,
    toggleShow,
  };
};

export default useToggle;
