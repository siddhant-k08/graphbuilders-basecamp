import { newMockEvent } from "matchstick-as"
import { ethereum } from "@graphprotocol/graph-ts"
import { WelcomeMessageChanged } from "../generated/Welcome/Welcome"

export function createWelcomeMessageChangedEvent(
  newMessage: string
): WelcomeMessageChanged {
  let welcomeMessageChangedEvent =
    changetype<WelcomeMessageChanged>(newMockEvent())

  welcomeMessageChangedEvent.parameters = new Array()

  welcomeMessageChangedEvent.parameters.push(
    new ethereum.EventParam("newMessage", ethereum.Value.fromString(newMessage))
  )

  return welcomeMessageChangedEvent
}
