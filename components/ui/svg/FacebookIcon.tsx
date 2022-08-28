const FacebookIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      className={className}
      viewBox="0 0 29 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28.9618 15.2825C28.9614 12.5167 28.1685 9.80893 26.6769 7.47975C25.1854 5.15057 23.0577 3.29753 20.5458 2.14C18.0338 0.98248 15.2428 0.568946 12.5031 0.948359C9.76343 1.32777 7.18984 2.48424 5.087 4.28086C2.98416 6.07748 1.44015 8.43901 0.637735 11.0859C-0.164675 13.7327 -0.191873 16.5541 0.55936 19.2159C1.31059 21.8778 2.8088 24.2686 4.87661 26.1055C6.94442 27.9423 9.49524 29.1482 12.2271 29.5803V19.4662H8.55269V15.2825H12.2271V12.0939C12.2271 8.46652 14.3881 6.46288 17.6935 6.46288C18.779 6.47793 19.8619 6.57226 20.9337 6.74511V10.3073H19.1082C18.7972 10.266 18.4808 10.2952 18.1825 10.3928C17.8843 10.4904 17.6118 10.6538 17.3854 10.871C17.1589 11.0882 16.9842 11.3536 16.8742 11.6475C16.7642 11.9414 16.7217 12.2563 16.75 12.5688V15.2825H20.7645L20.1223 19.4662H16.75V29.5803C20.1546 29.0417 23.2553 27.3057 25.494 24.6846C27.7327 22.0635 28.9624 18.7295 28.9618 15.2825V15.2825Z"
        fill="#F9F9FB"
      />
    </svg>
  );
};

export default FacebookIcon;