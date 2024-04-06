import { useState } from "react";
import { Editor as PrimeEditor } from "primereact/editor";

export const Editor = ({ value, onChange, height }) => {
  const [localValue, setLocalValue] = useState(value || "");

  const handleChange = (event) => {
    const newValue = event.htmlValue;
    setLocalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const editorStyle = {
    height: "320px",
  };

  return <PrimeEditor value={localValue} onTextChange={handleChange} style={editorStyle} />;
};