import { useContext } from "react"
import { ThemeContext } from '../App'


function Paragraph() {

    const theme = useContext(ThemeContext)

    return(
        <>
            <h1 className={theme}> Siêu anh hùng mavel chơi đồ </h1>
        </>
    )
}

export default Paragraph