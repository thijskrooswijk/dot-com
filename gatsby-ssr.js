/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import { wrapWithProvider } from '@wheelroom/admin-core'
import { wrapWithUseAdminModules } from './src/admin-resources/wrap-with-use-admin-modules'

export const wrapRootElement = wrapWithProvider
export const wrapPageElement = wrapWithUseAdminModules
