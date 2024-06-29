import React, { useState, useRef, useEffect } from 'react'

const Countdown = () => {
  const [days, setDays] = useState(7);
  const [hours, setHours] = useState(4);
  const [minutes, setMinutes] = useState(5);
  const [second, setSecond] = useState(59);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (second > 0) {
        setSecond(second - 1);
      }
      else if (second === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            if (days === 0) {
              clearInterval(timer.current);
            }
            else {
              setDays(days - 1)
              setHours(59);
              setMinutes(59);
              setSecond(59);
            }
          }
          else {
            setHours(hours - 1);
            setMinutes(59);
            setSecond(59);
          }
        }
        else {
          setMinutes(minutes - 1);
          setSecond(59);
        }
      }
    }, 1000);
    return () => clearInterval(timer.current);
  }, [days, hours, minutes, second]);

  return (
    <>
      <div className='container text-center'>
        {/* <h1 className='heading-1 text-start text-dark'>Sales Starts:</h1> */}
        <div className="secMain row row-cols-4 gap-5">
          <div className="Sec1 col bg-dark rounded py-3 shadow" style={{ width: "120px" }}>
            <h4 className='text-light'>{hours < 7 ? `0${hours}` : hours}:</h4>
            <p className='text-light'>Days</p>
          </div>
          <div className="Sec2 col bg-dark rounded py-3 shadow" style={{ width: "120px" }}>
            <h4 className='text-light'>{hours < 10 ? `0${hours}` : hours}: </h4>
            <p className='text-light'>Hours</p>
          </div>
          <div className="Sec3 col bg-dark rounded py-3 shadow" style={{ width: "120px" }}>
            <h4 className='text-light'>{minutes < 10 ? `0${minutes}` : minutes}:</h4>
            <p className='text-light'>Minutes</p>
          </div>
          <div className="Sec4 col bg-dark rounded py-3 shadow" style={{ width: "120px" }}>
            <h4 className='text-light'>{second < 10 ? `0${second}` : second}</h4>
            <p className='text-light'>Seconds</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Countdown