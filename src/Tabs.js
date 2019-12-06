import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = { i: 0 };

  render() {
    const { i } = this.state;

    return (
      <>
        <ul className="App__listOfTabs">
          {this.props.tabs.map(
            (tab, index) => (
              <li key={tab.title}>
                <button
                  type="button"
                  key={tab.title}
                  onClick={() => {
                    this.setState({ i: index });
                  }}
                  className={
                    `
                  App__tab ${this.state.i === index
                      ? 'App__tab_active' : ''}
                  `
                  }
                >
                  {tab.title}
                </button>
              </li>
            )
          )
          }
        </ul>
        <h2 className="App__tabContent">
          {this.props.tabs[i].content}
        </h2>
      </>
    );
  }
}

Tabs.propTypes = { tabs: PropTypes.arrayOf(PropTypes.any) };

Tabs.defaultProps = { tabs: [] };

export default Tabs;
