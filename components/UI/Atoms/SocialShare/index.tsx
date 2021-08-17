import Link from "@/components/UI/Atoms/Link";
import Icon from "@/components/Utils/Icon";
import styles from "./style.module.css";
import {BASE_URL} from '../../../../lib/constants';

interface SocialShareProvider {
  shareUrl: string;
  display: string | JSX.Element;
}

const socialShareMap: Record<string, SocialShareProvider> = {
  facebook: {
    shareUrl: "https://www.facebook.com/sharer/sharer.php?u=",
    display: <Icon icon="facebook" />,
  },
  Twitter: {
    shareUrl: "https://twitter.com/intent/tweet?url=",
    display: <Icon icon="twitter" />,
  },
  LinkedIn: {
    shareUrl: "http://www.linkedin.com/shareArticle?mini=true&url=",
    display: <Icon icon="linkedin" />,
  },
};

interface SocialShareButtonProps {
  url: string;
}

const SocialShareButtons = ({ url }: SocialShareButtonProps) => {

  const MY_URL_ABSOLUTE = `${BASE_URL}${url}`

  return (
    <ul className={styles.socialShareButtons}>
      {Object.entries(socialShareMap).map(([socialShareItemKey, SocialShareProvider]) => (
            <li key={socialShareItemKey}>
            <Link href={`${SocialShareProvider.shareUrl}${MY_URL_ABSOLUTE}`}>
              {SocialShareProvider.display}
            </Link>
          </li>
      ))}
    </ul>
  );
};

export default SocialShareButtons;
