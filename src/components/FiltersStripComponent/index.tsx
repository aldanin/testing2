import * as React from 'react'
import styled from 'styled-components'
import DropdownGeneric from '../../appWidgets/DropdownGeneric'

export interface FiltersStripComponentProps {
  selectType: (value: number) => void,
}

interface InnerProps {
  isLeftMost?: boolean,
}

const Root = styled.div`
  height: 100%;
  width: auto; 
`;

const RightPart = styled.div`
  float: right;
  height: 100%;
`;

const LeftPart = styled.div`
  float: left;
  width: auto;
  height: 100%;
  position: relative;
  bottom: calc(50% - 3.5rem / 4);
`;

const DropdownWrap = styled.div`
  display: inline-block;
  margin-left: ${(props: InnerProps) => props.isLeftMost ? 0 : -25}px;
`;

const ShowAllWrap = styled(DropdownWrap)`
 padding: 1.1rem 1rem 1.1rem 1.1rem;
`;

const ShowAll = styled.span`
  color: #9FA1A2; 
`;

class FiltersStripComponent extends React.Component<FiltersStripComponentProps, {}> {
  static defaultProps: Partial<FiltersStripComponentProps> = {}

  constructor(props: FiltersStripComponentProps) {
    super(props)

  }

  render() {
    return (
      <Root>
        <LeftPart>
          <DropdownWrap
            isLeftMost={true}
          >
            <DropdownGeneric
              caption={'Sub-Service'}
              values={['type1', 'type2']}
              selectCallback={this.props.selectType}
              style={{right: -0}}
            />
          </DropdownWrap>
          <DropdownWrap>
            <DropdownGeneric
              caption={'Entity'}
              values={['type1', 'type2']}
              selectCallback={this.props.selectType}
              style={{right: -0}}
            />
          </DropdownWrap>
          <DropdownWrap>
            <DropdownGeneric
              caption={'Proxy'}
              values={['type1', 'type2']}
              selectCallback={this.props.selectType}
              style={{right: -0}}
            />
          </DropdownWrap>
          <DropdownWrap>
            <DropdownGeneric
              caption={'Status'}
              values={['type1', 'type2']}
              selectCallback={this.props.selectType}
              style={{right: -0}}
            />
          </DropdownWrap>
        </LeftPart>
        <RightPart>
          <ShowAllWrap>
            <ShowAll>Show All</ShowAll>
          </ShowAllWrap>
        </RightPart>
      </Root>
    )
  }
}

export default FiltersStripComponent;
