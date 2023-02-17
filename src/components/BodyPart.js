import { Stack, Typography } from "@mui/material";
import React from "react";
import DumbBell from "../assets/icons/gym.png";
import { COLORS } from "../theme";

export default function BodyPart({
  item = "",
  bodyPart = "",
  setBodyPart = () => {},
}) {
  return (
    <Stack
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid" : "",
        borderTopColor: bodyPart === item ? COLORS.redOrange : "",
        backgroundColor: COLORS.white,
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
    >
      <img
        src={DumbBell}
        alt="DumbBell"
        style={{ width: "40px", height: "40px" }}
      />

      <Typography fontSize="24px" fontWeight="bold" color={COLORS.cedar}>
        {item}
      </Typography>
    </Stack>
  );
}
