import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { SortItem } from '../src/client/components/film-sort-item.jsx';
// import { FilmItem } from '../src/client/components/film-item.jsx';


storiesOf('Movies components', module)
  .add('Sort', () => <SortItem value="byOrder" />)
  // .add('Film Item', () => <FilmItem />);
