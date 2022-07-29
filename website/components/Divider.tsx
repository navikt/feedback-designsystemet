import { Heading } from "@navikt/ds-react";

export default function Divider(props: any) {
  return (
    <div className="relative flex py-5 gap-3 items-center">
      <div className="flex-grow border-t border-border-muted"></div>
      <Heading level="1" size="xlarge" className="flex-shrink mx-4 text-text">
        {props.name}
      </Heading>
      <div className="flex-grow border-t border-border-muted"></div>
    </div>
  );
}
