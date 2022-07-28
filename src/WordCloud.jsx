export default function WordCloud(props){
    return (
        <div class="flex flex-row flex-wrap items-center justify-center mx-16 md:mx-32 xl:mx-64">
            {props.children}
        </div>
    );
}