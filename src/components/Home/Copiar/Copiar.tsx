import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Copiar.module.css';

interface Props {
  className?: string;
}
/* @figmaId 107:64 */
export const Copiar: FC<Props> = memo(function Copiar(props = {}) {
  return <div className={`${resets.clapyResets} ${classes.root}`}></div>;
});
