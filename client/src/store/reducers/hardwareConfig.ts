import { HardwareConfigState, ReceiveHardwareClassesAction, ReceiveHardwareConfigAction, SaveHardwareConfigAction } from "../types";

const initialState: HardwareConfigState = { 
  hardwareClasses: [],
  config: "",
};

const hardwareConfigReducer = (
  state: HardwareConfigState = initialState,
  action: 
    | ReceiveHardwareClassesAction
    | ReceiveHardwareConfigAction
    | SaveHardwareConfigAction
): HardwareConfigState => {
  switch (action.type) {
    // todo more switch cases
    case "RECEIVE_HARDWARE_CLASSES": {
      return {
        ...state,
        hardwareClasses: action.classes,
      }
    }
    case "RECEIVE_HARDWARE_CONFIG": {
      return {
        ...state,
        config: action.config,
      }
    }
    default:
      // todo we're leaving it to the client to make sure if a save event is triggered early stuff isn't wiped. probably bad idea
      return state;
  }
};

export default hardwareConfigReducer;