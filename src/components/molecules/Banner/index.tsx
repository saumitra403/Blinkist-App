import { makeStyles } from "@mui/styles";


const useStyle = makeStyles({
    banner: {
        width: "912px",
        height: "264px",
        marginTop: "118px"
    }
})


const Banner = () => {
    const classes = useStyle();
    return (<img src="Assets/banner 1.png" className={classes.banner}></img>)
}

export default Banner;