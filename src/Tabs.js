import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

class Tabs extends React.Component {
  state = { currentIndex: 0 };

  render() {
    const { currentIndex } = this.state;

    return (
      <>
        <ul className="App__listOfTabs">
          {this.props.tabs.map(
            (tab, index) => {
              const btnClass = classNames(
                'App__tab',
                { App__tab_active: this.state.currentIndex === index }
              );

              return (
                <li key={tab.title}>
                  <button
                    type="button"
                    key={tab.title}
                    onClick={() => {
                      this.setState({ currentIndex: index });
                    }}

                    className={btnClass}
                  >
                    {tab.title}
                  </button>
                </li>
              );
            }
          )
          }
        </ul>
        <h2 className="App__tabContent">
          {this.props.tabs[currentIndex].content}
        </h2>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape(
    {
      title: PropTypes.string,
      content: PropTypes.string,
    }
  )),
};

Tabs.defaultProps = { tabs: [] };

export default Tabs;
