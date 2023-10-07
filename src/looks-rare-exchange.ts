import {
  Assign as AssignEvent,
  Transfer as TransferEvent,
  LRETransfer as LRETransferEvent,
  LREOffered as LREOfferedEvent,
  LREBidEntered as LREBidEnteredEvent,
  LREBidWithdrawn as LREBidWithdrawnEvent,
  LREBought as LREBoughtEvent,
  LRENoLongerForSale as LRENoLongerForSaleEvent
} from "../generated/LooksRareExchange/LooksRareExchange"
import {
  Assign,
  Transfer,
  LRETransfer,
  LREOffered,
  LREBidEntered,
  LREBidWithdrawn,
  LREBought,
  LRENoLongerForSale
} from "../generated/schema"

export function handleAssign(event: AssignEvent): void {
  let entity = new Assign(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.LREIndex = event.params.LREIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLRETransfer(event: LRETransferEvent): void {
  let entity = new LRETransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.LREIndex = event.params.LREIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLREOffered(event: LREOfferedEvent): void {
  let entity = new LREOffered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.LREIndex = event.params.LREIndex
  entity.minValue = event.params.minValue
  entity.toAddress = event.params.toAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLREBidEntered(event: LREBidEnteredEvent): void {
  let entity = new LREBidEntered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.LREIndex = event.params.LREIndex
  entity.value = event.params.value
  entity.fromAddress = event.params.fromAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLREBidWithdrawn(event: LREBidWithdrawnEvent): void {
  let entity = new LREBidWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.LREIndex = event.params.LREIndex
  entity.value = event.params.value
  entity.fromAddress = event.params.fromAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLREBought(event: LREBoughtEvent): void {
  let entity = new LREBought(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.LREIndex = event.params.LREIndex
  entity.value = event.params.value
  entity.fromAddress = event.params.fromAddress
  entity.toAddress = event.params.toAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLRENoLongerForSale(
  event: LRENoLongerForSaleEvent
): void {
  let entity = new LRENoLongerForSale(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.LREIndex = event.params.LREIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
