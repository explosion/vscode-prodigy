# VS Code extension for the Prodigy annotation tool ✨

This repo contains a [VS Code](https://code.visualstudio.com/) extension for
[Prodigy](https://prodi.gy), our scriptable annotation tool for creating
training data for machine learning models. It lets you run Prodigy within a VS
Code Panel, and annotate as you develop your models and applications. 

In order to use this extension, you'll need a license for Prodigy&mdash;[see
this page](https://prodi.gy/buy) for more details. For issues and questions,
please use the [Prodigy Support Forum](https://support.prodi.gy/).  If you've
found a bug, feel free to submit a [pull
request](https://github.com/explosion/vscode-prodigy/pulls)


## ⌛️ Installation

Get from the [VS Code marketplace]()

## 📋 Usage

Start a Prodigy session in a terminal, e.g.: 

```bash
prodigy ner.manual my_set blank:en example/news_headlines.jsonl --label PERSON,ORG,PRODUCT
```

In VS Code, open the Command Palette (<kbd>CTRL</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>)
and select `Open Prodigy`. Execute it, and you will have a new Prodigy panel on the side.

## ⚙ Configuration

This extension contributes the following settings:

| Configuration      | Description                                                                          |
|--------------------|--------------------------------------------------------------------------------------|
| vscode-prodigy.url | Set the URL where Prodigy is being served at. Useful when you're in a reverse proxy. |

## 👩‍💻 Develop

You need [Visual Studio Code](https://code.visualstudio.com/) and
[Typescript](https://www.typescriptlang.org/) for development. First, clone this
repository:

```bash
git clone git@github.com:explosion/vscode-prodigy.git
```

and open the `vscode-prodigy` folder in Code:

```bash
cd vscode-prodigy
code .
```

### Get up and running straight away

* Press <kbd>F5</kbd> to open a new window with your extension loaded.
* Run your command from the command palette by pressing (<kbd>Ctrl</kbd>+</kbd>Shift</kbd>+<kbd>P</kbd> or <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> on Mac) and typing `Open Prodigy`.
* Set breakpoints in your code inside `src/extension.ts` to debug your extension.
* Find output from your extension in the debug console.

### Make changes

* You can relaunch the extension from the debug toolbar after changing code in `src/extension.ts`.
* You can also reload (<kbd>Ctrl</kbd>+<kbd>R</kbd> or <kbd>Cmd</kbd>+<kbd>R</kbd> on Mac) the VS Code window with your extension to load your changes.

### Run tests

* Open the debug viewlet (<kbd>Ctrl</kbd>+<kbd>Shif</kbd>t+<kbd>D</kbd> or <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd> on Mac) and from the launch configuration dropdown pick `Extension Tests`.
* Press `F5` to run the tests in a new window with your extension loaded.
* See the output of the test result in the debug console.
* Make changes to `src/test/suite/extension.test.ts` or create new test files inside the `test/suite` folder.
  * The provided test runner will only consider files matching the name pattern `**.test.ts`.