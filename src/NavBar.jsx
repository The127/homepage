import { NavLink } from "@solidjs/router";
import Text from "./Text";

export default function NavBar(){
    return (
        <div class="flex flex-row px-16 py-6 sticky top-0 flex-wrap justify-between items-baseline">
            <div class="flex flex-wrap flex-row">
                <Text class="text-xl pr-8">Karolin Bähr</Text>
                <Text class="text text-gray-500">I'm a <i class="text-gray-700">professional</i> software developer</Text>
            </div>
            <div>
                <NavLink class="px-3" href="/">Home</NavLink>
                <NavLink class="px-3" href="/portfolio">Portfolio</NavLink>
                <NavLink class="px-3" href="/contacts">Contacts</NavLink>
            </div>
            <div>
                <NavLink href="https://github.com/The127">Github</NavLink>
            </div>
        </div>
    );
}