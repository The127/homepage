import { NavLink } from "@solidjs/router";
import Fa from "solid-fa";
import Text from "./Text";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function NavBar(){
    return (
        <div class="navbar flex flex-row px-16 py-6 sticky top-0 flex-wrap justify-between items-baseline drop-shadow">
            <div class="flex flex-wrap flex-row items-baseline w-full md:w-auto">
                <Text class="text-3xl pr-8 mb-3">Karolin Bähr</Text>
                <Text class="hidden md:block text-2xl pr-8 mb-2 text-gray-500">I'm a <i class="text-gray-700">professional</i> software developer</Text>
            </div>
            <div class="flex flex-col md:flex-row mb-2 pr-8">
                <NavLink class="mr-1 p-2 text-xl" end="true" href="/">Home</NavLink>
                <NavLink class="mx-1 p-2 text-xl" end="true" href="/portfolio">Portfolio</NavLink>
                <NavLink class="ml-1 p-2 text-xl" end="true" href="/contacts">Contacts</NavLink>
            </div>
            <div class="flex-row self-center hidden md:flex">
                <NavLink href="https://github.com/The127" target="blank"><Text class="text-3xl"><Fa icon={faGithub} /></Text></NavLink>
            </div>
        </div>
    );
}