import { useEffect, useState } from "react";

import Button from "../../components/Button/Button";
import clsx from "clsx";

const NavigationMenu = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  return (
    <nav
      className={clsx(
        'sticky top-0 z-10 flex justify-end w-full gap-8 px-40 py-12 mr-64 bg-white',
        scrollPosition > 100 ? 'bg-opacity-100' : 'bg-opacity-0'
      )}
    >
      <Button>Work</Button>
      <Button>Projects</Button>
    </nav>
  );
};

export default NavigationMenu;
