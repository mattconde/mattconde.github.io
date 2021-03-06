---
title: Mac setup
date: '2018-10-21T16:20:00.000Z'
---

This guide covers the basics of setting up a development environment on a new Mac. It's written as a reference for setting up my working environment or installing/configuring languages, libraries and apps that I use day to day.

---

## System preferences

The first thing you should do is: **Apple menu () > About This Mac > Software Update**. Admire your specs here for a moment whilst you update.

#### Users & Groups

Set up Apple ID.

#### Trackpad

- Point & Click
  - Uncheck _Look up & data detectors_
  - Check _Secondary click_
  - Uncheck _Tap to click_
  - Increase _Tracking speed_ the default is too slow
- Scroll & Zoom
  - Check _Scroll direction: Natural_
  - Uncheck _Zoom in or out_
  - Uncheck _Smart zoom_
  - Uncheck _Rotate_
- More Gestures
  - Uncheck _Swipe between pages_
  - Check _Swipe between full-screen apps_
  - Uncheck _Notification Centre_
  - Check _Mission Control_
  - Uncheck _App Exposé_
  - Uncheck _Launchpad_
  - Uncheck _Show Desktop_

#### Menubar

- Hide _Bluetooth_ icon
- Change _battery_ to show percentage

---

## Finder

- In _Preferences_ check _Show all filename extensions_
- In _Preferences_ check _Remove items from the Trash after 30 days_
- Add _projects_ directory to _Favourites_
- Add _root_ directory to _Favourites_
- Enable view hidden files by pressing **CMD + SHIFT + .** whilst in a directory

---

## Xcode

Install Xcode and Xcode command line tools both installed. This step is required for many other tools going forward.

```bash
xcode-select --install
```

Follow the instructions that pop-up.

---

## Homebrew

You're also going to want _Homebrew_ as we will use this to install and manage a few other apps. Paste this is your Terminal prompt.

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Let install a couple of things; some will have sections for configuration later

```bash
brew install \
  bat \
  fish \
  git \
  golang \
  node \
  tldr \
  thefuck \
  vim
```

Once this completes add _Cask_ for also managing large binaries with _Homebrew_

```bash
brew tap caskroom/cask
```

