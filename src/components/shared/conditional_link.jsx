import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ConditionalLink = ({ isActive = false, href, children, ...props }) => {
  const [isWaiting, setIsWaiting] = useState(false);
  const router = useRouter();

  const handleClick = (e) => {
    if (isWaiting || isActive || router.asPath === href) {
      e.preventDefault();
    } else {
      setIsWaiting(true);
      setTimeout(() => setIsWaiting(false), 500);
    }
  };

  return (
    <Link href={href} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ConditionalLink;
