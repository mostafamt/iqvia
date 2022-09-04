import React from "react";
import Accordion from "./Accordion";

export default function MoreContent({ content }) {
  return (
    <div>
      {Object.keys(content).map((category, idx) => {
        return (
          <Accordion
            key={idx}
            category={category}
            content={content[category]}
          />
        );
      })}
    </div>
  );
}
