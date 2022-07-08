/* USAGE =======================================================================
  <ConditionalWrapper
    condition={variant != "details"}
    wrapper={(children) => (
      <Link href={"/movie/".concat(movie.id.toString())}>{children}</Link>
    )}
  >
    <p
      className={cx([
        styles.title,
        styles[`title__${variant}`],
        { [styles.spacing]: variant == "details" },
      ])}
    >
      {movie.title}
    </p>
  </ConditionalWrapper>
============================================================================= */

// https://blog.hackages.io/conditionally-wrap-an-element-in-react-a8b9a47fab2
export default function ConditionalWrapper({ condition, wrapper, children }) {
  return condition ? wrapper(children) : children;
}
