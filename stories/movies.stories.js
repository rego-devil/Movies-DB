import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { SortItem } from '../src/client/components/film-sort-item';
import { FilmItem } from '../src/client/components/film-item';


storiesOf('Movies components', module)
  .add('Sort', () => <SortItem value="sort by" sortBy="rating" currentSortField="rating" sortOrderLocal="asc" />)
  .add('Film Item', () => <FilmItem title="Transformers 7" genres="" release_date="2019" vote_average="0" poster_path="https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg" />);