import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/comments/bots');
      setBots(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const enlistBot = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (botId) => {
    const updatedArmy = army.filter((bot) => bot.id !== botId);
    setArmy(updatedArmy);
  };

  const dischargeBot = async (botId) => {
    try {
      await axios.delete(`http://localhost:3000/comments/bots`);
      releaseBot(botId); // Remove from army after successful deletion
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <div className="container">
        <BotCollection bots={bots} enlistBot={enlistBot} />
        <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      </div>
    </div>
  );
};

export default App;
