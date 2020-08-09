var _this = this,
    _jsxFileName = "/Users/Katherine/NewWorkNY/new-work-ny-frontend/new-work-ny/src/App.test.js";

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
test('renders learn react link', function () {
  var _render = render( /*#__PURE__*/React.createElement(App, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 32
    }
  })),
      getByText = _render.getByText;

  var linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});