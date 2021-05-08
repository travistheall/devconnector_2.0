import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.js';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'components/CustomButtons/Button.js';
import Badge from 'components/Badge/Badge.js';
const useStyles = makeStyles(profilePageStyle);

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
    bio,
    skills
  }
}) => {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.profile}>
      <div>
        <img src={avatar} alt="..." className={imageClasses} />
      </div>
      <div className={classes.name}>
        <h1 className={classes.title}>{name}</h1>
        <h6>
          {status} {company ? <span> at {company}</span> : null}
        </h6>
        <h6>{location ? <span>{location}</span> : null}</h6>
        {bio && (
          <div className={classNames(classes.textCenter)}>
            <p>Bio: {bio}</p>
          </div>
        )}
        <div className={classNames(classes.textCenter)}>
          <span><h4>Skills:</h4></span>
          {skills.map((skill, index) => (
            <Badge key={index} color="info">
              {skill}
            </Badge>
          ))}
        </div>
        {website ? (
          <Button
            justIcon
            simple
            href={website}
            color={'facebook'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-globe fa-2x" />
          </Button>
        ) : null}
        {social
          ? Object.entries(social)
              .filter(([value]) => value)
              .map(([key, value]) => (
                <Button
                  justIcon
                  simple
                  key={key}
                  color={key}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={classes.socials + ` fab fa-${key}`} />
                </Button>
              ))
          : null}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
