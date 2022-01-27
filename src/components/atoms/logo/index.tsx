type LogoProps = {
    className? : string
}

const Logo = (props: LogoProps) => {
    return (<img src="Assets/Blinklist 1.jpg" className={props.className}></img>)
}

export default Logo;