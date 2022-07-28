export default function Text(props){
    return (
        <span class={props.class} className="text">
            {props.children}
        </span>
    )
}