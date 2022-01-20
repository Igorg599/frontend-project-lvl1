import readlineSync from "readline-sync"
import helloGuest from "../cli.js"

const condition = 'Answer "yes" if number even otherwise answer "no".'

const isEven = (num) => num % 2 === 0

const getRandomNumber = (finish) => {
  // числа начинаются от 1 до finish
  return Math.ceil(Math.random() * finish)
}

const getIntermediate = () => {
  const number = getRandomNumber(100)
  const question = String(number)
  const evenNumber = isEven(number) ? "yes" : "no"
  return { question, evenNumber }
}

const parityCheck = async (rounds) => {
  const name = await helloGuest()
  console.log(condition)

  for (let i = rounds; i > 0; i--) {
    const { question, evenNumber } = getIntermediate()
    console.log(`Question: ${question}`)
    const answer = await readlineSync.question("Your answer: ")
    if (answer === evenNumber) {
      console.log("Correct!")
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${evenNumber}. Let's try again, ${name}!`
      )
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

export default parityCheck
