import * as React from "react";
import {
  // makeData,
  // Logo,
  // Tips
} from "./utils";
import { StationInventorySummary } from '../../types/StationInventorySummary'
import ReactTable from "react-table";
import "react-table/react-table.css";

export interface TestTableProps {
  data: StationInventorySummary[]
}

export interface TestTableState{
  data: StationInventorySummary[]
}

const columns = [{
  Header: 'Customer Name',
  accessor: 'customerName'
}, {
  Header: 'Station Name',
  id: 'lastName',
  accessor: d => d.stationName
},{
  Header: 'Station #',
  id: 'lastName',
  accessor: d => d.stationNumber
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
  Header: 'Station #',
  id: 'lastName',
  accessor: d => d.stationNumber
},{
  Header: 'Vehical RFU Count',
  accessor: 'RFU_z',
},{
  Header: 'NR RFU Count',
  accessor: 'RFU_FHS',
},{
  Header: 'Refuels',
  accessor: 'refuels',
},{
  Header: 'Pauses',
  accessor: 'pauses',
},{
  Header: 'Pauses/Refuel Ratio',
  accessor: 'pausesRefuelRatio',
},{
  Header: 'Aver. Refuel Time(Sec)',
  accessor: 'averageRefuelTimeSec',
},{
  Header: 'Max NR Usage(Sec)',
  accessor: 'maxNRUsageSec',
},{
  Header: 'Aver. NR Usage(Sec)',
  accessor: 'averageNRUsageSec',
},{
  Header: 'System Version',
  accessor: 'systemVersion',
},{
  Header: 'Avar. Day Use(Sec)',
  accessor: 'avarageDayUseSec',
},{
  Header: 'Avar. Refuel Count/Day',
  accessor: 'averageRefuelCount_Day',
},{
  Header: 'Last Report Time',
  accessor: 'lastReportTime',
},{
  Header: 'HW Version',
  accessor: 'HWVersion',
}]

class TestTable extends React.Component<TestTableProps, TestTableState> {
  constructor() {
    super();
    // this.state = {
    //   data: makeData()
    // };
  }
  render() {
    // const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={this.props.data}

          columns={columns}
          defaultPageSize={20}
          style={{
            height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
          }}
          className="-striped -highlight"
          SubComponent={row => {
            return (
              <div style={{ padding: "20px" }}>
                <em>
                  You can put any component you want here, even another React
                  Table!
                </em>
                <br />
                <br />
                <ReactTable
                  data={this.props.data}
                  columns={columns}
                  defaultPageSize={3}
                  showPagination={false}
                  SubComponent={row => {
                    return (
                      <div style={{ padding: "20px" }}>
                        Another Sub Component!
                      </div>
                    );
                  }}
                />
              </div>
            );
          }}
        />
        {/*<br />*/}
        {/*<Tips />*/}
        {/*<Logo />*/}
      </div>
    );
  }
}

export default TestTable;
