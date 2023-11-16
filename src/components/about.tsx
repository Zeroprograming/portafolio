"use client";

import React from "react";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks/section-view";

import SectionHeading from "./section-heading";
import { useTranslation } from "next-i18next";

export default function About() {
  const { ref } = useSectionInView("about");
  const { t } = useTranslation(["common", "about"]);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t("common:about")}</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">
          {t("about:aboutDescription.paragraph1")}
        </span>{" "}
        {t("about:aboutDescription.paragraph2")}{" "}
        {t("about:aboutDescription.paragraph3")}
        <span className="font-medium">
          {t("about:aboutDescription.paragraph4")}
        </span>
        <span className="underline">
          {t("about:aboutDescription.paragraph5")}
        </span>{" "}
        <span className="font-medium">
          {t("about:aboutDescription.paragraph6")}
        </span>{" "}
        {t("about:aboutDescription.paragraph7")}
      </p>

      <p>{t("about:enjoyTimeDescription")}</p>
    </motion.section>
  );
}
