import React, { Component } from 'react';
import TodaysPlan from './03/TodaysPlan';

class App extends Component {
  render() {
    return (
      // 아래는 JSX 양식입니다.
      <div className="body">
        <TodaysPlan />
      </div>
    );
  }
}

export default App;
