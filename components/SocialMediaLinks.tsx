import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faLinkedin, faXTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faLink} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {SocialMedia} from "@data/e-lab";

function SocialMediaLinks(props: { socialMedia: SocialMedia, iconClassNames: string}) {
    return <>
        <Link href={props.socialMedia?.linkedin} target="_blank" rel="me">
            <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                className={props.iconClassNames}
            />
        </Link>
        {props.socialMedia.x ? (
            <Link href={props.socialMedia.x} target="_blank" rel="me">
                <FontAwesomeIcon
                    icon={faXTwitter}
                    size="lg"
                    className={props.iconClassNames}
                />
            </Link>
        ) : null}
        {props.socialMedia.instagram ? (
            <Link href={props.socialMedia.instagram} target="_blank" rel="me">
                <FontAwesomeIcon
                    icon={faInstagram}
                    size="lg"
                    className={props.iconClassNames}
                />
            </Link>
        ) : null}
        {props.socialMedia.youtube ? (
            <Link href={props.socialMedia.youtube} target="_blank" rel="me">
                <FontAwesomeIcon
                    icon={faYoutube}
                    size="lg"
                    className={props.iconClassNames}
                />
            </Link>
        ) : null}
        {props.socialMedia.website ? (
            <Link href={props.socialMedia.website} target="_blank" rel="me">
                <FontAwesomeIcon
                    icon={faLink}
                    size="lg"
                    className={props.iconClassNames}
                />
            </Link>
        ) : null}
        {props.socialMedia.email ? (
            <Link href={`mailto:${props.socialMedia.email}`} rel="me">
                <FontAwesomeIcon
                    icon={faEnvelope}
                    size="lg"
                    className={props.iconClassNames}
                />
            </Link>
        ) : null}
    </>;
}

export default SocialMediaLinks;