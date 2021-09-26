import { ReplyableComponentInteraction } from 'cordo'


export default function (i: ReplyableComponentInteraction) {
  i.replyPrivately({
    content: 'You picked ' + i.data.values[0]
  })
}
