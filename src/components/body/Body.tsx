import {Box} from "@mui/material";
import Home from "./home/Home";

const Body = () => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            flexGrow={1}>
            <Home/>
        </Box>
    );
}

export default Body;