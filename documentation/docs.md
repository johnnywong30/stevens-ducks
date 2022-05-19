# Development Documentation

## General Workflow
Work on issues/features on feature branches.
Steps:
1. Make sure you're on the `main` branch first. Check with `git status`.
2. Run `git pull` to make sure you have the latest version of `main`.
3. `git checkout -b <new-branch-name>` to switch to a new branch. Preferably descriptive of the issue you're working on.
4. When you finish your branch (please make small changes incrementally), there may have been merges into `main` already before you finished.
5. Resolve any possible merge conflicts by doing `git merge main` while you are on your branch `<new-branch-name>`.
6. After making sure there aren't any bugs (by testing the project again), create a pull request on GitHub to request to merge your branch into `main`. This means that the base branch is `main` and the compare branch is `<new-branch-name>`.
7. Project owner will review your pull request and see if it can be merged into `main` without errors.
8. Then they should test it again on `main` before merging the latest version of `main` into `production`.
9. All code merged into `production` will have to go through the steps below to deploy the app to Heroku.


## Deploying to Heroku
While Heroku is fixing their GitHub breach, we have to deploy our project to manually
using Heroku's CLI. Steps below when in the project's root directory:

1. `heroku login`
2. `git push heroku production:main`

Owner of the heroku app has to be logged in. 
Then, the feature branch/production branch is pushed to heroku's remote and the project is built.

If there are any problems, run `heroku logs --tail` to see some error messages.

Also make sure the code was pushed to `production` already before pushing to heroku.


