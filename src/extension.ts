import path = require('path');
import * as vscode from 'vscode';

const DEFAULT_URL = "http://localhost:8080";


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

		// Setup content
		let url = vscode.workspace.getConfiguration("vscode-prodigy").get<string>("url", DEFAULT_URL);
		panel.webview.html = getProdigyContent(url);
		// Setup icons
		panel.iconPath = {
			"dark": vscode.Uri.file(path.join(context.extensionPath, "assets", "prodigy_dark.svg")),
			"light": vscode.Uri.file(path.join(context.extensionPath, "assets", "prodigy_light.svg"))
		};
	});

	context.subscriptions.push(startProdigyPanel);
}


function getProdigyContent(url: string): string {
	return `
<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Prodigy</title>
	</head>
	<body>
		<iframe src="${url}" width="100%" height="100%" style="position: absolute;"></iframe>
	</body>
	</html>`;
}