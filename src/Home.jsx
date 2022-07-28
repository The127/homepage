import HomePanel from "./HomePanel";
import HomePanelContainer from "./HomePanelContainer";
import HomePanelItem from "./HomePanelItem";
import Text from "./Text";

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
                    <HomePanelItem class="bg-pink-100">
                        <Text>
                            i make music
                        </Text>
                    </HomePanelItem>
                    <HomePanelItem class="bg-yellow-100">
                        <Text>
                            i'm kinda gay
                        </Text>
                    </HomePanelItem>
                </HomePanel>

                <HomePanel>
                    <HomePanelItem class="bg-blue-100">
                        <Text>
                            i draw sometimes
                        </Text>
                    </HomePanelItem>
                    <HomePanelItem class="bg-orange-100">
                        <Text>
                            i made a online profile website
                        </Text>
                    </HomePanelItem>
                </HomePanel>

                <HomePanel>
                    <HomePanelItem class="bg-green-100">
                        <Text>
                            i like to code things
                        </Text>
                    </HomePanelItem>
                    <HomePanelItem class="bg-red-100">
                        <Text>
                            i like to sleep
                        </Text>
                    </HomePanelItem>
                </HomePanel>
            </HomePanelContainer>
        </>

    );
}