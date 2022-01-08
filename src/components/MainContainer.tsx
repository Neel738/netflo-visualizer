import { Button } from "@mui/material";
import React from "react";
import { GraphBuilderContainer } from "./GraphBuilderContainer";
import { ToolBar } from "./ToolBar";

export const MainContainer = () => {
  return (
    <React.Fragment>
      <ToolBar />

      <GraphBuilderContainer />
    </React.Fragment>
  );
};
