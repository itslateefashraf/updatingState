import react, { useState } from "react";
interface Props{
    id: number;
    time:number;
    start:boolean;
    fixed?:string
}
const ArrayOfObject = () => {
  const [status, setStatus] = useState<Props[]>([{ id: 1, time: 32, start: true }]);
  const UpdateArrayObject = () => {
      setStatus(status.map(stat => stat.id === 1 ? {...stat, start: false, fixed: 'true'} :stat));
  };
  return (
    <div>
      <p>
        id:{status[0].id} , time:{status[0].time} , start:
        {status[0].start.toString()} ,fixed:{status[0].fixed}
      </p>
      <button onClick={UpdateArrayObject}>Array</button>
    </div>
  );
};

export default ArrayOfObject;
