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

const ProfileExperience = ({
  experience: { company, title, location, to, from, description }
}) => {
  const classes = useStyles();
  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} className={classes.gridItem}>
          <Card profile plain className={classes.card}>
            <GridContainer>
              <GridItem xs={12} sm={12}>
                <CardHeader color="primary">{company}</CardHeader>
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
                      <h4 className={classes.cardTitle}>Position:</h4>
                      <p className={classes.description}>{title}</p>
                    </GridItem>
                    <GridItem xs={12} sm={12}>
                      <h4 className={classes.cardTitle}>Location:</h4>
                      <p className={classes.description}>{location}</p>
                    </GridItem>
                    <GridItem xs={12} sm={12}>
                      <h4 className={classes.cardTitle}>Description: </h4>
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

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ProfileExperience;
