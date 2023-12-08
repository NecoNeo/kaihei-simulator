interface SceneNodeDesc {
  name: string;
  [key: string]: unknown;
}

// TODO this is only draft data
export const defaultScenes: SceneNodeDesc = {
  name: 'simulation',
  b: 1
};
