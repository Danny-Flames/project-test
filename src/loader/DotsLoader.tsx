const DotsLoader = () => {
  return (
    <div className="flex justify-center space-x-1">
      <div className="h-3 w-3 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
      <div className="h-3 w-3 bg-gray-600 rounded-full animate-bounce"></div>
      <div className="h-3 w-3 bg-gray-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
    </div>
  );
};

export default DotsLoader;
