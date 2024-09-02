import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import camaraIcon from '../images/camara.png';
import videoSrc from '../images/media/WebPromo.mp4';
import promoWebSrc from '../images/media/PromoWeb.mp4';
import desarrolloWebSrc from '../images/media/DesarrolloWeb.mp4';
import desarrolloWebAppSrc from '../images/media/DesarrolloWebApp.mp4';
import chatBotSrc from '../images/media/ChatBot.mp4';
import webPromoThumbnail from '../images/thumbnails/WebPromoThumbnail.jpg';
import promoWebThumbnail from '../images/thumbnails/PromoWebThumbnail.jpg';
import desarrolloWebThumbnail from '../images/thumbnails/DesarrolloWebThumbnail.jpg';
import desarrolloWebAppThumbnail from '../images/thumbnails/DesarrolloWebAppThumbnail.jpg';
import chatBotThumbnail from '../images/thumbnails/ChatBotThumbnail.jpg';
import './VideoPro.css';

function VideoPro() {
  const videoSources = [
    {
      src: videoSrc,
      type: 'video/mp4',
      title: 'Web Promo',
      thumbnail: webPromoThumbnail
    },
    {
      src: promoWebSrc,
      type: 'video/mp4',
      title: 'Promo Web',
      thumbnail: promoWebThumbnail
    },
    {
      src: desarrolloWebSrc,
      type: 'video/mp4',
      title: 'Desarrollo Web',
      thumbnail: desarrolloWebThumbnail
    },
    {
      src: desarrolloWebAppSrc,
      type: 'video/mp4',
      title: 'Desarrollo Web App',
      thumbnail: desarrolloWebAppThumbnail
    },
    {
      src: chatBotSrc,
      type: 'video/mp4',
      title: 'ChatBot',
      thumbnail: chatBotThumbnail
    }
  ];

  const [playing, setPlaying] = useState({});

  const handlePlay = (index) => {
    setPlaying((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="video-pro-container">
      <div className="video-pro-header">
        <img src={camaraIcon} alt="Camera Icon" /> Video Pro
      </div>
      <div className="video-pro-content">
        {videoSources.map((source, index) => (
          <div key={index} className="video-item">
            <div className="video-thumbnail-wrapper" onClick={() => handlePlay(index)}>
              {!playing[index] && (
                <img src={source.thumbnail} alt={source.title} className="video-thumbnail" />
              )}
              <ReactPlayer
                url={source.src}
                playing={playing[index]}
                controls={true}
                width="100%"
                height="auto"
                className="video-player"
              />
            </div>
            <div className="video-title">{source.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoPro;