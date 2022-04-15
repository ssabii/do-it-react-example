import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLocation } from '../actions/routerActions';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';

class RouterStateContainer extends PureComponent {
  componentDidMount() {
    const { setLocation, location } = this.props;
    setLocation(location);
  }

  componentDidUpdate() {
    const { setLocation, location } = this.props;
    setLocation(location);
  }

  render() {
    return null;
  }
}

RouterStateContainer.propTypes = {
  setLocation: PropTypes.func,
  location: PropTypes.object,
};

export default compose(connect(null, { setLocation }), withRouter)(RouterStateContainer);
