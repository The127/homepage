import { Link } from "@solidjs/router";

export default function HomePanelItem(props) {
    return (
        <div className="flex-1 transition-all" class={props.class}>
            <Link href={props.href} target={props.target}>
                <div class="p-16">
                    {props.children}
                </div>
            </Link>
        </div>
    )
}