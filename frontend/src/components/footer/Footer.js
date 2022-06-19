import {
    FooterGlobal,
    FooterContainer,
    FooterBranding,
    FooterBrandingDate,
    FooterBrandingLabel,
    FooterBrandingLogo,
    FooterHr,
    FooterLinks,
    FooterLinksLabel,
    FooterLinksList,
    FooterLinksListItem,
    FooterSocial,
    FooterSocialLink
} from './Footer.styles';
import Youtube from '../../res/social-yoututbe.svg';
import Instagram from '../../res/social-insta.svg';
import Facebook from '../../res/social-fb.svg';
import Twitter from '../../res/social-twitter.svg';
import Linked from '../../res/social-linked.svg';

const Footer = () => {
    return (
        <FooterGlobal>
            <FooterContainer>
                <FooterBranding>
                    <FooterBrandingDate>©2021 LPNU</FooterBrandingDate>
                    <FooterBrandingLogo>React App</FooterBrandingLogo>
                </FooterBranding>
                <FooterHr/>
                <FooterBrandingLabel>IoT edition</FooterBrandingLabel>
                <FooterLinks>
                    <FooterLinksList>
                        <FooterLinksListItem><FooterLinksLabel href="">Home</FooterLinksLabel></FooterLinksListItem>
                        <FooterLinksListItem><FooterLinksLabel href="">About</FooterLinksLabel></FooterLinksListItem>
                        <FooterLinksListItem><FooterLinksLabel href="">Contacts</FooterLinksLabel></FooterLinksListItem>
                    </FooterLinksList>
                </FooterLinks>
                <FooterSocial>
                    <FooterSocialLink>
                        <img src={Facebook} alt="fb social icon" />
                    </FooterSocialLink>
                    <FooterSocialLink>
                        <img src={Linked} alt="linked social icon" />
                    </FooterSocialLink>
                    <FooterSocialLink>
                        <img src={Twitter} alt="twitter social icon" />
                    </FooterSocialLink>
                    <FooterSocialLink>
                        <img src={Youtube} alt="yoututbe social icon" />
                    </FooterSocialLink>
                    <FooterSocialLink>
                        <img src={Instagram} alt="insta social icon" />
                    </FooterSocialLink>
                </FooterSocial>
            </FooterContainer>
        </FooterGlobal>
    );
}

export default Footer;