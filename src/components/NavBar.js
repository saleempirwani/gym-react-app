import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { COLORS } from "../theme";

export default function NavBar() {
  return (
    <Stack
      direction="row"
      px="20px"
      sx={{ gap: { sm: "122px", xs: "40px" }, mt: { sm: "32px", xs: "20px" } }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "40px", height: "40px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction={"row"} gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            borderBottom: "1px solid",
            borderBottomColor: COLORS.redOrange,
            color: COLORS.cedar,
          }}
        >
          Home
        </Link>
        <a
          href="#exercise"
          style={{
            textDecoration: "none",
            color: COLORS.cedar,
          }}
        >
          Exercise
        </a>
      </Stack>
    </Stack>
  );
}
