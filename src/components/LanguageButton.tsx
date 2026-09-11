import { useRouter } from "next/router";
import { useRef } from "react";
import { BE, FR, GB } from "country-flag-icons/react/3x2";
import { LOCALES, LOCALE_META, type Locale } from "~/i18n/locales";
import useTranslations, { useLocale } from "~/i18n/useTranslations";

const FLAGS: Record<Locale, React.ComponentType<{ className?: string; title?: string }>> = {
  "en-GB": GB,
  fr: FR,
  "nl-BE": BE,
};

const LanguageButton = () => {
  const router = useRouter();
  const t = useTranslations();
  const currentLocale = useLocale();
  const triggerRef = useRef<HTMLDivElement>(null);
  const CurrentFlag = FLAGS[currentLocale];

  const changeLocale = (nextLocale: Locale) => {
    if (nextLocale === currentLocale) return;
    const { pathname, query, asPath } = router;
    void router.push({ pathname, query }, asPath, { locale: nextLocale });
    triggerRef.current?.blur();
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        ref={triggerRef}
        tabIndex={0}
        role="button"
        className="btn btn-circle btn-ghost"
        aria-label={t.languageSwitcherLabel}
      >
        <CurrentFlag className="w-6 rounded-sm" title={LOCALE_META[currentLocale].label} />
      </div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 text-base-content rounded-box z-10 mt-3 w-44 p-2 shadow">
        {LOCALES.map((locale) => {
          const Flag = FLAGS[locale];
          return (
            <li key={locale}>
              <button
                type="button"
                className={locale === currentLocale ? "menu-active" : ""}
                onClick={() => changeLocale(locale)}
              >
                <Flag className="w-5 rounded-sm" /> {LOCALE_META[locale].label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LanguageButton;
