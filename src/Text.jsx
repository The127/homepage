export default function Text(props){
    return (
        <span class={props.class}>
            {props.children}
        </span>
    )
}