import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { GetLeaks } from "../hooks/";
import { getFavicon } from "../utils/";

export default function FolderList(): JSX.Element {
  const getLeaks = GetLeaks();

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {getLeaks.map(
        (item: { domain: any; name: string; match: boolean }, i: number) => {
          const tempNetworkInfo = getFavicon({
            domain: item.domain,
            name: item.name,
          });

          return (
            <ListItem
              key={i}
              onClick={() => window.open(item.domain)}
              sx={{ cursor: "pointer" }}
            >
              <ListItemAvatar>
                <Tooltip title='Check it right now'>
                  <Avatar
                    src={tempNetworkInfo}
                    sx={{ width: 36, height: 36 }}
                  />
                </Tooltip>
              </ListItemAvatar>
              <ListItemText
                primary={item.name ?? "Unknown"}
                secondary={item.match ? "Found a match" : "No match found"}
              />
            </ListItem>
          );
        }
      )}
    </List>
  );
}
