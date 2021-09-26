import { ReplyableComponentInteraction } from 'cordo'


export default function (i: ReplyableComponentInteraction) {
  // this time we manually switch state
  // this way we can save changes before switching
  // or like below, add extra context to the state we're switching to
  i.state('main', 'never gonna', 'give you up')
  // just `i.state('main')` would be fine too, you don't need extra info
}
