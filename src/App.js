import React from 'react';
import './App.scss';
import Tabs from './Tabs';

class App extends React.Component {
  state = {
    /* eslint-disable max-len */
    tabs: [
      { title: 'Tab 1', content: 'Some text 1 Some text 1 Some text 1 Some text 1 Some text 1 Some text 1 Some text 1 Some text 1 Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1Some text 1 Some text 1' },
      { title: 'Tab 2', content: 'Some text 2 Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2Some text 2' },
      { title: 'Tab 3', content: 'Some text 3 Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3Some text 3' },
    ],
  };

  render() {
    const { tabs } = this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <Tabs tabs={tabs} />
      </div>
    );
  }
}

export default App;
