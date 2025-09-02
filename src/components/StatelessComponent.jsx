export default function StatelessComponent({ message }) {
  return (
    <div className="p-4 border rounded-xl shadow-md mt-4">
      <h2>Stateless Component (props only)</h2>
      <p>{message}</p>
    </div>
  )
}
