import Image from "next/image";
import Link from "next/link";
// import betacare from '../../public/images/betacare-logo-white.png'

const BetaCareLogo = ({ ...rest }) => {
  return (
    <Link href="/">
      <a>
        <Image
          src="/images/betacare-logo-white.png"
          alt="betacare logo"
          width={140}
          height={47}
          priority
          {...rest}
        />
      </a>
    </Link>
  );
};

export default BetaCareLogo;
