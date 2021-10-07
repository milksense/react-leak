import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard(): JSX.Element {
  return (
    <Card sx={{ maxWidth: "100%", marginBottom: 2 }}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          This React hook provides your social media fingerprint
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Without your consent most major web platforms leak whether you are
          logged in. This allows any website to detect on which platforms you're
          signed up.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='outlined' size='small'>
          Refresh
        </Button>
      </CardActions>
    </Card>
  );
}
