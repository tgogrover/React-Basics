import React ,{useState,useEffect}from 'react'

function UseEffect2() {
    const [x ,changeX]=useState(0)
    const [y ,changeY]=useState(0)
    const logMousePosition=(event)=>{
        console.log('mouse event')
        changeX(event.clientX)
        changeY(event.clientY)
    }
    useEffect(()=>{
        console.log('effect render')
        window.addEventListener('mousemove',logMousePosition)
        return ()=>{
            console.log('unmount component removed')
            window.removeEventListener('mousemove',logMousePosition)
        }
     },[])
    return (
        <div>
            Hooks X={x};
            Hooks Y={y};
            
        </div>
    )
}

export default UseEffect2
