import { Rules } from "./rules"
import { FourGoo } from "./fourgoo"

export class RuleFactory {
  static create(_ruletype, container): Rules {
    return new FourGoo(container)
  }
}
