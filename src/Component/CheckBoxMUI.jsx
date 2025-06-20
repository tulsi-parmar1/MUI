import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckBoxMUI() {
  const skills = ["javascript", "typescript", "reactjs", "nextjs"];
  const [selectedItems, setSelectedItems] = React.useState([]);
  const handleChange = (e) => {
    const newValue = e.target.value;
    if (selectedItems.includes(newValue)) {
      const updatedItems = selectedItems.filter((item) => item !== newValue);
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([...selectedItems, newValue]);
    }
  };
  React.useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);
  return (
    <FormGroup>
      {skills.map((item, index) => (
        <FormControlLabel
          key={index}
          control={<Checkbox value={item} />}
          label={`${item}`}
          onChange={(e) => handleChange(e)}
        />
      ))}

      {/* FormControlLabel is used to add label next to the checkbox */}
      {/* <FormControlLabel required control={<Checkbox />} label="React.js" />
      <FormControlLabel control={<Checkbox />} label="next.js" /> */}
    </FormGroup>
  );
}
