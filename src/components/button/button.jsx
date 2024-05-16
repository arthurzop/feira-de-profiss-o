import './button.css'

export default function Button({logic, label, }){
    return(
        <button onClick={() => {logic}}>
            {label}
        </button>
    )
}