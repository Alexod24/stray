import { CheckIcon } from "@heroicons/react/20/solid";
import { resume } from "@/data/resume";

function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Pricing() {
  return (
    <div className="py-24 sm:pt-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">
            {resume.pricing.title}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            {resume.pricing.subtitle}
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg/8 text-pretty text-gray-400 sm:text-xl/8">
          {resume.pricing.description}
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {resume.pricing.tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                tierIdx === 0 ? "-mr-px lg:rounded-r-none" : "",
                tierIdx === resume.pricing.tiers.length - 1
                  ? "-ml-px lg:rounded-l-none"
                  : "",
                "flex flex-col justify-between rounded-3xl bg-gray-800/50 p-8 inset-ring inset-ring-gray-700 xl:p-10",
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? "text-indigo-400" : "text-white",
                      "text-lg/8 font-semibold",
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-indigo-400/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-400">
                      Más popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm/6 text-gray-400">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-semibold tracking-tight text-white">
                    {tier.priceMonthly}
                  </span>
                  {tier.priceMonthly !== "A medida" && (
                    <span className="text-sm/6 font-semibold text-gray-400">
                      /base
                    </span>
                  )}
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm/6 text-gray-400"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-indigo-400"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-indigo-500 text-white hover:bg-indigo-400"
                    : "bg-white/10 text-white inset-ring inset-ring-white/5 hover:bg-white/20 focus-visible:outline-white/75",
                  "mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
                )}
              >
                Empezar ahora
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
