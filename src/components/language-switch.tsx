import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function LanguageSwitch() {
  const router = useRouter();
  const [lang, setLang] = useState("en");

  useEffect(() => {
    setLang(router.locale as string);
  }, [router.locale]);

  const switchLang = () => {
    const newLang = lang === "en" ? "es" : "en";
    const regex = new RegExp(`^/${lang}`);
    const newPath = router.asPath.replace(regex, `/${newLang}`);
    router.push(newPath, newPath, { locale: newLang });
  };

  return (
    <button
      className="fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={switchLang}
    >
      {lang === "en" ? "EN" : "ES"}
    </button>
  );
}
