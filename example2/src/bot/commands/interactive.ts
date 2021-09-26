import { ButtonStyle, ComponentInteraction, ComponentType, ReplyableCommandInteraction, ReplyableComponentInteraction } from 'cordo'


export default function (i: ReplyableCommandInteraction) {
  // .replyInteractive opens an interative context
  // use the regular .reply() function if you don't need any interactivty as the overhead is lower with the latter
  // other than that, those two don't differenciate so far, you can still reply like previously

  // note that we're adding components here. If you don't add components, you don't need an interactive reply.

  i.replyInteractive({
    title: 'An interactive command',
    description: 'You have 10 seconds to click a button! After 10 seconds of not clicking a button they vanish!',
    // add some components
    components: [
      {
        // component is of type button
        type: ComponentType.BUTTON,
        // style success = green
        style: ButtonStyle.SUCCESS,
        // label = display name
        label: 'First Button',
        // custom id is important! You need to reference it later in the .on(...) methods below! ↓
        custom_id: 'custom_id_here'
        // typescript / vscode intellisense autocomplete will help you figure out what fields are required or possible
        // more on those in a later tutorial too
      },
      // more buttons ...
      {
        type: ComponentType.BUTTON,
        style: ButtonStyle.SUCCESS,
        label: 'Another One',
        custom_id: 'another_one'
      }
    ]
  })
  .withTimeout(
    // after 10 seconds
    10 * 1000,
    // the janitor comes to clean things up
    // in this case just removing the buttons so the user cannot click anymore
    // but it could also just edit the message to let them know the time is up
    // important here, only one reaction from the janitor
    // don't do both .edit and .removeComponents
    // if you edit, remove components in edit by adding a components: [] to your content
    janitor => janitor.removeComponents(),
    // if the user clicks a button the 10 second timeout gets restarted.
    { onInteraction: 'restartTimeout' }
    // above you have more options:
    // restartTimeout: restarts the timeout, back to 10 seconds in this case
    // removeTimeout: removes the timeout, the janitor will never get called
    // triggerTimeout: triggers the timeout immediately, the janitor will do it's job
    // doNothing: clicking buttons won't affect the janitor at all. No timeout reset, no timeout trigger, nothing.

    // please notice that if the timeout is removed (no matter if triggered or removed), the interactivity gets lost
    // in other words, the .on handler below only work if the timeout is running
    // if you stop it, the buttons within this context stop working
    // this should not encourage you to pick arbitrarily large timeouts though, if you want longer lasting buttons, check out the next example
    // this way of handling button interactions is only recommended if you're dealing with state
    // say a user needs to confirm something. using this way of handling buttons provides the following:
    // - inbuild timeout function
    // - way to store state (just use variables in the exported function, they stay scoped to this interaction)
    // - nice any clean, everthing in one file
  )
  // note that .on() takes a custom_id value from a button you defined earlier!
  .on('custom_id_here', (r: ReplyableComponentInteraction) => {
    // ReplyableComponentInteraction (r) is basically the event object, if you are familiar with event handling

    // you can do anything with the event here
    // you can even launch a rocket from within this code block (not built-in to cordo though)
    // important is just that you somehow respond to the event like .edit below
    r.edit({
      title: 'I changed the title'
    })
  })
  .on('another_one', (r: ReplyableComponentInteraction) => {
    // you can also reply
    r.reply({
      content: 'Hello there!'
    })

    // or
    // r.replyPrivately(...) -- replies in a private message
    // r.state(...) -- switches to a state (more on states in a later tutorial)
    // r.ack() -- acknowledges the event and does nothing. As said, you need to respond to the event so run .ack() if you don't actually want to (but you have to)
  })
}
