import { Box } from "@mui/material";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Colors } from "../src/components/theme/theme";
import Fade from "react-reveal/Fade";

function Faqs() {
  const [indexItem, setIndexItem] = useState<number>(0);
  const [show, setShow] = useState<boolean>(true);
  const FAQsData: {
    question: string;
    answer: string;
  }[] = [
    {
      question: "Is There Anything I Should Bring?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Where Can I Find Market Research Reports?",
      answer:
        "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Where Can I Find The Wall Street Journal?",
      answer:
        "Quis nostrud exercitation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <Box className="faqs">
      {FAQsData.map((item, index) => (
        <Box key={index}>
          <Box
            className="faqsQuestion"
            onClick={() => {
              setIndexItem(index);
              index === indexItem ? setShow(!show) : setShow(true);
            }}
          >
            {index === indexItem && show ? (
              <RemoveCircleIcon sx={{ color: Colors.info }} />
            ) : (
              <AddCircleIcon sx={{ color: Colors.dim_grey }} />
            )}
            <Typography ml={2} fontSize={20}>
              {item.question}
            </Typography>
          </Box>
          {index === indexItem && show && (
            <Fade big cascade>
              <Typography className="faqsAnswer">{item.answer}</Typography>
            </Fade>
          )}
        </Box>
      ))}
    </Box>
  );
}

export default Faqs;
