export function Button({ children, ...props }) {
    return (
      <button
        className="px-4 py-2 rounded bg-emerald-600 text-white hover:bg-emerald-700 transition"
        {...props}
      >
        {children}
      </button>
    );
  }