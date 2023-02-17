import { Button, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BODY_PARTS } from "../data";
import { COLORS } from "../theme";
import { exerciseOptions, fetchData } from "../utils";
import HorizontalScrollBar from "./HorizontalScrollBar";

export default function SearchExercises({
  bodyPart = "",
  setBodyPart = () => {},
  setExercises = () => {},
}) {
  const [search, setSearch] = React.useState("");

  const onSearch = async () => {
    if (!search) return;
    const URL = `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`;
    const data = await fetchData(URL, exerciseOptions);
    console.log(data, process.env.RAPID_API_KEY);
  };

  return (
    <Stack alignItems={"center"} justifyContent="center" mt="37px" p="20px">
      <Typography
        textAlign="center"
        mb="50px"
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
      >
        Awesome Exercise You <br />
        Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder="Search Exercises"
          sx={{
            input: {
              fontWeight: "500",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: COLORS.white,
            borderRadius: "40px",
          }}
        />
        <Button
          onClick={onSearch}
          className="search-btn"
          sx={{
            bgcolor: COLORS.redOrange,
            color: COLORS.white,
            textTransform: "none",
            height: "56px",
            fontSize: { lg: "20px", xs: "14px" },
            width: { lg: "175px", xs: "80px" },
            position: "absolute",
            right: 0,
          }}
        >
          Search
        </Button>
      </Box>
      <Box position="relative" sx={{ width: "100%", p: "20px" }}>
        <HorizontalScrollBar
          data={BODY_PARTS}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
}
