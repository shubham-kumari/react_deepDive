export default function Button({children, isSelected, /* onSelect */ ...props}){ // forworded prop or proxy
    
    return(
        <li>
            <button  /* onClick={onSelect} */ {...props} className={isSelected ? "active" : ""}>{children}</button>
        </li>
    )
}