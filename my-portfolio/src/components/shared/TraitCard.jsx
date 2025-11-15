import React from 'react';
import Tilt from 'react-parallax-tilt';

// We get the trait and IconComponent as props from the parent
function TraitCard({ trait, IconComponent }) {
  return (
    <Tilt
      className="trait-card"
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      glareEnable={true}
      glareMaxOpacity={0.1}
    >
      <div className="trait-card-inner">
        <div className="trait-card-content">
          <div className="trait-icon-wrapper">
            {/* We render the icon component that was passed to us */}
            {IconComponent && <IconComponent />}
          </div>
          <h3 className="trait-title">
            {trait.title}
          </h3>
          <p className="trait-description">
            {trait.description}
          </p>
        </div>
      </div>
    </Tilt>
  );
}

export default TraitCard;