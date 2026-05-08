import React from "react";

const Utilities = () => {
  // Sample data for progress graphs
  const progressData = [
    {
      title: "Project Completion",
      percentage: 75,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Team Performance",
      percentage: 60,
      color: "from-green-400 to-green-600",
    },
    {
      title: "Resource Utilization",
      percentage: 85,
      color: "from-purple-400 to-purple-600",
    },
  ];

  const CircularProgress = ({ percentage, color, title }) => {
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div className="flex flex-col items-center">
        <div className="relative w-40 h-40 flex items-center justify-center">
          <svg width="200" height="200" className="transform -rotate-90">
            <circle
              cx="100"
              cy="100"
              r="45"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            <circle
              cx="100"
              cy="100"
              r="45"
              fill="none"
              stroke={`url(#gradient-${title})`}
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.5s ease" }}
            />
            <defs>
              <linearGradient id={`gradient-${title}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={color.split(" ")[1]} />
                <stop offset="100%" stopColor={color.split(" ")[2]} />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute text-center">
            <span className="text-4xl font-bold text-gray-800">{percentage}%</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-700 mt-4">{title}</h3>
      </div>
    );
  };

  const BarProgress = ({ percentage, color, title }) => {
    const colorClass = `bg-gradient-to-r ${color}`;
    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
          <span className="text-lg font-bold text-gray-800">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className={`h-full rounded-full ${colorClass}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-semibold text-gray-700 mb-8">Utilities Page</h1>
      
      {/* Circular Progress Graphs */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Progress Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-8 rounded-lg shadow-lg">
          {progressData.map((item, index) => (
            <CircularProgress
              key={index}
              percentage={item.percentage}
              color={item.color}
              title={item.title}
            />
          ))}
        </div>
      </div>

      {/* Bar Progress Graphs */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Progress</h2>
        <div className="space-y-4">
          {progressData.map((item, index) => (
            <BarProgress
              key={index}
              percentage={item.percentage}
              color={item.color}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Utilities;
