import { Button, Grid } from "@mui/material";

export const ToolBar = () => {
  return (
    <div className="toolbar">
      {/**
       * We want a horizontal grid with 3 columns that centers the content
       */}

      <Grid container p={1} justifyContent="center">
        <Button variant={"contained"}>Add Node</Button>

        <Button variant={"contained"} color="success">
          Start
        </Button>

        <Button variant={"contained"} color="error">
          Stop
        </Button>
      </Grid>
    </div>
  );
};
