import React, { FC } from 'react';
import WelcomeSection from '../components/WelcomeSection'
import AboutMe from '../components/AboutMe';
import MyTechStack from '../components/MyTechStack'
import MyProjects from '../components/MyProjects';
import ClientReview from '../components/ClientReview'
import Services from '../components/Services';
import Footer from '../components/Footer';
import Industries from '../components/Industries';
import Contact from '../components/Contact';

type Props = {
  handleBackClick(className: string): void
}

const Main:FC<Props> = ({handleBackClick}) => {
  return (
    <>
      <main id='home' className='App' style={{ height: 'fit-content', transition: '1s ease-in-out' }}>
        <WelcomeSection handleBackClick={handleBackClick} />
        <AboutMe />
        {/* <hr style={{ margin: '3rem auto', backgroundColor: 'var(--yellow)' }} /> */}
        {/* <Contact /> */}
        <hr style={{ margin: '3rem auto', backgroundColor: 'var(--yellow)' }} />
        <MyTechStack />
        <hr style={{ margin: '3rem auto', backgroundColor: 'var(--yellow)' }} />
        <Industries />
        <hr style={{ margin: '3rem auto', backgroundColor: 'var(--yellow)' }} />
        <MyProjects />
        <hr style={{ margin: '3rem auto', backgroundColor: 'var(--yellow)' }} />
        <Services />
        {/* <hr style={{ margin: '3rem auto', backgroundColor: 'var(--yellow)' }} /> */}
        {/* <ClientReview /> */}
      </main>
      {Boolean(location.pathname !== '/meeting') && <Footer />}
    </>
  )
}

export default Main