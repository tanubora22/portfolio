import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <div className="flex flex-col justify-center items-center pb-10 mt-10">
      <h1 className="text-4xl font-semibold pb-5">
        Days I <strong className="text-yellow-400">Code</strong>
      </h1>
      <GitHubCalendar
        username="19sajib"
        blockSize={15}
        blockMargin={5}
        color="#6102ce"
        fontSize={16}
      />
    </div>
  );
}

export default Github;
