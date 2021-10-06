import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

interface IContainer {
  children?: JSX.Element | JSX.Element[];
}

export default function _Container({ children }: IContainer) {
  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          marginTop: 2,
        }}
      >
        {children}
      </Container>
    </>
  );
}
