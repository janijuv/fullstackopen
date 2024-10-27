import {useState} from 'react'

const UniCafeApp = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good+1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1);
  }

  const handleBadClick = () => {
    setBad(bad+1);
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <table>
        <tbody>
          <tr>
            <td><Button handleClick={handleGoodClick} text = "good" /> </td>
            <td><Button handleClick={handleNeutralClick} text = "neutral" /> </td>
            <td><Button handleClick={handleBadClick} text = "bad" /> </td>
          </tr>
        </tbody>
      </table>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

const Statistics = (props) => {
  const goodCount = props.good;
  const neutralCount = props.neutral;
  const badCount = props.bad;
  const arr = [goodCount, neutralCount, badCount];
  const sum = arr.reduce((acc, current) => acc + current,0);
  const average = ((goodCount-badCount) / sum);
  const positivePercentage = ((goodCount+neutralCount) / sum);
  
  if (goodCount == 0 && neutralCount == 0 && badCount == 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>     
    )
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <StatisticsLine text="good" value = {goodCount} />
        <StatisticsLine text="neutral" value = {neutralCount} />
        <StatisticsLine text="bad" value = {badCount} />
        <StatisticsLine text="all" value = {sum} />
        <StatisticsLine text="average" value = {average} />
        <StatisticsLine text="positive" value = {positivePercentage*100} />
     </div>
    )
  }
}

const StatisticsLine = (props) => {
  return (
      <>
        <p>{props.text}: {props.value}</p>
      </>
  )
}

const Button = (props) => {
  return (
    <button onClick = {props.handleClick} >
      {props.text}
    </button>
  )
}

export default UniCafeApp