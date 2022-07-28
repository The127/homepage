import HomePanel from "./HomePanel";
import HomePanelContainer from "./HomePanelContainer";
import HomePanelItem from "./HomePanelItem";
import Text from "./Text";

export default function Home() {
    return (
        <>
            <div class="container mx-auto">
                <div class="flex flex-row flex-1 justify-center my-56">
                    <Text class="text-6xl text-center huge-text">Very <i class="professional">inspiring</i> text that makes you <i class="professional">think</i>.</Text>
                </div>
            </div>

            <HomePanelContainer>
                <HomePanel>
                    <HomePanelItem>
                        thing 1
                        asd
                        <br />
                        asd
                    </HomePanelItem>
                    <HomePanelItem>
                        image of thing
                    </HomePanelItem>
                </HomePanel>

                <HomePanel>
                    <HomePanelItem>
                        image of thing
                    </HomePanelItem>
                    <HomePanelItem>
                        thing 2
                    </HomePanelItem>
                </HomePanel>

                <HomePanel>
                    <HomePanelItem>
                        image of thing
                    </HomePanelItem>
                    <HomePanelItem>
                        thing 3
                    </HomePanelItem>
                </HomePanel>
            </HomePanelContainer>
        </>

    );
}