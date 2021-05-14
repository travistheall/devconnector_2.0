import React from 'react';
import PropTypes from 'prop-types';
import formatDate from 'utils/formatDate';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from 'actions/post';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import office2 from 'assets/img/examples/office2.jpg';
import Button from 'components/CustomButtons/Button.js';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft';
import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles } from '@material-ui/core/styles';
import sectionPillsStyle from 'assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.js';

const useStyles = makeStyles(sectionPillsStyle);

const PubPost = ({
    auth,
    post: { _id, text, name, user, likes, comments, date },
    showActions
}) => {
  const classes = useStyles();
  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + '&hellip;' : str;
  }
  return (
    <Card raised background style={{ backgroundImage: 'url(' + office2 + ')' }}>
      <CardBody background>
        <h6 className={classes.category}>Posted on {formatDate(date)}</h6>
        <a href={`/profile/${user}`}>
          <h3 className={classes.cardTitle}>By: {name}</h3>
        </a>
        <p className={classes.category}>{truncate(text, 50)}</p>
        <p className={classes.category}>Comments: {comments.length > 0 && comments.length}</p>
        <Button round href={`/posts/${_id}`}>
          <FormatAlignLeft className={classes.icons} />
          Read Post
        </Button>
        {showActions && (
          <CardFooter>
            <Button
              color="success"
              round
              onClick={() => addLike(_id)}
              size="sm"
            >
              <ThumbUpIcon />{' '}
              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </Button>
            <Button
              color="warning"
              round
              onClick={() => removeLike(_id)}
              size="sm"
            >
              <ThumbDownIcon />
            </Button>

            {!auth.loading && user === auth.user._id && (
              <Button
                onClick={() => deletePost(_id)}
                color="danger"
                round
                size="sm"
              >
                <DeleteIcon />
              </Button>
            )}
          </CardFooter>
        )}
      </CardBody>
    </Card>
  );
};

PubPost.defaultProps = {
    showActions: false
  };
  
PubPost.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
    auth: state.auth
  });

export default connect(mapStateToProps, null)(PubPost);
