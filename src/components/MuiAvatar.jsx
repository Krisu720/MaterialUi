import { Avatar, AvatarGroup, IconButton, Stack } from "@mui/material";
import React from "react";

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ backgroundColor: "primary.light" }}>AW</Avatar>
        <Avatar sx={{ backgroundColor: "success.light" }}>CK</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={2}>
          <Avatar sx={{ backgroundColor: "primary.light" }}>AW</Avatar>
          <Avatar sx={{ backgroundColor: "success.light" }}>CK</Avatar>
          <Avatar src="https://randomuser.me/api/portraits/women/80.jpg">
            Fd
          </Avatar>
          <Avatar src="https://randomuser.me/api/portraits/women/79.jpg">
            Es
          </Avatar>
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar
          variant="square"
          sx={{ backgroundColor: "primary.light", width: 48, height: 48 }}
        >
          AW
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ backgroundColor: "success.light", width: 48, height: 48 }}
        >
          CK
        </Avatar>
      </Stack>
    
    </Stack>
  );
};

export default MuiAvatar;
