// QRCode 的部分类型定义,只定义了使用到的部分
// 插件地址:https://github.com/davidshimjs/qrcodejs


interface QRCodeConfig {
  color: {
    dark: string;
    light: string;
  };
  width: string | number;
}

declare module 'qrcode' {
  const QRCode: QRCode;
  export default QRCode;
}

interface QRCode {
  toCanvas(text: string, config: QRCodeConfig,
    cb: (error: any, canvas: HTMLCanvasElement) => void): any;
}
