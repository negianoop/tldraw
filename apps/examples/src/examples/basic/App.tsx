import { Tldraw, TLUiOverrides } from 'tldraw'
import 'tldraw/tldraw.css'

const myOverrides: TLUiOverrides = {
	actions(editor, actions) {
		// You can delete actions, but remember to
		// also delete the menu items that reference them!
		delete actions['insert-embed']

		// Create a new action or replace an existing one
		actions['my-new-action'] = {
			id: 'my-new-action',
			label: 'My new action',
			readonlyOk: true,
			kbd: 'cmd+u,alt+u',
			onSelect(source: any) {
				// Whatever you want to happen when the action is run
				window.alert('My new action just happened!')
			},
		}
		return actions
	},
}

export default function BasicExample() {
	return (
		<div className="editor">
			return <Tldraw overrides={[myOverrides]} />
		</div>
	)
}
