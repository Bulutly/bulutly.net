interface IPriceCard {
  title: string;
  subtitle: string;
  alertMsg: IAlertMsg;
  price: IPrice;
  serviceList?: IServiceList[];
  extraInfo?: ITitleText[];
  ctaBtn: IBtn;
}

interface IAlertMsg {
  isSpan: boolean;
  text: string;
}

interface IPrice {
  currency: string;
  type: string;
}

interface IServiceList {
  text: string;
  value: string;
  isUnavailable: boolean;
}

interface ITitleText {
  title: string;
  text: string;
}

interface IBtn {
  text: string;
  variant?: string;
}
