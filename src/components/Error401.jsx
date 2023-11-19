import React from 'react';
import errorImage from '../Images/401.jpg';

const Error401 = () => {
  const backgroundImageUrl = `url(${errorImage})`;

  const containerStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: 'cover', // or 'contain' depending on your preference
    height: '100vh',
    width: '100vw',
    // other styles...
  };

  return (
    <div style={containerStyle}>
      {/* Your component content goes here */}
    </div>
  );
};

export default Error401;
