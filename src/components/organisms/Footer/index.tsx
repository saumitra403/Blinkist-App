import { makeStyles } from "@material-ui/styles";
import Logo from "../../atoms/Logo";
import Typography from "../../atoms/Typography";
import { Box } from "@mui/material";
type FooterProps = {
  className?: string
}
const useStyle = makeStyles({
  footer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "370px",
    backgroundColor: "#F1F6F4",
    width: "100%",
    position: 'sticky',
    top: "100vh",
    marginTop: "76px",
  },
  navitems: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    position: "absolute",
    width: "542px",
    height: "224px",
    left: "410px",
    top: "0px",
  },
  sitemap: {
    position: "absolute",
    left: "244px",
    top: "310px",
  },
  frame21: {
    position: "absolute",
    top: "38px",
    width: "952px",
    height: "224px",
  },
  frame20: {
    position: "absolute",
    left: "0px",
    top: "0px",
    width: "378px",
    height: "120px",
  },
  ideas: {
    position: "absolute",
    top: "56px",
    left: "0px",
  },
  editorial: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "absolute",
    width: "214px",
    height: "184px",
    left: "0px",
    top: "0px",
  },
  usefullinks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "absolute",
    width: "214px",
    height: "224px",
    left: "246px",
    top: "0px",
  },
  company: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "absolute",
    width: "214px",
    height: "184px",
    left: "410px",
    top: "0px",
    margin: "0px 32px",
  },
  text: {
      height: "24px",
      margin: "8px 0px !important"
  },
});
const Footer = (props: FooterProps) => {
  const classes = useStyle();
  return (
    <Box className={classes.footer}>
      <Typography variant="caption" className={classes.sitemap}>
        © Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy Policies
      </Typography>
      <Box className={classes.frame21}>
        <Box className={classes.navitems}>
          <Box className={classes.editorial}>
            <Typography variant="body1" sx={{fontWeight: 700}}>Editorial</Typography>
            <Typography variant="body2" className={classes.text}>Book lists</Typography>
            <Typography variant="body2" className={classes.text}>What is Nonfiction?</Typography>
            <Typography variant="body2" className={classes.text}>What to read next?</Typography>
            <Typography variant="body2" className={classes.text}>Benefits of reading</Typography>
          </Box>
          <Box className={classes.usefullinks}>
            <Typography variant="body1" sx={{fontWeight: 700}}>Useful Links</Typography>
            <Typography variant="body2" className={classes.text}>Pricing</Typography>
            <Typography variant="body2" className={classes.text}>Blinkist Business</Typography>
            <Typography variant="body2" className={classes.text}>Gift Cards</Typography>
            <Typography variant="body2" className={classes.text}>Blinkist magazine</Typography>
            <Typography variant="body2" className={classes.text}>Contact & help</Typography>
          </Box>
          <Box className={classes.company}>
            <Typography variant="body1" sx={{fontWeight: 700}}>Company</Typography>
            <Typography variant="body2" className={classes.text}>About</Typography>
            <Typography variant="body2" className={classes.text}>Careers</Typography>
            <Typography variant="body2" className={classes.text}>Partners</Typography>
            <Typography variant="body2" className={classes.text}>Code Of Conduct</Typography>
          </Box>
        </Box>
        <Box className={classes.frame20}>
          <Logo></Logo>
          <Typography variant="subtitle1" className={classes.ideas}>
            Big Ideas in small packages Start learning now
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
