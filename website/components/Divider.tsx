export default function Divider(props: any) {
  return (
    <div className="relative flex py-5 items-center">
      <div className="flex-grow border-t border-border-muted"></div>
      <span className="flex-shrink mx-4 text-text">{props.name}</span>
      <div className="flex-grow border-t border-border-muted"></div>
    </div>
  );
}
