import "./classHeader.css";

export default function ClassHeader(props) {
  return (
    <div>
      <div className="wrappedHeader">
        <div className="className">{props.className}</div>
        <div className="classCode">{props.classCode}</div>
      </div>
      {props.children}
    </div>
  );
}
