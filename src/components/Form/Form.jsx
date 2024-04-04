export const Form = () => {
  return (
    <div>
      <form>
        <label className="flex flex-col  text-sm font-medium leading-6 text-gray-900">
          Eter your todo text:
          <input type="text" name="todo" className="todoInput" placeholder="Buy a tesla" />
        </label>
      </form>
    </div>
  )
}
