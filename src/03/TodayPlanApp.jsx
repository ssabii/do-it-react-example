import React, { Component } from 'react';
import TodaysPlan from './TodaysPlan';

class TodayPlanApp extends Component {
  render() {
    const { onButtonClick, hasPlan } = this.props;
    return (
      <div className="body">
        {hasPlan ? <TodaysPlan /> : null}
        <button onClick={onButtonClick}>ęłíěě</button>
      </div>
    );
  }
}

export default TodayPlanApp;
