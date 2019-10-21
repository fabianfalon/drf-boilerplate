import React from 'react';
import { connect } from "react-redux";
import HomeContent from '../components/HomeContent';
import { getPublications } from "../actions/publications";
import PropTypes from "prop-types";

export class Home extends React.Component {

  static propTypes = {
    getPublications: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getPublications();
  }


  render() {
    return (
      <HomeContent publications={this.props.publications.publications}
        isFetching={this.props.publications.isFetching} />
    )
  }
}

const mapStateToProps = state => ({
  publications: state.publications
});

export default connect(
  mapStateToProps,
  { getPublications }
)(Home);
