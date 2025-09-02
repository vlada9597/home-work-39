import { useState } from "react"

export default function StatefulComponent() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-4 border rounded-xl shadow-md">
      <h2>Stateful Component (useState)</h2>
      <p>Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)} 
        className="px-3 py-1 bg-blue-500 text-white rounded-lg mt-2"
      >
        Increment
      </button>
    </div>
  )
}
