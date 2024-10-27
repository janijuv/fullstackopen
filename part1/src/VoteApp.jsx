import { useState } from 'react'

const VoteApp = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0,0,0,0,0,0,0]);
  console.log("selected after definition", selected);
  console.log("votes after definition", votes);
  
  const min = 0;
  const max = anecdotes.length;

  const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAnecdoteClick = () => {
    setSelected(randomInteger(min, max));
  }

  const handleVoteClick = (index) => {  
  // debugger;
  console.log(index);
  console.log(votes);
  const copy = [...votes];
  copy[index]++;
  setVotes(copy);
    //debugger;
  }

  const mostVotesIndex = votes.indexOf(Math.max(...votes));

  const Button = (props) => {
    return (
      <button onClick = {() => props.handleClick(props.value)} >
        {props.text}
      </button>
    )
  }

  const VoteButton = (props) => {
    return (
      <button onClick = {props.handleClick(props.selected)} >
        {props.text}
      </button>
    )
  }

  return (
    <div>
      <h1>Anecdote voting app</h1>
      <p>
        {anecdotes[selected]} <br/>
        has {votes[selected]} votes
      </p>
      <button onClick = {() => handleVoteClick(selected)} >Vote</button>
      <Button handleClick={handleAnecdoteClick} text = "next anecdote" />
      
      <h3>Anecdote with most votes</h3>
      <p>{anecdotes[mostVotesIndex]}</p>
      <p>{votes[mostVotesIndex]} votes</p>
    </div>
  )
}

export default VoteApp