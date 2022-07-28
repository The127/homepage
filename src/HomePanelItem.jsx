export default function HomePanelItem(props) {
    return (
        <div className="flex-1 p-16" class={props.class}>
            {props.children}
        </div>
    )
}