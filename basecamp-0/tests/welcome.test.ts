import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import {} from "@graphprotocol/graph-ts"
import { WelcomeMessageChanged } from "../generated/schema"
import { WelcomeMessageChanged as WelcomeMessageChangedEvent } from "../generated/Welcome/Welcome"
import { handleWelcomeMessageChanged } from "../src/welcome"
import { createWelcomeMessageChangedEvent } from "./welcome-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#tests-structure

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let newMessage = "Example string value"
    let newWelcomeMessageChangedEvent =
      createWelcomeMessageChangedEvent(newMessage)
    handleWelcomeMessageChanged(newWelcomeMessageChangedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#write-a-unit-test

  test("WelcomeMessageChanged created and stored", () => {
    assert.entityCount("WelcomeMessageChanged", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "WelcomeMessageChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newMessage",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#asserts
  })
})
