import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="pt-12 border-t-2 mt-8">
        <small className=" text-slate-500 px-4">
          All rights reserved @{new Date().getFullYear()}
        </small>
      </footer>
    </>
  );
}
