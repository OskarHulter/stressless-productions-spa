
const Button = ({ onClick, children }) =>
  <button
    className="px-4 py-2 font-bold text-gray-500 bg-transparent border border-gray-500 rounded-full cursor-pointer modal-open hover:border-indigo-500 hover:text-indigo-500"
    onClick={() => onClick}
  >
    {children}
  </button>

export default Button