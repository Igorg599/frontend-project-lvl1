import getRandomNumber from "../utils/rundomNumber.js"
import general from "../general.js"

const description = "Find the greatest common divisor of given numbers."

const findGcd = (numOne, numTwo) => {
  if (numTwo === 0) {
    return numOne
  }
  return findGcd(numTwo, numOne % numTwo)
}

const getIntermediate = () => {
  const argumentOne = getRandomNumber(100)
  const argumentTwo = getRandomNumber(100)

  const question = `${argumentOne} ${argumentTwo}`

  const right = String(findGcd(argumentOne, argumentTwo))

  return { question, right }
}

export default () => general(getIntermediate, description)
