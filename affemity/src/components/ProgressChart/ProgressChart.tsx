import React, { useState, useEffect } from "react";
import {
  Bar,
  ResponsiveContainer,
  Cell,
  Line,
  ComposedChart,
  ReferenceLine,
} from "recharts";
import css from "./ProgressChart.module.css";
import { cx } from "../../lib/classNames";

const data = [
  { value: 11, lineValue: 10 },
  { value: 18, lineValue: 13 },
  { value: 25, lineValue: 19 },
  { value: 32, lineValue: 28 },
  { value: 39, lineValue: 39 },
];

const colors = ["#A9DEF4", "#9CC9DC", "#69A8C2", "#5190AA", "#31728D"];

const CustomDot = ({ cx, cy, index }: any) => {
  if (index !== 0 && index !== data.length - 1) return null;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={13.5}
      fill={index === 0 ? "#A9DEF4" : "#31728D"}
      stroke="white"
      strokeWidth={5}
    />
  );
};

const ProgressChart: React.FC = () => {
  const [showLabels, setShowLabels] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLabels(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container-relative">
      <p className={css["title"]}>
        Take a quiz to get <br /> a personalized plan
      </p>

      <div className={css["chart-container"]}>
        <ResponsiveContainer>
          <ComposedChart data={data} margin={{ top: 13 }}>
            {[0, 12, 24, 36].map((line, index) => (
              <ReferenceLine key={index} y={line} stroke="#D2CFDF" />
            ))}
            <Bar dataKey="value" radius={5.27}>
              {data.map((_, index) => (
                <Cell key={index} fill={colors[index % colors.length]} />
              ))}
            </Bar>
            <Line
              type="monotone"
              dataKey="lineValue"
              stroke="var(--color-text-primary)"
              strokeWidth={2.11}
              dot={<CustomDot />}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {showLabels && (
        <>
          <div className={cx(css["label-container"], css["label-first"])}>You</div>
          <div className={cx(css["label-container"], css["label-second"])}>Goal</div>
        </>
      )}

      <div className={cx(css["weeks"], "fx", "fx--justify-sb")}>
        <p>week 1</p>
        <p>week 4</p>
      </div>
    </div>
  );
};

export default ProgressChart;
