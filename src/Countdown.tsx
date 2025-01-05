import React from 'react';

type CountdownProps = {
  name: string;
  birthday: string;
};

const Countdown: React.FC<CountdownProps> = ({ name, birthday }) => {
  const today = new Date();
  const nextBirthday = new Date(birthday);
  nextBirthday.setFullYear(today.getFullYear());
  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }
  const daysLeft = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div>
      <h2>{name}'s Birthday</h2>
      <p>{daysLeft} days left</p>
    </div>
  );
};

export default Countdown;
