import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../redux/actions';

const SongDetail = ({ song }) => {

  if (!song) {
    return <p>Select a song</p>
  }

  return (
    <div className="songDetail">
      <h3>Details for:</h3>
      <p>Title: {song.title}</p>
      <p>Duration: {song.duration}</p>
    </div>
  )
}

const mapStateToProps = state => {
  return { song: state.selectSong }
}

export default connect(mapStateToProps)(SongDetail);