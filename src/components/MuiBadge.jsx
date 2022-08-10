import { Badge, Stack } from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";

const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={4} color="primary">
          <MailIcon fontSize='large' />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
          <MailIcon fontSize='large' />
      </Badge>
      <Badge badgeContent={142} max={999} color="secondary" showZero>
          <MailIcon fontSize='large' />
      </Badge>
      <Badge variant='dot' invisible={true} color="primary">
          <MailIcon fontSize='large' />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
