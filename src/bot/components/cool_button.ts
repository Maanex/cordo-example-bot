import { ReplyableComponentInteraction } from 'cordo'


export default function (i: ReplyableComponentInteraction) {
  i.ack()
  console.log('this button doesnt do anything except for printing this line to the console')
}
