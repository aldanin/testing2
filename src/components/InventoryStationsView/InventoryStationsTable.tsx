import * as React from "react";
import {
  // Logo,
  // Tips
} from "./utils";
import styled from 'styled-components'
import { StationInventorySummary } from '../../types/StationInventorySummary'
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as RosemanTypes from '../../types/RosemanTypes'
import './index.css'
// import TabGeneric from '../../appWidgets/TabGeneric'


//import MainNozzleReadersTable from './MainNozzleReadersTable'

export interface MainStationsTableProps {
  data: StationInventorySummary[],
  onRowSelected: (stationId: RosemanTypes.RosemanID, deviceType: RosemanTypes.DeviceTypes) => void,
}

export interface MainStationsTableState {
  resized: any[],
  currentRowIndex: number
}

const Wrap = styled.div`
  height: 100%;
`;


const columns = [{
  Header: 'Customer Name',
  accessor: 'customerName'
}, {
  Header: 'Station Name',
  id: 'stationName',
  accessor: d => d.stationName
}, {
  Header: 'Station #',
  id: 'stationId',
  accessor: d => d.stationId
}, {
  Header: 'Nozzle Reader Count',
  accessor: 'NRCount',
  Cell: row => (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#dadada',
        borderRadius: '2px'
      }}
    >
      <div
        style={{
          width: `${row.value}%`,
          height: '100%',
          backgroundColor: row.value > 66 ? '#85cc00'
            : row.value > 33 ? '#ffbf00'
              : '#ff2e00',
          borderRadius: '2px',
          transition: 'all .2s ease-out'
        }}
      />
    </div>
  )
}, {
  Header: 'Vehical RFU Count',
  accessor: 'RFU_z',
}, {
  Header: 'NR RFU Count',
  accessor: 'RFU_FHS',
}, {
  Header: 'Refuels',
  accessor: 'refuels',
}, {
  Header: 'Pauses',
  accessor: 'pauses',
}, {
  Header: 'Pauses/Refuel Ratio',
  accessor: 'pausesRefuelRatio',
}, {
  Header: 'Aver. Refuel Time(Sec)',
  accessor: 'averageRefuelTimeSec',
}, {
  Header: 'Max NR Usage(Sec)',
  accessor: 'maxNRUsageSec',
}, {
  Header: 'Aver. NR Usage(Sec)',
  accessor: 'averageNRUsageSec',
}, {
  Header: 'System Version',
  accessor: 'systemVersion',
}, {
  Header: 'Avar. Day Use(Sec)',
  accessor: 'avarageDayUseSec',
}, {
  Header: 'Avar. Refuel Count/Day',
  accessor: 'averageRefuelCount_Day',
}, {
  Header: 'Last Report Time',
  accessor: 'lastReportTime',
}, {
  Header: 'HW Version',
  accessor: 'HWVersion',
}]

class MainStationsTable extends React.Component<MainStationsTableProps, MainStationsTableState> {
  constructor() {
    super();
    this.state = {
      currentRowIndex: 0,
      resized: []
    };
  }


  onTableScroll = (ev) => {
    const tbody = ev.target;
    const scrollTop = tbody.scrollTop;
    if (scrollTop === 0) { //&& this.props.withTop) {

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

  onDeviceSelected = (deviceName: string) => {

  }

  render() {
    // const viewerModeTabs = [{
    //   title: 'Nozzle Readers',
    //   callback: () => this.onDeviceSelected('All'),
    // }, {
    //   title: 'RFU',
    //   callback: () => this.onDeviceSelected('PazInc'),
    // }, {
    //   title: 'CVS',
    //   callback: () => this.onDeviceSelected('DorAlon'),
    // }];

    return (
      <Wrap>
        <ReactTable
          data={this.props.data}

          columns={columns}
          defaultPageSize={20}
          style={{
            height: '100%',
          }}
          className="-striped -highlight"

          onResizedChange={resized => this.setState({resized})}
          onFetchData={(ev: any) => console.log('event', ev)}
          getTbodyProps={(state, rowInfo, column, instance) => {
            return {
              onScroll: (e) => {
                this.onTableScroll(e)
                // console.log('onScroll', e.target.scrollTop)
              }
            }
          }}
          getTdProps={(state, rowInfo, column, instance, handleOriginal) => {
            const rowData = rowInfo ? rowInfo.original : null;
            return {
              onClick: (e, handleOriginal) => {

                console.log('A Td Element was clicked!')
                console.log('it produced this event:', e)
                console.log('It was in this column:', column)
                console.log('It was in this row:', rowData, rowInfo)
                console.log('It was in this table instance:', instance)

                this.props.onRowSelected(rowData.stationId, RosemanTypes.DeviceTypes.NozzleReader)

                if (handleOriginal) {
                  handleOriginal()
                }
              }
            }
          }
          }
        >
          {(state, makeTable, instance) => {
            console.log('state', state)
            return (
              <Wrap >
                {/*<pre><code>state.allVisibleColumns === {JSON.stringify(state.allVisibleColumns, null, 4)}</code></pre>*/}
                {makeTable()}
              </Wrap>
            )
          }}
        </ReactTable>
        {/*<br />*/}
        {/*<Tips />*/}
        {/*<Logo />*/}
      </Wrap>
    );
  }
}

export default MainStationsTable;
