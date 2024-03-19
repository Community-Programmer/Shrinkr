import Link from "next/link";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Shrink url",
    path: "/shrinkurl",
  },
  {
    title: "Analytics",
    path: "/analytics",
  },
  {
    title: "My urls",
    path: "/myurls",
  },
];

const Navlinks = () => {
  return (
    <>
      {links.map((url, index) => (
        <Link href={url.path} key={index}>
          {url.title}
        </Link>
      ))}
    </>
  );
};

export default Navlinks;
