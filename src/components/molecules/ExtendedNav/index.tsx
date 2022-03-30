import { Box } from "@mui/material";
import Typography from "../../atoms/Typography";
import Button from "@mui/material/Button";
import {
  RocketLaunchOutlined,
  AccountBalanceOutlined,
  DesktopWindowsOutlined,
  ScienceOutlined,
  StairsOutlined,
  HistoryToggleOffOutlined,
  AttachMoneyOutlined,
  SpaOutlined,
  ConnectWithoutContactOutlined,
  ApartmentOutlined,
  AccessibleForwardOutlined,
  CategoryOutlined,
  LocalAtmOutlined,
  PsychologyOutlined,
  TimerOutlined,
} from "@mui/icons-material";

const Nav = () => {
  const data = [
    {
      leftIcon: <RocketLaunchOutlined />,
      label: "Entrepreneurship",
    },
    {
      leftIcon: <AccountBalanceOutlined />,
      label: "Politics",
    },
    {
      leftIcon: <DesktopWindowsOutlined />,
      label: "Marketing & Sales",
    },
    {
      leftIcon: <ScienceOutlined />,
      label: "Science",
    },
    {
      leftIcon: <SpaOutlined />,
      label: "Health & Nutrition",
    },
    {
      leftIcon: <StairsOutlined />,
      label: "Personal Development",
    },
    {
      leftIcon: <AttachMoneyOutlined />,
      label: "Economics",
    },
    {
      leftIcon: <HistoryToggleOffOutlined />,
      label: "History",
    },
    {
      leftIcon: <ConnectWithoutContactOutlined />,
      label: "Communication Skills",
    },
    {
      leftIcon: <ApartmentOutlined />,
      label: "Corporate Culture",
    },
    {
      leftIcon: <CategoryOutlined />,
      label: "Management & Leadership",
    },
    {
      leftIcon: <AccessibleForwardOutlined />,
      label: "Motivation & Inspiration",
    },
    {
      leftIcon: <LocalAtmOutlined />,
      label: "Money & Investments",
    },
    {
      leftIcon: <PsychologyOutlined />,
      label: "Psycology",
    },
    {
      leftIcon: <TimerOutlined />,
      label: "Productivity",
    },
  ];
  return (
    <Box
      width="100vw"
      height="398px"
      sx={{
        background: "#F1F6F4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      data-testid="explore"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          borderBottom: "1px solid #042330",
          width: "723px",
          height: "20px",
          marginBottom: "32px"
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "#116BE9 !important", fontSize: "16px" }}
        >
          Explore by category
        </Typography>
        <Typography variant="subtitle1" sx={{color: "#6D787E",fontSize: "16px" }}>
          Set recently added titles
        </Typography>
        <Typography variant="subtitle1" sx={{color: "#6D787E", fontSize: "16px" }}>
          See Popular titles
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "880px",
          height: "264px",
        }}
      >
        {data.map((curr: any) => {
          return (
            <Button
              startIcon={curr.leftIcon}
              sx={{
                textTransform: "none",
                color: "#6D787E",
                width: "fit-content",
                height: "24px",
                marginBottom: "28px",
                '&:hover': {
                  color: "#0365F2",
                  boxShadow: 'none',
                }
              }}
            >
              {curr.label}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

export default Nav;
