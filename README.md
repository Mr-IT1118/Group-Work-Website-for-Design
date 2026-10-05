# COURT PHANTOMS — Five-page basketball website

紫色篮球网站，全英文，共 **5 个独立页面**。普通 HTML / CSS / JavaScript，无需 npm 或构建。

| 页面 | 文件 | 内容 |
| --- | --- | --- |
| Home 首页 | `index.html` | 篮球主视觉、网站介绍、其他页面入口 |
| About 品牌介绍 | `about.html` | 品牌理念、价值观、视觉风格 |
| The Game 篮球入门 | `game.html` | 运球、传球、投篮切换及基础练习 |
| Community 篮球社区 | `community.html` | 参与方式、可勾选赛前清单、球场礼仪 |
| Contact 联系我们 | `contact.html` | 表单验证、消息预览、常见问题 |

五页通过顶部及底部导航互相连接。`docs/design-plan.html` 为单独的作业设计说明，不计入这五个网站页面，包含网站结构、用户路径、五页的桌面/手机线框图与字体配色规范。

## 本地预览

解压到 `D:\group work website`，确认 `index.html` 直接位于该文件夹内，双击打开。点击导航可切换另外四页。联网可加载 Google Fonts；无网络时使用系统备用字体。

## 更新你现有的 GitHub 项目

**此包已完成，但尚未上传到 GitHub，线上版本不会因为下载而自动改变。**

1. 在原项目里确认无未提交工作，再执行 `git pull --ff-only` 获取小组最新版本。如果有自己或同学尚未合并的修改，先备份或处理，不要直接覆盖。
2. 将本包内容复制到原项目目录，替换同名文件。保留原 `.git` 文件夹。
3. 在该文件夹打开 Git Bash：

```bash
cd "/d/group work website"
git add .
git commit -m "Expand basketball website to five pages"
git push
```

4. 等仓库 Actions 中最新的 Pages 部署显示成功，再访问：

https://mr-it1118.github.io/Group-Work-Website-for-Design/

GitHub Pages 继续使用 `main` 和 `/(root)`。无需创建新的仓库或改变网址。每页的样式和脚本链接带版本号 `20261005-brand`，用于避免之前的旧主题缓存问题。

## 修改文件

- 页面内容：编辑相应的 `.html` 文件。
- 共用配色与排版：`assets/css/styles.css`。
- 互动：`assets/js/main.js`。
- 主图：`assets/images/basketball-hero.jpg`。
- 导航在每页中有一份；变更品牌名或导航时同时修改五页。
- 后续发布若更新 CSS/JS，也请统一更新五页引用中的版本号。

## 作业交付说明

- 品牌主色 `#7C3AED`；深背景标题 `#C4A0FF`；深色 `#181221`；浅色 `#FAF8FF`。
- 正式品牌为 Court Phantoms JJHT；五页页头、页尾及 About 页已加入小组提供的原版主 Logo。About 页另展示黑白版、CP 圆形版和白底版，共四款；浏览器图标使用 CP 版。
- Instagram：@courtphantomsjjht；Contact 页含二维码和主页直达链接，五页页尾均有入口。
- 标题字体 Barlow Condensed，正文字体 DM Sans。
- 保留现有 AI 篮球主图，不代表实际球队或球员。
- Contact 为前端演示：必填、邮箱校验、消息预览有效，但不会发送或保存信息。
- Community 清单只在当前页面生效，刷新后重置。
- 老师提供的 Services/Products 是结构示例；当前品牌尚无指定产品，采用篮球入门和社区页。
- 老师若限定使用 Squarespace / Wix，需先确认是否接受代码网站。

此 GitHub 项目与此前的 ChatGPT Sites 网址相互独立。

## 2026-10-05 品牌更新

已加入小组提供的四款 Logo 和 Instagram 联系方式。所有上传图片均保留原始文件；二维码通过网页布局展示，并提供原图入口。网站仍为紫色、五个页面，线上需重新提交并部署后更新。
