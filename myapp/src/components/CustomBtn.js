import React from "react";

import { Tooltip } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

const CustomBtn = ({ children, onClick, tip, btnClassName, tipClassName, btnStyle}) => (
    <Tooltip title={tip} className={tipClassName} style={{btnStyle}}>
        <IconButton onClick={onClick} className={btnClassName}>
            {children}
        </IconButton>
    </Tooltip>
);

export default CustomBtn