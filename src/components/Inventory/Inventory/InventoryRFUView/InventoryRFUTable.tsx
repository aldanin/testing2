import * as React from "react";
import {
  // Logo,
  // Tips
} from "./utils";
import styled from 'styled-components'
import RFU from '../../../../types/RFU'
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './index.css'

export interface InventoryRFUTableProps {
  data: RFU[]
}

export interface InventoryRFUTableState {
  resized: any[],
}

const Wrap = styled.div`
  height: 100%;
`;

const columns = [{
  Header: 'RFU Type',
  accessor: 'RFUType'
}, {
  Header: 'First Usage',
  id: 'firstUsage',
  accessor: d => d.firstUsage
}, {
  Header: 'Last Report',
  id: 'lastReport',
  accessor: d => d.lastReport
}, {
  Header: 'Iron Number',
  accessor: 'ironNumber',
}, {
  Header: 'Channel',
  accessor: 'channel',
}, {
  Header: 'Port',
  accessor: 'port',
}, {
  Header: 'Location',
  accessor: 'location',
}]

class InventoryRFUTable extends React.Component<
  InventoryRFUTableProps,
  InventoryRFUTableState> {
  constructor() {
    super();
    this.state = {

      resized: []
    };
  }

  onTableScroll = (ev) => {
    const tbody = ev.target;
    const scrollTop = tbody.scrollTop;
    if (scrollTop === 0 ) { //&& this.props.withTop) {

      // if (true) { //(this.scrollingIntoViewTop) {
      //   //this.scrollingIntoViewTop = false;
      //   tbody.scrollTop =30; // SCROLLTOP_OVERHEAD;
      // } else {
      //  // this.firstChild = tbody.firstChild;
      //  // // this.props.onTopReach();
      //  //  if (!this.props.fetchedFirstPage) {
      //  //    //
      //  //    // At this point, reaching the top scroller position means fetching a descending (previous) page.
      //  //    // We want to accommodate this behaviour by lowering the scroller position to an up-scrollable position,
      //  //    // for smooth action:
      //  //    //
      //  //    tbody.scrollTop = 30; //SCROLLTOP_OVERHEAD;
      //  //  }
      // }
      console.log('onTopReach')
    }

    if (tbody.scrollHeight - 70 < scrollTop + tbody.clientHeight) {
     // this.firstChild = null;

      console.log('onBottomReach')
      //this.props.onBottomReach();
    }
  }

  render() {
    return (
      <Wrap>
        <ReactTable
          data={this.props.data}

          columns={columns}
          defaultPageSize={20}
          style={{
            height: '100%'
          }}
          className="-striped -highlight"
          onResizedChange={resized => this.setState({resized})}
          onFetchData={ (ev: any) => console.log('event',ev)}
          getTbodyProps={ (state, rowInfo, column, instance) =>{
            return {
              onScroll: (e ) => {
                this.onTableScroll(e)
               // console.log('onScroll', e.target.scrollTop)
              }
            }
          }}
          getTdProps={(state, rowInfo, column, instance) => {
            return {
              onClick: (e, handleOriginal) => {
                console.log('click')
                if (rowInfo && handleOriginal) {
                  handleOriginal()
                }
              }
            }
          }
          }
        />
        {/*<br />*/}
        {/*<Tips />*/}
        {/*<Logo />*/}
      </Wrap>
    );
  }
}

export default InventoryRFUTable;
