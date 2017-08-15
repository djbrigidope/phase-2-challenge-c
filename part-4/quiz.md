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
  ```
  brew cask list
  ```

- On a UNIX computer, how do you find the process id of a running process?
  ```
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

  $ cd one
  $ touch alpha
  $ pwd
  ```

- How do you see which environment variables are set in your shell?

- What keyboard shortcut do you use to perform a "Find" search in your editor?
- How do you see which aliases you have in your shell?
- When a terminal command completes, how can you tell if it was successful or not?
- What does your `~/.gitconfig` have in it? (paste the whole file here)
- What is the difference between a relative and absolute path?
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

- What keyboard shortcut do you use in your editor to quickly navigate to a file in the current project?

- Give an example of a file or folder pattern you commonly add to a .gitignore file and why you add it
- What are the main differences between `Array.sort` and `Array.filter` in JavaScript?

## Requirements

- [ ] **50:** All questions are answered correctly.
