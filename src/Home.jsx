import HomePanel from "./HomePanel";
import HomePanelContainer from "./HomePanelContainer";
import HomePanelItem from "./HomePanelItem";
import Text from "./Text";
import { Link } from "@solidjs/router";
import Fa from "solid-fa";
import { faExternalLink, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import WordCloud from "./WordCloud";
import WordCloudItem from "./WordCloudItem";

export default function Home() {
    return (
        <>
            <div class="container mx-auto">
                <div class="flex flex-col flex-1 justify-center my-32 md:my-56">
                    <div class="text-9xl top-0 mx-16 text-gray-300">
                        <Fa icon={faQuoteLeft} />
                    </div>
                    <Text class="text-6xl text-center huge-text">Very <i class="professional">inspiring</i> text that makes you <i class="professional">think</i>.</Text>
                    <Text class="text-right pt-6 mr-16 text-3xl text-gray-500">- me, just now</Text>
                </div>
            </div>

            <HomePanelContainer>
                <HomePanel>
                    <HomePanelItem class="bg-pink-100 hover:bg-pink-200 active:bg-pink-50" href="https://liaaura.vercel.app/" target="blank">
                        <div class="flex flex-row justify-center">
                            <Text class="mr-2">
                                I make music.
                            </Text>
                            <Fa icon={faExternalLink} />
                        </div>
                    </HomePanelItem>
                    <HomePanelItem class="bg-yellow-100 hover:bg-yellow-200 active:bg-yellow-50" href="/poetry">
                        <Text>
                            I write very bad poetry.
                        </Text>
                    </HomePanelItem>
                </HomePanel>

                <HomePanel>
                    <HomePanelItem class="bg-blue-100 hover:bg-blue-200 active:bg-blue-50" href="/drawings">
                        <Text>
                            I draw sometimes.
                        </Text>
                    </HomePanelItem>
                    <HomePanelItem class="bg-orange-100 hover:bg-orange-200 active:bg-orange-50" href="https://profyle.net" target="blank">
                        <div class="flex flex-row justify-center">
                            <Text class="mr-2">
                                I made an online profile website.
                            </Text>
                            <Fa icon={faExternalLink} />
                        </div>
                    </HomePanelItem>
                </HomePanel>

                <HomePanel>
                    <HomePanelItem class="bg-green-100 hover:bg-green-200 active:bg-green-50" href="/portfolio">
                        <Text>
                            I like to code things.
                        </Text>
                    </HomePanelItem>
                    <HomePanelItem class="bg-red-100 hover:bg-red-200 active:bg-red-50" href="/drawings">
                        <Text>
                            I like to sleep.
                        </Text>
                    </HomePanelItem>
                </HomePanel>
            </HomePanelContainer>

            <div class="container mx-auto">
                <div class="flex flex-col flex-1 justify-center my-32 md:my-56">
                    <WordCloud>
                        <WordCloudItem size="4">agile</WordCloudItem>
                        <WordCloudItem size="1">professional</WordCloudItem>
                        <WordCloudItem size="2">solid</WordCloudItem>
                        <WordCloudItem size="1">tailwind</WordCloudItem>
                        <WordCloudItem size="3">css</WordCloudItem>
                        <WordCloudItem size="1">architecture</WordCloudItem>
                        <WordCloudItem size="2">application</WordCloudItem>
                        <WordCloudItem size="1">blazor</WordCloudItem>
                        <WordCloudItem size="1">responsive</WordCloudItem>
                        <WordCloudItem size="4">mobile</WordCloudItem>
                        <WordCloudItem size="3">desktop</WordCloudItem>
                        <WordCloudItem size="1">javascript</WordCloudItem>
                        <WordCloudItem size="2">container</WordCloudItem>
                        <WordCloudItem size="1">cloud</WordCloudItem>
                        <WordCloudItem size="1">software</WordCloudItem>
                        <WordCloudItem size="3">developer</WordCloudItem>
                        <WordCloudItem size="2">azure</WordCloudItem>
                        <WordCloudItem size="1">html</WordCloudItem>
                        <WordCloudItem size="1">aws</WordCloudItem>
                        <WordCloudItem size="4">typescript</WordCloudItem>
                        <WordCloudItem size="1">dotnet</WordCloudItem>
                        <WordCloudItem size="2">dotnetcore</WordCloudItem>
                        <WordCloudItem size="1">algorithm</WordCloudItem>
                        <WordCloudItem size="3">datastructure</WordCloudItem>
                        <WordCloudItem size="2">design</WordCloudItem>
                        <WordCloudItem size="1">adaptive</WordCloudItem>
                        <WordCloudItem size="2">html5</WordCloudItem>
                        <WordCloudItem size="3">web</WordCloudItem>
                        <WordCloudItem size="1">gcp</WordCloudItem>
                        <WordCloudItem size="1">docker</WordCloudItem>
                        <WordCloudItem size="2">microservice</WordCloudItem>
                        <WordCloudItem size="1">react</WordCloudItem>
                        <WordCloudItem size="1">bootstrap</WordCloudItem>
                    </WordCloud>
                    <div class="text-3xl top-0 mt-16 mx-16 text-gray-300">
                        <Fa icon={faQuoteLeft} />
                    </div>
                    <Text class="text-center pt-6 text-3xl ">Things i should probably know by now.</Text>
                    <Text class="text-right pt-6 mr-16 text-xl text-gray-500">- me, just now</Text>
                </div>
            </div>
        </>

    );
}