import React from 'react'
import { Link } from 'react-router-dom'
        
export default function Homepage() {
  return (
    <>
    <div className="includer"><Link to={'/quiz'}><div className="head"><b>Kou-Quiz .</b></div></Link><div className="header">Hello and Welcome to Kou-Quiz</div>
      <div className="about"><p>Play on a daily basis to win greater rewards.We regularly keep track of our users and the chances of winning a bigger is totally dependent on the amount of time you spend on our Website .
       <br /> <br /><h5>[ Today's Rewards : A Tata Nexon , Trip to Goa ,  A Iphone 13 Pro , (Cash) Rs.100000 , A Continental GT-650] </h5><br />For terms and conditions  <a href="https://chrome.google.com/webstore?hl=en"> visit here .</a></p></div>
    <Link to={'/quiz'}>
      <div className="but">
      <button>Start Quiz</button></div>
    </Link></div>
    </>
  ) 
}