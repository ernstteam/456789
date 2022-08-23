import {
    Github,
    Mastodon,
    Reddit,
    Twitter,
} from "@styled-icons/boxicons-logos";
import Link from "next/link";
import styled from "styled-components";
import RevoltLogo from "../../../assets/logo/revolt-logo.png";

const FooterContainer = styled.nav`
    width: 100vw;
    padding: 3rem 0;
`;

const FooterFlex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: space-between;
    width: 90vw;
    margin: auto;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
        flex-direction: row;
    }
`;

const RevoltLogoContainer = styled.img`
    height: 25px;
`;

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const LinkContainerHeader = styled.h4`
    margin: 0;
    padding: 0;
    color: ${(p) => p.theme.colors.primary};
    font-weight: 700;
`;

const Links = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
        gap: 4rem;
        flex-direction: row;
    }
`;

const BrandBox = styled.div`
    align-items: center;
    display: flex;
    gap: 1rem;
    flex-direction: column;
`;

const BrandJustify = styled.div`
    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
        margin-right: auto;
    }
`;

const Socials = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    gap: 1rem;
`;

const NavLink = styled.a`
    font-weight: 400;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterFlex>
                <BrandBox>
                    <BrandJustify>
                        <Link href="/" passHref>
                            <a>
                                <RevoltLogoContainer src={RevoltLogo.src} />
                            </a>
                        </Link>
                    </BrandJustify>
                    <Socials>
                        <Link href="https://twitter.com/raaees_com" passHref>
                            <a>
                                <Twitter size={30} />
                            </a>
                        </Link>
                    </Socials>
                </BrandBox>
                <Links>
                    <LinkContainer>
                        <LinkContainerHeader>Developers</LinkContainerHeader>
                        <Link href="https://developers.raaees.com" passHref>
                            <NavLink>Documentation</NavLink>
                        </Link>
                        <Link
                            href="https://developers.raaees.com/api"
                            passHref
                        >
                            <NavLink>REST API</NavLink>
                        </Link>
                        <Link
                            href="https://developers.raaees.com"
                            passHref
                        >
                            <NavLink>Translations</NavLink>
                        </Link>
                    </LinkContainer>
                    <LinkContainer>
                        <LinkContainerHeader>Team</LinkContainerHeader>
                        <Link href="/posts" passHref>
                            <NavLink>Blog</NavLink>
                        </Link>
                    </LinkContainer>
                    <LinkContainer>
                        <LinkContainerHeader>Legal</LinkContainerHeader>
                        <Link href="/aup" passHref>
                            <NavLink>Community Guidelines</NavLink>
                        </Link>
                        <Link href="/terms" passHref>
                            <NavLink>Terms of Service</NavLink>
                        </Link>
                        <Link href="/privacy" passHref>
                            <NavLink>Privacy Policy</NavLink>
                        </Link>
                    </LinkContainer>
                </Links>
            </FooterFlex>
        </FooterContainer>
    );
};

export default Footer;
