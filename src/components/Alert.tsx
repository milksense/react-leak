import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function ActionAlerts() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert action={<></>}>
        Congratulations! You don't have any social networking sessions
      </Alert>
    </Stack>
  );
}
