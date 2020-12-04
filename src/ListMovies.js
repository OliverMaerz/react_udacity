import React, { Component } from 'react';

class ListMovies extends Component {
  render() {
    //console.log('Props', this.props)
    return(
      <ol className='movies-list'>
        {this.props.profiles.map((profile) => (
          <li key={profile.id} className='movie-list-item'>
            <p>{this.props.users[profile.userID].name}&apos;s favorite movie is {this.props.movies[profile.favoriteMovieID].name}</p>      
          </li>
        ))}
      </ol>
    )
  }
}

export default  ListMovies