import { Link } from "@solidjs/router";
import FooterContainer from "./FooterContainer";
import FooterItem from "./FooterItem";
import FooterColumn from "./FooterColumn";
import Fa from "solid-fa";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Text from "./Text";

export default function Footer() {
    return (
        <footer class="container mx-auto my-16 px-3">
            <hr class="mb-6" />
            <FooterContainer>
                <FooterColumn>
                    <FooterItem class="text-xl mb-3">
                        AUS DEM SCHWARZWALD
                    </FooterItem>
                    <FooterItem>
                        Karolin Kostial
                    </FooterItem>
                    <FooterItem>
                        Leopold Straße 51, 76133 Karlsruhe
                    </FooterItem>
                    <FooterItem>
                        E-Mail: <a href="mailto:julian.baehr@gmail.com">julian.baehr@gmail.com</a>
                    </FooterItem>

                    <FooterItem class="mt-6">
                        This website uses <i class="professional">no cookies</i> to ensure you get the best experience on our website.
                    </FooterItem>

                    <FooterItem class="mb-6">
                        &copy; 2024 - <i class="professional">Karolin Bähr</i>
                    </FooterItem>
                </FooterColumn>

                <FooterColumn>
                    <FooterItem class="text-xl mb-3">
                        WEITERE INFOS
                    </FooterItem>
                    <FooterItem>
                        <Link href="/privacy">
                            Datenschutz
                        </Link>
                    </FooterItem>
                    <FooterItem class="mb-6">
                        <Link href="/impressum">
                            Impressum
                        </Link>
                    </FooterItem>
                </FooterColumn>

                <FooterColumn>
                    <Link href="https://github.com/The127" target="blank"><Text class="text-3xl"><Fa icon={faGithub} /></Text></Link>
                </FooterColumn>
            </FooterContainer>
        </footer>
    );
}