import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Main from './Main'
import Footer from './Footer'
export default function AdminIndex() {
    return (
        <div style={{
            backgroundColor: "green",
            width: "100%",
            height: "950px"
        }}>
            <div className='main'>
                <Header></Header>
            </div >
            <div style={{
                display: "flex",          
                flexDirection: "row", 
                height: "100%",
                gap:"55px"
            }}>
                <div className="menu"><Menu></Menu></div>
                <div>
                    <div className="main"><Main></Main></div>
                    <div className="footer"><Footer></Footer></div>
                </div>
            </div>
        </div>
    )
}