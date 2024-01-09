export function CreateTodo() {
  return (
    <div>
      <input
        style={{
          padding: 5,
          margin: 5,
        }}
        type="text"
        placeholder="title"
      />
      <br />
      <br />
      <input
        style={{
          padding: 5,
          margin: 5,
        }}
        type="text"
        placeholder="description"
      />
      <br />
      <br />
      <button
        style={{
          padding: 5,
          margin: 5,
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
