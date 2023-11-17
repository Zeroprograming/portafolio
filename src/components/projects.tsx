"use client";

import React from "react";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks/section-view";

import SectionHeading from "./section-heading";
import Project from "./project";
import { useTranslation } from "next-i18next";

export default function Projects() {
  const { ref } = useSectionInView("projects");
  const { t } = useTranslation("projects");

  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
      <SectionHeading>{t("myProjects")}</SectionHeading>
      <div className="flex flex-wrap justify-center gap-6 ">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
