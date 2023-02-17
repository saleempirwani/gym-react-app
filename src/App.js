import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetail";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Box width={400} sx={{ width: { xl: "1488px" } }} m="auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
}
