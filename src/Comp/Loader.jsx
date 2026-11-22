function Loader({ text }) {
  return (
    <div className="flex flex-col items-center py-20">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-3 text-gray-600">{text}</p>
    </div>
  );
}

export default Loader;