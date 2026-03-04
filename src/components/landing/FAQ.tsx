import { resume } from "@/data/resume";

export function FAQ() {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-8 sm:pt-12 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pb-32">
      <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {resume.faqs.title}
      </h2>
      <dl className="mt-20 divide-y divide-white/10">
        {resume.faqs.items.map((faq) => (
          <div
            key={faq.id}
            className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8"
          >
            <dt className="text-base/7 font-semibold text-white lg:col-span-5">
              {faq.question}
            </dt>
            <dd className="mt-4 lg:col-span-7 lg:mt-0">
              <p className="text-base/7 text-gray-400">{faq.answer}</p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
