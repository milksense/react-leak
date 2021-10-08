import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Alert from "../components/Alert";
import { GetLeaks } from "../hooks/";
import { getFavicon } from "../utils/";
import { IList } from "../types";

export default function FolderList(): JSX.Element {
  const { data, notFound } = GetLeaks();
  const [checked, setChecked] = useState<boolean>(false);

  switch (notFound) {
    case true:
      return <Alert />;

    default:
      return (
        <>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label='Show only detected'
              onChange={(): void => setChecked(!checked)}
            />
          </FormGroup>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {data.map((item: IList, i: number): JSX.Element | JSX.Element[] => {
              const tempNetworkInfo = getFavicon({
                domain: item.domain,
                name: item.name,
              });
              return !checked ? (
                <>
                  <ListItem
                    sx={{
                      backgroundColor: item.match ? "#f6685e" : "transparent",
                    }}
                    key={i}
                  >
                    <ListItemAvatar>
                      <Tooltip title='Make sure of that'>
                        <Avatar
                          src={tempNetworkInfo}
                          sx={{ width: 36, height: 36, cursor: "pointer" }}
                          variant='rounded'
                          onClick={(): Window | null =>
                            window.open(item.domain)
                          }
                        />
                      </Tooltip>
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.name ?? "Unknown"}
                      secondary={
                        item.match ? "Found a login" : "Session not found"
                      }
                    />
                  </ListItem>
                </>
              ) : (
                <>
                  {item.match && (
                    <ListItem key={i}>
                      <ListItemAvatar>
                        <Tooltip title='Make sure of that'>
                          <Avatar
                            src={tempNetworkInfo}
                            sx={{ width: 36, height: 36, cursor: "pointer" }}
                            variant='rounded'
                            onClick={(): Window | null =>
                              window.open(item.domain)
                            }
                          />
                        </Tooltip>
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.name ?? "Unknown"}
                        secondary={
                          item.match ? "Found a login" : "Session not found"
                        }
                      />
                    </ListItem>
                  )}
                </>
              );
            })}
          </List>
        </>
      );
  }
}
