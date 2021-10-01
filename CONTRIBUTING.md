# Guidelines for contributing to this repo

## This repo is part of the [inspirezone.tech](https://inspirezone.tech) community portfolio of projects located on our [GitHub page](https://github.com/inspirezonetech)

Inspirezone is an online tech blog and community that focuses on encouraging developers of all levels of experience to improve their skills through online collaboration.

Consider [joining the inspirezone community here!](https://community.inspirezone.tech/)
You don't have to join to contribute to this project. However, joining will give you a number of advantages such as:
- Access to member exclusive channels on the inspirezone Discord server
- Join in discussions with other members and take part in events 
- Be part of an accountability group that will encourage you to code more
- Get notified of other projects and activities within our community
- It's fun to improve your skills by working with others!

## Please make sure you are assigned to an [ISSUE](../../issues) before submitting a pull request

Go to the [issues](../../issues) page and either:
- Request to be assigned to an existing issue
- Create your own issue and use one of the templates provided. Wait for approval and to be assigned the issue before submitting a pull request

**Note:** You can only be assigned to one issue at a time. Please clear your assigned issue before requesting to be assigned to another.


## Contributions you can make to this project

- Add a tutorial
- Improve an existing tutorial
- Report a bug or problem with the repo or a tutorial
- Suggest a tutorial
- Help with documentation
- Make any suggestion for improvement

## Guidelines for submitting a tutorial

- Tutorial should explain a concept as simply as possible 
- Each tutorial should be a ".js" file and should be executable
- Each tutorial should come with a challenge that can be verified through a print of the expected result/results to console
- All folders and files should be named using lower cases with words separated by '-' e.g. *for-loops.js*
- Please use the following template for each tutorial:
```
/*
-------------------------------------------------------------------------------------
 Tutorial: brief description of tutorial content
-------------------------------------------------------------------------------------
*/

/* Code here explaining concept with comments to guide */

/*
-------------------------------------------------------------------------------------
 Challenge: list challenges to be completed here. minimum of one challenge per tutorial
-------------------------------------------------------------------------------------
*/
```

## How to submit your code to this repository - step by step guide

Please use [pull requests](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests) to submit your contribution.

If you're new to opensource and contributing, for a bit of help getting started see this post on the inspirezone blog:  
[A beginner friendly guide to making your first open source contribution.](https://inspirezone.tech/making-your-first-open-source-contribution/)

### Steps to make your contribution using git commands

### 1. Fork this repo. Click on the fork icon on this repo to create a copy of it on your GitHub profile
![github fork icon](https://inspirezone.tech/wp-content/uploads/2021/04/forking-repo-img.png)

### 2. Clone the forked repo to your PC
```
git clone https://github.com/your-github-username/TeachMeJavaScriptLikeIm5.git
```

### 3. Add this repo as the remote upstream. Keep it synced regularly by pulling from upstream
```
git remote add upstream https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5.git
```
```
git pull upstream main
```

### 4. Create a new branch and checkout to the branch
```
 git checkout -b your-branch
```

### 5. Get coding!

### 6. Commit your changes
```
git commit -m "commit message describing change" 
```

### 7. Push to your Fork 
```
git push origin your-branch
```

### 8. Create a Pull Request. Go to your Fork on GitHub and create a pull request to this repo on GitHub. Then fill in the PR submission form before submitting
![github pr icon](https://inspirezone.tech/wp-content/uploads/2021/04/pullrequest-repo-img.png)

### 9. If needed, respond to code review comments and feedback

### 10. If all goes well, your submission will be merged. Congrats! 

## License

By contributing to this repo, you agree that your contributions will be licensed under its MIT License.