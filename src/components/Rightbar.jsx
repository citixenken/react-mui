import React from "react";
import {
  Box,
  Typography,
  AvatarGroup,
  Avatar,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";

export const Rightbar = () => {
  return (
    <Box flex={2} padding={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/6626882/pexels-photo-6626882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/7013617/pexels-photo-7013617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/4924538/pexels-photo-4924538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={6}>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/2664399/pexels-photo-2664399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/12989553/pexels-photo-12989553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/10535367/pexels-photo-10535367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/4674370/pexels-photo-4674370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/4924538/pexels-photo-4924538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://images.pexels.com/photos/7013617/pexels-photo-7013617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
