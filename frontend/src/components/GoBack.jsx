import React from "react";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div onClick={goBack} className="go-back pointer clr-gray">
      Go Back
    </div>
  );
};

export default GoBack;
