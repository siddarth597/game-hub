import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const GameDescriptionItem = ({ children, term }: Props) => {
  return (
    <>
      <Typography
        color="grey.700"
        component="dt"
        fontWeight={700}
        marginTop={2}
      >
        {term}
      </Typography>

      <dd>{children}</dd>
    </>
  );
};
export default GameDescriptionItem;
