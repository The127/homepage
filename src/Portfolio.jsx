import Text from "./Text";

export default function Portfolio() {
    return (
        <div className="flex flex-col container mx-auto p-3 mt-16">
            <div className="flex flex-col my-3">
                <Text class="text-6xl">Projects</Text>
            </div>
            <div className="flex flex-col my-3">
                <a href="https://raccoon-chess.vercel.app/"><Text class="text-3xl">profyle</Text><Text
                    class="text-xs text-gray-600">(click me)</Text></a>
                <Text>A website for playing chess online!</Text>
                <Text>Written in vue.js (mostly my friend) with a go backend (mostly me).</Text>
            </div>
            <div className="flex flex-col my-3">
                <a href="https://profyle.net"><Text class="text-3xl">profyle</Text><Text class="text-xs text-gray-600">(click
                    me)</Text></a>
                <Text>A website for creating a web-profile! <a className="text-blue-800"
                                                               href="https://profyle.net/darkarotte">(here is mine)</a></Text>
                <Text>Written in vue.js (mostly my friend) with a asp.net core backend (mostly me) using Rest +
                    SignalR.</Text>
            </div>
            <div className="flex flex-col my-3">
                <a href="https://darkarotte.xyz"><Text class="text-3xl">this very website</Text><Text class="text-xs text-gray-600">(click
                    me)</Text></a>
                <Text>Its this website!</Text>
            </div>
            <div className="flex flex-col my-3">
                <Text class="text-3xl">Other things...</Text>
                <Text>I am usually always working on something. It should be added here once im done with it.</Text>
            </div>

            <div className="flex flex-col my-3">
                <Text class="text-6xl">Libraries</Text>
            </div>
            <div className="flex flex-col my-3">
                <Text class="text-3xl">FluentBlazorRouter</Text>
                <Text>A fluently configurable drop in replacement for the default Blazor Router.</Text>
                <Text>Written in c#/Blazor.</Text>
            </div>
            <div className="flex flex-col my-3">
                <Text class="text-3xl">HttpExceptions</Text>
                <Text>A C# library for throwing and handling http errors in a web api.</Text>
            </div>
        </div>
    );
}