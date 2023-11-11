import { Box } from "@mui/material";

const Container = ({ children, onClick, ...rest }) => (
  <Box sx={rest} onClick={onClick}>
    {children}
  </Box>
);

export default Container;
