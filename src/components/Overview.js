import React from 'react';

const Overview = (props) => {
    const { tasks } = props;
    console.log(props.tasks)
  
    return (
      <ul>
        {tasks.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    );
  };

export default Overview;

