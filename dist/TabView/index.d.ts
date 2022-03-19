/// <reference types="react" />
import { TabViewProps } from '@react-native-elements/base/dist/TabView/TabView';
import { TabViewItemProps } from '@react-native-elements/base/dist/TabView/TabView.Item';
export type { TabViewProps, TabViewItemProps };
declare const _default: (import("react").FunctionComponent<TabViewProps & {
    theme?: {
        colors: import("@react-native-elements/base/dist/helpers/colors").Colors;
    };
}> | import("react").ForwardRefExoticComponent<TabViewProps & {
    theme?: {
        colors: import("@react-native-elements/base/dist/helpers/colors").Colors;
    };
}>) & {
    Item: import("react").FunctionComponent<TabViewItemProps> | import("react").ForwardRefExoticComponent<TabViewItemProps>;
};
export default _default;
