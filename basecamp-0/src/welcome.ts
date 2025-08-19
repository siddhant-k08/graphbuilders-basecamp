import { WelcomeMessageChanged as WelcomeMessageChangedEvent } from "../generated/Welcome/Welcome"
import { WelcomeMessageChanged } from "../generated/schema"

export function handleWelcomeMessageChanged(
  event: WelcomeMessageChangedEvent
): void {
  let entity = new WelcomeMessageChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newMessage = event.params.newMessage

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
