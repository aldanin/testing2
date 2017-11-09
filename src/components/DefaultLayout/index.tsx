import * as React from 'react'
import styled from 'styled-components';

const HEADER_SIZE = '5.6rem';

const LayoutView = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: ${HEADER_SIZE};
`;

const MainContainer = styled.div`
  width: 100%;
  height: calc(100% - ${HEADER_SIZE});
`;

interface DefaultLayoutProps {
  header: JSX.Element,
  main: JSX.Element,
}
const DefaultLayout: React.SFC<DefaultLayoutProps> = ({header, main}) => {
  return (
    <LayoutView>
      <HeaderContainer>{header}</HeaderContainer>
      <MainContainer>
        {main}
      </MainContainer>
    </LayoutView>
  )
}

export default DefaultLayout
