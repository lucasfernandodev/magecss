import { iconMap } from "./iconMap";

type Props = {
  icon: string;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
};

const Icon: React.FC<Props> = ({
  icon,
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  ...arg
}) => {

  const data = {
    width: `${width ? width : 18}px`,
    height: `${height ? height : 18}px`,
    fill: `${fill ? fill : "transparent"}`,
    stroke: `${stroke ? stroke : "#ffffff"}`,
    strokeWidth: `${strokeWidth ? strokeWidth : 1.35}`,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={data.strokeWidth}
      stroke={data.stroke}
      fill={data.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={data.width}
      height={data.height}
      {...arg}
    >
      {iconMap[icon] ? iconMap[icon].icon : 'error de icon'}
    </svg>
  );
};

export default Icon;
