# Part 4: Quiz time!

Copy the questions below into a file `part-4/quiz.md`. Then, write your answer to each question directly below it.

The quiz is worth **50 points** in total.

_Reminder: you can use the internet to help you answer these questions :)_

- What is the PATH environment variable used for in UNIX systems?

  -- it is used to describe a set of directories where executable programs are located.

- On a UNIX computer, how do you stop a running process?

  -- first find the PID of the process you want to end:

  ```
  ps -e | grep thizz
  17146 pts/1    00:00:00 thizz
  ```

  then use `kill` + PID to end the process

  ```
  kill 37862
  ```

- Which command can you use to see which homebrew packages you've installed?

  ```
  brew list
  ```

  &

  ```sh
  brew cask list
  ```

- On a UNIX computer, how do you find the process id of a running process?

  ```sh
  ps -e | grep thizz
  17146 pts/1    00:00:00 thizz
  ```

- In a terminal, what does control-c do?

  -- it exits the current running process.

- What would be the result of typing the following commands?

  ```sh
  $ cd /Users/lucy
  // change to folder lucy in the users folder

  $ mkdir one
  // create directory titled: one

  $ touch alpha
  // create file called: alpha

  $ cd one
  // change to folder titled: one

  $ touch alpha
  // create file alpha (in folder one)

  $ pwd
  // print working directory (~/Users/Lucy/one)
  ```

- How do you see which environment variables are set in your shell?

  `env`

- What keyboard shortcut do you use to perform a "Find" search in your editor?

  `command + f`

- How do you see which aliases you have in your shell?

  ```sh
  in ~ ls-a to show your .bashrc or .bash_profile (or.zshrc) and then open those files to see your terminal aliases.
  ```

- When a terminal command completes, how can you tell if it was successful or not?

 -- To know the exit status of last command, run ```echo $?``` You will get the output in integer. If output is ZERO ( 0 ), it means command has been run successfully. Whereas if output of the command is NON ZERO then command was not run successfully.

- What does your `~/.gitconfig` have in it? (paste the whole file here)

  ```sh
  # djbrigidope hiafrn ~ [11:33:59]
  $ cat .gitconfig
  # This is Git's per-user configuration file.
  [user]
  # Please adapt and uncomment the following lines:
  name = bj bautista
  email = emailme@djbrigidope.com
  ```

- What is the difference between a relative   and absolute path?
-- the path that refers to ~ is an absolute path. the path that only refers to the current directory is relative.



- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── airbnb-for-llamas
      │   └── package.json
      └── facebook-for-mimes
          ├── README.md
          └── package.json
  ```

  And you were in the `facebook-for-mimes` folder. What command would you use to copy the `README.md` file to the `airbnb-for-llamas` folder?

  ```sh
  cp readme.md ./projects/airbnb-for-llamas
  ```

- What keyboard shortcut do you use in your editor to quickly navigate to a file in the current project?

 -- Command - T

- Give an example of a file or folder pattern you commonly add to a .gitignore file and why you add it.

 -- You would ignore files that don't need to be shared to other users via the repo. For instance, Node modules and other dependencies are referred to in the package JSON and can be downloaded via NPM.
 .DS_Store is a file that gets created when you open
 a directory via the Finder, these files are frequently updated, very unnecessary to others, and should be included in your .gitignore



- What are the main differences between `Array.sort` and `Array.filter` in JavaScript?

  -- Array.sort mutates the original array. Array.filter
  returns a new array leaving the original array
  unchanged.

## Requirements

- [X] **50:** All questions are answered correctly.
