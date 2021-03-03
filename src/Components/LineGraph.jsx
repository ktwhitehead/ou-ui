import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import styled from "styled-components/macro";

const LineGraphWrapper = styled("div")`
  width: 90%;
  height: 100%;
`;

const commonProperties = {
  enableSlices: "x"
}

const LineGraph = ({data}) => (
  <LineGraphWrapper>
    <ResponsiveLine
      {...commonProperties}
      data={data}
      axisBottom={{
        tickValues: [0, 720, 1440, 2160, 2880],
        format: seconds => new Date(seconds * 1000).toISOString().substr(14, 5)
      }}
      xScale={{
        type: "linear",
        max: 2880
      }}
      margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
      curve="monotoneX"
      colors={{ scheme: "category10" }}
      legends={[
        {
          anchor: 'right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 2,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 12,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
                on: 'hover',
                style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                }
            }
          ]
        }
      ]}
    />
  </LineGraphWrapper>
)

export default LineGraph;
