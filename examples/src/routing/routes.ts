export const routes = {
  Home: "/",
  Theme: "/theme",
  IconCatalog: "/icon-catalog",
  Stepper: "/stepper",
  VerticalStepper: "/vertical-stepper",
  TableUtilities: "/table-utilities",
  Slider: "/slider",
  NotificationBar: "/notification-bar",
  PasswordInput: "/password-input",
} as const;

export type TRoute = typeof routes[keyof typeof routes];
