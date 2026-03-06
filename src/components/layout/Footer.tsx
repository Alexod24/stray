import Image from "next/image";
import { resume } from "@/data/resume";

export function Footer() {
  return (
    <footer className="relative mx-auto mt-32 max-w-7xl px-6 lg:px-8 border-t border-border">
      <div className="py-12 sm:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo/logo-redondo-white.png"
                alt={resume.name}
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-foreground tracking-tighter uppercase">
                {resume.shortName}
                <span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
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
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-widest">
                    {category.title}
                  </h3>
                  <ul role="list" className="mt-4 space-y-2">
                    {category.links.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-widest">
                    {category.title}
                  </h3>
                  <ul role="list" className="mt-4 space-y-2">
                    {category.links.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
        <div className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            {resume.footer.copyright}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-primary font-bold tracking-widest uppercase">
              {resume.footer.status}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
