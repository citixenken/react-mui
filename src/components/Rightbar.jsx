import { Box, Typography } from "@mui/material";

export const Rightbar = () => {
  return (
    <Box flex={2} padding={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
      </Box>
    </Box>
  );
};
