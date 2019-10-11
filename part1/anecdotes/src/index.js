import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>;
};

const App = props => {
    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

    const addVote = selected => () => {
        const newVotes = [...votes];
        newVotes[selected]++;
        setVotes(newVotes);
    };

    const setRandomAnecdote = () => {
        const max = anecdotes.length;
        setSelected(Math.floor(Math.random() * max));
    };

    return (
        <div>
            {props.anecdotes[selected]}
            <br />

            <div>has {votes[selected]} votes</div>

            <Button handleClick={addVote(selected)} text={"vote"} />
            <Button handleClick={setRandomAnecdote} text={"next anecdote"} />
        </div>
    );
};

const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
