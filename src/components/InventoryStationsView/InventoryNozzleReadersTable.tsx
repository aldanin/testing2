import * as React from "react";
import {
  // Logo,
  // Tips
} from "./utils";
import NozzleReader from '../../types/NozzleReader'
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './index.css'
//import { RosemanID } from "../../types/RosemanTypes";

export interface InventoryNozzleReadersTableProps {
  //currentStationId?: RosemanID,
  data: NozzleReader[],
  //loadData: (stationId: RosemanID, deviceType: string) => void,
}

export interface InventoryNozzleReadersTableState {
  resized: any[],
}

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
  Header: 'Avar. Day Use(Sec)',
  accessor: 'avarageDayUseSec',
}, {
  Header: 'Total Usage(Sec)',
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
  static defaultProps: Partial<InventoryNozzleReadersTableProps> = {
   // currentStationId: -1,
    data: [],
  };

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
      <div>
        <ReactTable
          data={this.props.data || []}

          columns={columns}
          defaultPageSize={20}
          style={{
            height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
          }}
          className="-striped -highlight"
          SubComponent={row => {
            return (
              <div style={{padding: "20px"}}>
                <em>
                  You can put any component you want here, even another React
                  Table!
                </em>
                <br/>
                <br/>
                <ReactTable
                  data={[]}
                  columns={columns}
                  defaultPageSize={10}
                  showPagination={false}
                  SubComponent={row => {
                    return (
                      <div style={{padding: "20px"}}>
                        Another Sub Component!
                      </div>
                    );
                  }}
                />
              </div>
            );
          }}
          onResizedChange={resized => this.setState({resized})}
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
                console.log('A Td Element was clicked!')
                console.log('it produced this event:', e)
                console.log('It was in this column:', column)
                console.log('It was in this row:', rowInfo)
                console.log('It was in this table instance:', instance)

                // IMPORTANT! React-Table uses onClick internally to trigger
                // events like expanding SubComponents and pivots.
                // By default a custom 'onClick' handler will override this functionality.
                // If you want to fire the original onClick handler, call the
                // 'handleOriginal' function.
                if (handleOriginal) {
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

export default InventoryNozzleReadersTable;
