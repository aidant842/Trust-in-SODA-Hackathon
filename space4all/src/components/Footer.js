import styled from "styled-components";
// Images
import logoTitle from "../static/images/logo-title.png";
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
                                href=""
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Allana
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Aoife
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Andrius
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
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
    .footerIcon {
        font-size: 32px;
        :hover {
            font-size: 2.3rem;
        }
    }
    .footerLinkedIn {
        box-shadow: unset;
        margin-top: 0;
        li {
            :hover {
                font-size: 1.2rem;
                color: var(--red);
            }
        }
    }
    ul {
        display: flex;
        background-color: white;
        box-shadow: 0 0 5px black;
        list-style: none;
        margin-top: 1rem;

        li {
            margin: auto;
            img {
                height: 4rem;
                width: 16rem;
            }
            a {
                cursor: pointer;
                color: var(--blue);
                margin: 5px;
                text-decoration: unset;
                :hover {
                    color: var(--red);
                }
            }
        }
    }
`;
export default Footer;
