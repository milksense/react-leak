import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Alert from "../components/Alert";
import { GetLeaks } from "../hooks/";
import { getFavicon } from "../utils/";
import { IList } from "../types";

export default function FolderList(): JSX.Element {
  const { data, notFound } = GetLeaks();

  switch (notFound) {
    case true:
      return <Alert />;

    default:
      return (
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {data.map((item: IList, i: number): JSX.Element | JSX.Element[] => {
            const tempNetworkInfo = getFavicon({
              domain: item.domain,
              name: item.name,
            });
            return (
              <ListItem key={i}>
                <ListItemAvatar>
                  <Tooltip title='Make sure of that'>
                    <Avatar
                      src={tempNetworkInfo}
                      sx={{ width: 36, height: 36, cursor: "pointer" }}
                      variant='rounded'
                      onClick={() => window.open(item.domain)}
                    />
                  </Tooltip>
                </ListItemAvatar>
                <ListItemText
                  primary={item.name ?? "Unknown"}
                  secondary={item.match ? "Found a login" : "Session not found"}
                />
              </ListItem>
            );
          })}
        </List>
      );
  }
}
