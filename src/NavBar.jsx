import { NavLink } from "@solidjs/router";
import Fa from "solid-fa";
import Text from "./Text";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function NavBar(){
    return (
        <div class="flex flex-row px-16 py-6 sticky top-0 flex-wrap justify-between items-baseline">
            <div class="flex flex-wrap flex-row items-baseline">
                <Text class="text-3xl pr-8 pb-3">Karolin Bähr</Text>
                <Text class="text-2xl pr-8 text-gray-500 pb-2">I'm a <i class="text-gray-700">professional</i> software developer</Text>
            </div>
            <div class="flex flex-row pb-2 pr-8">
                <NavLink class="pr-3 text-xl" end="true" href="/">Home</NavLink>
                <NavLink class="px-3 text-xl" end="true" href="/portfolio">Portfolio</NavLink>
                <NavLink class="pl-3 text-xl" end="true" href="/contacts">Contacts</NavLink>
            </div>
            <div class="flex flex-row self-center">
                <NavLink href="https://github.com/The127" target="blank"><Text class="text-3xl"><Fa icon={faGithub} /></Text></NavLink>
            </div>
        </div>
    );
}