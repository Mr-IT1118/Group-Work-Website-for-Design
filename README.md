# COURTSIDE — Basketball Homepage

篮球主题的英文单页网站。已整理为独立静态项目，可上传 GitHub 并使用 GitHub Pages 发布。
不需要 npm、不需要构建、不需要 ChatGPT 登录。此次文件包未上传到你的 GitHub，也未修改原有 Sites 网站。

## 1. 放到你的电脑

将压缩包中的全部内容解压到：

```text
D:\group work website
```

确认首页的完整路径是 `D:\group work website\index.html`，不要多嵌套一层文件夹。
双击 `index.html` 可在浏览器预览。联网时会加载 Google Fonts；离线时会使用备用字体。

## 2. 文件在哪里修改

| 文件 | 用途 |
| --- | --- |
| `index.html` | 首页文字、品牌名、导航、内容区块 |
| `assets/css/styles.css` | 配色、字体、间距、电脑及手机布局 |
| `assets/images/basketball-hero.jpg` | 首页篮球运动员主图 |
| `.nojekyll` | 让 GitHub Pages 直接发布静态文件 |
| `.gitignore` | 忽略本地临时文件 |
| `.gitattributes` | 统一文本换行和图片处理 |
| `README.md` | 使用、发布与小组协作说明 |

品牌名目前为 COURTSIDE。在 `index.html` 中搜索 `COURTSIDE` 和 `Courtside` 可修改各处显示文字；浏览器标签名称在 `<title>` 中。
主色在 CSS 顶部 `:root` 内：`--orange` 是橙色，`--ink` 是深色，`--paper` 是浅色。
换照片时替换主图文件，或在 `index.html` 的 `src` 中改成新文件路径，并同步修改 `alt` 图片描述。
网站仅有首页，导航跳转到同一页的不同部分。

## 3. 上传到 GitHub（Git 命令方式）

需要先安装 Git for Windows，并有自己的 GitHub 账号。
在 GitHub 新建空仓库，例如 `group-work-website`。为了使用免费账号发布，选择 Public。
不要在新建页面勾选生成 README、.gitignore 或 License：本项目已有前两项。
公开仓库中的源代码和图片也会公开。

打开 Windows PowerShell，执行：

```powershell
Set-Location 'D:\group work website'
git init -b main
git add .
git commit -m "Add basketball homepage"
```

如果 Git 提示缺少身份，先执行以下两行，把内容换成自己的信息，然后重试提交：

```powershell
git config user.name "YOUR_NAME"
git config user.email "YOUR_GITHUB_EMAIL"
```

把下面的 `YOUR_USERNAME` 和 `YOUR_REPOSITORY` 换成真实 GitHub 用户名和仓库名，再执行：

```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

按 Git 弹出的提示登录 GitHub。这里的用户名是 GitHub 用户名，不是 Gmail 邮箱。
如果文件夹之前已关联其他仓库，请先检查 `git remote -v`，不要直接覆盖原有关联。

## 4. 不用命令行也能上传

在新建的 GitHub 仓库页面选择上传现有文件（uploading an existing file / Add file → Upload files），上传解压后的文件和 `assets` 文件夹，并提交。
需要保留文件夹结构，让 `index.html` 位于仓库顶层；不要只上传 ZIP。
如果上传界面忽略了点号开头的文件，可用 Git 命令方式上传完整项目。

## 5. 发布成人人可看的网站

1. 进入 GitHub 仓库，打开 **Settings → Pages**。
2. 在 **Build and deployment → Source** 选择 **Deploy from a branch**。
3. 选择分支 **main**，文件夹 **/(root)**，点击 **Save**。
4. 等待发布完成，以 Pages 页面提供的实际网址为准。

普通项目仓库的网址通常是 `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`。
这是 GitHub Pages 网址，不带 `chatgpt.site`。配置成功后，后续推送到 main 的更新会触发重新发布。
上传 Git 仓库与启用 Pages 是两步；只上传文件还不代表网站已上线。

## 6. 让组员一起修改

1. 进入仓库 **Settings → Collaborators → Add people**。
2. 输入组员的 GitHub 用户名，确认选对账号后发出邀请。
3. 组员接受邀请后，可以修改此仓库中的文件。无需属于同一个 ChatGPT 工作区。
4. 简单文字修改：在 GitHub 打开 `index.html`，点击编辑图标，修改后提交。
5. 建议组员使用新分支提出 Pull Request，由一人检查后合并到 main；合并后 Pages 会更新。

在本地继续编辑时，先拉取更新；遇到冲突先处理冲突，不要强制推送覆盖同学的工作：

```powershell
Set-Location 'D:\group work website'
git pull --ff-only
# 编辑并保存文件后：
git add .
git commit -m "Update homepage"
git push
```

此项目与原来的 ChatGPT Sites 网站是独立副本，GitHub 上的修改不会自动更新原 Sites 网址。

## 素材与依赖

- 首页篮球图是为本项目生成的 AI 图片，不代表真实球员或球队。
- 字体通过 Google Fonts 在线加载：Barlow Condensed 和 DM Sans；系统字体作为回退。
- 所有页面图片已包含在项目内。未包含原网站的账户信息、访问凭证、Sites 配置或 Git 历史。

## 官方参考

- GitHub Pages 发布来源：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- 创建静态 Pages 网站：https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- 邀请协作者：https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository
