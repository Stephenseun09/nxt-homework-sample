const PlayIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.56661 7.14903L14.3692 10.4992L8.56661 13.8493L8.56661 7.14903Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.552632"
      />
      <circle
        cx="10.5"
        cy="10.5"
        r="10.2237"
        stroke="currentColor"
        strokeWidth="0.552632"
      />
    </svg>
  );
};

export default PlayIcon;
