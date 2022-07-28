export default function Image(props){
    let link = props.src;

    if(props.src.startsWith("https://drive.google.com/file/d/")){
        link = "https://drive.google.com/uc?export=view&id=" + props.src.split("/")[5];
    }

    return (
        <img src={link} alt={props.alt} class={props.class} loading="lazy" width={props.width} height={props.height} />
    );
}