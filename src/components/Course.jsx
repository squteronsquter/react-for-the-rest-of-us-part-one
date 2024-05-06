import React from "react";

export default function Course(props) {
  return (
    <>
      <li className="text-sm text-slate-500 list-none p-4">
        {props.name} is {props.duration} long and is meant for {props.level} level students.
      </li>
    </>
  );
}
