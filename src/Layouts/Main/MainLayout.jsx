import React from 'react';
import { Grid, Cell } from 'styled-css-grid';
import { AmplifySignOut } from '@aws-amplify/ui-react'

const MainLayout = ({ children }) => {
  return (
    <Grid
      columns={"100px 1fr 100px"}
      rows={"minmax(45px,auto) 1fr minmax(45px,auto)"}
      height={"100%"}>
      <Cell width={3}>
        <AmplifySignOut />
      </Cell>

      <Cell>Menu</Cell>
      <Cell>{children}</Cell>
      <Cell>Ads</Cell>

      <Cell width={3}>
        Footer
      </Cell>
    </Grid>
  )
}

export default MainLayout;
