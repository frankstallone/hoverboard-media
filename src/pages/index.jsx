import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.png'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8 max-w-md`};
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>Hoverboard Media</BigTitle>
        <Subtitle>Providing the benefits of enterprise grade WordPress hosting on small business budgets.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Enterprise Grade WordPress Hosting</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="$840.00 per year"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            <p>One year of WordPress hosting, performance, security and maintenance.</p>
            <ul>
              <li>25k monthly views / 125K pages served</li>
              <li>Google Cloud Containers</li>
              <li>SSL/HTTPS Certificate</li>
              <li>3 fully functional environments: development, testing and live</li>
              <li>Global CDN</li>
              <li>High performance edge caching with Varnish</li>
              <li>20GB SSD storage</li>
              <li>Daily automated backups</li>
              <li>Git code version control and SFTP access</li>
              <li>Advanced Page Cache</li>
              <li>Load balancing</li>
              <li>4 PHP workers</li>
              <li>Application memory limit 256MB</li>
            </ul>
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Frank Stallone" />
          <AboutSub>
            Howdy! I am Frank Stallone and I have been working with WordPress for 10 years. Over that time I have refined my strategy for design, development, performance, security, maintenance, team collaboration and more.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
           As a small business owner I believe your small business deserves the same advantages as large enterprise applications. This premium WordPress hosting offering is it. Let me handle your WordPress hosting, so you can work on your business. Let's migrate your site today.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Ready to get started?</Title>
          <ContactText>
            Get in touch <a href="mailto:iamfrankstallone@gmail.com">by email</a> or on{' '}
            <a href="https://twitter.com/frankstallone">Twitter</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by <a href="https://iamfrankstallone.com">Frank Stallone</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
