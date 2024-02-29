export function Button({ onClick, children }) {
  return (
    <button
    style={{ backgroundColor: '#04364A' }}
      className="bg-indigo-500 px-4 py-1 rounded-md my-2 disabled:bg-indigo-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
