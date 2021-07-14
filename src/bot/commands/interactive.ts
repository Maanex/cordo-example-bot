import { ButtonStyle, ComponentInteraction, ComponentType, ReplyableCommandInteraction, ReplyableComponentInteraction } from 'cordo'


export default function (i: ReplyableCommandInteraction) {
  i.replyInteractive({
    title: 'An interactive command',
    description: 'You have 10 seconds to click a button! After 10 seconds of not clicking a button they vanish!',
    components: [
      {
        type: ComponentType.BUTTON,
        style: ButtonStyle.SUCCESS,
        label: 'First Button',
        custom_id: 'custom_id_here'
      },
      {
        type: ComponentType.BUTTON,
        style: ButtonStyle.SUCCESS,
        label: 'Another One',
        custom_id: 'another_one'
      },
      {
        type: ComponentType.BUTTON,
        style: ButtonStyle.SUCCESS,
        label: 'Fallback to regular handlers',
        custom_id: 'cool_button'
      }
    ]
  })
  .withTimeout(10 * 1000, true, (janitor) => {
    // after 10 seconds the janitor comes to clean things up
    // in this case just removing the buttons so the user cannot click anymore
    // but it could also just edit the message to let them know the time is up
    // important here, only one reaction from the janitor
    // don't do both .edit and .removeComponents
    // if you edit, remove components in edit by adding a components: [] to your content
    janitor.removeComponents()
  })
  .on('custom_id_here', (r: ReplyableComponentInteraction) => {
    r.edit({
      title: 'I changed the title'
    })
  })
  .on('another_one', (r: ReplyableComponentInteraction) => {
    r.reply({
      content: 'Hello there!'
    })
  })
}
