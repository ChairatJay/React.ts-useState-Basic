import { ReactElement } from "react";

type HeadingProps = {
  title: string;
}

const Heading = ({ title }: HeadingProps): ReactElement => { 
  return (
    <div>
      <h1 id="mainText">{title}</h1>
      <TextH2/>
    </div>
  )
};

export function TextH2() {
  return <h2>This is h2</h2>;
}

export default Heading;