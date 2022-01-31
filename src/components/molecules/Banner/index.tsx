import { makeStyles } from "@mui/styles";


const useStyle = makeStyles({
    banner: {
        position: "absolute",
        left: "264px",
        top: "118px"
    }
})


const Banner = () => {
    const classes = useStyle();
    return (<img src="Assets/banner 1.png" className={classes.banner}></img>)
}

export default Banner;