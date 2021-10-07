import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";

import { GetLeaks } from "../hooks/";

export default function FolderList(): JSX.Element {
  const getLeaks = GetLeaks();

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {getLeaks.map(
        (item: { provider: string; loggedIn: boolean }, i: number) => {
          return (
            <ListItem key={i}>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.provider ?? "Unknown"}
                secondary={item.loggedIn ? "Found a match" : "No match found"}
              />
            </ListItem>
          );
        }
      )}
    </List>
  );
}
