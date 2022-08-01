import { Box } from "@mui/material";

export const Rightbar = () => {
  return (
    <Box
      bgcolor="teal"
      flex={2}
      padding={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
};
