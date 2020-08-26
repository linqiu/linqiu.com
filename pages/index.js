import Head from 'next/head'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import DescriptionIcon from '@material-ui/icons/Description'

import Grid from '@material-ui/core/Grid'

export default function Home() {
  const expInYears = (new Date()).getFullYear() - 2010
  return (
    <div>
      <Head>
        <title>Lin Qiu's Personal Site</title>
        <meta property="og:title" content="Lin Qiu's Personal Site" key="title" />
        <meta property="description" content={`Lin Qiu is a software engineer with over ${expInYears} years of experience in the DC startup scene.`} />
      </Head>

      <Grid container spacing={2} direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <a href="http://linqiu.com"><img src="/me.png" /></a>
        </Grid>
        <Grid item xs={12} container direction="column" justify="center" alignItems="center">
          I am a software engineer with over {expInYears} years of experience in the startup scene. I taught David Hasselhoff Chinese once.
        </Grid>

        <Grid item xs={12} container direction="row" justify="center" alignItems="center">
          <a href="https://github.com/linqiu" title="Github"><GitHubIcon fontSize="large" /></a>
          <a href="https://twitter.com/linqiu" title="Twitter"><TwitterIcon fontSize="large" /></a>
          <a href="https://docs.google.com/document/d/e/2PACX-1vRr-QzAgzWDgSkecIPtmoFdUry5sjQTsUgZQRnvoDHPJUk4K9S0Vm3Xci3CMHTmfj4mwa5zhtQpAkd5/pub" title="Resume">
            <DescriptionIcon fontSize="large" />
          </a>
          <a href="mailto:theonlylinqiu@gmail.com" title="Email"><EmailIcon fontSize="large" /></a>
          <a href="https://www.linkedin.com/in/theonlylinqiu" title="LinkedIn"><LinkedInIcon fontSize="large" /></a>
        </Grid>
      </Grid>
    </div>
  )
}
