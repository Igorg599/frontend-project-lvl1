import readlineSync from "readline-sync"

console.log("Welcome to the Brain Games!")

const helloGuest = async () => {
  const name = await readlineSync.question("May I have your name? ")
  console.log(`Hello, ${name}!`)
  return name
}

export default helloGuest
