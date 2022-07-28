import Text from "./Text";

export default function Portfolio() {
    return (
        <div class="flex flex-col container mx-auto p-3 mt-16">
            <div class="my-3">
                <Text class="text-6xl">Libraries</Text>
            </div>
            <div class="flex my-3">
                <Text class="text-3xl">FluentBlazorRouter</Text>
            </div>
            <div class="flex my-3">
                <Text class="text-3xl">HttpExceptions</Text>
            </div>
            <div class="flex my-3">
                <Text class="text-3xl">Raccoon-EventHub</Text>
            </div>

            <div class="my-3">
                <Text class="text-6xl">Projects</Text>
            </div>
            <div class="flex my-3">
                <Text class="text-3xl">profyle</Text>
            </div>
        </div>
    );
}