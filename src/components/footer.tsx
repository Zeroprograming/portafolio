import { useTranslation } from "next-i18next";
import React from "react";

export default function Footer() {
  const { t } = useTranslation("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-5 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {t("propertyRights", { ageDate: currentYear })}
      </small>
      <p className="text-xs">
        <span className="font-semibold">{t("aboutWebsite")}</span>
        {t("description")}
      </p>
    </footer>
  );
}
