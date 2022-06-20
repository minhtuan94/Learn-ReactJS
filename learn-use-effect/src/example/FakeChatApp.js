import { useEffect, useState } from "react"

const lesson = [
    {
        id:1,
        name:'ReactJS là gì? Tại sao nên học ReactJS'
    },
    {
        id:2,
        name: 'SPA/MPA là gì?'
    },
    {
        id:3,
        name: 'Arrow function'
    }
]

function FakeChatApp() {
    const [lessonId, setLessonId] = useState(1)

    //lắng nghe custom event
    useEffect(()=>{
        function HandleComment({detail}){
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, HandleComment)

        return ()=>{
            window.removeEventListener(`lesson-${lessonId}`, HandleComment)
        }
    },[lessonId]) 

    return (
        <>
        <ul>
            {lesson.map(lesson=>(
                <li
                key={lesson.id}
                style={{
                    color: lessonId==lesson.id?
                    'red':'#333'
                }}
                onClick={()=>setLessonId(lesson.id)}
                >
                    {lesson.name}</li>
            ))}
        </ul>
        </>
    )

}

export default FakeChatApp