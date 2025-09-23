import { useDispatch, useSelector } from "react-redux"
import { increment , apart, reset } from "../store/slice/couterSlice";
import type { Data } from "../utils/type";

export default function counter() {

    const reslut = useSelector((data : Data) => {
        return data.counter.value;
    })
    const dispatch =useDispatch();
    const increase = () => {
        dispatch(increment())
    }
    
    const apart2 = () => {
        dispatch(apart())
    }
    const reset2 = () => {
      dispatch(reset())
    }
  return (
    <div>
      gia tri counter {reslut}
      <button onClick={increase}>+</button>
      <button onClick={apart2}>-</button>
      <button onClick={reset2} >reset</button>
    </div>
  )
}
