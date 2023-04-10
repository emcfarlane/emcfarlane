import HelloWorld from "./hello.mdx";

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
