export default function FooterContainer(props){
    return (
        <div className="flex flex-col md:flex-row justify-between flex-wrap" class={props.class}>
            {props.children}
        </div>
    );
}