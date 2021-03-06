import * as React from "react";
import {
  makeData,
  // Logo,
  // Tips
} from "./utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export interface TestTableState{
  data: any
}

class TestTable extends React.Component<{}, TestTableState> {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[{
            Header: 'Name',
            columns: [{
              Header: 'First Name',
              accessor: 'firstName'
            }, {
              Header: 'Last Name',
              id: 'lastName',
              accessor: d => d.lastName
            }]
          }, {
            Header: 'Info',
            columns: [{
              Header: 'Profile Progress',
              accessor: 'progress',
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
              Header: 'Status',
              accessor: 'status',
              Cell: row => (
                <span>
            <span style={{
              color: row.value === 'relationship' ? '#ff2e00'
                : row.value === 'complicated' ? '#ffbf00'
                  : '#57d500',
              transition: 'all .3s ease'
            }}>
              &#x25cf;
            </span> {
                  row.value === 'relationship' ? 'In a relationship'
                    : row.value === 'complicated' ? `It's complicated`
                    : 'Single'
                }
          </span>
              )
            }]
          }]}
          defaultPageSize={20}
          style={{
            height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
          }}
          className="-striped -highlight"
        />
        {/*<br />*/}
        {/*<Tips />*/}
        {/*<Logo />*/}
      </div>
    );
  }
}

export default TestTable;
