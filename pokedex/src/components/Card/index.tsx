import { ReactNode } from "react"
import './style.css'
interface Props {
    children?: ReactNode
}

const Card = ({ children }: Props) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export default Card