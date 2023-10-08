# Contribution to Nishiki

Thank you for your interest in contributing to Nisiki.

## Pull Requests

All pull requests must be related to the issue(s) except the hotfix.
Before you create a pull request, you need to create an issue.

### Branching rule

* Branch kind

| Branch Name | Detail |
| :---------- | :----- |
| main        | For the production environment. This branch can only accept PR from staging branch except for the hotfix branch. |
| staging     | For the development environment. This branch can only accept PR from the develop branch. |
| develop     | This branch gather the feature changes. |
| feature     | This branch is to implement the issues |
| hotfix      | This branch is to implement the issues |

* Branch naming rule

| Branch Name | Naming Rule                         |
| :---------- | :---------------------------------- |
| feature     | feature/<issue-number>-<issue-name> |
| hotfix      | hotfix/<issue-number>-<issue-name>  |
| docs        | docs/<issue-number>-<issue-name>    |
