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

interface IFeatureCard {
  title: string;
  subtitle: ISubTitle;
  description: string;
  moreInfo?: string;
  button?: ICardBtn;
  image: IImg;
}

interface ICardBtn {
  text?: string;
  color?: string;
  path?: string;
  exist?: boolean;
}

interface IImg {
  path: string;
  backgroundColor: string;
}

interface ISubTitle {
  color: string;
  text: string;
}
