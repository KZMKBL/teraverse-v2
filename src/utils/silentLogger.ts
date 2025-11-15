// path: src/utils/silentLogger.ts
import { CustomLogger } from 'gigaverse-engine'

export const silentLogger: CustomLogger = {
  info: () => {},
  warn: () => {},
  error: () => {},
  debug: () => {},
}
