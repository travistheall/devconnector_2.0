import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getStudyByAbbrev } from 'actions/study';
import Spinner from 'layout/Spinner';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';

import blogPostsPageStyle from 'assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Parallax from 'components/Parallax/Parallax.js';
const useStyles = makeStyles(blogPostsPageStyle);

const Nutrition = ({ getStudyByAbbrev, study: { study, loading }, match }) => {
  const classes = useStyles();
  useEffect(() => {
    getStudyByAbbrev(match.params.abbrev);
  }, [getStudyByAbbrev, match.params.abbrev]);

  return (
    <div className={classes.section}>
      <Parallax image={"https://tntheall.s3.amazonaws.com/assets/img/bg10.jpg"} small filter="dark">
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <h2 className={classes.title}>
                <AccountCircleIcon />{' '}
                {loading || study === null ? <Spinner /> : study['Abbrev']}
              </h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12}>
            <Card pricing raised>
              <CardBody pricing>
                <p className={classes.cardDescription}>Home. Input Study details later.</p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

Nutrition.propTypes = {
  getStudyByAbbrev: PropTypes.func.isRequired,
  study: PropTypes.object.isRequired,
  match: PropTypes.object
};

const mapStateToProps = (state) => ({
  study: state.study
});

export default connect(mapStateToProps, { getStudyByAbbrev })(Nutrition);
