import Text from "./Text";

export default function About() {
    return (
        <div>
            <div class="flex flex-col container mx-auto p-3 mt-16">
                <div class="my-3">
                    <Text class="text-6xl">About</Text>
                </div>
                <div class="flex my-3">
                    <Text class="text-3xl">I'm a <i class="professional">professional</i> software developer</Text>
                </div>

                <div class="my-3">
                    <p class="my-2">
                        I like to learn new technologies and I'm always looking for new challenges.
                        This website is a playground for me to try out new things.
                        I also use it to document my projects and to share my knowledge.
                    </p>
                    <p class="my-2">
                        I'm currently working as a software developer at <a href="https://www.phoenis.de/" target="blank">PHOENIS GmbH</a>.
                    </p>
                    <p class="my-2">
                        I enjoy working with <i class="professional">professional</i> technologies like <a href="https://dotnet.microsoft.com/" target="blank">.NET</a> and <a href="https://www.typescriptlang.org/" target="blank">TypeScript</a>.
                        But other technologies like <a href="https://www.python.org/" target="blank">Python</a> and <a href="https://www.rust-lang.org/" target="blank">Rust</a> are also interesting to me.
                        Also JavaScript is okay i guess...
                    </p>
                    <p class="my-2">
                        This website is built with <a href="https://solidjs.com/" target="blank">SolidJS</a> and <a href="https://tailwindcss.com/" target="blank">TailwindCSS</a>.
                        The source code is available on <a href="https://github.com/The127/homepage" target="blank">GitHub</a>.
                    </p>
                    <p class="my-2">
                        This text was written (mostly) by GitHub Copilot, i only had to stear it into the right direction. I love this tool.
                    </p>
                </div>
            </div>
        </div>
    );
}