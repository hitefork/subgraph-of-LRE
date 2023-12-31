import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { CancelAllOrders } from "../generated/schema"
import { CancelAllOrders as CancelAllOrdersEvent } from "../generated/LooksRareExchange/LooksRareExchange"
import { handleCancelAllOrders } from "../src/looks-rare-exchange"
import { createCancelAllOrdersEvent } from "./looks-rare-exchange-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let newMinNonce = BigInt.fromI32(234)
    let newCancelAllOrdersEvent = createCancelAllOrdersEvent(user, newMinNonce)
    handleCancelAllOrders(newCancelAllOrdersEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CancelAllOrders created and stored", () => {
    assert.entityCount("CancelAllOrders", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CancelAllOrders",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CancelAllOrders",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newMinNonce",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
