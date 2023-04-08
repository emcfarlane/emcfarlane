import HelloWorld from "./hello.mdx";

export const Hero = () => (
  <div className="flex flex-col gap-10 sm:flex-row">
    <img
      className="aspect-square w-52 flex-none rounded-full object-cover"
      src="/eddie_small.jpg"
      alt="Profile picture"
    />
    <div className="max-w-xl flex-auto">
      <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
        Edward McFarlane
      </h3>
      <p className="text-base leading-7 text-gray-600">
        Senior Software Engineer
      </p>
      <p className="mt-6 text-base leading-7 text-gray-600">
        Hey, I'm Edward. I'm a software engineer based in London, UK. I'm
        currently working at{" "}
      </p>
    </div>
  </div>
);

// https://beta.nextjs.org/docs/guides/mdx
export default function Page() {
  return (
    <section>
      <article className="prose lg:prose-xl">
        <HelloWorld />
      </article>
    </section>
  );
}
