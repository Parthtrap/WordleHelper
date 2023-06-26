# Wordle Solver

## Introdction

Wordle is a game for smart people, which... I am not... So here is a small app I made to help people like me solve wordle.

## Where to Play Wordle

You can play Daily Wordle by NY Times [Here](https://www.nytimes.com/games/wordle/index.html)<br/>Or you can play Wordle Infinitely [Here](https://wordlegame.org/)

## How To Use?

1. Just Start the web App using the commands under [How to Setup](#how-to-setup).
2. You will see list of all possible words that wordle can accept on the left and on the right, you can controll the results based on what you got in the wordle.
    1. Green Means that the character is in correct position. So enter the character and its position.
    2. Yellow Means that the character is present but not in the right position. Enter the character and position.
    3. Grey Means that the character is not present in the answer word. Enter the character in that case (Position dosn't matter).
3. Everytime you enter a word into the puzzle and filter it out in this app, you will narrow down the possible answers untill you reach your final goal.
4. Good Luck

## How to Setup

### Start Backend

```
cd backend
pip3 install fastapi
pip3 install uvicorn
uvicorn main:app --reload
```

### Start Frontend

```
cd frontend
npm install
npm start
```

## Contributor

Me Alone... Its a small project I made when I was bored.
