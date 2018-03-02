import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { State, Store} from '@sambego/storybook-state';

import  RenderTweet  from '../components/render-tweet'

const store = new Store({
  tweet: ""
});

storiesOf('Render Tweet', module)
  .add('with plain tweet', () => (
    <div>
      <State store={store}><RenderTweet /></State>
      <br/><br/><textarea id="txtJson" onChange={(e)=>store.set({tweet:e.target.value})}></textarea>
    </div>
  ))
  .add('with more complex tweet', () => <RenderTweet/>);
