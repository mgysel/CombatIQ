import React from "react";
import { 
  Box, 
  Heading, 
  HStack,
  Image, 
  Text, 
  LinkBox, 
  LinkOverlay,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import RingProgress from "../../components/visualisations/RingProgress";
import AntBidirectional from "../../components/visualisations/AntBidirectional";
import MultiLine from "../../components/visualisations/MultiLine";
import { HeatMapGrid } from 'react-grid-heatmap';

const Heatmap = (props) => {

  const xLabels = new Array(10).fill(0).map((_, i) => `${i}`);

  // Display only even labels
  const xLabelsVisibility = new Array(61)
    .fill(0)
    .map((_, i) => (i % 2 === 0 ? true : false));

  const yLabels = new Array(10).fill(0).map((_, i) => `${i}`);
  const data = new Array(yLabels.length)
    .fill(0)
    .map(() =>
      new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100))
    );

  return (
    <>
      <HeatMapGrid
        data={data}
        xLabels={xLabels}
        yLabels={yLabels}
        // Render cell with tooltip
        cellRender={(x, y, value) => (
          <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
        )}
        xLabelsStyle={(index) => ({
          color: index % 2 ? 'transparent' : '#2C7A7B',
          fontSize: '0rem'
        })}
        yLabelsStyle={() => ({
          fontSize: '0rem',
          textTransform: 'uppercase',
          color: '#2C7A7B'
        })}
        cellStyle={(_x, _y, ratio) => ({
          background: `rgb(0, 0, 0, ${ratio})`,
          fontSize: '0rem',
          color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
        })}
        cellHeight='40px'
        xLabelsPos='bottom'
        yLabelsPos='right'
        square
      />
    </>
  );
};

export default Heatmap;
