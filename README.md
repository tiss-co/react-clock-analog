# react-clock-analog

> Simple analog clock for React

[![NPM](https://img.shields.io/npm/v/react-clock-analog.svg)](https://www.npmjs.com/package/react-clock-analog) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i react-clock-analog
```
or
```bash
yarn add react-clock-analog
```

## Usage

```jsx
import React from 'react';
import './index.css';

import { AnalogClock } from 'react-clock-analog';
import 'react-clock-analog/dist/index.css';

const App = () => {
  return (
      <AnalogClock
        className='AnalogClock'
        hour={4}
        minute={30}
        loading={false}
        darkMode={false}
        centerDot={true}
      />
  );
};

export default App;

```

## License

MIT © [boof-tech](https://github.com/boof-tech)
