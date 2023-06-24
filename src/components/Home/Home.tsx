import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Copiar } from './Copiar/Copiar';
import classes from './Home.module.css';
import { LogoIcon } from './LogoIcon';
import { LogoIcon2 } from './LogoIcon2';
import { LogoIcon3 } from './LogoIcon3';

interface Props {
  className?: string;
}
/* @figmaId 1:5 */
export const Home: FC<Props> = memo(function Home(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle5}></div>
      <div className={classes.gradient}></div>
      <div className={classes.gradient2}></div>
      <div className={classes.gradient3}></div>
      <div className={classes.twitter}>
        <div className={classes.text}>
          <div className={classes.twitter2}>Twitter</div>
          <div className={classes.Fantum}>@Fantum</div>
        </div>
        <div className={classes.logo}>
          <LogoIcon className={classes.icon} />
        </div>
      </div>
      <div className={classes.discord}>
        <div className={classes.text2}>
          <div className={classes.discord2}>Discord</div>
          <div className={classes.discordGgFantum}>discord.gg/Fantum</div>
        </div>
        <div className={classes.logo2}>
          <LogoIcon2 className={classes.icon2} />
        </div>
      </div>
      <div className={classes.youTube}>
        <div className={classes.text3}>
          <div className={classes.youTube2}>YouTube</div>
          <div className={classes.Fantum2}>@Fantum</div>
        </div>
        <div className={classes.logo3}>
          <LogoIcon3 className={classes.icon3} />
        </div>
      </div>
      <div className={classes._2023TodosOsDireitosReservados}>
        <ul className={classes.list}>
          <li>
            <div className={classes.textBlock}>2023 - Todos os direitos reservados</div>
          </li>
        </ul>
      </div>
      <div className={classes.notAffiliatedWithMojangAB}>Not affiliated with Mojang, AB.</div>
      <div className={classes.rectangle4}></div>
      <Copiar />
      <div className={classes.eNTRAR}>ENTRAR</div>
      <div className={classes.fORUM}>FORUM</div>
      <div className={classes.loja}>loja</div>
      <div className={classes.wIKI}>WIKI</div>
      <div className={classes.jOGAR}>JOGAR</div>
    </div>
  );
});
