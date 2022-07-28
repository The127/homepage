import Fa from "solid-fa";
import Text from "./Text";

export default function NotFound(){
    return (
        <>
            <div class="container mx-auto flex flex-col">
                <Text class="text-6xl mt-12 mb-6">
                    Stop snooping around!
                </Text>
                <Text class="mb-3">
                    The page you are looking for does not exist.
                </Text>
            </div>
        </>
    );
}