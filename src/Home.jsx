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
                        a thing i've done
                    </HomePanelItem>
                    <HomePanelItem class="bg-yellow-100">
                        image of thing
                    </HomePanelItem>
                </HomePanel>

                <HomePanel>
                    <HomePanelItem class="bg-blue-100">
                        image of thing
                    </HomePanelItem>
                    <HomePanelItem class="bg-orange-100">
                        another thing ive done
                    </HomePanelItem>
                </HomePanel>

                <HomePanel>
                    <HomePanelItem class="bg-green-100">
                        who would have guessed? yet another thing i did
                    </HomePanelItem>
                    <HomePanelItem class="bg-red-100">
                        image of thing
                    </HomePanelItem>
                </HomePanel>
            </HomePanelContainer>
        </>

    );
}