Once _Cask_ is working install all the things (Note: I'm a web dev so few extra browsers in this list)

```bash
brew cask install \
  1password \
  alfred \
  android-file-transfer \
  brave \
  firefox \
  google-chrome \
  imageoptim \
  iterm2 \
  spectacle \
  visual-studio-code
```

---

> Check out the [Homebrew cheatsheet](https://devhints.io/homebrew)

---

## Fonts

Install _Dank Mono_ latest [release](https://dank.sh/releases/)

---

## iTerm2

Change Preferences

- Profiles > General > Working Directory > Check _Reuse previous session's directory_
- Colors > Color Presets > Import... > _Find iterm2-night-owl_ ([Night Owl theme](https://github.com/nickcernis/iterm2-night-owl))
- Text > Font > Change Font > _Find Dank Mono_
- Appearance > Tabs > Check _Strech tabs to fill bar_

---

## Fish shell

Installation if you already haven't

```bash
brew install fish
```

Once installed we need to make it the default shell first we add it to the accepted shells

```bash
echo "/usr/local/bin/fish" | sudo tee -a /etc/shells
```

then we can make _Fish_ our default shell

```bash
chsh -s /usr/local/bin/fish
```

#### Configuration

We start by creating the config directory adding the initial config file.

```bash
mkdir -p ~/.config/fish

touch ~/.config/fish/config.fish
```

then lets clear out the default greeting message _Fish_ comes with

```bash
echo "set -g -x fish_greeting ''" >> ~/.config/fish/config.fish
```

#### Package manager

Recently I've been using [Fisher](https://github.com/jorgebucaran/fisher) for this so to install fisher add the following to your _Fish_ config file `~/.config/fish/config.fish`

```fish
if not functions -q fisher
    set -q XDG_CONFIG_HOME; or set XDG_CONFIG_HOME ~/.config
    curl https://git.io/fisher --create-dirs -sLo $XDG_CONFIG_HOME/fish/functions/fisher.fish
    fish -c fisher
end
```

Only a couple of plugins at the moment:

```bash
# My chosen prompt
fisher add rafaelrinaldi/pure

# Bass makes it easy to use utilities written for Bash in fish shell.
fisher add edc/bass
```

#### More

Fish can parse your installed man pages and automatically generate completion files for your command-line tools. You should periodically run the following command to update those:

```bash
fish_update_completions
```

---

> Check out the [Fish shell cheatsheet](https://devhints.io/fish-shell)

---

## Git

Git huh? What a tool

```bash
brew install git
```

Next if you've got one copy over `.gitconfig`; no? Then add your user name and email to it by doing the following

```bash
git config --global user.name "Your Name Here"

git config --global user.email "your_email@youremail.com"
```

Additional configuration

```bash
# Make sure your credential helper is configured, to avoid being asked for your password all the time
git config --global credential.helper osxkeychain

# disable fastforward in merging
git config --global --add merge.ff false
```

---

## SSH Config for Github

The next part is straight from the offical documentation.

#### Check for existing SSH keys

First, we need to check for existing SSH keys on your computer. We do this by running:

```bash
# Lists the files in your .ssh directory, if they exist
ls -al ~/.ssh
```

Check the directory listing to see if you have files named either id_rsa.pub or id_dsa.pub. If you don't have either of those files then read on, otherwise skip the next section.

#### Generate a new SSH key

If you don't have an SSH key you need to generate one. To do that you need to run the commands below, and make sure to substitute the placeholder with your email. The default settings are preferred, so when you're asked to "enter a file in which to save the key,"" just press Enter to continue.

```bash
# Creates a new ssh key, using the provided email as a label
ssh-keygen -t rsa -C "your_email@example.com"
```

#### Add your SSH key to the ssh-agent

Run the following commands to add your SSH key to the ssh-agent.

```bash
eval "$(ssh-agent -s)"
```

Next you will need to modify your ~/.ssh/config file to automatically load keys into the ssh-agent and store passphrases in your keychain:

```
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa
```

No matter what operating system version you run you need to run this command to complete this step:

```bash
ssh-add -K ~/.ssh/id_rsa
```

#### Adding a new SSH key to your GitHub account

The last step is to let GitHub know about your SSH key. Run this command to copy your key to your clipboard:

```bash
pbcopy < ~/.ssh/id_rsa.pub
```

Then go to GitHub and input your new SSH key. Paste your key in the "Key" textbox and pick a name that represents the computer you're currently using.

---

> Check out the official guide: [Github ssh](https://help.github.com/articles/connecting-to-github-with-ssh/)
>
> Check out a git tricks cheatsheet: [git tricks](https://devhints.io/git-tricks)

---

## Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Installing _node_ with _brew_ is easy,
it comes with _npm_ as the default package manager. Where as I prefer to use _yarn_ as a package manager; for working
with monorepos and such.

For managing the version of node installed I use _n_ it makes switching versions really easy.

```bash
# Install node with brew
brew install node

# Install yarn with npm (yep.)
npm install -g yarn

# Install n with yarn
yarn global add n

# Install the latest *long term support* with n
n lts
```

---

## Terminal utilities

#### bat

_bat_ is an improved _cat_, it has highlighting and line numbers and everything

```bash
brew install bat
```

then add an alias to your _Fish_ config file `~/.config/fish/config.fish`; so you are always using the mighty _bat_

```
alias cat="bat"
```

---

> Check it out: [bat](https://github.com/sharkdp/bat)

#### thefuck

Installation

```bash
brew install thefuck
```

Set up an alias by adding the following to your _Fish_ config file `~/.config/fish/config.fish`

```fish
thefuck --alias | source
```

---

> Check it out: [thefuck](https://github.com/nvbn/thefuck)

#### tldr

Get help with command line tools

Installation:

```bash
brew install tldr
```

Usage:

```bash
tldr bat
```

---

> Check it out: [tldr](https://tldr.sh/)

#### fd

A replacement for `find`. Install it with brew

```bash
brew install fd
```

Set up an alias by adding the following to your _Fish_ config file `~/.config/fish/config.fish`

```
alias find="fd"
```

Examples:

```bash
# search for app
fd app

# add extension to the search
fd app -e js
```

---

> Check it out: [fd](https://github.com/sharkdp/fd/)

#### diff-so-fancy

Make diffs great again by adding much better colour highlighting and formatting to your diffs.

```bash
brew install diff-so-fancy
```

Next is to configure git config to use it by default

```bash
git config --global core.pager "diff-so-fancy | less --tabs=4 -RFX"
```

Then there are some suggested colour options for starting out with; to enable those do the following

```bash
git config --global color.ui true

git config --global color.diff-highlight.oldNormal    "red bold"
git config --global color.diff-highlight.oldHighlight "red bold 52"
git config --global color.diff-highlight.newNormal    "green bold"
git config --global color.diff-highlight.newHighlight "green bold 22"

git config --global color.diff.meta       "yellow"
git config --global color.diff.frag       "magenta bold"
git config --global color.diff.commit     "yellow bold"
git config --global color.diff.old        "red bold"
git config --global color.diff.new        "green bold"
git config --global color.diff.whitespace "red reverse"
```

---

> Check it out: [diff-so-fancy](https://github.com/so-fancy/diff-so-fancy)

---

## Visual Studio Code

#### Extensions

- [Night Owl by Sarah Drasner](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)
- [Material Icon Theme by Philipp Kief](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [ESLint by Dirk Baeumer](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier by Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Insert relative path by me](https://marketplace.visualstudio.com/items?itemName=mattconde.insert-relative-path)
- [Flow Language Support by flowtype](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)

- [carbon-now-sh by Eric Adamski](https://marketplace.visualstudio.com/items?itemName=ericadamski.carbon-now-sh)
- [Paste JSON as Code by quicktype](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype)

#### Snippets

```javascript
// Console log with annotation
{
	"Print to console with annotation": {
		"scope": "javascript,typescript",
		"prefix": "lg",
		"body": [
			"console.log('$1', $1);",
			"$2"
		],
		"description": "Log output to console with annotation first."
	}
}
```

---

> Check out [awesome-vscode](https://github.com/viatsko/awesome-vscode)

---

## References

Thanks to all who I have referenced

- [sourabhbajaj](https://sourabhbajaj.com/mac-setup/)
- [devhints](https://devhints.io)
- more to be added
