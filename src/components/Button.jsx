export default function Button({children, onSelect}){
    
    return(
        <li>
            <button onClick={onSelect} className="hover:bg-red-900">{children}</button>
        </li>
    )
}