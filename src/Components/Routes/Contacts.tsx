import * as React from 'react'
import PageTitle from '../PageTitle'
import { UL, LI } from '../PageList'

export default () => (
	<div>
		<PageTitle title="Contacts" />
		<UL>
			<LI><a href="https://twitter.com/ekuinox" target="_new">Twitter</a></LI>
			<LI><a href="https://github.com/ekuinox" target="_new">GitHub</a></LI>
			<LI><a href="https://mstdn.club/@lm0x" target="_new">Mastodon(mstdn.club)</a></LI>
			<LI><a href="https://keybase.io/lm0x" target="_new">Keybase</a></LI>
			<LI>Discord: ekuinox#1378</LI>
			<LI><a href="mailto:eku@lmx.pw">eku@lmx.pw</a></LI>
		</UL>
	</div>
)

export const path = '/contacts'
