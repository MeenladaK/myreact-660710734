// src/components/ComponentExamples.jsx
import React from 'react';
import Welcome from './Welcome';
import Greeting from './Greeting';
import Clock from './Clock';
import UserCard from './UserCard';
import TodoList from './TodoList';

function ComponentExamples() {
  return (
    <div>
      <Welcome />
      <Greeting />
      <Clock />
      <UserCard />
      <TodoList />
    </div>
  );
}

export default ComponentExamples;