import React from "react";

type imgProps = {
    className?: string,
    src: string,
    width?: string,
    height?: string
}

const Img = (props: imgProps) => {
    const {className = ''} = props;
    return <img src={props.src} height={props.height} width={props.width} alt="not found" className={className} data-testid="img"></img>
}

export default Img;