import React from "react";
import './index.css'
import { MoreHoriz } from "@mui/icons-material";

type IconType = {
    Icons: React.ReactNode 
}

const Icon = (props: IconType) => {
    return <div>{props.Icons}</div>
};
export default Icon;
