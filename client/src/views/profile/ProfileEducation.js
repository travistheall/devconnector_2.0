import React from 'react';
import PropTypes from 'prop-types';
import formatDate from 'utils/formatDate';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import { makeStyles } from '@material-ui/core/styles';
import Muted from 'components/Typography/Muted.js';
import Badge from 'components/Badge/Badge.js';
const useStyles = makeStyles(profilePageStyle);
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.js';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, to, from, description }
}) => {
  const classes = useStyles();
  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} className={classes.gridItem}>
          <Card profile plain className={classes.card}>
            <GridContainer>
              <GridItem xs={12} sm={12}>
                <CardHeader color="primary">{school}</CardHeader>
              </GridItem>
              <GridItem xs={12} sm={12}>
                <CardBody plain>
                  <GridContainer>
                    {to ? (
                      <GridItem xs={12} sm={12}>
                        <Muted>
                          Start: {formatDate(from)} End: {formatDate(to)}
                        </Muted>
                      </GridItem>
                    ) : (
                      <>
                        <GridItem xs={10}>
                          <Muted>Start: {formatDate(from)} </Muted>
                        </GridItem>
                        <GridItem xs={2}>
                          <Badge className={classes.badge} color="success">
                            Current
                          </Badge>
                        </GridItem>
                      </>
                    )}
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12}>
                      <h4 className={classes.cardTitle}>Degree: </h4>{' '}
                      <p className={classes.description}>{degree}</p>
                    </GridItem>
                    <GridItem xs={12} sm={12}>
                      <h4 className={classes.cardTitle}>Field Of Study: </h4>{' '}
                      <p className={classes.description}>{fieldofstudy}</p>
                    </GridItem>
                    <GridItem xs={12} sm={12}>
                      <h4 className={classes.cardTitle}>Description: </h4>{' '}
                      <p className={classes.description}>{description}</p>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
