export type HardwareClassData = PortProvider | PortUser | ExternalDevice;

type Ports = 'i2c' | 'analog' | 'digital' | 'motor' | 'servo';

type PortProvider = {
  type: 'PROVIDER';
  name: string;
  ports: { [K in Ports]: number; }
  devices: {
    portNum: number;
    device: PortUser;
  }[]
}

type PortUser = {
  type: 'USER';
  port: Ports;
  name: string;
}

// external devices like cameras
type ExternalDevice = {
  type: 'EXTERNAL';
  name: string;
}

export type HardwareConfigState = {
  hardwareClasses: HardwareClassData[];
  config: string;
}

export type GetHardwareClassesAction = {
  type: 'GET_HARDWARE_CLASSES';
}

export type ReceiveHardwareClassesAction = {
  type: 'RECEIVE_HARDWARE_CLASSES';
  classes: HardwareClassData[];
}

export type GetHardwareConfigAction = {
  type: 'GET_HARDWARE_CONFIG';
}

export type ReceiveHardwareConfigAction = {
  type: 'RECEIVE_HARDWARE_CONFIG';
  config: string; // todo?
}

export type SaveHardwareConfigAction = {
  type: 'SAVE_HARDWARE_CONFIG';
  config: string; // todo?
}