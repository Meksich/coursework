import styled from "styled-components";

export const FooterGlobal = styled.footer`
    background-color: #f8f9fa;
    padding: 60px 0 32px;
    width: 100vw;
`

export const FooterContainer = styled.div`
    width: 100vw;
`

export const FooterBranding = styled.div`
    padding-left: 165px;
    padding-right: 165px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FooterBrandingDate = styled.div`
    font-weight: 500;
    font-size: 14px;
    color: #939ea4;
`

export const FooterBrandingLogo = styled.div`
    font-weight: 900;
    font-size: 26px;
    color: #37447e;
`

export const FooterBrandingLabel = styled.div`
    width: 110px;
    background: #111b47;
    text-align: center;
    font-weight: 500;
    font-size: 12px;
    color: #ffffff;
    border-radius: 2px;
    padding: 5px 0;
    margin-left: auto;
    margin-right: auto;
`

export const FooterHr = styled.hr`
    background: #cdd1d4;
    margin: 40px 0 20px;
    height: 1px;
    border: 0;
`

export const FooterLinks = styled.nav`
    font-size: 14px;
    color: #929ecc;
    margin-top: 18px;
    display: flex;
    justify-content: space-between;
    width: 100vw;
`

export const FooterLinksList = styled.ul`
    margin-left: auto;
    margin-right: auto;
    padding: 0 0 0 20px;
    display: flex;
`

export const FooterLinksListItem = styled.div`
    margin-left: 30px;
    margin-right: 30px;
`

export const FooterLinksLabel = styled.div`
    color: #929ECC;
    text-align: center;
`

export const FooterSocial = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;
`

export const FooterSocialLink = styled.div`
    width: 16px;
    height: 16px;
    :not(:first-child){
        margin-left: 30px;
    }
`
