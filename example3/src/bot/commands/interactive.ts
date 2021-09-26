import { ButtonStyle, ComponentType, ReplyableCommandInteraction, ReplyableComponentInteraction } from 'cordo'


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
  .withTimeout(
    10 * 1000,
    (janitor) => janitor.removeComponents(),
    { onInteraction: 'restartTimeout' }
  )
  .on('custom_id_here', (r: ReplyableComponentInteraction) => r.edit({
    title: 'I changed the title'
  }))
  .on('another_one', (r: ReplyableComponentInteraction) => r.reply({
    content: 'Hello there!'
  }))
}
