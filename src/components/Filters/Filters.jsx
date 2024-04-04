export const Filters = () => {
  return (
    <div className="flex mb-4 gap-4">
      <button className="bg-gradient-to-r from-cyan-500 to-blue-500 border-none outline-none  focus:outline-none">All</button>
      <button className="bg-gradient-to-r from-cyan-500 to-blue-500 border-none outline-none  focus:outline-none">In progress</button>
      <button className="bg-gradient-to-r from-cyan-500 to-blue-500 border-none outline-none  focus:outline-none">Completed</button>
    </div>
  )
}
