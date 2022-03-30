import { makeStyles } from "@material-ui/styles";
import Logo from "../../atoms/Logo/index";
import Typography from "../../atoms/Typography";
import { Box } from "@mui/material";
type FooterProps = {
  className?: string;
};
const Footer = (props: FooterProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "370px",
        backgroundColor: "#F1F6F4",
        width: "100%",
        position: "sticky",
        top: "100vh",
        marginTop: "76px",
      }}
      data-testid="footer"
    >
      <Typography
        variant="caption"
        sx={{ position: "absolute", left: "244px", top: "310px" }}
      >
        © Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy Policies
      </Typography>
      <Box
        sx={{
          position: "absolute",
          top: "38px",
          width: "952px",
          height: "224px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            padding: "0px",
            position: "absolute",
            width: "542px",
            height: "224px",
            left: "410px",
            top: "0px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              position: "absolute",
              width: "214px",
              height: "184px",
              left: "0px",
              top: "0px",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              Editorial
            </Typography>
            <Typography
              variant="body2"
              sx={{ height: "24px", margin: "8px 0px !important" }}
            >
              Book lists
            </Typography>
            <Typography
              variant="body2"
              sx={{ height: "24px", margin: "8px 0px !important" }}
            >
              What is Nonfiction?
            </Typography>
            <Typography
              variant="body2"
              sx={{ height: "24px", margin: "8px 0px !important" }}
            >
              What to read next?
            </Typography>
            <Typography
              variant="body2"
              sx={{ height: "24px", margin: "8px 0px !important" }}
            >
              Benefits of reading
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              position: "absolute",
              width: "214px",
              height: "224px",
              left: "246px",
              top: "0px",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              Useful Links
            </Typography>
            <Typography
              variant="body2"
              sx={{ height: "24px", margin: "8px 0px !important" }}
            >
              Pricing
            </Typography>
            <Typography
              variant="body2"
              sx={{ height: "24px", margin: "8px 0px !important" }}
            >
              Blinkist Business
            </Typography>
            <Typography
              variant="body2"
              sx={{ height: "24px", margin: "8px 0px !important" }}
            >
              Gift Cards
            </Typography>
            <Typography
              variant="body2"
              sx={{ height: "24px", margin: "8px 0px !important" }}
            >
              Blinkist magazine
            </Typography>
            <Typography
              variant="body2"
              sx={{ height: "24px", margin: "8px 0px !important" }}
            >
              Contact & help
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              position: "absolute",
              width: "214px",
              height: "184px",
              left: "410px",
              top: "0px",
              margin: "0px 32px",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              Company
            </Typography>
            <Typography
              variant="body2"
              sx={{ height: "24px", margin: "8px 0px !important" }}
            >
              About
            </Typography>
            <Typography
              variant="body2"
              sx={{ height: "24px", margin: "8px 0px !important" }}
            >
              Careers
            </Typography>
            <Typography
              variant="body2"
              sx={{ height: "24px", margin: "8px 0px !important" }}
            >
              Partners
            </Typography>
            <Typography
              variant="body2"
              sx={{ height: "24px", margin: "8px 0px !important" }}
            >
              Code Of Conduct
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: "0px",
            top: "0px",
            width: "378px",
            height: "120px",
          }}
        >
          <Logo></Logo>
          <Typography
            variant="subtitle1"
            sx={{ position: "absolute", top: "56px", left: "0px" }}
          >
            Big Ideas in small packages Start learning now
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
