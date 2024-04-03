export const Form = () => {
  return (
    <div>
      <form>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Eter your todo text:
          <input type="text" name="todo" className="f" placeholder="Fill input" />
        </label>
      </form>
    </div>
  )
}
