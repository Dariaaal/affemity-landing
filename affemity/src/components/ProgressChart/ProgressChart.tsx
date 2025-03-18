import React from "react";
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
  { value: 11, label: "You", lineValue: 10 },
  { value: 18, lineValue: 13 },
  { value: 25, lineValue: 19 },
  { value: 32, lineValue: 28 },
  { value: 39, label: "Goal", lineValue: 39 },
];

const colors = ["#A9DEF4", "#9CC9DC", "#69A8C2", "#5190AA", "#31728D"];

const CustomDot = (props: any) => {
  const { cx, cy, index } = props;
  const point = data[index];

  if (point?.label) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={13.5}
        fill="#A9DEF4"
        stroke="white"
        strokeWidth={5}
      />
    );
  }
  return null;
};

const ProgressChart: React.FC = () => {
  const maxValue = 36;
  const numberOfLines = 4;

  const lines = Array.from({ length: numberOfLines }, (_, index) => {
    return Math.floor((maxValue / (numberOfLines - 1)) * index);
  });

  return (
    <div className="container-relative">
      <p className={css["title"]}>
        Take a quiz to get <br /> a personalized plan
      </p>
      <div className={css["chart-container"]}>
        <ResponsiveContainer>
          <ComposedChart
            data={data}
            margin={{ top: 13, right: 0, bottom: 0, left: 0 }}
          >
            {lines.map((line, index) => (
              <ReferenceLine key={index} y={line} stroke="#D2CFDF" />
            ))}
            <Bar dataKey="value" radius={5.27}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
            <Line
              type="monotone"
              dataKey="lineValue"
              stroke="#111111"
              strokeWidth={2.11}
              dot={<CustomDot />}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className={cx(css["weeks"], "fx", "fx--justify-sb")}>
        <p>week 1</p>
        <p>week 4</p>
      </div>
    </div>
  );
};

export default ProgressChart;
