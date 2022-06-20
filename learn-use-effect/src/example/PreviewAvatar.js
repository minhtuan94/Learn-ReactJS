import { useEffect, useState } from "react";

function PreviewAvatar() {

    const [avatar, setAvatar] = useState()

    useEffect(()=>{
        return ()=> {

            avatar && URL.revokeObjectURL(avatar.preview)
        }

    },[avatar])

    function HandleAvatar(e) {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file);  //tạo ra link tạm để mở ảnh lên
        setAvatar(file)
    }

    return (
        <>
            <input
                type='file'
                onChange={HandleAvatar}
            />
            {avatar && (

                <img src={avatar.preview} alt='' width='80%' />
            )
            }
        </>
    )
}

export default PreviewAvatar