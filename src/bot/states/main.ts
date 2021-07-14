import { ButtonStyle, ComponentType, InteractionApplicationCommandCallbackData, GenericInteraction } from 'cordo'


export default function (i: GenericInteraction, data: any[]): InteractionApplicationCommandCallbackData {
  return {
    title: 'Go to blueberry',
    description: `Click below to go to blueberry. Or strawberry.\nUser: ${i.user.username}\nData: ${data}`,
    components: [
      {
        type: ComponentType.BUTTON,
        style: ButtonStyle.SECONDARY,
        label: 'Blue',
        emoji: { id: '651455136807518208' },
        custom_id: 'blueberry_example_test'
      },
      {
        type: ComponentType.BUTTON,
        style: ButtonStyle.SECONDARY,
        label: 'Straw',
        emoji: { name: '🔥' },
        custom_id: 'blueberry_example_two'
      }
    ]
  }
}
