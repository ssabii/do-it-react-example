import React, { Component as PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchResultTable extends PureComponent {
  render() {
    const { items } = this.props;

    return (
      <table border="1" width="100%">
        <thead>
          <tr>
            <td>아이디</td>
            <td>이름</td>
            <td>나이</td>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, name, age }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

SearchResultTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      age: PropTypes.number,
    }),
  ),
};

SearchResultTable.defaultProps = {
  items: [],
};

export default SearchResultTable;
