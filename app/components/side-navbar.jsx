import Link from "next/link";

const navLinks = [
  {
    title: "Home",
    href: "/dashboard",
  },
  {
    title: "Problem Statement",
    href: "/problem-statements",
  },
  {
    title: "Rules",
    href: "/rules",
  },
  {
    title: "Certifications",
    href: "/certifications",
  },
];

function AppNavbar() {
  return (
    <div className="flex flex-col gap-8 items-center border-r border-neutral-300/80 px-8 w-[300px] h-screen">
      <div className="flex flex-col gap-4 items-center justify-center pt-8">
        <h1 className="text-2xl font-bold">LOGO1</h1>
        <h1 className="text-2xl font-bold">LOGO2</h1>
      </div>
      <nav className="flex-1 w-full">
        <ul className="flex flex-col gap-4 overflow-auto">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <li className="border border-neutral-200 text-left p-4 rounded-lg hover:bg-neutral-200/80 duration-100">
                {link.title}
              </li>
            </Link>
          ))}
          <Link href={"#"}>
            <li className="border border-neutral-200 text-left p-4 rounded-lg hover:bg-neutral-200/80 duration-100">
              Logout
            </li>
          </Link>
        </ul>
      </nav>
      <div className="pb-8 w-full">
        <button className="w-full border px-8 py-4 border-neutral-200 rounded-lg hover:bg-neutral-200/80 duration-100">
          Raise Hand
        </button>
      </div>
    </div>
  );
}

export default AppNavbar;
