import {
  HomeTrendUp,
  Setting2,
  Tag2,
  Coin1,
  Home2,
  Sun1,
  Moon,
} from "iconsax-reactjs";

export const IconType = {
  HOME: (props) => <Home2 {...props} />,
  DASHBOARD: (props) => <HomeTrendUp {...props} />,
  TRANSACTIONS: (props) => <Coin1 {...props} />,
  CATEGORIES: (props) => <Tag2 {...props} />,
  SETTINGS: (props) => <Setting2 {...props} />,
  LIGHTMODE: (props) => <Sun1 {...props} />,
  DARKMODE: (props) => <Moon {...props} />,
};
