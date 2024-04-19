import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
}

function Section({ title = "Default", children }: SectionProps) {
  return (
    <section>
      <h1>{title}</h1>
      <p>{children}</p>
    </section>

  );
}

export default Section;