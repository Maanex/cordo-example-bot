import { ReplyableCommandInteraction } from 'cordo'


export default function (i: ReplyableCommandInteraction) {
  i.reply({
    title: 'Test Command!',
    description: 'Super basic!'
  })
}
