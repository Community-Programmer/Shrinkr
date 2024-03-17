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
    title: "Qr code generator",
    path: "/qrgenerator",
  },
  {
    title: "My urls",
    path: "/my urls",
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
