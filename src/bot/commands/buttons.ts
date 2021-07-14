import { ButtonStyle, ComponentType, InteractionComponentFlag, ReplyableCommandInteraction } from 'cordo'


export default function (i: ReplyableCommandInteraction) {
  i.reply({
    title: 'Test Command!',
    description: 'This time with buttons. Four of them actually. And one select',
    components: [
      {
        type: ComponentType.BUTTON,
        style: ButtonStyle.DANGER,
        label: 'State "Blueberry"',
        custom_id: 'blueberry_example_test'
      },
      {
        type: ComponentType.BUTTON,
        style: ButtonStyle.PRIMARY,
        label: 'State "main"',
        custom_id: 'main',
        flags: [
          InteractionComponentFlag.ACCESS_MANAGE_MESSAGES
        ]
      },
      {
        type: ComponentType.LINE_BREAK
      },
      {
        type: ComponentType.BUTTON,
        style: ButtonStyle.PRIMARY,
        label: 'No state, just components',
        custom_id: 'cool_button',
        flags: [
          // everyone can click this button
          InteractionComponentFlag.ACCESS_EVERYONE
        ]
      },
      {
        type: ComponentType.BUTTON,
        style: ButtonStyle.SUCCESS,
        label: 'Last one with extra state changes',
        custom_id: 'another_cool_button'
      },
      {
        type: ComponentType.SELECT,
        options: [
          {
            value: 'abc',
            label: 'ABC!'
          },
          {
            value: '123',
            label: '> 123 <'
          }
        ],
        custom_id: 'cool_select'
      }
    ]
  })
}
