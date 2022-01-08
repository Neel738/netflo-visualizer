import { Box, Button } from "@mui/material";
import React from "react";
import Graph, { Network } from "react-graph-vis";
import { Timeline } from "vis";
import { ToolBar } from "./ToolBar";

export const GraphBuilderContainer = () => {
  const [network, setNetwork] = React.useState<Network>();

  const initialGraph = {
    nodes: [
      { id: 1, label: "Node 1", title: "node 1 tootip text" },
      { id: 2, label: "Node 2", title: "node 2 tootip text" },
      { id: 3, label: "Node 3", title: "node 3 tootip text" },
      { id: 4, label: "Node 4", title: "node 4 tootip text" },
      { id: 5, label: "Node 5", title: "node 5 tootip text" },
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
    ],
  };

  const [graph, setGraph] = React.useState(initialGraph);

  const addNode = () => {
    setGraph(({ nodes, edges }) => {
      const id = nodes.length + 1;
      return {
        nodes: [...nodes, { id, label: `Node ${id}`, title: "new title" }],
        edges,
      };
    });
    network?.fit();
  };

  const options = {
    layout: {
      hierarchical: true,
    },
    edges: {
      color: "#000000",
    },
    height: "500px",
    physics: {
      //   enabled: false,
    },
    interaction: {
      zoomView: false,
    },
  };

  const events = {
    select: function (event: { nodes: any; edges: any }) {
      var { nodes, edges } = event;
    },
  };
  return (
    <div className="graph-builder">
      <p>Currently showing {graph.nodes.length} nodes</p>
      {/* <ToolBar /> */}
      <Button variant={"contained"} onClick={addNode}>
        Add Node
      </Button>

      <Box sx={{ border: "1px solid black" }}>
        <Graph
          graph={graph}
          options={options}
          events={events}
          getNetwork={(network) => {
            //  if you want access to vis.js network api you can set the state in a parent component using this property
            setNetwork(network);
          }}
        />
      </Box>

      <Button
        variant={"contained"}
        color={"secondary"}
        onClick={() => {
          network?.fit();
        }}
      >
        Reset View
      </Button>
    </div>
  );
};
