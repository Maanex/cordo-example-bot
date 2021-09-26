import { InteractionCommandType, InteractionType, ReplyableCommandInteraction } from 'cordo'


// each command handler exports a default function
// this function gets called every time someone executes the command with the same name as this file
// so in this case a /test command
export default function (i: ReplyableCommandInteraction) {
  console.log('/test was run!')

  // reply to the command
  i.reply({
    title: 'Test Command!',
    description: 'Super basic!'
  })

  // Everything below is not neccessary to follow along the next tutorials but
  // it will teach you everything about slash commands in cordo there is to know


  // you can also
  // > i.replyPrivately(...)
  // for a private response

  // or
  // > i.defer()
  // if you want to reply later
  // so say your command fetches data from an api that might take longer than 3 seconds
  // since after 3 seconds the command runs out, you would want to immediately call i.defer()
  // and then run i.reply(...) once the api response is there

  // you can also do
  // > i.replyInteractive(...)
  // > i.state(...)
  // but more on those later
  
  // if your command has any options, you can get them like so:
  // say your command is
  // > /test name:string
  // you can get the name parameter like
  const name = i.data.option.name
  console.log(name)

  // if your command is not a slash command but a contextual command like on a user profile or on a message,
  // you can get this context like so:
  if (i.data.type === InteractionCommandType.CHAT_INPUT)
    console.log('Slash command!')
  else if (i.data.type === InteractionCommandType.MESSAGE)
    console.log('Message right-click command! Message id: ' + i.data.target.id)
  else if (i.data.type === InteractionCommandType.USER)
    console.log('User right-click command! Message id: ' + i.data.target.id)

  // in this case target is either a user or a message
  // the if(i.data.type === ...) check is very important here so typescript knows what i.data.target is
  // if you are using those message or user commands, make sure to check the type at least once so typescript can assign the types properly

  // if you are using message or user commands, you might wonder how you need to name the handler file
  // convert your name to lower case, remove all none-word characters (anything that's not letters number - _) and turn spaces into _
  // examples:
  // Find user ID -> find_user_id.ts
  // Who's that? -> whos_that.ts
  // my-test_command lol -> my-test_command_lol.ts
}
