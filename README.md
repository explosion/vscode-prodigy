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



