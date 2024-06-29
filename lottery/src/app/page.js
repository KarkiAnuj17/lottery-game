'use client'
import { Button } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

const Lottery = () => {
    const lotteryOptions = ['💥','🍒', '💥', '🍋', '💥', '💥','🍌', '💥', '💥']

    const [randomNum, setRandomNum] = useState(null)
    const [isPaused, setPaused] = useState(false)
 //create extra state isPaused which by default should be false

    useEffect(() => 
{
        let timeoutId
        if (!isPaused) {
            timeoutId = setTimeout(() => {
                const tempNum = Math.floor(Math.random() * lotteryOptions.length)
                if (tempNum === randomNum) {
                    setRandomNum((randomNum + 1) % lotteryOptions.length)
                } else {
                    setRandomNum(tempNum)
                }
            }, 50)
        }
        else
        return clearTimeout(timeoutId)
    }, [randomNum])
    return (
        <div>
            {lotteryOptions[randomNum] === '💥' ? 'You lost' : 'Congrats you won ' + lotteryOptions[randomNum]}
            <div className='bg-black w-10 m-10'>
                {lotteryOptions.map((item, id) => (
                    <div key={id} style={{backgroundColor: id === randomNum ? 'red' : null}} className='text-4xl text-white rounded-sm my-4'>
                        {item}
                    </div>
                ))}
            </div>
            <Button onClick={() => setPaused(!isPaused)}>pause</Button>
        </div>
    )
}

export default Lottery
