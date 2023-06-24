import React from "react";
import Flower from "./svg/flower";

interface FieldProps {
  value?: string;
  onChange?: any;
}

// const onChange = (event: React.InputHTMLAttributes<HTMLInputElement>) => {};

const Field: React.FC<FieldProps> = ({ value, onChange }) => {
  return (
    <div className="field">
      <Flower className="flower-right" fill="rgb(110, 146, 119)" />
      <Flower className="flower-left" fill="rgb(249, 148, 59)" />
      <h1>Translate App</h1>
      <label>Enter English</label>
      <input className="input" value={value} onChange={onChange} />
    </div>
  );
};

export default Field;
