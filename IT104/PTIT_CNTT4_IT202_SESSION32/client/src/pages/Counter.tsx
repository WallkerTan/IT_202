import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
    const result:any = useSelector((data:any)=>{
        return data.counter
    });
    const dispatch = useDispatch()
    const increase = () => {
        dispatch({
            type:"INCREMENT"
        })
    }
    const giam = () => {
      dispatch({
        type:"GIAM"
      })
    }
  return (
    <div>
      <h1>Ứng dụng counter</h1>
      <p>count : {result.count}</p>
      <button onClick={increase}>Tăng</button>
      <button onClick={giam}>Giảm</button>
    </div>
  )
}
