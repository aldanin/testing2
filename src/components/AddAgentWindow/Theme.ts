export interface ThemeProps {
  overlay: string; // will move in the future to new file
  textColor: string,
  subTitleColor: string;
  windowBorder: string;
  windowBgColor: string;
  primaryColor: string;
  titleColor: string;
  inputBorder: string;
  valueColor: string;
  actionText: string;
  footerBgColor: string;
  close: string;
}

export const defaultTheme = {
  overlay: 'rgba(0,0,0, 0.3)', // will move in the future to new file
  textColor: 'black',
  subTitleColor: '#9fa1a2',
  windowBorder: 'white',
  windowBgColor: 'white',
  primaryColor: '#2e9ec3',
  titleColor: 'white',
  inputBorder: '#e1e0e0',
  valueColor: '#425762',
  actionText: '#6576ae',
  footerBgColor: '#f4f5f9',
  close: '#50b3d6',
}
