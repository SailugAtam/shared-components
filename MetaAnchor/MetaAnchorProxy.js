/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-props-no-spreading */
import { memo, useMemo } from 'react';
import Link from 'next/link';

import { MetaAnchorProxy as MetaAnchorProps } from './MetaAnchor.propTypes';

const MetaAnchorProxy = ({
  className,
  external,
  href,
  style,
  target,
  rel,
  children,
  ...props
}) => {
  const hrefIsStatic = useMemo(
    () => href.includes(process.env.NEXT_PUBLIC_STATIC_URI),
    [href]
  );
  const fixedHref = useMemo(() => {
    if (!href.includes('/')) {
      return `/${href}`;
    }

    if (hrefIsStatic) {
      return `${process.env.NEXT_PUBLIC_HOST_URL}${href}`;
    }

    return href;
  }, [href, hrefIsStatic]);

  if (external || hrefIsStatic) {
    return (
      <a
        href={fixedHref}
        style={style}
        target={target}
        rel={rel}
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={fixedHref} passHref>
      <a style={style} className={className} {...props}>
        {children}
      </a>
    </Link>
  );
};
MetaAnchorProxy.propTypes = MetaAnchorProps.propTypes;
MetaAnchorProxy.defaultProps = MetaAnchorProps.defaultProps;

export default memo(MetaAnchorProxy);
