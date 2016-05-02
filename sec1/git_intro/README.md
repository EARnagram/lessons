# Moving through the Space-Time Continuum of Code

![](https://dejareviewer.files.wordpress.com/2012/03/abe-and-aaron-are-astonished-by-the-ramifications-of-their-invention-a-time-machine.jpg)

## Intro to Git and GitHub

| Learning Objectives: SWBAT               |
| :--------------------------------------- |
| Use `git init` to create a repo |
| Describe what happens when you initialize a new Git repository |
| Use `git add /dir` and `git add -A` |
| Write git commits using `git commit -m "write commit message"` |
| Use `man git` and `git --help` to remind you of usage and Git's "subcommands." |
| Use `git clone` to clone a repo |
| Use `hub create` and `hub browse` to interact with GitHub via the terminal |
| Update a repo using `git push` |
| Find and explain the purpose of the `.gitignore` and `.gitignore_global` |

#### Roadmap

1. Plan for the Worst
2. What is a Git Repository?
3. Temporal Checkpoints - Saving your Work
4. Report to Time HQ - Storing your Repo on GitHub
5. Outro

## Plan for the Worst

You signed up for this course thinking you'd become only a developer, but it
turns out, you're also now a time traveler.

A time traveler of code.

Strap in, because time can be a very dangerous place (or moment?). Luckily, our
time machine prepares us for the worst, and makes our travels through the
present much safer using __Version Control__.

Git set. It's time to travel through the programming multiverse.

#### Git, your Personal Time Machine
![](https://lintvkimt.files.wordpress.com/2015/01/time1.jpg)

In programming, we write a ton of code. No big surprise there.

Not only do we write a lot of code, but we tend to write a lot of bad code. Not
only bad, but weeks long soirées in the wrong direction.   

Luckily, most programmers use a kind of time-machine called a Version Control
System. It saves __states__ of your code - allowing you to return to moments
before taking a deeply flawed direction.

You save a state by _committing_ your code to a _repository_, a directory
containing the project you want backed up.

If the time-machine analogy doesn't work for you, think of commits as flag
markers at forking paths when ascending a steep mountain (the project). Stay
tethered to these commits and you can always get back to previous states!!

## What is a Git Repository?

![](http://www.christianengvall.se/wp-content/uploads/2014/05/Git-rename-branch-1024x483.jpg)

Git's source code's README.md has an interesting answer:

```
# GIT - the stupid content tracker

"git" can mean anything, depending on your mood.

- random three-letter combination that is pronounceable, and not
 actually used by any common UNIX command.  The fact that it is a
 mispronounciation of "get" may or may not be relevant.
- stupid. contemptible and despicable. simple. Take your pick from the
 dictionary of slang.
- "global information tracker": you're in a good mood, and it actually
 works for you. Angels sing, and a light suddenly fills the room.
- "godd*mn idiotic truckload of sh*t": when it breaks
```

A git repository is a directory (folder) containing a `/.git`. You make git
repositories - or repos, for short - to keep versions of your project, saved
throughout the creation process.

The repo is a folder that stores your code from many different moments in time.

Think of it as a simplified method of renaming a file each time you save - but
for all files in a project folder:

![](http://fundamentals.generalassemb.ly/assets/chapter2/bad_vcs.png)

Git has numerous other capabilities, but this is its main function as a Version
Control System. It also makes sharing code much more simple with the help of
GitHub, and allows better organization in an agile work environment, but we'll
get into those topics later in the course.

Git is one of the most complicated pieces of software you will work with in this
course. We'll start slow and focus on the most necessary features to help keep
track of our work, so we don't need to worry about losing any hard-fought work.

#### Creating a Git Repository

![](http://images.radiotimes.com/namedimage/It_looks_like_that_Bill___Ted_film_is_really_happening.jpg?quality=85&mode=crop&width=620&height=374&404=tv&url=/uploads/images/original/105098.jpg)

Enough talk! We're ready to climb that mountain - let's get started by creating
a new repository.

First, let's make a new directory. Open up your terminal and navigate to
`~/code`.

Next, create a `/scratch` folder for yourself. Use this as a practice folder
throughout the course.

`mkdir scratch`

Then, change into that directory:

`cd scratch/`

And finally, create your first of many repos in this class:

`git init`

This initializes the repository. We're now ready to start working on some code
in the sweet comfort of a git repository!

>Note: __NEVER__ `git init` your home directory - it will make working with your
other repos very difficult and will probably slow your computer down
considerably.

Let's create a `README.md` within our new repo to give ourselves something to
save.

`touch README.md`

Go ahead and `subl .` to add to our new `README.md`. Write a quick message
about what this repo is for - your scratch paper.

Once you've saved the file, you're ready to commit your work!

## Checkpoints - Saving Your Work

![](http://www.brokenfrontier.com/wp-content/uploads/2014/10/doctors-650-e1414081833591.jpg)

Now we have work we would like to save in our repo.

There are two steps in creating a new version of your codebase.

![](http://fundamentals.generalassemb.ly/assets/chapter2/add_commit.png)

1. `git add <path to file or directory>`
  - Add to the "index" - the staging area for the save.
  - While this may seem unnecessary, it helps if you want to add two files in
  two different directories within your repository.
  - You can use `git add .` to add the current directory and all nested
  directories.
  - You can use `git add -A` to add ALL untracked changes in your repository.
  - This does not save your code, but prepare it to be saved!
2. `git commit -m "initialize repository"`
  - You add a message by including the `-m` flag and following it with a message
  written in the present tense surrounded in quotes.
  - It's easier to spot a commit if the message is clear - make sure you write
  exactly what you most recently completed.
  - You've officially saved your code! You're ready to move forward in safety!!

You now have a new commit in your history. Go ahead and look!

Enter `git log` into your terminal to see your list of git commits.

You only have one commit so far, but you'll have a lot more by the end of the
class. And in time, you'll see a long list of commits, each with a different
state you can return to.

#### Do I have to remember all these commands?

Yes, but mainly because you'll learn them through repetition. If you're ever
lost or need to look something up, type in either `man git` or `git --help`.

## Report to Base - Storing your Repo on GitHub

![](http://www.empirix.no/content/uploads/2016/02/Patience-forside.jpg)

In order to store our repo online, we use a service called GitHub.

GitHub is the center of the open-source community. Developers share their code
projects for other developers to use and improve.

#### `git clone` vs `git init`

Earlier, we used `git init` to create our repository in a new git repo.

But what if we want to work on an already existing repository?

This is the beautifully elegant option of `git clone <url>`.

You can take the most recent version of the repository - therefore giving you
access to all previous commits - and copy it to your disk (_Forking_ simply
copies a version on gitHub - not to your computer).

Go ahead and try to clone my new repo for learning code:

`git clone https://github.com/EARnagram/edu`

And that's all you need to do to get a copy of a repo onto your local machine!

#### Putting Your Repo on GitHub

![](http://nerdist.com/wp-content/uploads/2015/10/RickBurpFeature.png)

Here at GA, we've given you a quick commands in the terminal to speed up the
process of adding a new repo on GitHub.

Simply type the command: `hub create` in your new folder and you'll create a
new repository under your GitHub username!

You then use `git push origin master` to update your `master` branch of your
new git Repository. We'll talk more about branches and the origin later in the
course.

That means there are three steps to update a repo:

1. `git add -A`
2. `git commit -m "message explains most recent features"`
3. `git push origin master`

If you want to go directly to your repository on GitHub from the terminal,
simply type: `hub browse`.

#### GitHub and Security

![](http://tansyrr.com/tansywp/wp-content/uploads/2015/01/jason-musketeer.jpg)

Sometimes there are things we don't want pushed to GitHub.

Luckily, git has a special filetype that ensures other files will not be
tracked.

This is called a `.gitignore` file. There are local ones for repos, and global
ones for your whole system, called `.gitignore_global`.

We'll use these a lot more in later parts of the course, but they keep sensitive
information off GitHub.

#### Quick Note on Empty Folders

Empty folders will not be tracked by git.  If you want to keep an empty folder,
simply `touch .keep` to add a file to keep the otherwise empty folder.

## Outro

![](http://www.cinema52.com/2013/wp-content/uploads/2013/10/20131002-010711.jpg)

You can now move through the space-time continuum like a swimming pool full of
jello. Return to previous molds of yourself whenever you want!

Joking aside, you've just been introduced to one of the most complicated and
useful pieces of software you will use in this course and afterwards.

It will take time to become comfortable with the commands and the workflow, but
in time, I promise it will all make sense. Before you know it, you'll be making
commits in your sleep.

Now, let's close with a few questions:

### Questions:
1. Why do developers use version control?
2. How do you create a new repository?
3. What is the process for saving your work to GitHub?

#### References

[Reverting to Previous Commits](http://stackoverflow.com/questions/4114095/revert-git-repo-to-a-previous-commit#answer-4114122)
