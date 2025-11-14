import React, { useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { Typography, Row, Col, Tag, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  CodeOutlined,
  GithubOutlined,
  LinkOutlined,
  RocketOutlined,
  CalendarOutlined,
  TeamOutlined,
  DownOutlined,
  UpOutlined,
  LockOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

const ProjectsContainer = styled.div`
  color: #00ff41;
`;

const SectionTitle = styled(Title)`
  color: #00ff41 !important;
  text-shadow: 0 0 15px #00ff41;
  font-family: 'Courier New', monospace;
  text-align: center;
  margin-bottom: 32px !important;
`;

const ProjectCard = styled(motion.div)`
  border: 2px solid #00ff41;
  border-radius: 12px;
  padding: 24px;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 0 30px rgba(0, 255, 65, 0.5);
    transform: translateY(-4px);
  }
`;

const ProjectImage = styled.div<{ noImage: boolean }>`
  width: 100%;
  height: 200px;
  border: 2px solid #00ff41;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
  position: relative;
  background: ${props =>
    props.noImage ? 'transparent' : 'rgba(255, 255, 255, 1)'};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-width: 90%;
    max-height: 90%;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  /* Fallback for when image fails to load */
  &::before {
    content: '👨🏻‍💻';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 48px;
    color: #00ff41;
    text-shadow: 0 0 15px #00ff41;
    z-index: -1;
  }
`;

const ProjectStatus = styled.div`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 5px #00ff41;
  border: 1px solid #00ff41;
  background: rgba(0, 255, 65, 0.1);
  color: #00ff41;
  margin-right: 12px;
`;

const ProjectTitle = styled.h3`
  color: #00ff41;
  margin: 0;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 8px #00ff41;
  font-size: 20px;
  display: inline-block;
`;

const ExpandableDescription = styled.div`
  margin: 0 0 16px 0;
  flex-grow: 1;
`;

const DescriptionText = styled.p<{ isExpanded: boolean; maxHeight: number }>`
  color: #00ff41;
  margin: 0 0 8px 0;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 5px #00ff41;
  line-height: 1.6;
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: ${props => (props.isExpanded ? 'none' : `${props.maxHeight}px`)};
`;

const ExpandButton = styled(Button)`
  color: #00ff41 !important;
  border: 1px solid #00ff41 !important;
  background: rgba(0, 0, 0, 0.8) !important;
  font-family: 'Courier New', monospace !important;
  text-shadow: 0 0 5px #00ff41 !important;
  padding: 4px 8px !important;
  height: auto !important;
  font-size: 12px !important;

  &:hover {
    color: #00ff41 !important;
    border-color: #00ff41 !important;
    background: rgba(0, 255, 65, 0.1) !important;
    box-shadow: 0 0 10px rgba(0, 255, 65, 0.3) !important;
  }
`;

const ProjectMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  color: #00ff41;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 5px #00ff41;
  font-size: 14px;
`;

const ProjectTags = styled.div`
  margin-bottom: 16px;
`;

const ProjectTag = styled(Tag)`
  margin: 4px;
  border: 1px solid #00ff41;
  background: rgba(0, 0, 0, 0.8);
  color: #00ff41;
  font-family: 'Courier New', monospace;
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;
`;

const LinkButton = styled(motion.a)`
  max-width: 100%;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: rgba(0, 255, 65, 0.1);
  color: #00ff41;
  text-decoration: none;
  border: 2px solid #00ff41;
  border-radius: 8px;
  font-weight: 500;
  font-family: 'Courier New', monospace;
  transition: all 0.3s ease;
  text-shadow: 0 0 5px #00ff41;
  word-break: break-all;

  &:hover {
    color: #00ff41;
    background: rgba(0, 255, 65, 0.2);
    box-shadow: 0 0 15px rgba(0, 255, 65, 0.5);
    transform: translateY(-2px);
  }
`;

const ProjectButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(0, 255, 65, 0.1);
  color: #00ff41;
  text-decoration: none;
  border: 2px solid #00ff41;
  border-radius: 6px;
  font-weight: 500;
  font-family: 'Courier New', monospace;
  transition: all 0.3s ease;
  text-shadow: 0 0 5px #00ff41;
  font-size: 14px;

  &:hover {
    color: #00ff41;
    background: rgba(0, 255, 65, 0.2);
    box-shadow: 0 0 15px rgba(0, 255, 65, 0.5);
    transform: translateY(-2px);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 48px 24px;
  color: #00ff41;
`;

const EmptyIcon = styled.div`
  font-size: 64px;
  color: #00ff41;
  margin-bottom: 24px;
  text-shadow: 0 0 20px #00ff41;
`;

const EmptyTitle = styled.h3`
  color: #00ff41;
  margin: 0 0 16px 0;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 10px #00ff41;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = useMemo(
    () => [
      {
        id: 1,
        title: t('projects.ligaMasters.title'),
        description: t('projects.ligaMasters.description'),
        image:
          'https://github.com/ArturMukaev/service-59.ru/blob/main/client/public/logo.png?raw=true',
        tags: [
          'React',
          'TypeScript',
          'Next.js',
          'Nest.js',
          'Telegram API',
          'MongoDB',
          'Docker',
          'FSD',
          'SEO',
          'SSR',
        ],
        date: `${t('months.october')} 2024 - ${t('months.february')} 2025`,
        status: t('projects.status.completed'),
        github: 'https://github.com/ArturMukaev/service-59.ru',
        demo: '#',
        type: t('projects.ligaMasters.team'),
        isPrivate: false,
      },
      {
        id: 2,
        title: t('projects.metal.title'),
        description: t('projects.metal.description'),
        image:
          'https://raw.githubusercontent.com/ArturMukaev/metal/421cb3357ec044ac33171c83c80c112c1673858b/public/metalworking.svg',
        tags: [
          'React',
          'TypeScript',
          'Tailwind CSS',
          'Framer Motion',
          'Next.js',
          'Telegram API',
          'Docker',
          'SEO',
          'SSR',
        ],
        date: `${t('months.november')} 2025`,
        status: t('projects.status.completed'),
        github: 'https://github.com/ArturMukaev/metal',
        demo: 'https://www.perm-metalloobrabotka.ru/',
        type: t('projects.metal.team'),
        isPrivate: false,
      },
      {
        id: 3,
        title: t('projects.giftHelper.title'),
        description: t('projects.giftHelper.description'),
        image:
          'https://sun9-21.userapi.com/s/v1/if2/oyCpX-Z6xPfdpxMYuN7c8GrjLblL5jd1Hzrnf1xnWYLxWDGiK1xN2qgysNWLqTVXIPse08ipn6Pg1s6z1l88C4Nz.jpg?quality=95&as=32x6,48x9,72x13,108x20,160x29,240x44,360x66,480x87,540x98,640x117,720x131,1080x197,1098x200&from=bu&cs=1098x0',
        tags: [
          'React',
          'TypeScript',
          'Next.js',
          'Nest.js',
          'MongoDB',
          'Docker',
          'FSD',
          'Node.js',
          'OpenAI API',
          'JWT',
          'I18n',
          'Ant Design',
        ],
        date: `${t('months.september')} 2023 - ${t('projects.status.notCompleted')}`,
        status: t('projects.status.frozen'),
        github: 'https://github.com/ArturMukaev/gift-helper',
        demo: '#',
        type: t('projects.giftHelper.team'),
        isPrivate: true,
      },
      {
        id: 4,
        title: t('projects.sexCards.title'),
        description: t('projects.sexCards.description'),
        tags: ['React', 'TypeScript'],
        date: `${t('months.july')} 2025 - ${t('projects.status.notCompleted')}`,
        status: t('projects.status.inProgress'),
        github: 'https://github.com/ArturMukaev/gift-helper',
        demo: '#',
        type: t('projects.sexCards.team'),
        isPrivate: true,
      },
      {
        id: 5,
        title: t('projects.footballTeam.title'),
        description: t('projects.footballTeam.description'),
        tags: ['React', 'JavaScript', 'HTML', 'CSS', 'SVG', 'Redux'],
        date: `${t('months.january')} 2021`,
        status: t('projects.status.completed'),
        github: 'https://github.com/ArturMukaev/Football_Team_Maker',
        demo: 'https://arturmukaev.github.io/Football_Team_Maker/',
        type: t('projects.footballTeam.team'),
        isPrivate: false,
      },
    ],
    [t]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const ProjectItem: React.FC<{ project: any; index: number }> = ({
    project,
    index,
  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [isExpanded, setIsExpanded] = useState(false);
    const [showExpandButton, setShowExpandButton] = useState(false);
    const descriptionRef = useRef<HTMLParagraphElement>(null);

    React.useEffect(() => {
      if (descriptionRef.current) {
        const lineHeight = parseInt(
          window.getComputedStyle(descriptionRef.current).lineHeight
        );
        const maxLines = 3;
        const maxHeight = lineHeight * maxLines;

        if (descriptionRef.current.scrollHeight > maxHeight) {
          setShowExpandButton(true);
        }
      }
    }, [project.description]);

    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };

    const getMaxHeight = () => {
      if (descriptionRef.current) {
        const lineHeight = parseInt(
          window.getComputedStyle(descriptionRef.current).lineHeight
        );
        return lineHeight * 3; // 3 lines
      }
      return 72; // fallback
    };

    return (
      <Col xs={24} lg={12} key={project.id}>
        <motion.div
          ref={ref}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: index * 0.1 }}
        >
          <ProjectCard whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <ProjectImage noImage={!project.image}>
              {project.image && <img src={project.image} alt={project.title} />}
            </ProjectImage>

            <ProjectHeader>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectStatus>{project.status}</ProjectStatus>
            </ProjectHeader>

            <ProjectMeta>
              <span>
                <CalendarOutlined /> {project.date}
              </span>
              <span>
                <TeamOutlined /> {project.type}
              </span>
            </ProjectMeta>

            <ExpandableDescription>
              <DescriptionText
                ref={descriptionRef}
                isExpanded={isExpanded}
                maxHeight={getMaxHeight()}
              >
                {project.description}
              </DescriptionText>
              {showExpandButton && (
                <ExpandButton
                  type="text"
                  onClick={toggleExpanded}
                  icon={isExpanded ? <UpOutlined /> : <DownOutlined />}
                >
                  {isExpanded
                    ? t('projects.actions.collapse')
                    : t('projects.actions.expand')}
                </ExpandButton>
              )}
            </ExpandableDescription>

            <ProjectTags>
              {project.tags.map((tag: string, idx: number) => (
                <ProjectTag key={idx}>{tag}</ProjectTag>
              ))}
            </ProjectTags>

            <ProjectActions>
              <ProjectButton
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
              >
                {project.isPrivate ? <LockOutlined /> : <GithubOutlined />}
                {project.isPrivate
                  ? t('projects.actions.privateCode')
                  : t('projects.actions.code')}
              </ProjectButton>
              {project.demo !== '#' && (
                <ProjectButton
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                >
                  <LinkOutlined />
                  {t('projects.actions.demo')}
                </ProjectButton>
              )}
            </ProjectActions>
          </ProjectCard>
        </motion.div>
      </Col>
    );
  };

  return (
    <ProjectsContainer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <SectionTitle level={2}>
            <RocketOutlined /> {t('projects.title')}
          </SectionTitle>
        </motion.div>

        {projects.length > 0 ? (
          <Row gutter={[24, 24]}>
            {projects.map((project, index) => (
              <ProjectItem key={project.id} project={project} index={index} />
            ))}
          </Row>
        ) : (
          <motion.div variants={itemVariants}>
            <EmptyState>
              <EmptyIcon>
                <CodeOutlined />
              </EmptyIcon>
              <EmptyTitle>{t('projects.noProjects.title')}</EmptyTitle>
            </EmptyState>
          </motion.div>
        )}

        <motion.div
          variants={itemVariants}
          style={{ textAlign: 'center', marginTop: '48px' }}
        >
          <LinkButton
            href="https://github.com/ArturMukaev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
          >
            <GithubOutlined /> {t('projects.onGithub')}
          </LinkButton>
        </motion.div>
      </motion.div>
    </ProjectsContainer>
  );
};

export default Projects;
