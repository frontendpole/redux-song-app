import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../redux/actions';

const SongList = ({ songs, selectSong }) => {

  const renderedList = songs.map(song => {
    <li key={song.title}>
      <button onClick={() => selectSong(song)}>Select</button>
      <p>{song.title}</p>
    </li>
  })

  return (
    <ul className="songList">
      {renderedList}
    </ul>
  )
}

const mapStateToProps = state => {
  return { songs: state.songs }
}

export default connect(mapStateToProps, {
  selectSong
})(SongList);