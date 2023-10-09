import clsx from "clsx";
import React from "react";

interface Props {
  icon: string;
  fill?: boolean;
  grade?: number;
  weight?: number;
  size?: number;
  className?: string;
  variant?: "outlined" | "rounded" | "sharp";
}

export default function MaterialSymbol(props: Props): JSX.Element {
  const settings = {
    FILL: props.fill ? 1 : 0,
    wght: props.weight || 400,
    GRAD: props.weight || 100,
    opsz: props.weight || 40,
  };

  const styles = {
    fontVariationSettings: Object.entries(settings)
      .map((entry) => `"${entry[0]}" ${entry[1]}`)
      .join(),
    fontSize: `${props.size}px`,
  } as React.CSSProperties;

  const classes = `
    ${props.className ?? ""}
  `;

  return (
    <span
      style={styles}
      className={clsx(
        `material-symbols-${props.variant || "outlined"}`,
        classes
      )}
    >
      {props.icon}
    </span>
  );
}
