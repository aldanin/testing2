import * as React from "react";
import {
  // Logo,
  // Tips
} from "./utils";
import styled from 'styled-components'
import CVS from '../../../../types/CVS'
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './index.css'

export interface InventoryCVSTableProps {
  data: CVS[]
}

export interface InventoryCVSTableState {
  resized: any[],
}

const Wrap = styled.div`
  height: 100%;
`;

const columns = [{
  Header: 'Iron Number',
  accessor: 'ironNumber'
}, {
  Header: 'Status',
  id: 'status',
  accessor: d => d.nozzleNo
}, {
  Header: 'SAM1',
  id: 'SAM1',
  accessor: d => d.SAM1
}, {
  Header: 'SAM2',
  accessor: 'SAM2',
}]

class InventoryCVSTable extends React.Component<
  InventoryCVSTableProps,
  InventoryCVSTableState> {
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

export default InventoryCVSTable;
