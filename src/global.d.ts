interface TelegramWebApp {
  initData?: string;
  ready: () => void;
  MainButton: {
    setText: (text: string) => void;
    show: () => void;
    hide: () => void;
    onClick: (callback: () => void) => void;
  };
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp;
  };
}
