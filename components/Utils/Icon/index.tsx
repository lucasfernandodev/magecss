type Props = {
  icon: string;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
};

const Icon = ({ width, height, fill, stroke, strokeWidth, icon }: Props) => {
  const data = {
    width: `${width ? width : 18}`,
    height: `${height ? height : 18}`,
    fill: `${fill ? fill : "transparent"}`,
    stroke: `${stroke ? stroke : "#ffffff"}`,
    strokeWidth: `${strokeWidth ? strokeWidth : 1.35}`,
  };

  const arrowTo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={data.strokeWidth}
      stroke={data.stroke}
      fill={data.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={`${data.width}px`}
      height={`${data.height}px`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <line x1="15" y1="16" x2="19" y2="12"></line>
      <line x1="15" y1="8" x2="19" y2="12"></line>
    </svg>
  );

  const fire = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={data.strokeWidth}
      stroke={data.stroke}
      fill={data.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={`${data.width}px`}
      height={`${data.height}px`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"></path>
    </svg>
  );

  const heart = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={data.strokeWidth}
      stroke={data.stroke}
      fill={data.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={`${data.width}px`}
      height={`${data.height}px`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
    </svg>
  );

  const view = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={data.strokeWidth}
      stroke={data.stroke}
      fill={data.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={`${data.width}px`}
      height={`${data.height}px`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
    </svg>
  );

  const time = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={data.strokeWidth}
      stroke={data.stroke}
      fill={data.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={`${data.width}px`}
      height={`${data.height}px`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="12" cy="12" r="9"></circle>
      <polyline points="12 7 12 12 15 15"></polyline>
    </svg>
  );

  const PublishTime = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={data.strokeWidth}
      stroke={data.stroke}
      fill={data.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={`${data.width}px`}
      height={`${data.height}px`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="4" y="5" width="16" height="16" rx="2"></rect>
      <line x1="16" y1="3" x2="16" y2="7"></line>
      <line x1="8" y1="3" x2="8" y2="7"></line>
      <line x1="4" y1="11" x2="20" y2="11"></line>
      <rect x="8" y="15" width="2" height="2"></rect>
    </svg>
  );

  const comment = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={data.strokeWidth}
      stroke={data.stroke}
      fill={data.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={`${data.width}px`}
      height={`${data.height}px`}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );

  const facebook = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={data.strokeWidth}
      stroke={data.stroke}
      fill={data.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={`${data.width}px`}
      height={`${data.height}px`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
    </svg>
  );

  const twitter = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={data.strokeWidth}
      stroke={data.stroke}
      fill={data.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={`${data.width}px`}
      height={`${data.height}px`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
    </svg>
  );

  const linkedin = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={data.strokeWidth}
      stroke={data.stroke}
      fill={data.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={`${data.width}px`}
      height={`${data.height}px`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
      <line x1="8" y1="11" x2="8" y2="16"></line>
      <line x1="8" y1="8" x2="8" y2="8.01"></line>
      <line x1="12" y1="16" x2="12" y2="11"></line>
      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
    </svg>
  );

  return (
    <>
      {icon == "heart" ? heart : null}
      {icon == "view" ? view : null}
      {icon == "time" ? time : null}
      {icon == "PublishTime" ? PublishTime : null}
      {icon == "comment" ? comment : null}
      {icon == "twitter" ? twitter : null}
      {icon == "linkedin" ? linkedin : null}
      {icon == "facebook" ? facebook : null}
      {icon == "fire" ? fire : null}
      {icon == "arrowTo" ? arrowTo : null}
    </>
  );
};

export default Icon;
