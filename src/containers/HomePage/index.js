import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'store/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import {changeUserName, reposLoad} from './actions';
import {makeSelectUsername, makeSelectRepos} from './selectors';

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUserName(evt.target.value)),
    reposLoad: () => dispatch(reposLoad('addamx')),
  };
}

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  githubData: makeSelectRepos()
});
// const mapStateToProps = (state) => ({
//   username: selectHome(state).get('username')
// });
// const mapStateToProps = state => ({
//   username: state.get('home').get('username')
// });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'home', reducer });

const withSaga = injectSaga({ key: 'home', saga });

@withSaga
@withReducer
@withConnect
class HomePage extends React.Component {

  componentDidMount() {
    this.props.reposLoad();
  }

  render () {
    return (
      <div className="homepage">
        {JSON.stringify(this.props.githubData)}
        <span>{this.props.username}</span>
      </div>
    );
  }
}

export default HomePage;
