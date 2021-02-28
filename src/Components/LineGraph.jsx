import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import styled from "styled-components";

const LineGraphWrapper = styled("div")`
  width: 75%;
  height: 70%;
`;

const commonProperties = {
  margin: { top: 20, right: 20, bottom: 60, left: 80 },
  enableSlices: 'x',
}

const LineGraph = ({data}) => (
  <LineGraphWrapper>
    <ResponsiveLine
      {...commonProperties}
      data={data}
      axisBottom={{
        tickValues: [0, 720, 1440, 2160, 2880]
      }}
      xScale={{
        type: "linear",
        max: 2880
      }}
      margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
      curve="monotoneX"
      enableGridX={false}
    />
  </LineGraphWrapper>
)

export default LineGraph;
