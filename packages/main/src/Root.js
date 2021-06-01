import React from 'react'

import { Page, CheckBox, Header, Icon, ToolPanel, Workspace } from 'components'

const Root = () => {
  return <Page>
    <Workspace>
      <ToolPanel>
        <Header label='Test components'/>
        <CheckBox value/>
        <Icon type={Icon.Type.ABORT}/>
        <Icon type={Icon.Type.DOT}/>
        <Icon type={Icon.Type.CHECK_MARK}/>
      </ToolPanel>
    </Workspace>
  </Page>
}

export default Root
