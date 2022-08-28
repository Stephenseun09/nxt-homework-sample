import { SvgProps } from "./svgPropTypes";

const TwitterIcon = ({ w = "24", h = "24", className }: SvgProps) => {
  return (
    <svg
      className={className}
      width={w}
      height={h}
      viewBox="0 0 30 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.5038 3.32642C28.4184 3.77871 27.3329 4.14054 26.0664 4.231C27.3329 3.50733 28.2374 2.33138 28.6897 0.974507C27.5138 1.69817 26.2474 2.15046 24.8905 2.42184C23.805 1.24588 22.2672 0.522217 20.639 0.522217C17.3825 0.522217 14.6687 3.1455 14.6687 6.49245C14.6687 6.94474 14.7592 7.39703 14.8497 7.84932C9.87446 7.57794 5.53248 5.22603 2.54736 1.60771C2.00461 2.51229 1.73324 3.50733 1.73324 4.59283C1.73324 6.67336 2.81874 8.48252 4.35652 9.56802C3.36148 9.56802 2.4569 9.29664 1.64278 8.84435V8.93481C1.64278 11.8295 3.72332 14.1814 6.43706 14.7241C5.89431 14.8146 5.44202 14.905 4.89927 14.905C4.53744 14.905 4.17561 14.905 3.81377 14.8146C4.53744 17.1665 6.79889 18.8852 9.33171 18.9757C7.34164 20.6039 4.71835 21.5085 1.91416 21.5085C1.46187 21.5085 0.919117 21.5085 0.466827 21.418C3.18057 23.0463 6.3466 24.0413 9.69355 24.0413C20.639 24.0413 26.6092 14.9955 26.6092 7.12565C26.6092 6.85428 26.6092 6.5829 26.6092 6.40199C27.6947 5.49741 28.6897 4.50237 29.5038 3.32642Z"
        fill="#F9F9FB"
      />
    </svg>
  );
};

export default TwitterIcon;