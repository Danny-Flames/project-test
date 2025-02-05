const SkeletonLoader = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="h-[190px] bg-gray-200 rounded-lg shadow-sm"
          ></div>
        ))}
      </div>
    );
  };
  
  export default SkeletonLoader;
  