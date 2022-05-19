import { extendTheme } from "@chakra-ui/react";

// Documentation here: https://chakra-ui.com/docs/styled-system/theming/customize-theme#customizing-theme-tokens

// Global style overrides
// Contains our colors, fonts, etc.
import styles from "./styles"

// Foundational style overrides 
import foundations from "./foundations"

// Component style overrides
import components from "./components"

const overrides = {
    styles,
    ...foundations,
    components
}

export default extendTheme(overrides);