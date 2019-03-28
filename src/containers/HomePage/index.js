import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'store/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { changeUserName, reposLoad } from './actions';
import { makeSelectUsername, makeSelectRepos } from './selectors';

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(changeUserName(evt.target.value));
      dispatch(reposLoad(name));
    }
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
  render() {
    return (
      <div className="homepage">
        <input
          value={this.props.username}
          onChange={this.props.onChangeUsername}
        />
        <span>{this.props.username}</span>
        <pre>{JSON.stringify(this.props.githubData)}</pre>
      </div>
    );
  }
}

export default HomePage;
