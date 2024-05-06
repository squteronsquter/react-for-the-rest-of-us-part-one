import React from "react";

export default function TimeArea() {
  return (
    <span className="text-sm text-slate-500 p-4">
      The current date and time is: {new Date().toLocaleTimeString()}
    </span>
  );
}
