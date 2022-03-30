import { LinearProgress } from "@mui/material";

const ProgressBar = ({ value, ...args }: any) => {
  return (
    <LinearProgress
      value={value}
      {...args}
      variant="determinate"
      sx={{
        height: "15px",
        opacity: "0.5",
        borderRadius: "0px 0px 10px 10px",
        backgroundColor: "#DFE8F6",
        position: "absolute",
      }}
      data-testid='progress-bar'
    ></LinearProgress>
  );
};

export default ProgressBar;
