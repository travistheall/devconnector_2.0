import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGithubRepos } from 'actions/profile';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(profilePageStyle);
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.js';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username]);
  const classes = useStyles();
  return (
    <>
      {repos.map((repo) => (
        <div key={repo.id}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} className={classes.gridItem}>
              <Card profile plain className={classes.card}>
                <CardHeader color="primary">
                  <Button
                    color="github"
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </Button>
                </CardHeader>
                <GridItem xs={12} sm={12}>
                  <CardBody plain>
                    <GridContainer justify="center">
                      <p className={classes.description}>{repo.description}</p>
                      <ul className={classes.listUnstyled}>
                        <li className="badge badge-primary">
                          Stars: {repo.stargazers_count}
                        </li>
                        <li className="badge badge-dark">
                          Watchers: {repo.watchers_count}
                        </li>
                        <li className="badge badge-light">
                          Forks: {repo.forks_count}
                        </li>
                      </ul>
                    </GridContainer>
                  </CardBody>
                </GridItem>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      ))}
    </>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
