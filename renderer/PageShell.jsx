import React from 'react'

import { PageContextProvider } from './usePageContext'

export { PageShell }

function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
		{children}
      </PageContextProvider>
    </React.StrictMode>
  )
}
