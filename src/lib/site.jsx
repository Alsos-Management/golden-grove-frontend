// Helper that respects Astro's base path for internal links rendered from React islands.
const BASE = import.meta.env.BASE_URL || '/';

export function href(to) {
  if (!to) return to;
  if (/^(https?:|mailto:|tel:|#)/.test(to)) return to;
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const path = to.startsWith('/') ? to : `/${to}`;
  return `${base}${path}`;
}

export function Link({ to, children, ...rest }) {
  return <a href={href(to)} {...rest}>{children}</a>;
}
