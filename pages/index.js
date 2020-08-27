import styles from '../styles/Home.module.css'

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
        <meta property="og:title" content={`Software Engineer with over ${expInYears} years of Experience in startups`} key="title" />
        <meta name="description" property="description" content={`Lin Qiu is a software engineer with over ${expInYears} years of experience in the DC startup scene.`} />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Engineer, Ruby, Typescript, HTML, CSS, JavaScript" />
        <meta name="author" content="Lin Qiu" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Grid container spacing={2} direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <a href="https://www.linqiu.com"><img src="/me.jpg" alt="this is my face"/></a>
        </Grid>
        <Grid item xs={12} container direction="column" justify="center" alignItems="center">
          <h1>About me</h1>
          <Grid item xs={12} sm={6}>
            <div className={styles.description}>I am a self motivated full stack engineer with over {expInYears} years of experience in the DC startup scene. I am a serial startup entrepreneur and practice the philosophy of lean startup. I’m constantly involved in the tech community. I go to startup weekend at least once a year and build a demo-able product at the end (and it usually wins something). Don’t let my film background fool you, I put the tenets of narrative montage and user experience into every app I develop. Ask me about how I taught David Hasselhoff Chinese :)</div>
          </Grid>
        </Grid>

        <Grid item xs={12} container direction="row" justify="center" alignItems="center">
          <a href="https://github.com/linqiu" title="Github"><GitHubIcon fontSize="large" className={styles.links} /></a>
          <a href="https://twitter.com/linqiu" title="Twitter"><TwitterIcon fontSize="large" className={styles.links} /></a>
          <a href="https://docs.google.com/document/d/e/2PACX-1vRr-QzAgzWDgSkecIPtmoFdUry5sjQTsUgZQRnvoDHPJUk4K9S0Vm3Xci3CMHTmfj4mwa5zhtQpAkd5/pub" title="Resume">
            <DescriptionIcon fontSize="large" className={styles.links} />
          </a>
          <a href="mailto:theonlylinqiu@gmail.com" title="Email"><EmailIcon fontSize="large" className={styles.links} /></a>
          <a href="https://www.linkedin.com/in/theonlylinqiu" title="LinkedIn"><LinkedInIcon fontSize="large" className={styles.links} /></a>
        </Grid>
      </Grid>
    </div>
  )
}
