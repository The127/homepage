import { NavLink, Link } from "@solidjs/router";
import Text from "./Text";
import Fa from "solid-fa";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function NavBar() {
    return (
        <div class="navbar flex flex-row px-16 py-6 md:sticky top-0 flex-wrap justify-center md:justify-between items-center md:items-baseline drop-shadow">
            <div class="flex flex-wrap flex-row justify-center md:items-baseline w-full md:w-auto">
                <Link href="/"><Text class="text-6xl md:text-3xl md:pr-8 mb-3">Karolin</Text></Link>
                <Text class="hidden md:block text-2xl pr-8 mb-2 text-gray-500">I'm a <i class="text-gray-700 professional">professional</i> software developer</Text>
            </div>
            <div class="md:pr-8">
                <div class="flex flex-col md:flex-row mb-2 nav-links">
                    <NavLink class="m-1 p-2 text-xl text-center" end="true" href="/">Home</NavLink>
                    <NavLink class="m-1 p-2 text-xl text-center" end="true" href="/portfolio">Portfolio</NavLink>
                    <NavLink class="m-1 p-2 text-xl text-center" end="true" href="/contacts">Contacts</NavLink>
                </div>
            </div>
            <div class="flex-row self-center hidden md:flex">
                <Link href="https://github.com/The127" target="blank"><Text class="text-3xl"><Fa icon={faGithub} /></Text></Link>
            </div>
        </div>
    );
}