import React, { HTMLProps } from 'react';
import Link from 'next/link';

type PlainLinkProps = HTMLProps<HTMLAnchorElement> & {
  disabled?: boolean;
};

const PlainLink: React.FC<PlainLinkProps> = ({
  href,
  // className,
  children,
  disabled,
  // onClick,
}) => {
  return disabled ? (
    <>{children}</>
  ) : (
    <Link href={href}>
      {/* <a className={className} onClick={onClick}> */}
      {children}
      {/* </a> */}
    </Link>
  );
};

export default PlainLink;
