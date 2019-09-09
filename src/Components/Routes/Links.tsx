import * as React from 'react'
import { UL, LI } from '../PageList'
import Page from '../Page'

export default () => (
	<Page title="Links">
		<UL>
			<LI><a href="https://blog.feelingso.blue" target="_new">れもくすブログ（ｎ代目）</a></LI>
			<LI><a href="https://qiita.com/ekuinox">Qiita</a></LI>
			<LI><a href="https://ekuinox.qrunch.io">Qrunch</a></LI>
			<LI><a href="https://bookmeter.com/users/778480" target="_new">読書メーター</a></LI>
			<LI><a href="https://itunes.apple.com/profile/lm0x" target="_new">AppleMusic</a></LI>
			<LI><a href="http://animetick.net/users/6lmx" target="_new">Animetick</a></LI>
			<LI><a href="https://steamcommunity.com/id/lm0x" target="_new">Steam</a></LI>
			<LI><a href="http://amzn.asia/0KSla0Y" target="_new">Amazon Wishlist</a></LI>
			<LI><a href="https://soundcloud.com/lm0x/likes" target="_new">SoundCloud likes</a></LI>
		</UL>
	</Page>
)

export const path = '/links'
