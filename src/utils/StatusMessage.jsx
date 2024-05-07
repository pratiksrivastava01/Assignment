import React from "react";

const StatusMessage = ({ isLoading, error, dataLength }) => {
  if (error) {
    return <div className="text-red-600">Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div className="text-blue-600">Loading...</div>;
  }

  if (dataLength === 0) {
    return <div className="text-gray-600">No matching users found.</div>;
  }

  return null;
};

export default StatusMessage;
