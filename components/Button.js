import Link from "next/link";

function Button({ className, link, href, children, ...props }) {
  if (link) {
    return (
      <Link
        href={href}
        className={`w-fit rounded-full px-6 py-1 text-white ${className}`}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={`w-fit rounded-full px-6 py-1 text-white ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
