/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from 'actions/post';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Reply from '@material-ui/icons/Reply';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Media from 'components/Media/Media.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import { getCurrentProfile } from 'actions/profile';
import Spinner from 'layout/Spinner'
import style from 'assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.js';

const useStyles = makeStyles(style);

const CreatePost = ({
  getCurrentProfile,
  addPost,
  profile: { profile }
}) => {
  const [text, setText] = useState('');
  const classes = useStyles();
  const onChange = (e) => setText(e.target.value);
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <div className="cd-section" id="contentAreas">
      <div id="comments">
        <GridContainer>
          {profile === null ? (
            <Spinner />
          ) : (
            <GridItem xs={12} sm={12} md={12}>
              <h3 className={classes.textCenter}>
                Create your Post <br />
              </h3>
              <form
                className={classes.form}
                onSubmit={(e) => {
                  e.preventDefault();
                  addPost({ text });
                  setText('');
                }}
              >
                <Media
                  avatar={profile.user.avatar}
                  body={
                    <CustomInput
                      id="logged"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        name: 'text',
                        placeholder: 'Create a post',
                        value: text,
                        onChange: onChange,
                        multiline: true,
                        rows: 6
                      }}
                    />
                  }
                  footer={
                    <Button
                      color="primary"
                      className={classes.floatRight}
                      type="submit"
                      value="Submit"
                    >
                      <Reply /> Submit
                    </Button>
                  }
                />
              </form>
            </GridItem>
          )}
        </GridContainer>
      </div>
    </div>
  );
};

CreatePost.propTypes = {
  addPost: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, addPost })(
  CreatePost
);
