import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Theme from './Theme'

import RoundedCard from './index';
import { RoundedCardProps } from './index';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: RoundedCardProps = {
    value: 10,
    caption: 'Failed',
    iconName: 'cloud',
    color: 'black',
    fontSizes: {
      value: '2.7rem',
      caption: '1.2',
      icon: '2.7rem',
    },
    radius: 150,
    rimWidth: 4,
    style: null,
    isShadowed: false,
    theme: Theme.DEFAULT_THEME
  }

  ReactDOM.render(<RoundedCard {...props}/>, div);
});
