import ReactLoading from "react-loading";
export default function Loading(props) {
  return (
    <div className=" flex flex-col space-y-16 justify-center items-center w-screen h-[85vh]">
      <ReactLoading
        type={props.type}
        color={props.color}
        height={100}
        width={100}
        className="w-screen h-screen"
      />
      <h2 className="text-3xl">{props.text} ...</h2>
    </div>
  );
}
