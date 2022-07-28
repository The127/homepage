import Text from "./Text";

export default function WordCloudItem(props){
    // safe props.size which is a string as number in a variable
    const size = Number(props.size) + 1;
    const textSizeClass = "text-" + size + "xl p-" + size;
    return (
        <Text class={textSizeClass}>
            {props.children}
        </Text>
    );
}