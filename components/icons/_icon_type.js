import { HomeTrendUp, Setting2, Coin, Tag2, Coin1 } from "iconsax-reactjs";

export const IconType = {
  HOME: (props) => <HomeTrendUp {...props} />,
  TRANSACTIONS: (props) => <Coin1 {...props} />,
  CATEGORIES: (props) => <Tag2 {...props} />,
  SETTINGS: (props) => <Setting2 {...props} />,
};
