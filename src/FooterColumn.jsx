export default function FooterColumn(props){
    return (
        <div className="flex flex-col" class={props.class}>
            {props.children}
        </div>
    )
}