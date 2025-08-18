# 📌 Contribution Guidelines for devSolve Club Website

<h1>
  <img src="src/assets/logo.png" alt="Logo" width="50" style="vertical-align: middle;"> devSolve
</h1>

[![Contributors](https://img.shields.io/github/contributors/bhanu-katoch/devsolve?color=brightgreen)](https://github.com/bhanu-katoch/devsolve/graphs/contributors)
[![Issues](https://img.shields.io/github/issues/bhanu-katoch/devsolve?color=orange)](https://github.com/bhanu-katoch/devsolve/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/bhanu-katoch/devsolve?color=blue)](https://github.com/bhanu-katoch/devsolve/pulls)
[![Forks](https://img.shields.io/github/forks/bhanu-katoch/devsolve?color=lightblue)](https://github.com/bhanu-katoch/devsolve/network/members)


Thank you for your interest in contributing! We welcome all members who want to improve this project. To keep things organized and ensure smooth collaboration, please follow these guidelines.

---

## 1. Code of Conduct
- Be **respectful** and **supportive**.
- No harassment, discrimination, or offensive language.
- Open discussions are encouraged, but be constructive.
- Any violation may result in removal from the contributors list.

---

## 2. How to Contribute
There are several ways to contribute:

- **Bug Reports & Feature Requests:** Open an issue with a clear description and steps to reproduce (if bug). For features, explain the motivation and expected behavior.
- **Code Contributions:** You can contribute by:
  - Fixing bugs
  - Adding new features
  - Improving UI/UX
  - Enhancing documentation

---

## 3. Repository Structure & Tech Stack
- **Frontend:** Vite + React + Tailwind CSS
- **Backend / Database:** Appwrite
- **Languages:** JavaScript / TypeScript (if used)

**Folder Structure:**
```bash
src/
assets/ # Images, icons, logos
components/ # React components
pages/ # Pages (Home, Registration, etc.)
lib/ # Config files, utils
```

- **Styling:** Tailwind CSS classes; avoid inline styles unless necessary.
- **State Management:** Prefer React `useState` / `useEffect` or `Context API`. (If introducing Redux, discuss first.)

---

## 4. Branching & Git Workflow
- **Main branch:** `main` → stable code, deployable version
- **Development branch:** `dev` → latest development code
- **Feature branches:** Create branches for your work  
  Example:  
```sh
feature/<your-feature-name>
bugfix/<bug-name>
enhancement/<enhancement-name>
```
### How to do  
- make sure to **uncheck** the only main branch before forking
- then fork this repo
- then clone your forked repo as below
```
git clone --branch dev <your-forked-repo-url>
git checkout -b <your-feature-branch>
```
#### to check branch `git branch`
#### to push changes `git push origin <your-feature-branch> `

### 🌿 Git Branching Workflow

```text
        ┌─────────────┐
        │   main      │  <- Stable, deployable
        └─────┬───────┘
              │
              ▼
        ┌─────────────┐
        │    dev      │  <- Latest development
        └─────┬───────┘
              │
      ┌───────┴─────────┐
      ▼                 ▼
┌─────────────┐   ┌─────────────┐
│ feature/foo │   │ feature/bar │  <- Work on features or bug fixes
└─────────────┘   └─────────────┘
      │                 │
      └───────┬─────────┘
              ▼
        Pull Request to dev
              │
              ▼
        Merge into dev
              │
      After testing & approval
              ▼
        Merge dev into main
```
- Always **pull latest changes** from `dev` before creating a new branch.
- Make **small, meaningful commits** with descriptive messages:
example
```sh
git commit -m "Add email validation to registration form"
```

---

## 5. Pull Request (PR) Guidelines
- PRs should be made to **`dev`** branch, not `main`.
- Include a clear **title and description**.
- Reference related issues using `#issue_number`.
- Ensure the PR is **tested locally** before submission.
- If your PR affects UI, include screenshots or screen recordings.

**Example PR template:**
### Description
Briefly describe the changes made.

### Related Issue
Closes #issue_number

### Screenshots (if applicable)

---

## 6. Code Quality & Best Practices
- Follow **React and JavaScript best practices**.
- Use **Tailwind classes** instead of custom CSS unless necessary.
- Keep **components reusable and modular**.
- Avoid committing sensitive information (API keys, secrets, etc.).
- Format code using **Prettier** before committing.
- Use **ESLint** for linting and avoid console logs in production.

---

## 7. Appwrite & Environment
- Do **not commit `.env` or sensitive keys**.
- Document any new Appwrite collections, functions, or rules in README.
- Provide **mock data** for testing wherever possible.

---

## 8. Communication
- Discuss major changes via **GitHub Issues or Discussions** first.
- Use **comments on PRs** for code review feedback.
- Respect timelines if multiple contributors are working on the same feature.

---

## 9. Documentation
- Update README for new features or workflows.
- Document new components, APIs, or scripts with comments.
- Maintain **clear and concise documentation** for future contributors.

---

## 10. Testing
- Test **critical features** (registration, login, forms, etc.).
- For frontend, you can use **React Testing Library** if possible.
- Include screenshots or logs of testing in PR description.

---

### ✅ Summary of Dos and Don’ts
**Do:**  
- Follow branching rules  
- Test before pushing  
- Keep commits small and meaningful  
- Respect existing code style  

**Don’t:**  
- Push directly to `main`  
- Commit secrets / API keys  
- Write messy or untested code  
