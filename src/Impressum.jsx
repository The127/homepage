import Text from "./Text";

export default function Impressum() {
    return (
        <>
            <div class="container mx-auto flex flex-col p-3">
                <Text class="text-6xl mt-12 mb-6 break-words">
                    Impressum
                </Text>
                <Text class="mb-3">
                    The information you are looking for is in the footer.<br />
                    Why did you even click this link?<br />
                    Are you blind?
                </Text>
            </div>
        </>
    );
}