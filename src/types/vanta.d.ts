declare module "vanta/dist/vanta.clouds.min" {
  type VantaEffectOptions = {
    el: HTMLElement;
    THREE: unknown;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    skyColor?: number;
    cloudColor?: number;
    cloudShadowColor?: number;
    sunColor?: number;
    sunGlareColor?: number;
    sunlightColor?: number;
    speed?: number;
  };

  type VantaEffectInstance = {
    destroy: () => void;
  };

  const CLOUDS: (options: VantaEffectOptions) => VantaEffectInstance;
  export default CLOUDS;
}
