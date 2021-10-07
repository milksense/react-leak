import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import ImageQR from "../assets/png/qr.png";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 300,
    fontSize: theme.typography.pxToRem(12),
  },
}));

export default function MenuAppBar(): JSX.Element {
  const viewGitHub = () =>
    window.open("https://github.com/milksense/react-leak");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            React Leak
          </Typography>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            color='inherit'
          >
            <HtmlTooltip
              title={
                <>
                  <Typography color='inherit'>
                    You can scan QR with Binance App
                  </Typography>
                  <img src={ImageQR} alt='Logo' style={{ width: "100%" }} />
                </>
              }
            >
              <Badge badgeContent={4} color='warning' variant='dot'>
                <FavoriteBorderIcon />
              </Badge>
            </HtmlTooltip>
          </IconButton>

          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={viewGitHub}
            color='inherit'
          >
            <Tooltip title='View source'>
              <GitHubIcon />
            </Tooltip>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
