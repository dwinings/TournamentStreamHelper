import {styled} from "@mui/material";
import {TextField as MuiTextField} from "@mui/material";

const TextField = styled(MuiTextField)(({theme}) =>
    ({
        '& label[data-shrink="false"]': {
            color: theme.palette.text.disabled
        }
    })
);

export default TextField;
