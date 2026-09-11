import Image from "next/image";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaBirthdayCake, FaDownload } from "react-icons/fa";
import avatar from "../../public/images/Avatar.png";
import useExperiences from "~/hooks/useExperiences";
import usePersonalInfo from "~/hooks/usePersonalInfo";
import useSkills from "~/hooks/useSkills";
import useSocials from "~/hooks/useSocials";
import useTranslations from "~/i18n/useTranslations";
import useQualifications from "~/hooks/useQualifications";

const Resume = () => {
  const info = usePersonalInfo();
  const qualifications = useQualifications();
  const experience = useExperiences().filter((x) => x.important);
  const { langs, proglangs } = useSkills();
  const socials = useSocials();
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center pt-24 pb-10 print:pt-0 print:pb-0">
      <button
        onClick={() => window.print()}
        className="btn btn-primary gap-2 mb-6 print:hidden"
      >
        <FaDownload /> {t.sections.resumeDownloadButton}
      </button>
      <div className="w-[210mm] min-h-[297mm] bg-white text-neutral-900 shadow-xl print:shadow-none flex">
        <aside className="w-[70mm] shrink-0 bg-slate-800 text-white p-[10mm] flex flex-col gap-8">
          <div className="flex flex-col items-center text-center gap-3">
            <Image
              src={avatar}
              alt="Profile picture"
              className="w-28 h-28 rounded-full object-cover ring-4 ring-white/20"
            />
            <h1 className="text-2xl font-bold leading-tight">{info.name}</h1>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-3">
              <FaBirthdayCake className="text-blue-300 shrink-0" />
              <span>{info.birthdate}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-300 shrink-0" />
              <span>{info.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-blue-300 shrink-0" />
              <span>{info.phone}</span>
            </div>
            <div className="flex items-center gap-3 break-all">
              <FaEnvelope className="text-blue-300 shrink-0" />
              <span>{info.email}</span>
            </div>
            {socials.map((x) => (
              <a
                key={x.name}
                href={x.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 break-all text-white/90 hover:text-white"
              >
                <span className="text-blue-300 shrink-0"><x.Icon size={16} /></span>
                <span className="text-xs leading-snug">{x.link.replace(/^https?:\/\/(www\.)?/, "")}</span>
              </a>
            ))}
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-300 mb-3">
              {t.sections.languagesHeading}
            </h2>
            <div className="flex flex-col gap-2">
              {langs.map((x) => (
                <div key={x.name}>
                  <div className="text-sm mb-1">{x.name}</div>
                  <div className="h-1.5 w-full rounded-full bg-white/20">
                    <div className="h-1.5 rounded-full bg-blue-300" style={{ width: `${x.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-300 mb-3">
              {t.sections.programmingLanguagesHeading}
            </h2>
            <div className="flex flex-wrap gap-2">
              {proglangs.map((x) => (
                <span key={x.name} className="flex items-center gap-1.5 rounded bg-white/10 px-2 py-1 text-xs">
                  <x.Icon size={12} /> {x.name}
                </span>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-1 p-[12mm] flex flex-col gap-8">
          <section>
            <h2 className="text-lg font-bold uppercase tracking-wide text-blue-700 border-b-2 border-blue-700 pb-1 mb-4">
              {t.nav.education}
            </h2>
            <div className="flex flex-col gap-4">
              {qualifications.map((x) => (
                <div key={x.title} className="flex justify-between items-baseline">
                  <div>
                    <div className="font-semibold">{x.title}</div>
                    <div className="text-sm text-neutral-600">{x.institution}</div>
                  </div>
                  <div className="text-sm text-neutral-500 whitespace-nowrap ml-4">{x.date}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold uppercase tracking-wide text-blue-700 border-b-2 border-blue-700 pb-1 mb-4">
              {t.nav.experience}
            </h2>
            <div className="flex flex-col gap-4">
              {experience.map((x) => (
                <div key={x.key}>
                  <div className="flex justify-between items-baseline">
                    <div className="font-semibold">{x.function} {t.sections.experienceConnector} {x.name}</div>
                    <div className="text-sm text-neutral-500 whitespace-nowrap ml-4">{x.date}</div>
                  </div>
                  <p className="text-sm text-neutral-700 mt-1">{x.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Resume;
