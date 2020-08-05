import { DeepPartial } from '@wheelroom/core'
import { NavigationSectionData } from '@wheelroom/wheel-navigation'

export const navigationSectionData: DeepPartial<NavigationSectionData> = {
  header: {
    hideThemeButton: true,
    /**
     * Example:
     * import React from 'react
     * useLogoElement: <img src={'images/logo.png'} width={50} height={50} />,
     */
    useLogoElement: undefined,
  },
  footer: {
    hideLegalFooter: false,
  },
}
