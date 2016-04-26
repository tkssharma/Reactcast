import React from 'react';
import {render} from 'react-dom';

// import CheckboxWithLabel from './components/CheckboxWithLabel';
// render(
//   <CheckboxWithLabel onLabel="On" offLabel="Off" />,
//   document.getElementById('app')
// );

import InputText from './components/InputText';
render(
  <InputText inputText="hello world" />,
  document.getElementById('app')
);
