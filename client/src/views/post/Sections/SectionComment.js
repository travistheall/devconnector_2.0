import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import formatDate from 'utils/formatDate';
import { deleteComment } from 'actions/post';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
// @material-ui/icons
import Reply from '@material-ui/icons/Reply';

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Media from 'components/Media/Media.js';
import Button from 'components/CustomButtons/Button.js';

import DeleteIcon from '@material-ui/icons/Delete';
import sectionCommentsStyle from 'assets/jss/material-kit-pro-react/views/blogPostSections/sectionCommentsStyle.js';
//TODO: Fix the reply button being hidden with the delete button
const useStyles = makeStyles(sectionCommentsStyle);

const SectionComment = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <div>
            <h3 className={classes.title}>3 Comments</h3>
            <Media
              avatar={avatar}
              title={
                <span>
                  {name} <small>· {formatDate(date)}</small>
                </span>
              }
              body={<p className={classes.color555}>{text}</p>}
              footer={
                !auth.loading && user === auth.user._id ? (
                  <div>
                    <Button
                      color="danger"
                      simple
                      className={classes.footerButtons}
                      onClick={() => deleteComment(postId, _id)}
                    >
                      <DeleteIcon className={classes.footerIcons} />
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Tooltip
                      id="tooltip-tina"
                      title="Reply to comment"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        color="primary"
                        simple
                        className={classes.footerButtons}
                      >
                        <Reply className={classes.footerIcons} /> Reply
                      </Button>
                    </Tooltip>
                  </div>
                )
              }
            />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
};

SectionComment.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(SectionComment);
