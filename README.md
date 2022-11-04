# Gatsby_Starter
EmotionでスタイリングするWebサイトのGatsbyのスターターです。

## use
- styling by Emotion https://emotion.sh/docs/introduction
- ソースファイル管理　by gatsby-source-filesystem https://www.corylog.com/gatsby/gatsby010/
- theme管理　by theme-ui https://theme-ui.com/theming 

## 画像の扱い

###　表示
```
import { StaticImage } from "gatsby-plugin-image"

export function Dino() {
  return <StaticImage src="../images/dino.png" alt="A dinosaur" />
}
```

```
import { StaticImage } from "gatsby-plugin-image"

export function Dino() {
  return (
    <StaticImage
      src="../images/dino.png"
      alt="A dinosaur"
      placeholder="blurred"
      layout="fixed"
      width={200}
      height={200}
    />
  )
}
```
### note
サイトを構築すると、StaticImageコンポーネントはファイルシステムまたはリモート URL から画像を読み込み、レスポンシブ画像をサポートするために必要なすべてのサイズと形式を生成します。

イメージはビルド時に読み込まれるため、ファイル名を prop として渡したり、コンポーネントの外部で生成したりすることはできません。これは静的文字列か、コンポーネントのスコープ内のローカル変数である必要があります。

重要:リモート イメージはビルド時にダウンロードされ、サイズ変更されます。他のサーバーでイメージが変更された場合、サイトを再構築するまでイメージは更新されません。

https://www.gatsbyjs.com/plugins/gatsby-plugin-image/

 ### 使用上の制限
 props を に渡す方法には、いくつかの技術的な制限がありますStaticImage。最も重要なことは、親コンポーネントの props を使用できないことです。詳細については、Gatsby Image プラグイン リファレンス ガイドを参照してください。親から渡されたプロップを画像srcに使用したい場合は、動的画像を使用する必要があります。

<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)
