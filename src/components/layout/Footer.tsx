import { resume } from "@/data/resume";

export function Footer() {
  return (
    <footer className="relative mx-auto mt-32 max-w-7xl px-6 lg:px-8">
      <div className="border-t border-white/10 py-16 sm:py-24 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-black text-white tracking-tighter uppercase">
              {resume.shortName}
              <span className="text-indigo-500">.</span>
            </span>
            <p className="text-sm text-gray-500 max-w-xs">
              {resume.footer.description}
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {resume.footer.categories.slice(0, 2).map((category) => (
                <div
                  key={category.title}
                  className={
                    category.title === "Soporte" ? "mt-10 md:mt-0" : ""
                  }
                >
                  <h3 className="text-sm/6 font-semibold text-white uppercase tracking-widest text-xs">
                    {category.title}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {category.links.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm/6 text-gray-400 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {resume.footer.categories.slice(2, 4).map((category) => (
                <div
                  key={category.title}
                  className={category.title === "Legal" ? "mt-10 md:mt-0" : ""}
                >
                  <h3 className="text-sm/6 font-semibold text-white uppercase tracking-widest text-xs">
                    {category.title}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {category.links.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm/6 text-gray-400 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/5 pt-8 flex justify-between items-center whitespace-nowrap overflow-hidden">
          <p className="text-xs text-gray-600 uppercase font-black tracking-widest">
            {resume.footer.copyright}
          </p>
          <div className="flex gap-4">
            <span className="text-[10px] text-indigo-500 font-black tracking-widest animate-pulse">
              {resume.footer.status}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
