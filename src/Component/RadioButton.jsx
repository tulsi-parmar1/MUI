import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButton() {
  const choices = ["Female", "Male", "Other"];
  const [selectedItem, setSelectedItem] = React.useState("");
  function handleOnChange(value) {
    setSelectedItem(value);
  }
  React.useEffect(() => {
    console.log("selected gender is:", selectedItem);
  }, [selectedItem]);
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {choices.map((item, index) => (
          <FormControlLabel
            value={item}
            key={index}
            onChange={(e) => handleOnChange(e.target.value)}
            control={<Radio />}
            label={`${item}`}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
