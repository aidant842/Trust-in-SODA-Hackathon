import styled from "styled-components";
// Images
import logoTitle from "../static/images/space4AllBanner.png";
// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <StyledFooter>
            <ul>
                <li>
                    <img src={logoTitle} alt="Space4Ever Logo"></img>
                </li>
                <li className="footerIcon">
                    <a
                        href="https://github.com/aidant842/Trust-in-SODA-Hackathon"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </a>
                </li>
                <li>
                    <ul className="footerLinkedIn">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/aidan-thorpe-99a8451a5/"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Aidan
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/allana-bailey-19b8a792"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Allana
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/aoifeobsmith/"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Aoife
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/andrius-siupinys"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Andrius
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/john-doyle-ab717a95/"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                John
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    .footerIcon a {
        font-size: 3rem;
        :hover {
            font-size: 3.2rem;
        }
    }
    .footerLinkedIn {
        box-shadow: unset;
        margin-top: 0;
        li {
            :hover {
                font-size: 1.2rem;
                color: var(--green);
            }
        }
    }
    ul {
        display: flex;
        background-color: var(--green);
        box-shadow: 0 0 5px black;
        list-style: none;
        margin-top: 1rem;

        li {
            margin: auto;
            img {
                margin-top: 2px;
                height: 4rem;
                width: 16rem;
            }
            a {
                cursor: pointer;
                color: #507c8d;
                margin: 5px 10px;
                text-decoration: unset;
                font-size: 1.3rem;
                font-weight: 400;
                letter-spacing: 1px;
                /* text-shadow: 0 0 5px white; */
                :hover {
                    color: var(--d-blueish);
                }
            }
        }
        @media (max-width: 768px) {
            display: block;
            text-align: center;
            li {
                padding: 0.5rem 0;
            }
        }
    }
`;
export default Footer;
