import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Button = ({ isButton = true, title = "", action, href, moreStyle }) => {
  const style = `font-bold rounded-md px-3 py-2 text-base cursor-pointer animate focus:outline-none ${moreStyle}`;
  return (
    <>
      {isButton ? (
        <button className={style}>{title}</button>
      ) : (
        <Link className={style} to={href}>
          {title}
        </Link>
      )}
    </>
  );
};
export default Button;
