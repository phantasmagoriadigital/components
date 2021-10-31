// .storybook/manager.js

import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
    panelPosition: 'right',
    // selectedPanel: 'REACT_STORYBOOK/readme/panel',
    theme: themes.dark,
})
