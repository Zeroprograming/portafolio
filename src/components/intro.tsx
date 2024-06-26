"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import { useSectionInView } from "@/lib/hooks/section-view";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function Intro() {
  const { ref } = useSectionInView("home");
  const { t } = useTranslation("intro");
  const router = useRouter();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={"/Selfie.jpeg"}
              alt="Ricardo portrait"
              width="300"
              height="300"
              quality="95"
              priority={true}
              className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-5xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-base font-medium !leading-[1.5] sm:text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{t("introDescription.paragraph1")}</span>{" "}
        {t("introDescription.paragraph2")}{" "}
        <span className="font-bold">{t("introDescription.paragraph3")}</span>{" "}
        <span className="font-bold">{t("introDescription.paragraph4")}</span>{" "}
        {t("introDescription.paragraph5")} {t("introDescription.paragraph6")}{" "}
        <span className="underline">{t("introDescription.paragraph7")}</span>{" "}
        <span className="underline">{t("introDescription.paragraph8")}</span>{" "}
        <span className="underline">{t("introDescription.paragraph9")}</span>{" "}
        <span className="underline">{t("introDescription.paragraph10")}</span>{" "}
        <span className="underline">{t("introDescription.paragraph11")}</span>{" "}
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition  dark:bg-white/10"
          // onClick={() => {
          //   setActiveSection("Contact");
          //   setTimeOfLastClick(Date.now());
          // }}
        > */}
        <a
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition  dark:bg-white/10"
          href={process.env.LINKEDIN_URL || ""}
          target="_blank"
        >
          {t("contactMe")}{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </a>
        {/* </Link> */}

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href={
            router.locale === "en"
              ? "/English_Johan_Jimenez_CV.pdf"
              : "/Spanish_Johan_Jimenez_CV.pdf"
          }
          download
        >
          {t("downloadCV")}{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href={process.env.LINKEDIN_URL || ""}
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href={process.env.GITHUB_URL || ""}
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
