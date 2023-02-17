import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../theme";
import Banner from "../assets/images/banner.png";

export default function HeroBanner() {
  return (
    <Box
      position="relative"
      p="20px"
      sx={{
        mt: { lg: "212px", sx: "70px" },
        ml: { sm: "50px" },
      }}
    >
      <Typography color={COLORS.redOrange} fontWeight="600" fontSize={"26px"}>
        Fitness Club
      </Typography>

      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
        }}
        mt="30px"
        mb="23px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize={"22px"} lineHeight="35px" mb={"20px"}>
        Checkout the most effective exercises
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: COLORS.redOrange,
          letterSpacing: "1px",
          textTransform: "capitalize",
          padding: "10px",
        }}
      >
        Explore Exercise
      </Button>

      <Typography
        fontWeight="600"
        color={COLORS.redOrange}
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        EXERCISE
      </Typography>

      <img src={Banner} alt="Banner" className="hero-banner-img" />
    </Box>
  );
}
