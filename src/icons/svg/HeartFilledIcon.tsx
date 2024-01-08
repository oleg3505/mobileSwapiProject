import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const HeartFilledIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="#FE2A23"
      d="M2 9.137C2 14 6.02 16.591 8.962 18.911 10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636C7.5.825 2 4.274 2 9.137Z"
    />
  </Svg>
);
export default HeartFilledIcon;
