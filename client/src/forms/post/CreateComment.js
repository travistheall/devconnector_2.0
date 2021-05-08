import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { addComment } from 'actions/post';
import { getCurrentProfile } from 'actions/profile';

import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Media from 'components/Media/Media.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import Spinner from 'layout/Spinner'
import style from 'assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.js';
import Reply from '@material-ui/icons/Reply';

const useStyles = makeStyles(style);

const CreateComment = ({ getCurrentProfile, postId, addComment, profile: { profile } }) => {
  const [text, setText] = useState('');
  const classes = useStyles();

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(postId, { text });
    setText('');
  };
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
              <h3 className={classes.textCenter}>Leave a Comment</h3>

              <form className={classes.form} onSubmit={onSubmit}>
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
                        placeholder: 'Comment the post',
                        value: text,
                        onChange: onChange,
                        multiline: true,
                        rows: 5
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
                      <Reply /> Reply
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

CreateComment.propTypes = {
  addComment: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  postId: PropTypes.number
};

const mapStateToProps = (state) => ({
    profile: state.profile
  });

export default connect(mapStateToProps, { getCurrentProfile, addComment })(CreateComment);

  

  
