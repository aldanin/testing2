import * as React from "react";
import {
  // Logo,
  // Tips
} from "./utils";
import styled from 'styled-components'
import NozzleReader from '../../types/NozzleReader'
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './index.css'

export interface InventoryNozzleReadersTableProps {
  data: NozzleReader[]
}

export interface InventoryNozzleReadersTableState {
  resized: any[],
}

const Wrap = styled.div`
  height: 100%;
`;

const columns = [{
  Header: 'Pump #',
  accessor: 'pumpNo'
}, {
  Header: 'Nozzle #',
  id: 'nozzleNo',
  accessor: d => d.nozzleNo
}, {
  Header: 'Iron Number',
  id: 'ironNumber',
  accessor: d => d.ironNumber
}, {
  Header: 'Nozzle Reader Count',
  accessor: 'NRCount',
}, {
  Header: 'Status',
  accessor: 'status',
}, {
  Header: 'First Usage',
  accessor: 'firstUsage',
}, {
  Header: 'Last Report',
  accessor: 'lastReport',
}, {
  Header: 'Nozzle Model Name',
  accessor: 'nozzleModelName',
}, {
  Header: 'HW Type',
  accessor: 'HWType',
}, {
  Header: 'HW Name',
  accessor: 'HWName',
}, {
  Header: 'Battery Voltage',
  accessor: 'batteryVoltage',
}, {
  Header: 'Aver. Day Usage(Sec)',
  accessor: 'avarageDayUseSec',
}, {
  Header: 'Total Usage Time(Sec)',
  accessor: 'totalUsageTimeSec',
}, {
  Header: 'Refuels',
  accessor: 'refuels',
}, {
  Header: 'Fuel Type',
  accessor: 'fuelType',
}]

class InventoryNozzleReadersTable extends React.Component<
  InventoryNozzleReadersTableProps,
  InventoryNozzleReadersTableState> {
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

export default InventoryNozzleReadersTable;
