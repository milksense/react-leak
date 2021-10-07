import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export default function _Container({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}): JSX.Element {
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
