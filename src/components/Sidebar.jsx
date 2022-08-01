import { Box } from "@mui/material";

export const Sidebar = () => {
  return (
    <Box
      bgcolor="skyblue"
      flex={1}
      padding={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Sidebar
    </Box>
  );
};
