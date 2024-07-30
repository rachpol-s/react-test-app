import { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0)

    function addCounter() {
        if (counter === 5) return
        setCounter(counter + 1)
    }
    function removeCounter() {
        if (counter === 0) return
        setCounter(counter - 1)
    }

    return <div>
        Now counter is {counter}
        <button onClick={addCounter}>Add</button>
        <button onClick={removeCounter}>Remove</button>
        Max 5, Min 0
    </div>

}