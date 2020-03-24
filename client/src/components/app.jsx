import React from 'react';
import axios from 'axios';
import CommentsList from './commentsList.jsx';
import CommentsInputBar from './commentsInputBar.jsx'
import Tracker from './tracker.jsx';
import MusicProfile from './musicProfile.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
    this.getComments = this.getComments.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    // this.getComments();
    this.interval = setInterval(() => this.getComments(), 3000);
  }

  getComments() {
    axios.get('/api/comments')
      .then((response) => {
        // console.log(response.data);
        this.setState({ comments: response.data });
        console.log('Success! Retrieved data from server');
      })
      .catch((error) => {
        console.log(error, 'failed to retrieve list of commments');
      });
  }

  addComment(input) {
    console.log(`the comment ${input} was posted`);
    axios.post('/api/comments', { input })
      .then(() => {
        console.log('post request succeeded');
        this.getComments();
      })
      .catch((error) => {
        console.log(error, 'failed to post comment');
      });
  }

  addReply(reply, id) {
    console.log(`the reply ${reply} has been posted`);
    axios.post('/api/reply', { reply, id })
      .then(() => {
        console.log('post request suceeeded');
      })
      .catch((error) => {
        console.log(error, 'cannot post reply right now');
      });
  }

  render() {
    return (
      <div>
        <div className="CM-comments-app">
          <CommentsInputBar addComment={this.addComment} />
          <Tracker />
          <MusicProfile />
          <CommentsList addReply={this.addReply} comments={this.state.comments} />
        </div>
      </div>
    );
  }
}

export default App;
