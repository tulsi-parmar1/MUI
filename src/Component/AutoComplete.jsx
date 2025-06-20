import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function CountrySelect() {
  const [selected, setSelected] = React.useState("");
  React.useEffect(() => {
    console.log("selected", selected);
  }, [selected]);

  const countries = [
    { code: "AD", label: "Andorra", phone: "376" },
    {
      code: "AE",
      label: "United Arab Emirates",
      phone: "971",
    },
    { code: "AF", label: "Afghanistan", phone: "93" },
  ];

  return (
    <div>
      <Autocomplete
        disablePortal
        value={selected}
        onChange={(e, newValue) => setSelected(newValue)}
        options={countries}
        sx={{ width: 300 }}
        //customly added options.
        renderOption={(params, option) => (
          <li {...params}>
            {option.label}-{option.code}-{option.phone}
          </li>
        )}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
      {selected && <p>you've selected:{selected.label}</p>}
    </div>
  );
}
