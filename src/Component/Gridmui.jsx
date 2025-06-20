import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/GridLegacy";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Gridmui() {
  return (
    <Box
      sx={{
        backgroundColor: "red",
        height: "100px",
        width: { xs: "200px", sm: "400px", md: "600px" },
      }}
    >
      {/* <Grid container spacing={2}>
        <Grid item xs={10}>
          <Item>Header</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>sidebar</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>content</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>Footer</Item>
        </Grid>
      </Grid> */}
    </Box>
  );
}
