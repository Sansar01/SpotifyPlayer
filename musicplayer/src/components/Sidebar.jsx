import React, { useEffect, useState } from "react";
import "../assets/css/sidebar.css";
import icon from '../assets/images/Frame.png'
import Frame1 from '../assets/images/play.png'
import Vector from '../assets/images/Vector.png'
import dot from '../assets/images/dot.png'

import axios from 'axios'


const Sidebar = () => {

  const [song, setSong] = useState([])
  const [audio, setAudio] = useState(new Audio(''))
  const [image, setImage] = useState('')
  const [play, setPlay] = useState(false)

  useEffect(() => {

    const getSong = async () => {
      const response = await axios.get('https://cms.samespace.com/items/songs')
      setSong(await response.data.data)
      console.log(song);
    }
    getSong();

  }, [])

  const handlePlay = (url) => {

    if (!play) {
      
      setAudio(new Audio(url))
      
      setPlay(!play)
    }
    else {
      setPlay(!play)
    }

  }

  useEffect(() => {
    play ? audio.play() : audio.pause()
  }, [play])


  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <button className="sidebar-button active">For You</button>
        <button className="sidebar-button">Top Tracks</button>
      </div>
      {/* Search container */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search Song, Artist"
        />
        <button className="search-icon">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="sidebar-content">
        <ul className="track-list">
          {
            song.map((item, index) =>
            (
              <li className="track-item" key={index} onClick={() => setImage(item.id)}>
                <img src={`https://cms.samespace.com/assets/${item.cover}`} alt="Starboy" className="track-image" />
                <div className="track-details">
                  <p className="track-name">{item.name}</p>
                  <p className="track-artist">{item.artist}</p>
                </div>
                <p className="track-duration">4:16</p>
              </li>
            )
            )
          }
        </ul>
      </div>
      {
        image && song.map((item, index) => (
          item.id === image ? (
            <div className="player-container" key={index}>
              <div className="player-info">
                <h2 className="player-title">{item.name}</h2>
                <p className="player-artist">{item.artist}</p>
              </div>
              <img

                src={`https://cms.samespace.com/assets/${item.cover}`}
                alt="Viva La Vida Album Cover"
                className="player-image"
              />

              <div className="player-controls">
              <div className="dot"><img src={dot}/></div>
                <button className="control-button">◄◄</button>
                <button className="control-button">

                  <img src={Frame1} onClick={() => handlePlay(item.url)} />

                </button>
                <button className="control-button">►►</button>
                <div className="speaker"><img src={Vector}/></div>
              </div>
            </div>
          ) : null
        ))
      }
    </div>
  );
};

export default Sidebar;
