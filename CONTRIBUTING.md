# Contributing to ghxgit

Thank you for your interest in contributing to ghxgit! This document provides guidelines and instructions for contributing.

## Code of Conduct

All contributors are expected to be respectful and constructive. We aim to maintain a welcoming and inclusive community.

## Getting Started

### Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/ghxgit.git`
3. Create a feature branch: `git checkout -b feature/my-feature`
4. Make your changes
5. Test your changes
6. Submit a pull request

### Testing Your Changes

Before submitting a PR, test your changes:

```bash
# Make the script executable
chmod +x bin/ghx

# Test with a local repository
cd /path/to/any/github/repo
/path/to/ghxgit/bin/ghx jump --help

# Test various scenarios
/path/to/ghxgit/bin/ghx jump <valid-pr-number> --verbose
/path/to/ghxgit/bin/ghx jump <valid-branch> --type branch
```

## Development Guidelines

### Script Style

- Use `bash` for scripts, with `#!/usr/bin/env bash` shebang
- Always use `set -euo pipefail` for error handling
- Quote variables: `"$var"` not `$var`
- Use `[[ ]]` instead of `[ ]` for conditionals
- Use `$()` instead of backticks for command substitution
- Add comments for complex logic
- Keep functions focused and single-purpose

### Error Handling

- Use proper exit codes (0 for success, 1+ for errors)
- Provide clear error messages with context
- Use the `log_error()` function for consistency

### Features to Add

Potential improvements:

- [ ] Bash completion in addition to ZSH
- [ ] Support for searching across multiple repositories
- [ ] Configurable search order
- [ ] Custom keybindings
- [ ] Integration with fzf for fuzzy search
- [ ] Cache results for faster re-searches
- [ ] Support for GitHub Enterprise
- [ ] Fish shell completions

## Project Structure

```
ghxgit/
├── bin/
│   └── ghx                      # Main script
├── completions/
│   └── zsh/
│       └── _ghx                 # ZSH completions
├── install.sh                   # Installation script
├── README.md                    # User documentation
├── CONTRIBUTING.md              # This file
├── LICENSE                      # MIT License
└── .gitignore
```

## Pull Request Process

1. Update documentation if needed
2. Test your changes thoroughly
3. Provide a clear description of what changed and why
4. Reference any related issues
5. Ensure your code follows the style guidelines

## Reporting Bugs

When reporting bugs, include:

- OS and shell version (`uname -a`, `echo $SHELL`)
- Exact command you ran
- Expected behavior
- Actual behavior
- Error messages or logs (use `--verbose` flag)
- Steps to reproduce

## Feature Requests

When suggesting features:

- Explain the use case
- Provide example usage
- Consider edge cases
- Check if similar tools exist and how they solve the problem

## Questions?

Feel free to open an issue with the "question" label or start a discussion.

Thank you for contributing! 🎉
