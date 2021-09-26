# example two

New in this tutorial: Interactive commands.

Interactive commands are one of two ways to make slash commands with buttons.

The other way to make buttons work will be described in a later tutorial.

Use the interactive context method (in this example) if you're in either of those scenarios:
- you want a context that's limited on time. For instance you only want to give the user 10 seconds to click on a button
- you want to use randomized button names. Useful if you're doing some sort of trivia game and don't want to give away the correct answer
- you need to store state about this specific interaction. A confirm dialogue for example.

The interactive context also has it's own downsides, please be aware of those:
- it requires a timeout. You cannot have an interactive context without a timeout. After this timeout your buttons stop working.
- buttons also stop working after a bot restart (big surprise)
- interactive contexts use up slightly more resources than the stateless approach you'll learn about later

On the plus side, interactive contexts are easy to learn and more intuitive. Everything is collected in one file and you'll immediately know where to look for your code.

The index.ts file doesnt have any changes. Don't forget to update your token and bot id though!
Furthermore you want to look in src/bot/commands/interative.ts
