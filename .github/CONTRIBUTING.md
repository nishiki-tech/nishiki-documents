# Contributing to Nishiki

Thank you for your interest in contributing to Nishiki! This document outlines the guidelines for contributing to this project.

## Table of Contents

- [Contributing to Nishiki](#contributing-to-nishiki)
    - [Table of Contents](#table-of-contents)
    - [Branching Rules](#branching-rules)
        - [Types of Branches](#types-of-branches)
        - [Branch Naming Conventions](#branch-naming-conventions)
            - [Examples](#examples)
    - [Testing](#testing)
    - [Commit Convention](#commit-convention)
    - [Pull Requests](#pull-requests)
        - [For Team Members:](#for-team-members)
        - [For External Contributors:](#for-external-contributors)

## Branching Rules

### Types of Branches

- `main`: For production use..
- `feature/`: Branches for developing new features or improvements.
- `hotfix/`: Branches for urgent fixes.
- `docs/`: Branches for documentation updates.

### Branch Naming Conventions

- Feature Addition: `feature/<issue_number>-<brief_description>`
- Hotfix: `hotfix/<issue_number>-<brief_description>`
- Documentation Update: `docs/<issue_number>-<brief_description>`

*Note: `<issue_number>-` can be omitted if the modification is not based on an issue.*


#### Examples

- feature/42-user-authentication
- hotfix/56-security-vulnerability-fix
- docs/108-update-installation-guide

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

## Pull Requests

### For Team Members:

1. Create a new branch from the `main` branch.
2. Follow the [Branch Naming Conventions](#branch-naming-conventions) while naming your branch.
3. Work on your changes locally.
4. Commit your changes, ensuring to follow the project's [commit message conventions](#commit-convention).
5. Push your branch to the repository.
6. Create a Pull Request against the original branch you branched from.
7. Await code review, and address any comments as necessary.

### For External Contributors:

1. Fork the repository to your own GitHub account.
2. Clone your forked repository locally.
3. Create a new branch from the `main` branch on your fork.
4. Follow the [Branch Naming Conventions](#branch-naming-conventions) while naming your branch.
5. Work on your changes locally.
6. Commit your changes, ensuring to follow the project's [commit message conventions](#commit-convention).
7. Push your branch to your forked repository.
8. Create a Pull Request against the `main` branch of the original repository.
9. Await code review, and address any comments as necessary.