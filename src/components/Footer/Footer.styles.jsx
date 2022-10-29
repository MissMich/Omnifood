import styled from "styled-components";

export const FooterStyle = styled.div`
.footer {
    padding: 12.8rem 0;
    border-top: 1px solid #eee;
    background-color: #fdf2e9;
  }
  .logo {
    height: 2.2rem;
  }
  
  .grid--footer {
    grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr;
  }
  
  .logo-col {
    display: flex;
    flex-direction: column;
  }
  
  .footer-logo {
    display: block;
    margin-bottom: 3.2rem;
  }
  
  .social-links {
    list-style: none;
    display: flex;
    gap: 2.4rem;
  }
  
  .social-icon {
    height: 2.4rem;
    width: 2.4rem;
  }
  
  .copyright {
    font-size: 1.4rem;
    line-height: 1.6;
    color: #767676;
    margin-top: auto;
  }
  
  .footer-heading {
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 4rem;
  }
  
  .contacts {
    font-style: normal;
    font-size: 1.6rem;
    line-height: 1.6;
  }
  
  .address {
    margin-bottom: 2.4rem;
  }
  
  .footer-nav {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
  
  .footer-link:link,
  .footer-link:visited {
    text-decoration: none;
    font-size: 1.6rem;
    color: #767676;
    transition: all 0.3s;
  }
  
  .footer-link:hover,
  .footer-link:active {
    color: #555;
  }
`