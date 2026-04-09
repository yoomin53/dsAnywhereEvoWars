export {};

declare global {
  interface WebMelonFirmwareSettings {
    nickname?: string;
    message?: string;
    language?: number;
    color?: number;
    birthday?: { month: number; day: number };
    [key: string]: any;
  }

  interface Window {
    WebMelon: any;
    __startEmulating?: () => void;
  }
}
