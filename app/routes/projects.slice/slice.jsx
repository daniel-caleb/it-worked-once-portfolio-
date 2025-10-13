import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';
import sliceAppLarge from '~/assets/slice-app-large.jpg';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/slice-app.jpg';
import sliceBackgroundBarLarge from '~/assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from '~/assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from '~/assets/slice-background-bar.jpg';
import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import slicenmap from '~/assets/nmap.png';
import slicelab from '~/assets/lab.png';
import sliceroot from '~/assets/root.png';
import slicefbi from '~/assets/fbi.jpg';
import slicemsftp from '~/assets/msftp.png';
import sliceSidebarAnnotationsLarge from '~/assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from '~/assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from '~/assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from '~/assets/slice-sidebar-layers.png';
import sliceSlidesLarge from '~/assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides from '~/assets/slice-slides.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = 'Metasploitable2 Exploitation';
const description =
  'Exploitation of Metasploitable2, a vulnerable virtual machine, to demonstrate penetration testing techniques.';
const roles = ['User Research', 'UX Design', 'Interface Design'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://blog-daniel-caleb.hashnode.dev/metasploitable2-exploitation-walkthrough"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>What is Metasploitable 2?</ProjectSectionHeading>
              <ProjectSectionText>
                It’s a deliberately vulnerable virtual machine designed to help you practice
                 your skills in a safe environment. Recently, I completed my first hands-on 
                 practice with Metasploitable 2, and today, I’m sharing my experience with FTP exploitation.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Step 1: Setting Up the Lab</ProjectSectionHeading>
              <ProjectSectionText>
                Before diving into exploitation, I set up my lab environment. 
                I used VirtualBox to run both Metasploitable 2 and Kali Linux. Kali Linux 
                is the go-to operating system for penetration testers, packed with tools for every step of the hacking process. 
                The crucial part was the network configuration (in which I’ll write another article about it) 
                and here are some of the reasons for my setup:
              </ProjectSectionText>
              <ProjectSectionText>
                Isolation: Using a host-only network isolates the VMs from your physical network, making it safer to practice penetration testing.
              </ProjectSectionText>
              <ProjectSectionText>
                Communication: The host-only network allows Kali Linux and Metasploitable 2 to communicate with each other without exposing them to the external network.
              </ProjectSectionText>
              <ProjectSectionText>
                Internet Access: NAT allows Kali Linux to access the internet for updates and additional tools, while Metasploitable 2 remains isolated.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${slicelab} 800w, ${slicelab} 1920w`}
              width={800}
              height={500}
              placeholder={slicelab}
              alt="The lab environment setup for penetration testing."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${slicenmap} 440w, ${sliceBackgroundBarLarge} 880w`}
                  width={440}
                  height={790}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Step 2: Scanning the Target</ProjectSectionHeading>
              <ProjectSectionText>
                As any ethical hacker knows, reconnaissance is the first step to 
                understanding a system’s vulnerabilities. To analyze Metasploitable 2, 
                I used Nmap -basically helps you map out the target’s network and identify 
                open ports and services.I run the following command to give the service scan 
                :nmap -sV Metasploitable_IP . This command scans for open ports and attempts to determine 
                the version of the services running on those ports.
              </ProjectSectionText>
              <ProjectSectionText>
                The scan revealed several open ports, but one that caught my attention was port 21, 
                which is used for FTP (File Transfer Protocol). FTP is notorious for its security weaknesses, 
                especially when it comes to anonymous access.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>FTP Exploitation (Port 21):</ProjectSectionHeading>
              <ProjectSectionText>
                FTP is a protocol used for transferring files between a client and a server.
                 Unfortunately, many FTP servers are misconfigured to allow anonymous access, 
                 meaning anyone can log in without a username or password. This is a significant security risk.
              </ProjectSectionText>
              <Image
              src={slicemsftp}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="SFTP Exploitation"
            />
              <ProjectSectionText>
                First I decided to go the manual way - without the Metasploit Console. 
                I was able to login with the default credentials was able to access the machine.
                I searched for an exploit related to ‘vsftpd ’ and found one: exploit/unix/ftp/vsftpd_234_backdoor. 
                I loaded the exploit and proceeded to set the target IP:set RHOSTS Metasploitable_IP and then ran ‘exploit’ or ‘run’. And just like that, I had a shell on the target machine. We’ve gained access to the system!
              </ProjectSectionText>
              <Image
              src={sliceroot}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="SFTP Exploitation"
            />
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Step 4: Post-Exploitation</ProjectSectionHeading>
              <ProjectSectionText>
                With access to the system, I could now explore the files and directories. 
                I found sensitive files, user credentials, and even a few scripts lying around. 
                This is where the real danger lies—once an attacker gains access, 
                they can do anything from stealing data to planting malware.
              </ProjectSectionText>
              <ProjectSectionText></ProjectSectionText>
              <ProjectSectionHeading>Conclusion</ProjectSectionHeading>
              <ProjectSectionText>
                FTP exploitation on Metasploitable 2 was an eye-opening experience. 
                It taught me how simple misconfigurations can lead to serious security breaches. 
                As I continue my journey into ethical hacking, I’m reminded of the importance of 
                staying vigilant and continuously learning.What’s next? In my next blog, 
                I’ll hopefully dive into a different service and show you how to exploit it. Stay tuned, 
                and as always, Remember to be Ethical!
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={slicefbi}
              width={500}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="SFTP Exploitation"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
