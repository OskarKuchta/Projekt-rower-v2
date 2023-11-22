import { useMemo, useEffect } from "react";
import { useRouter } from "next/router";

const ScrollToHashElement = () => {
  const router = useRouter();

  const hashElement: HTMLElement | null = useMemo(() => {
    let hash: string = location.hash;
    const removeHashCharacter = (str: string) => {
      const result: string = str.slice(1);
      return result;
    };

    if (hash) {
      let element = document.getElementById(removeHashCharacter(hash));
      return element;
    } else {
      return null;
    }
  }, []);

  useEffect(() => {
    if (hashElement) {
      hashElement.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [hashElement]);

  return null;
};

export default ScrollToHashElement;