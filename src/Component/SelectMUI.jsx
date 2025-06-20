import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectMUI() {
  const [age, setAge] = React.useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  React.useEffect(() => {
    console.log(age);
  }, [age]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          multiple
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"javascript"}>javascript</MenuItem>
          <MenuItem value={"react"}>react</MenuItem>
          <MenuItem value={"nextjs"}>nextjs</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
