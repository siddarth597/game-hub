import { Button, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  text: string;
  charactersToDisplay?: number;
}

const ExpandableText = ({ text, charactersToDisplay = 600 }: Props) => {
  const [showEntireText, setShowEntireText] = useState(false);

  if (text.length <= charactersToDisplay) {
    return <Typography>{text}</Typography>;
  } else {
    return (
      <Typography>
        {showEntireText
          ? text + "          "
          : text.slice(0, charactersToDisplay) + "....          "}
        <Button
          variant="text"
          onClick={() => setShowEntireText(!showEntireText)}
        >
          {showEntireText ? "Show less" : "Show more"}
        </Button>
      </Typography>
    );
  }
};
export default ExpandableText;
