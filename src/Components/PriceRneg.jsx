import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([500, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };


  const [minInput, setMinInput] = React.useState(value[0].toString());
  const [maxInput, setMaxInput] = React.useState(value[1].toString());

  // ⭐ KEY TO SHOWING VALUES IN INPUT FIELDS ⭐
  // This useEffect hook runs whenever the 'value' state (from the slider) changes.
  // It updates the 'minInput' and 'maxInput' states, which in turn
  // update the 'value' prop of the <input> elements.
  React.useEffect(() => {
    setMinInput(value[0].toString()); // Set min input field to the slider's current min value
    setMaxInput(value[1].toString()); // Set max input field to the slider's current max value
  }, [value]); // Dependency array: runs when 'value' changes


  return (
    <Box sx={{ width: 300 }}>
     
      <Slider
        // The current value of the slider. This is a two-element array for a range slider.
        value={value}
        // Event handler for when the slider value changes.
        onChange={handleChange}
        // Shows the value label when dragging. 'auto' displays it above the thumb.
        valueLabelDisplay="auto"
        // Function to format the text displayed in the value label.
        getAriaValueText={valuetext}
        // Set the minimum possible value for the slider.
        min={0} // Custom minimum value for prices
        // Set the maximum possible value for the slider.
        max={10000} // Custom maximum value for prices
        // Set the step increment for the slider. For prices, larger steps might be appropriate.
        step={10} // Slider moves in increments of 10
        // Apply Tailwind CSS classes for styling the slider track and thumb
      />
      <label htmlFor="min-price" className="sr-only">
        Min Price
      </label>
      <input
        type="number"
        id="min-price"
      value={minInput} 
            onChange={(e) => setMaxInput(e.target.value)}
        placeholder="Min Price"
        className="w-32 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-center"
        min="0"
        max="10000"
        step="10"
      />
      <span className="text-gray-600">-</span>
      <label htmlFor="max-price" className="sr-only">
        Max Price
      </label>
      <input
        type="number"
        id="max-price"
       value={maxInput} 
            onChange={(e) => setMaxInput(e.target.value)}
        placeholder="Max Price"
        className="w-32 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-center"
        min="0"
        max="10000"
        step="10"
      />
    </Box>
  );
}
