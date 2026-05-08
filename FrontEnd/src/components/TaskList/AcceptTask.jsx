import React, { useState, useEffect } from "react";

const AcceptTask = ({ task, taskIndex, userId }) => {
  const [isAccepted, setIsAccepted] = useState(task.active);
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (!isAccepted) return;

    let remainingTime = 300;
    setTimeLeft(remainingTime);

    const timerInterval = setInterval(() => {
      remainingTime -= 1;
      setTimeLeft(remainingTime);

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        setTimeLeft(null);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [isAccepted]);

  const handleAcceptTask = async () => {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}/tasks/${taskIndex}/accept`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ active: true }),
      });

      if (response.ok) {
        setIsAccepted(true);
      } else {
        console.error("Failed to accept task");
      }
    } catch (error) {
      console.error("Error accepting task:", error);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className={`flex-shrink-0 h-full w-[300px] p-6 rounded-lg border shadow-md hover:shadow-lg transition-shadow ${task.theam}`}>
      <div className="flex justify-between items-start gap-2">
        <h3 className="bg-sky-600 text-white text-xs px-3 py-1 rounded font-medium">
          {task.category}
        </h3>
        <h4 className="text-xs text-gray-100 font-medium">{task.taskDate}</h4>
      </div>
      <h2 className="text-lg font-bold mt-4 line-clamp-2 text-gray-900">
        {task.taskTitle}
      </h2>
      <p className="text-sm text-gray-700 mt-3 line-clamp-3">
        {task.taskDescription}
      </p>

      <div className="mt-4">
        {isAccepted ? (
          <div className="text-center">
            <div className="bg-green-500 text-white px-3 py-2 rounded font-semibold text-sm mb-3">
              ✓ Task Accepted
            </div>
            <div className="text-lg font-bold text-gray-900">
              Time Remaining: {formatTime(timeLeft || 0)}
            </div>
          </div>
        ) : (
          <button
            onClick={handleAcceptTask}
            className="w-full text-xs px-3 py-2 rounded bg-white text-gray-700 hover:bg-gray-100 transition-colors font-medium border border-gray-300"
          >
            Accept
          </button>
        )}
      </div>
    </div>
  );
};

export default AcceptTask;
