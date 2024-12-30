import React, {useState, useEffect} from 'react';
import TimerButton from '../../modules/TimerButton/TimerButton';
import {BUTTON_TIMER} from "./TimerData";

export default function CreateTime ({} ){
   const [timeCount, setTimeCount]  = useState({hour: 0, minutes: 0, sec: 0})
   const [toggelAction, setToggleAction] = useState(false);

   useEffect(()=>{
    if(toggelAction){
      const timerId = setInterval(()=>{
        setTimeCount((prevValue)=>{
            const newSec = prevValue.sec + 1;
            const newMin = prevValue.minutes + Math.floor(newSec / 60);
            const newHour = prevValue.hour + Math.floor(newMin / 60);

            return {hour: newHour, minutes: Math.floor(newMin %  60), sec: Math.floor(newSec % 60)};
        })
      }, 1000);

      return () => clearInterval(timerId);
    }
   } , [toggelAction])

   const handleStart = () => {
      setToggleAction(true);
   }

   const handlePause = () => {
    setToggleAction(false);
   }

  const handleRest = () => {
    setToggleAction(false);
    setTimeCount({hour: 0, minutes: 0, sec: 0})
  }
   return (
    <>
      <div>
        <h3>TimerApp is going to created</h3>
        {timeCount.hour} : {timeCount.minutes} : {timeCount.sec}
        
               {BUTTON_TIMER.map((buttonTime, index) => {
                   return (
                       <TimerButton key={buttonTime.value} buttonDisplay={
                           <>
                               <button onClick={buttonTime.event}>{buttonTime.value}</button>
                           </>
                       } />
                   )
               })}
      </div>
    </>
   )
}