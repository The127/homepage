export default function HomePanel(props){
    return (
        <div class="flex flex-col md:flex-row flex-1">
            {props.children}
        </div>
    )
}