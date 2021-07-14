import { ButtonStyle, ComponentType, InteractionApplicationCommandCallbackData, GenericInteraction } from 'cordo'


export default function (i: GenericInteraction): InteractionApplicationCommandCallbackData {
  return {
    title: 'Not actually a Blueberry',
    description: 'This is the page for the strawberry.',
    components: [
      {
        type: ComponentType.BUTTON,
        style: ButtonStyle.SECONDARY,
        label: 'Back',
        custom_id: 'main'
      },
      {
        type: ComponentType.BUTTON,
        style: ButtonStyle.SECONDARY,
        label: 'Visit blueberry',
        custom_id: 'blueberry_example_test'
      }
    ]
  }
}
