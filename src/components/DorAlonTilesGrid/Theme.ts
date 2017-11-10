export interface ThemeProps {
  textColor: string,
  actionColor: string;
  subService: {
    pazomat: string;
    bookmarks: string;
    contacts: string;
    dorAlon: string;
    profile: string;
    search: string;
    drive: string;
    location: string;
    hangout: string;
    keep: string;
    photos: string;
    passwords: string;
  }
}

export const defaultTheme = {
  textColor: 'black',
  actionColor: '#6576ae',
  subService: {
    pazomat: '#d97164',
    bookmarks: '#b37bca',
    contacts: '#17b0f4',
    dorAlon: '#f89082',
    profile: '#31c0cc',
    search: '#3498db',
    drive: '#f2cc43',
    location: '#66b9a9',
    hangout: '#02873a',
    keep: '#feb900',
    photos: '#66bf2d',
    passwords: '#ef8d36',
  }
}
