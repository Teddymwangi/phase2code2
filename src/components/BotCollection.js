import React from 'react';

const BotCollection = ({ bots, enlistBot }) => {
  return (
    <div className="bot-collection">
      <h2>All Bots</h2>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <button onClick={() => enlistBot(bot)}>Add to Army</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotCollection;
