# GitHub 仓库设置指南

## 🎯 目标

将 EarningsPulse 项目推送到 GitHub 仓库，实现版本控制和协作。

---

## 📋 步骤

### 步骤 1：创建 GitHub 仓库

**方法 A：网页创建（推荐）**

1. 访问 https://github.com/new
2. 填写信息：
   - Repository name: `earnings-pulse`
   - Description: `实时监控上市公司财报数据的多平台应用`
   - Public/Private: 选择你的偏好
   - README: 不选择（我们已经有 README.md）
   - .gitignore: 不选择（我们已经有 .gitignore）
   - License: 选择 `MIT License`
3. 点击 `Create repository`

4. 复制仓库 URL（如：`https://github.com/你的用户名/earnings-pulse.git`）
5. 告诉我 URL

**方法 B：使用 GitHub CLI**

```bash
# 登录 GitHub
gh auth login

# 创建仓库
gh repo create earnings-pulse \
  --description "实时监控上市公司财报数据的多平台应用" \
  --public
  # 或 --private（私有仓库）
```

---

### 步骤 2：连接本地仓库

创建仓库后，在终端执行：

```bash
cd /Users/ai2/.openclaw/workspace/projects/EarningsPulse/earnings-pulse

# 添加远程仓库（替换为你的 URL）
git remote add origin https://github.com/你的用户名/earnings-pulse.git

# 推送代码
git branch -M main
git push -u origin main
```

---

### 步骤 3：验证

1. 访问你的 GitHub 仓库页面
2. 确认所有文件已推送
3. 检查 README.md 显示是否正常

---

## 🔧 配置 Git（可选）

设置你的 Git 用户名和邮箱：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

---

## 📌 注意事项

- 确保你已登录 GitHub 账号
- 如果是私有仓库，需要授权访问
- 首次推送可能需要 GitHub token 或 SSH key

---

**文档创建时间**: 2026-03-11
**最后更新**: 2026-03-11 21:30
