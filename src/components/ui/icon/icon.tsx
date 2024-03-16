import IcoMoon, { IconProps } from 'react-icomoon';

import iconSet from 'src/assets/selection.json';

const Icon = ({ width = 18, height = 18, ...props }: IconProps) => (
  <IcoMoon iconSet={iconSet} {...props} width={width} height={height} />
);

export default Icon;
