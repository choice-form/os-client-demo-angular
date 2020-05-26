declare module 'custom-lang' {
  const customLang: ICustomLang;
  export default customLang;
}

interface ICustomLang {
  en_us: string;
  zh_cn: string;
}