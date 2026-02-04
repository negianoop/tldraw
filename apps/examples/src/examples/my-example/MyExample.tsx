import { TLComponents, Tldraw, TLUiOverrides, track, useEditor } from 'tldraw'
import 'tldraw/tldraw.css'

const myOverrides: TLUiOverrides = {
	actions(editor, actions) {
		// You can delete actions, but remember to
		// also delete the menu items that reference them!

		// Create a new action or replace an existing one
		actions['my-new-action'] = {
			id: 'my-new-action',
			label: 'My new action',
			readonlyOk: true,
			kbd: 'ctrl+u,ctrl+alt+p',
			onSelect(source: any) {
				// Whatever you want to happen when the action is run
				window.alert('My new action just happened!')
			},
		}
		return actions
	},
}

const MyCustomDot = track(() => {
	const editor = useEditor()

	// Convert canvas coordinates to screen coordinates
	const canvasPoint = { x: 100, y: 100 } // Position on canvas
	const screenPoint = editor.pageToViewport(canvasPoint)

	return (
		<div
			style={{
				position: 'absolute',
				top: screenPoint.y,
				left: screenPoint.x,
				width: '15px',
				height: '15px',
				backgroundColor: 'grey',
				borderRadius: '50%',
				pointerEvents: 'none',
				zIndex: 1000,
			}}
		/>
	)
})

const components: TLComponents = {
	InFrontOfTheCanvas: MyCustomDot,
}

export default function AssetPropsExample() {
	return (
		<div className="tldraw__editor">
			<Tldraw components={components} />
		</div>
	)
}
