/// <reference types="react" />
import { TabProps } from '@react-native-elements/base/dist/Tab/Tab';
import { TabItemProps } from '@react-native-elements/base/dist/Tab/Tab.Item';
export type { TabProps, TabItemProps };
export declare const ThemedTab: (import("react").FunctionComponent<TabProps & {
    theme?: {
        colors: import("@react-native-elements/base/dist/helpers/colors").Colors;
    };
}> | import("react").ForwardRefExoticComponent<TabProps & {
    theme?: {
        colors: import("@react-native-elements/base/dist/helpers/colors").Colors;
    };
}>) & {
    Item: import("react").FunctionComponent<TabItemProps> | import("react").ForwardRefExoticComponent<TabItemProps>;
};
export default ThemedTab;
