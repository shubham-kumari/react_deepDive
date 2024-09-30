export default function Tabs({children, buttons,buttonsConatainer,  ...props}){
    const ButtonContainer = buttonsConatainer
    return(
        <>
        <ButtonContainer {...props}>
            {buttons}
        </ButtonContainer>
        {children} //content
        </>
    )
}