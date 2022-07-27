import { NavLink } from "@solidjs/router";
import Fa from "solid-fa";
import Text from "./Text";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function NavBar(){
    return (
        <div class="flex flex-row px-16 py-6 sticky top-0 flex-wrap justify-between items-baseline">
            <div class="flex flex-wrap flex-row items-baseline">
                <Text class="text-3xl pr-8">Karolin Bähr</Text>
                <Text class="text-2xl text-gray-500">I'm a <i class="text-gray-700">professional</i> software developer</Text>
            </div>
            <div>
                <NavLink class="px-3 text-xl" href="/">Home</NavLink>
                <NavLink class="px-3 text-xl" href="/portfolio">Portfolio</NavLink>
                <NavLink class="px-3 text-xl" href="/contacts">Contacts</NavLink>
            </div>
            <div class="flex flex-row self-center">
                <NavLink href="https://github.com/The127" target="blank"><Text class="text-3xl"><Fa icon={faGithub} /></Text></NavLink>
            </div>
        </div>
    );
}