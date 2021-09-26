import { ButtonStyle, ComponentType, InteractionApplicationCommandCallbackData, GenericInteraction } from 'cordo'


export default function (i: GenericInteraction): InteractionApplicationCommandCallbackData {
  return {
    title: 'This switched now...',
    description: 'Click below to go to the main UI',
    components: [
      {
        type: ComponentType.BUTTON,
        style: ButtonStyle.SECONDARY,
        label: 'Back to main',
        custom_id: 'main'
      }
    ]
  }
}
