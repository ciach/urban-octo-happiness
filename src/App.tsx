import React from 'react';
import Countdown from './Countdown';

const App: React.FC = () => {
  const kids = [
    { name: 'Leo', birthday: '2017-01-05' },
    { name: 'Mateo', birthday: '2019-05-31' },
    { name: 'Hugo', birthday: '2021-12-22' },
  ];

  return (
    <div style={{ textAlign: 'center', padding: '45px' }}>
      <h1>Birthday Countdown</h1>
      {kids.map((kid, index) => (
        <Countdown key={index} name={kid.name} birthday={kid.birthday} />
      ))}
    </div>
  );
};

export default App;
