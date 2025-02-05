const SkeletonLoaderTable = () => {
    return (
      <div className="space-y-2 animate-pulse">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="h-12 w-full bg-gray-200 rounded"></div>
        ))}
      </div>
    );
  };
  
  export default SkeletonLoaderTable;
  