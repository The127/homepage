import Text from "./Text";

export default function Impressum() {
    return (
        <>
            <div class="container mx-auto flex flex-col">
                <Text class="text-6xl mt-12 mb-6">
                    Impressum
                </Text>
                <Text class="mb-3">
                    the information you are looking for is in the footer<br />
                    why did you even click this link?<br />
                    are you blind?
                </Text>
            </div>
        </>
    );
}