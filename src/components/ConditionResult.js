import React from "react";

function ConditionResult({ condition, warnings }) {
  return (
    <div>
      <h2>Condition: {condition}</h2>
      {condition === "Good" && <p>All parameters are within acceptable ranges!</p>}
      {condition === "Warning" && (
        <div>
          <p>Some parameters are out of range:</p>
          <ul>
            {warnings.map((warning, index) => (
              <li key={index}>{warning}</li>
            ))}
          </ul>
        </div>
      )}
      {condition === "Critical" && (
        <div>
          <p>Critical: Multiple parameters are out of range!</p>
          <ul>
            {warnings.map((warning, index) => (
              <li key={index}>{warning}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ConditionResult;
