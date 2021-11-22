import * as vscode from 'vscode';

const defaultProdigyUrl = 'http://localhost:8080';


export function activate(context: vscode.ExtensionContext) {

	/**
	 * Opens a VSCode panel with the Prodigy interface
	 */
	let startProdigyPanel = vscode.commands.registerCommand('vscode-prodigy.start', () => {
		const panel = vscode.window.createWebviewPanel(
			"prodigyPanel",
			"Prodigy",
			vscode.ViewColumn.One,
			{
				enableScripts: true,
				retainContextWhenHidden: true
			}
		);
		panel.webview.html = getProdigyContent();
		panel.iconPath = {
			"dark": vscode.Uri.file("/assets/prodigy_dark.svg"),
			"light": vscode.Uri.file("/assets/prodigy_light.svg")
		};
	});

	context.subscriptions.push(startProdigyPanel);
}


function getProdigyContent() {
	return `
<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Prodigy</title>
	</head>
	<body>
		<iframe src="${defaultProdigyUrl}" width="100%" height="100%" style="position: absolute;"></iframe>
	</body>
	</html>`;
}