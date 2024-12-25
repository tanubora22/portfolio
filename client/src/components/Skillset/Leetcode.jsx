import React from "react";
import ReactMarkdown from 'react-markdown';

const Leetcode = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 pb-10">
      <h1 className="text-4xl font-semibold pb-5">
        <strong className="text-yellow-400">LeetCode</strong> Stat
      </h1>
      <ReactMarkdown>
        ![LeetCode Stats](https://leetcard.jacoblin.cool/19sajib?theme=dark&font=Syne%20Mono&ext=heatmap)
      </ReactMarkdown>
    </div>
  );
}

export default Leetcode;
