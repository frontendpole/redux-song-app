import { combineReducers } from 'redux';

const songList = [
  { title: 'I want it that way', duration: '2:45' },
  { title: 'No scrubs', duration: '3:53' },
  { title: 'No dignity', duration: '1:55' }
];

export const songsReducer = () => {
  return songList;
}


export const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload
    default:
      return selectedSong;
  }
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})