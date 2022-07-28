import HomePanel from "./HomePanel";
import HomePanelContainer from "./HomePanelContainer";
import HomePanelItem from "./HomePanelItem";
import Text from "./Text";
import { Link } from "@solidjs/router";

export default function Home() {
    return (
        <>
            <div class="container mx-auto">
                <div class="flex flex-row flex-1 justify-center my-16 md:my-56">
                    <Text class="text-6xl text-center huge-text">Very <i class="professional">inspiring</i> text that makes you <i class="professional">think</i>.</Text>
                </div>
            </div>

            <HomePanelContainer>
                <HomePanel>
                    <HomePanelItem class="bg-pink-100 hover:bg-pink-200 active:bg-pink-50" href="https://liaaura.vercel.app/" target="blank">
                        <Text>
                            i make music
                        </Text>
                    </HomePanelItem>
                    <HomePanelItem class="bg-yellow-100 hover:bg-yellow-200 active:bg-yellow-50" href="/drawings">
                        <Text>
                            i write very bad poetry
                        </Text>
                    </HomePanelItem>
                </HomePanel>

                <HomePanel>
                    <HomePanelItem class="bg-blue-100 hover:bg-blue-200 active:bg-blue-50" href="/drawings">
                        <Text>
                            i draw sometimes
                        </Text>
                    </HomePanelItem>
                    <HomePanelItem class="bg-orange-100 hover:bg-orange-200 active:bg-orange-50" href="https://profyle.net" target="blank">
                        <Text>
                            i made an online profile website
                        </Text>
                    </HomePanelItem>
                </HomePanel>

                <HomePanel>
                    <HomePanelItem class="bg-green-100 hover:bg-green-200 active:bg-green-50" href="/drawings">
                        <Text>
                            i like to code things
                        </Text>
                    </HomePanelItem>
                    <HomePanelItem class="bg-red-100 hover:bg-red-200 active:bg-red-50" href="/drawings">
                        <Text>
                            i like to sleep
                        </Text>
                    </HomePanelItem>
                </HomePanel>
            </HomePanelContainer>
        </>

    );
}