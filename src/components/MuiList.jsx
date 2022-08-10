import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider
} from "@mui/material";
import React from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem>
            <ListItemButton>

          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <AddPhotoAlternateIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 1" secondary='NOI SIEMA' />
            </ListItemButton>
        </ListItem>
        <Divider/>
        <ListItem>
            <ListItemButton>

          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <AddPhotoAlternateIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 1"  secondary='NOI SIEMA' />
            </ListItemButton>
        </ListItem>
        <Divider/>

        <ListItem>
            <ListItemButton>

          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <AddPhotoAlternateIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 1"  secondary='NOI SIEMA'/>
            </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default MuiList;
