import React, { Component } from 'react';

export default function withHoC(WrapperComponent) {
  const { displayName, name: componentName } = WrapperComponent;
  const wrappedComponentName = displayName || componentName;
  return class WithHoc extends React.Component {
    static displayName = `withHoC(${wrappedComponentName})`;
    render() {
      return <WrapperComponent {...this.props} />;
    }
  };
}
