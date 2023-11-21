import React from 'react';

const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <ul>
        {army.map((bot) => (
          <li key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <button onClick={() => releaseBot(bot.id)}>Release</button>
            <button onClick={() => dischargeBot(bot.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourBotArmy;
