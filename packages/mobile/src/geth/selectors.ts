import { InitializationState } from 'src/geth/reducer'
import { RootState } from 'src/redux/reducers'

export const isGethConnectedSelector = (state: RootState) =>
  state.geth.initialized === InitializationState.INITIALIZED && state.geth.connected
export const promptFornoIfNeededSelector = (state: RootState) => state.geth.promptFornoIfNeeded
