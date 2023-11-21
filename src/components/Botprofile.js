import React from 'react';

const BotProfile = ({ bot }) => {
  return (
    <div className="bot-profile">
      <h2>Bot Details</h2>
      <div>
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        {/* Other details */}
      </div>
    </div>
  );
};

export default BotProfile;
