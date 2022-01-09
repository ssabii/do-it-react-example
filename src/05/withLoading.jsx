import React from 'react';

export default function (loadingMessage = '로딩 중') {
  return function withLoading(WrappedComponent) {
    const { displayName, name: componentName } = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function WithLoading({ isLoading, ...props }) {
      if (isLoading) return loadingMessage;

      return <WrappedComponent {...props} />;
    }
    WithLoading.displayName = `withLoading(${wrappedComponentName})`;
    return WithLoading;
  };
}
