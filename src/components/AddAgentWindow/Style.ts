import styled from 'styled-components';

export const FrameView = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  padding-bottom: 2rem;
`;

export const TitleContainer = styled.div`
  width: 12rem;
  font-size: 1.5rem;
`;

export const SubText = styled.div`
  width: 12rem;
  font-size: 1.3rem;
  padding-left: 2rem;
`;

export const RepeatContainer = styled.div`
  display: flex;
  width: 5rem;
  border-bottom: 1px solid ${prop => prop.theme.inputBorder};
  line-height: 2rem;
  position: relative;
  top: -0.2rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`;

export const RepeatInput = styled.input`
  width: 2rem;
  border: none;
  outline:0 !important;
  max-length: 1;
  text-indent: 0.5rem;
  color: ${prop => prop.theme.actionText};
`;

export const RepeatButton = styled.button`
  height: 1rem;
  width: 1rem;
  background-color: white;
  cursor: pointer;
  border: none;
  outline: 0 !important;
  
  &:last-child {
    margin: 0;
  }
`;

export const RepeatIcon = styled.i`
  position: relative;
  top: -8px;
  left: -10px;
  font-size: 2.1rem;
  color: ${prop => prop.theme.actionText};
`;

export const DateContainer = styled.div`
  display: flex;
`;

export const DateInput = styled.input`
  border: none;
  outline:0 !important;
  color: ${prop => prop.theme.actionText};
  border-bottom: 1px solid ${prop => prop.theme.inputBorder};
  width: 7rem;
`;

export const DateIcon = styled.i`
  position: relative;
  font-size: 2rem;
  color: ${prop => prop.theme.actionText};
  padding-left: 1rem;
`;

export const EndRadioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EndOption = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
`;

export const RepeatByOption = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
`;

export const EndOptionText = styled.div`
  position: relative;
  top: 3px;
`;

export const RepeatByOptionText = styled.div`
  position: relative;
  top: 3px;
  padding-right: 2rem;
`;

export const AfterInput = styled.input`
  margin: 0 1rem;
  border: none;
  outline: 0 !important;
  border-bottom: 1px solid ${prop => prop.theme.inputBorder};
  width: 3rem;
  font-size: 1.1rem;
  text-indent: 0.5rem;
  position: relative;
  top: 0.3rem;
`;

export const EndDateInput = styled.input`
  margin: 0 1rem;
  border: none;
  outline: 0 !important;
  border-bottom: 1px solid ${prop => prop.theme.inputBorder};
  width: 12rem;
  font-size: 1.1rem;
  text-indent: 0.5rem;
  position: relative;
  top: 0.3rem;
`;
