import React from "react";
import { Button, Typography } from "@mui/material";
function Buttonn() {
  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        // size="large"
        sx={{
          color: "white",
          backgroundColor: "purple",
          width: { xs: "100px", sm: "500px", xl: "1000px" },
        }}
      >
        Hello world
      </Button>
    </div>
  );
}

export default Buttonn;
