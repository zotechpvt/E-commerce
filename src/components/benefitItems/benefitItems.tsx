import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useTheme } from "@mui/material/styles";
import { Colors } from "../theme/theme";

function BenefitItems() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      className="benefitItems"
      sx={{
        flexDirection: matches ? "column" : "row",
        padding: matches ? "0px" : "0px 70px",
      }}
    >
      <Box className="Items">
        <LocalShippingIcon className="ItemsIcon" fontSize="large" />
        <Box className="ItemsText">
          <Typography
            variant="subtitle1"
            className="subtitle1"
            color={Colors.info}
          >
            FREE SHIPPING
          </Typography>
          <Typography variant="subtitle2" color={Colors.info}>
            For all order over 99$
          </Typography>
        </Box>
      </Box>
      <Box className="Items">
        <AccessTimeIcon className="ItemsIcon" fontSize="large" />
        <Box className="ItemsText">
          <Typography
            variant="subtitle1"
            className="subtitle1"
            color={Colors.info}
          >
            DELIVERY ON TIME
          </Typography>
          <Typography variant="subtitle2" color={Colors.info}>
            If good have prolems
          </Typography>
        </Box>
      </Box>
      <Box className="Items">
        <LocalShippingIcon className="ItemsIcon" fontSize="large" />
        <Box className="ItemsText">
          <Typography
            variant="subtitle1"
            className="subtitle1"
            color={Colors.info}
          >
            SECURE PAYMENT
          </Typography>
          <Typography variant="subtitle2" color={Colors.info}>
            100% secure payment
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default BenefitItems;
