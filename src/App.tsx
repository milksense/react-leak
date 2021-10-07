import * as React from "react";
import AppBar from "./components/AppBar";
import Card from "./components/Card";
import Container from "./components/Container";
import List from "./components/List";

export default function App(): JSX.Element {
  return (
    <>
      <AppBar />
      <Container>
        <Card />
        <List />
      </Container>
    </>
  );
}
