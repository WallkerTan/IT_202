
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change } from '../store/slice/language';

export default function Language() {
    const reslut = useSelector((data:any) => {
        return data.change.lang
    })
    const dispatch = useDispatch();
    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(change(e.target.value));
    }
  return (
    <div>
      <select onChange={handleChange}>
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
      </select>
      <p>{reslut == "vi" ? "Học viện Rikkei" : "Rikkei Academy" }</p>
    </div>
  )
}
