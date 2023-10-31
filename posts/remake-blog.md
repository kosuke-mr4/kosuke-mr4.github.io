---
title: "個人ブログを作り直した話"
date: "2023-10-30"
description: "個人ブログの諸々の環境を変更しました"
image: gcend.png
---

前回は Gatsby+Styled-components の個人用ブログを GatsbyCloud でホスティングしていたのですが、先日 GatsbyCloud がサ終してしまったようで対応する必要が出てきました。(確認しに行ったら以下のような表示になっていました;;)<br>
丸々どこかに移管しても良かったのですが、いい機会だし何か簡易的なものを作るか〜となったのが経緯です。
![image](/gcend.png)

以前お世話になっていた [create-react-app は非推奨に近い](https://www.google.com/search?q=create-react-app+deprecated&sca_esv=577618083&sxsrf=AM9HkKnJArDk19Tbmy_PWQIySJvYd0VfsA%3A1698590241661&ei=IW4-ZaP3J5Pl2roPw7WryAY&oq=create-react-app%E3%80%80de&gs_lp=Egxnd3Mtd2l6LXNlcnAiFWNyZWF0ZS1yZWFjdC1hcHDjgIBkZSoCCAEyBxAAGAQYgAQyBRAAGIAEMgcQABgEGIAEMgQQABgeMgYQABgEGB4yBhAAGAQYHjIEEAAYHjIEEAAYHjIEEAAYHjIEEAAYHki8MFDHD1ibJHADeAGQAQCYAYQCoAHyBaoBBTAuMi4yuAEByAEA-AEBwgIKEAAYRxjWBBiwA-IDBBgAIEGIBgGQBgo&sclient=gws-wiz-serp) 状態になっていたようで、React 公式の Start a New React Project に従って create-next-app で作成しています、ちょうど Next が 14 になったりしてた。<br>

記事を書くために前ブログで採用した .mdx は表現力が高くスゲーーっとなっていましたが今回はただ文字と画像くらいしか書かなそうな感じがしたので Markdown を採用しています、HTML へのコンパイラには [marked](https://github.com/markedjs/marked) を採用しましたがこれは他の似たライブラリを確認してから変えるかもしれない。

ホスティングには何気に今まで使用したことのなかった Githubpages を使用しています。このページが誰かに見られていたらうまく設定ができているはず。。。

レスポンシブ対応やダークテーマ、日英対応など自己満更新もしていきたい。
