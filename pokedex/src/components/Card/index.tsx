import { ReactNode } from "react"
import './style.css'
import Pokedex from '../../assets/imgs/pokedex.png'

interface Props {
    children?: ReactNode
}

const Card = ({ children }: Props) => {
    return (
        <div style={{background: `url(${Pokedex}) no-repeat`}} className="card">
            {children}
        </div>
    )
}

export default Card