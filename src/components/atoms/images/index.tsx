import React from "react";

type imgProps = {
    src: string,
    width: string,
    height: string
}

const Img = (props: imgProps) => {
    const styles = {
        height: props.height,
        width: props.width
    }
    return <img src={props.src} height={props.height} width={props.width} alt="not found"></img>
}

export default Img;