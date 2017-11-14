import * as React from "react";
import {
  // Logo,
  // Tips
} from "./utils";
import { StationInventorySummary } from '../../types/StationInventorySummary'
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as RosemanTypes from '../../types/RosemanTypes'
import './index.css'
import TabGeneric from '../../appWidgets/TabGeneric'
import InventoryNozzleReadersTable from './InventoryNozzleReadersTable'


//import InventoryNozzleReadersTable from './InventoryNozzleReadersTable'

export interface InventoryStationsTableProps {
  data: StationInventorySummary[],
  onRowExpanded: (stationId: RosemanTypes.RosemanID, deviceType: string) => void,
}

export interface InventoryStationsTableState {
  resized: any[],
}

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

class InventoryStationsTable extends React.Component<InventoryStationsTableProps, InventoryStationsTableState> {
  constructor() {
    super();
    this.state = {

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
    console.log('rendered')
    const viewerModeTabs = [{
      title: 'Nozzle Readers',
      callback: () => this.onDeviceSelected('All'),
    }, {
      title: 'RFU',
      callback: () => this.onDeviceSelected('PazInc'),
    }, {
      title: 'CVS',
      callback: () => this.onDeviceSelected('DorAlon'),
    }];

    return (
      <div style={{height: '100%'}}>
        <ReactTable
          data={this.props.data}

          columns={columns}
          defaultPageSize={20}
          style={{
            height: "calc(100% - 20px)"
          }}
          className="-striped -highlight"
          SubComponent={row => {
            const rowItem = row.original || {devices:{}};
            console.log('row===>', row)
            return (
              <div style={{
                margin: '20px',
                backgroundColor: '#e1eef3',
                border: 'solid 1px silver',
                padding: '10px'
              }}>
                <TabGeneric
                  tabs={viewerModeTabs}
                  initialSelectedIndex={1}
                />
                <InventoryNozzleReadersTable
                  data={rowItem.devices.NozzleReader}
                 />
              </div>
            );
          }}
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
            //const rowData = rowInfo ? rowInfo.original : null;
            return {
              onClick: (e, handleOriginal) => {
                // console.log('A Td Element was clicked!')
                // console.log('it produced this event:', e)
                // console.log('It was in this column:', column)
                // console.log('It was in this row:', rowData, rowInfo)
                // console.log('It was in this table instance:', instance)

              this.props.onRowExpanded(1, 'NozzleReader')
                // IMPORTANT! React-Table uses onClick internally to trigger
                // events like expanding SubComponents and pivots.
                // By default a custom 'onClick' handler will override this functionality.
                // If you want to fire the original onClick handler, call the
                // 'handleOriginal' function.

                if (handleOriginal) {
                  // console.log('handleOriginal1',handleOriginal)
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
      </div>
    );
  }
}

export default InventoryStationsTable;
