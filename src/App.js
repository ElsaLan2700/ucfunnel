import React from "react";
import Box from "@mui/material/Box";
import AddForm from "./Components/form";

const App = () => {
  return (
    <Box
      sx={{
        width: 500,
        mx: "auto",
        p: 5,
        border: "1.5px solid grey",
        borderRadius: "5px",
      }}
    >
      <AddForm />
    </Box>
  );
};

export default App;
