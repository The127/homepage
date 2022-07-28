export default function FooterItem(props){
    return (
        <span className="text my-1" class={props.class}>
            {props.children}
        </span>
    )
}