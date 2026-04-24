import { FourteenOne } from "./fourteenone"
import { NineBall } from "./nineball"
import { EightBall } from "./eightball"
import { Rules } from "./rules"
import { Snooker } from "./snooker"
import { ThreeCushion } from "./threecushion"
import { FourGoo } from "./fourgoo"

export class RuleFactory {
  static create(ruletype, container): Rules {
    switch (ruletype) {
      case "fourgoo":
        return new FourGoo(container)
      case "threecushion":
        return new ThreeCushion(container)
      case "fourteenone":
        return new FourteenOne(container)
      case "eightball":
        return new EightBall(container)
      case "snooker":
        return new Snooker(container)
      default:
        return new NineBall(container)
    }
  }
}
