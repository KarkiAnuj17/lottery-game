"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { Play, Pause, Sparkles } from "lucide-react"

const Lottery = () => {
  const lotteryOptions = ["💥", "🍒", "💥", "🍋", "💥", "💥", "🍌", "💥", "💥"]
  const [randomNum, setRandomNum] = useState(0)
  const [isPaused, setPaused] = useState(true)
  const [start, setStart] = useState(false)
  const [isWinner, setIsWinner] = useState(false)

  useEffect(() => {
    const currentOption = lotteryOptions[randomNum]
    setIsWinner(currentOption !== "💥")
  }, [randomNum])

  useEffect(() => {
    if (!start || isPaused) return

    const timeoutId = setTimeout(() => {
      const tempNum = Math.floor(Math.random() * lotteryOptions.length)
      setRandomNum((prev) =>
        tempNum === prev ? (prev + 1) % lotteryOptions.length : tempNum
      )
    }, 50)

    return () => clearTimeout(timeoutId)
  }, [randomNum, isPaused, start])

  const getResultMessage = () => {
    if (!start) return "🎰 Ready to Play!"
    if (!isPaused && start) return "🎲 Rolling..."
    if (isPaused && start) {
      const currentSymbol = lotteryOptions[randomNum]
      if (currentSymbol === "💥") {
        return `💥 You Lost! - Landed on ${currentSymbol}`
      } else {
        return `🎉 You Won! - Landed on ${currentSymbol}`
      }
    }

    return lotteryOptions[randomNum] === "💥"
      ? "💥 You Lost!"
      : `🎉 You Won ${lotteryOptions[randomNum]}!`
  }

  const handleStartPause = () => {
    if (!start || isPaused) {
      setRandomNum(0)
      setIsWinner(false)
      setStart(true)
      setPaused(false)
    } else {
      setPaused(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gradient-to-b from-gray-900 to-black border-2 border-yellow-400 shadow-2xl shadow-yellow-400/20">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-yellow-400 mb-2 flex items-center justify-center gap-2">
              <Sparkles className="w-8 h-8" />
              Lucky Slots
              <Sparkles className="w-8 h-8" />
            </h1>
            <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
          </div>

          <div
            className={`text-center mb-6 p-4 rounded-lg transition-all duration-300 ${
              !start
                ? "bg-gray-800 text-gray-300"
                : !isPaused && start
                ? "bg-blue-900/50 text-blue-300 animate-pulse"
                : isPaused && start
                ? "bg-yellow-900/50 text-yellow-300"
                : isWinner
                ? "bg-green-900/50 text-green-300 shadow-lg shadow-green-500/20"
                : "bg-red-900/50 text-red-300 shadow-lg shadow-red-500/20"
            }`}
          >
            <div className="text-xl font-bold">{getResultMessage()}</div>
          </div>

          {start && isPaused && (
            <div className="text-center mb-6">
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Game Result:</h3>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-5xl">{lotteryOptions[randomNum]}</div>
                  <div className="text-left">
                    <div
                      className={`text-lg font-bold ${
                        isWinner ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {isWinner ? "WINNER!" : "BETTER LUCK NEXT TIME!"}
                    </div>
                    <div className="text-sm text-gray-400">Symbol: {lotteryOptions[randomNum]}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="relative mb-8">
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 border-4 border-yellow-600 shadow-inner">
              <div className="bg-black rounded-lg p-4 relative overflow-hidden">
                <div className="space-y-2">
                  {lotteryOptions.map((item, id) => (
                    <div
                      key={id}
                      className={`
                        text-4xl text-center py-2 rounded-md transition-all duration-200 transform
                        ${
                          id === randomNum
                            ? "bg-gradient-to-r from-yellow-500 to-yellow-600 scale-110 shadow-lg shadow-yellow-500/50 animate-pulse"
                            : "bg-gray-800 hover:bg-gray-700"
                        }
                      `}
                    >
                      <span className={`${id === randomNum ? "animate-bounce" : ""}`}>{item}</span>
                    </div>
                  ))}
                </div>

                {!isPaused && start && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse"></div>
                )}
              </div>
            </div>

            <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping delay-75"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping delay-150"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping delay-300"></div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              onClick={handleStartPause}
              size="lg"
              className={`
                px-8 py-3 font-bold text-lg transition-all duration-200 transform hover:scale-105
                ${
                  isPaused
                    ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 shadow-lg shadow-green-500/30"
                    : "bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 shadow-lg shadow-orange-500/30"
                }
              `}
            >
              {isPaused ? (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  {start ? "New Game" : "Start"}
                </>
              ) : (
                <>
                  <Pause className="w-5 h-5 mr-2" />
                  Pause
                </>
              )}
            </Button>
          </div>

          <div className="text-center mt-6 text-gray-400 text-sm">Good luck! 🍀</div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Lottery
