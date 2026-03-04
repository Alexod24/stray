import { resume } from "@/data/resume";

export function LogoCloud() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-12">
        {resume.logos.title}
      </p>
      <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5 grayscale opacity-50">
        {resume.logos.items.map((logo) => (
          <img
            key={logo.name}
            alt={logo.name}
            src={logo.src}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
        ))}
      </div>
      <div className="mt-16 flex justify-center">
        <p className="relative rounded-full bg-gray-800/25 px-4 py-1.5 text-sm/6 text-gray-400 inset-ring inset-ring-white/10">
          <span className="hidden md:inline">{resume.logos.cta.text}</span>
          <a
            href={resume.logos.cta.href}
            className="font-semibold text-indigo-400 hover:text-indigo-300 ml-2"
          >
            <span aria-hidden="true" className="absolute inset-0" />{" "}
            {resume.logos.cta.linkText} <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
      </div>
    </div>
  );
}
