import { Link, Stack, Typography } from "@mui/material";
import React from "react";

const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
        <Link variant="body2" underline="none" color="error" href="#">
          Link
        </Link>
      <Typography variant='h6'>
        <Link underline="none" color="secondary" href="#">
          Link
        </Link>
      </Typography>
    </Stack>
  );
};

export default MuiLink;
