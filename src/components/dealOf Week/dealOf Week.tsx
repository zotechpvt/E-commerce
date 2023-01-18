import { Button, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Colors } from "../theme/theme";
import { useTheme } from "@mui/material/styles";

interface Timer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function DealOfWeek() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  let countDownDate: number = new Date("Feb 5, 2023 15:37:25").getTime();
  const [timer, setTimer] = useState<Timer>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    setInterval(function () {
      let now: number = new Date().getTime();
      let distance: number = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days: number = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours: number = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes: number = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds: number = Math.floor((distance % (1000 * 60)) / 1000);
      setTimer({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }, 1000);
  }, []);

  return (
    <Box
      className="dealOfWeek"
      sx={{ flexDirection: matches ? "column" : "row" }}
    >
      <Box className="dealContain" sx={{ width: matches ? "90%" : "50%" }}>
        <Typography variant="h3" color={Colors.dark} className="dealTitle">
          Deal Of The Week
        </Typography>
        <Typography
          variant="subtitle1"
          color={Colors.dim_grey}
          className="dealDetails"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do ipsum
          dolor sit amet, consectetur adipisicing elit
        </Typography>

        <Box className="dealPrice">
          <Typography variant="h4" color={Colors.info} mt={1}>
            $35.00{" "}
          </Typography>
          <Typography variant="subtitle1" color={Colors.dim_grey} mt={1} ml={1}>
            {" "}
            / HanBag
          </Typography>
        </Box>
        <Box className="dealTime">
          <Box className="time">
            <Typography variant="h4" color={Colors.info}>
              {timer.days}
            </Typography>
            <Typography
              variant="subtitle1"
              color={Colors.dim_grey}
              textTransform={"uppercase"}
            >
              Days
            </Typography>
          </Box>
          <Box className="time">
            <Typography variant="h4" color={Colors.info}>
              {timer.hours}
            </Typography>
            <Typography
              variant="subtitle1"
              color={Colors.dim_grey}
              textTransform={"uppercase"}
            >
              hrs
            </Typography>
          </Box>
          <Box className="time">
            <Typography variant="h4" color={Colors.info}>
              {timer.minutes}
            </Typography>
            <Typography
              variant="subtitle1"
              color={Colors.dim_grey}
              textTransform={"uppercase"}
            >
              mins
            </Typography>
          </Box>
          <Box className="time">
            <Typography variant="h4" color={Colors.info}>
              {timer.seconds}
            </Typography>
            <Typography
              variant="subtitle1"
              color={Colors.dim_grey}
              textTransform={"uppercase"}
            >
              secs
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{
            background: Colors.info,
            marginTop: "35px",
          }}
        >
          shop now
        </Button>
      </Box>
      <Box className="dealImage">
        <Image
          src="/handbage5.png"
          alt="img1"
          width={400}
          height={400}
          className="image"
        />
      </Box>
    </Box>
  );
}

export default DealOfWeek;
