const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap justify-center mt-10">
      {Array(20).fill("").map((_, index) => (
        <div
          key={index}
          className="shimmer-card p-4 m-4 bg-gray-100 w-64 h-96 rounded-xl animate-pulse"
        >
          <div className="bg-slate-200 h-48 w-full rounded-lg mb-6"></div>
          <div className="bg-slate-200 h-6 w-3/4 mb-4 rounded-lg"></div>
          <div className="bg-slate-200 h-6 w-5/6 mb-4 rounded-lg"></div>
          <div className="bg-slate-200 h-6 w-2/4 rounded-lg"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
