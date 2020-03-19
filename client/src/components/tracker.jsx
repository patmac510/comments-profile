import React from 'react';

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plays: 0,
      likes: 0,
      posts: 0,
    }
  }

  render() {
    return (
      <div>
        <div className='CM-tracker-btn'>
        <button className='CM-like-btn'>like</button>
        <button className='CM-repost-btn'>repost</button>
        <button className='CM-share-btn'>share</button>
        <button className='CM-addToNextUp-btn'>Add to Next Up</button>
        <button className='CM-more-btn'>more...</button>
        </div>
        <div className='CM-trackerValues'>
          {this.state.plays}
          {this.state.likes}
          {this.state.posts}
        </div>
      </div>
    )
  }
}

export default Tracker;