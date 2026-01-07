import React, { useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Typography, Row, Col, Card, Tag, Avatar } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  UserOutlined,
  CalendarOutlined,
  BookOutlined,
  CodeOutlined,
  RocketOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

const CVContainer = styled.div`
  color: #00ff41;
`;

const Section = styled(motion.div)`
  margin-bottom: 48px;
`;

const SectionTitle = styled(Title)`
  color: #00ff41 !important;
  text-shadow: 0 0 15px #00ff41;
  font-family: 'Courier New', monospace;
  border-bottom: 2px solid #00ff41;
  padding-bottom: 8px;
  margin-bottom: 24px !important;
`;

const InfoCard = styled(Card)`
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #00ff41;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
  margin-bottom: 16px;

  .ant-card-body {
    background: transparent;
  }

  &:hover {
    box-shadow: 0 0 30px rgba(0, 255, 65, 0.5);
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
`;

const ExperienceCard = styled(InfoCard)`
  .ant-card-head {
    background: rgba(0, 255, 65, 0.1);
    border-bottom: 1px solid #00ff41;
  }

  .ant-card-head-title {
    color: #00ff41;
    font-weight: bold;
    font-family: 'Courier New', monospace;
  }
`;

const SkillTag = styled(Tag)`
  margin: 4px;
  border: 1px solid #00ff41;
  background: rgba(0, 0, 0, 0.8);
  color: #00ff41;
  font-family: 'Courier New', monospace;
`;

const PersonalInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AvatarStyled = styled(Avatar)`
  width: 80px !important;
  height: 80px !important;
  border: 3px solid #00ff41;
  box-shadow: 0 0 15px rgba(0, 255, 65, 0.5);
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    color: #00ff41;
    margin-bottom: 8px;
    font-family: 'Courier New', monospace;
    text-shadow: 0 0 5px #00ff41;

    strong {
      color: #00ff41;
      text-shadow: 0 0 8px #00ff41;
    }
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CV: React.FC = () => {
  const { t } = useTranslation();

  const workExperience = useMemo(
    () => [
      {
        company: t('cv.experience.greenData.title'),
        position: t('cv.experience.greenData.position'),
        period: t('cv.experience.greenData.period'),
        stack: 'React, Mobx, TypeScript, Less, Jest, JQuery, Next.JS',
        description: t('cv.experience.greenData.description'),
        achievements: [
          t(`cv.experience.greenData.achievements.${0}`),
          t(`cv.experience.greenData.achievements.${1}`),
          t(`cv.experience.greenData.achievements.${2}`),
          t(`cv.experience.greenData.achievements.${3}`),
          t(`cv.experience.greenData.achievements.${4}`),
          t(`cv.experience.greenData.achievements.${5}`),
          t(`cv.experience.greenData.achievements.${6}`),
          t(`cv.experience.greenData.achievements.${7}`),
          t(`cv.experience.greenData.achievements.${8}`),
          t(`cv.experience.greenData.achievements.${9}`),
          t(`cv.experience.greenData.achievements.${10}`),
        ],
      },
      {
        company: t('cv.experience.fsght.title'),
        position: t('cv.experience.fsght.position'),
        period: t('cv.experience.fsght.period'),
        stack: 'React, Redux, TypeScript, Konva.JS, Styled Components',
        description: t('cv.experience.fsght.description'),
        achievements: [
          t(`cv.experience.fsght.achievements.${0}`),
          t(`cv.experience.fsght.achievements.${1}`),
          t(`cv.experience.fsght.achievements.${2}`),
          t(`cv.experience.fsght.achievements.${3}`),
          t(`cv.experience.fsght.achievements.${4}`),
          t(`cv.experience.fsght.achievements.${5}`),
        ],
      },
      {
        company: t('cv.experience.parma.title'),
        position: t('cv.experience.parma.position'),
        period: t('cv.experience.parma.period'),
        stack: 'React, Redux, Bootstrap, Data Parsers, LinkedIn',
        description: t('cv.experience.parma.description'),
        achievements: [
          t(`cv.experience.parma.achievements.${0}`),
          t(`cv.experience.parma.achievements.${1}`),
        ],
      },
    ],
    [t]
  );

  const education = useMemo(
    () => [
      {
        institution: t('cv.ed.bachelor.institution'),
        degree: t('cv.ed.bachelor.title'),
        period: t('cv.ed.bachelor.period'),
        details: t('cv.ed.bachelor.description'),
      },
      {
        institution: t('cv.ed.master.institution'),
        degree: t('cv.ed.master.title'),
        period: t('cv.ed.master.period'),
        details: t('cv.ed.master.description'),
      },
    ],
    [t]
  );

  const skills = useMemo(
    () => ({
      frontend: [
        'JavaScript',
        'TypeScript',
        'React.js',
        'MobX',
        'Next.js',
        'Redux (Toolkit, RTK, RTK Query)',
        'Micro Frontends',
        'Module Federation',
        'Jest, RTL, Cypress',
        'Less, SCSS, Sass',
        'styled-components',
        'Pixel Perfect',
        'WebRTC',
        'WebSockets',
        'Ant Design',
        'Bootstrap, Tailwind',
        'KonvaJS',
        'Chart libraries',
        'JQuery',
        'OSM Map libraries',
      ],
      backend: [
        'Node.js',
        'Express.js',
        'Nest.js',
        'MongoDB',
        'RESTful APIs',
        'WebSockets',
        'Telegram API',
        'SQL databases',
        'Java',
      ],
      devops: ['Git', 'Docker', 'Webpack', 'Babel', 'CI/CD pipelines', 'Kubernetes'],
      architecture: [
        'Feature Sliced Design',
        'SEO Optimization',
        'AI-assisted development',
        'Microservices',
      ],
      softSkills: [
        'Organization of team work',
        'Critical thinking',
        'Analytical approach',
        'Responsibility for written code',
        'Experience of mentoring',
        'SMART goal setting',
      ],
    }),
    []
  );

  return (
    <CVContainer>
      <Section variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants}>
          <SectionTitle level={2}>
            <UserOutlined /> {t('cv.personalInformation')}
          </SectionTitle>
        </motion.div>

        <motion.div variants={itemVariants}>
          <InfoCard>
            <PersonalInfo>
              <AvatarStyled size={80} icon={<UserOutlined />} />
              <InfoList>
                <li>
                  <strong>{t('cv.personalInfo.name')}:</strong>{' '}
                  {t('cv.personalInfo.nameValue')}
                </li>
                <li>
                  <strong>{t('cv.personalInfo.dateOfBirth')}:</strong>{' '}
                  24.05.2001
                </li>
                <li>
                  <strong>{t('cv.personalInfo.citizenship')}:</strong>{' '}
                  {t('cv.personalInfo.citizenshipValue')}
                </li>
                <li>
                  <strong>{t('cv.personalInfo.location')}:</strong>{' '}
                  {t('cv.personalInfo.locationValue')}
                </li>
                <li>
                  <strong>{t('cv.personalInfo.englishLevel')}:</strong>{' '}
                  Advanced(C1, IELTS 7.5)
                </li>
              </InfoList>
            </PersonalInfo>
          </InfoCard>
        </motion.div>
      </Section>

      <Section variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants}>
          <SectionTitle level={2}>
            <RocketOutlined /> {t('cv.workExperience')}
          </SectionTitle>
        </motion.div>

        {workExperience.map((job, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ExperienceCard
              title={
                <div>
                  <div style={{ color: '#00ff41', fontWeight: 'bold' }}>
                    {job.company}
                  </div>
                  <div style={{ color: '#00ff41', fontSize: '14px', wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'normal', lineHeight: '1.2' }}>
                    {job.position}
                  </div>
                </div>
              }
            >
              <div style={{ marginBottom: '16px' }}>
                <Text style={{ color: '#00ff41' }}>
                  <CalendarOutlined /> {job.period}
                </Text>
                <br />
                <Text style={{ color: '#00ff41' }}>
                  <CodeOutlined /> <strong>{t('common.stack')}:</strong>{' '}
                  {job.stack}
                </Text>
                <br />
                <Text style={{ color: '#00ff41' }}>
                  <InfoCircleOutlined /> {job.description}
                </Text>
              </div>
              <Text style={{ color: '#00ff41' }}>
                <CheckCircleOutlined /> <strong>{t('cv.achievements')}</strong>
              </Text>
              <ul style={{ color: '#00ff41', paddingLeft: '20px' }}>
                {job.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    style={{
                      marginBottom: '8px',
                      fontFamily: 'Courier New, monospace',
                    }}
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </ExperienceCard>
          </motion.div>
        ))}
      </Section>

      <Section variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants}>
          <SectionTitle level={2}>
            <BookOutlined /> {t('cv.education')}
          </SectionTitle>
        </motion.div>

        {education.map((edu, index) => (
          <motion.div key={index} variants={itemVariants}>
            <InfoCard>
              <Title
                level={4}
                style={{ color: '#00ff41', marginBottom: '8px' }}
              >
                {edu.institution}
              </Title>
              <Text
                style={{
                  color: '#00ff41',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                <strong>{edu.degree}</strong>
              </Text>
              <Text
                style={{
                  color: '#00ff41',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                <CalendarOutlined /> {edu.period}
              </Text>
              <Text
                style={{
                  color: '#00ff41',
                  fontFamily: 'Courier New, monospace',
                }}
              >
                {edu.details}
              </Text>
            </InfoCard>
          </motion.div>
        ))}
      </Section>

      <Section variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants}>
          <SectionTitle level={2}>
            <CodeOutlined /> {t('cv.skillsTechnologies')}
          </SectionTitle>
        </motion.div>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <motion.div variants={itemVariants}>
              <InfoCard
                title={
                  <span style={{ color: '#00ff41' }}>
                    {t('cv.skills.frontend')}
                  </span>
                }
              >
                {skills.frontend.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </InfoCard>
            </motion.div>
          </Col>

          <Col xs={24} md={12}>
            <motion.div variants={itemVariants}>
              <InfoCard
                title={
                  <span style={{ color: '#00ff41' }}>
                    {t('cv.skills.backend')}
                  </span>
                }
              >
                {skills.backend.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </InfoCard>
            </motion.div>
          </Col>

          <Col xs={24} md={12}>
            <motion.div variants={itemVariants}>
              <InfoCard
                title={
                  <span style={{ color: '#00ff41' }}>
                    {t('cv.skills.devops')}
                  </span>
                }
              >
                {skills.devops.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </InfoCard>
            </motion.div>
          </Col>

          <Col xs={24} md={12}>
            <motion.div variants={itemVariants}>
              <InfoCard
                title={
                  <span style={{ color: '#00ff41' }}>
                    {t('cv.skills.architecture')}
                  </span>
                }
              >
                {skills.architecture.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </InfoCard>
            </motion.div>
          </Col>

          <Col xs={24}>
            <motion.div variants={itemVariants}>
              <InfoCard
                title={
                  <span style={{ color: '#00ff41' }}>
                    {t('cv.skills.softSkills')}
                  </span>
                }
              >
                {skills.softSkills.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </InfoCard>
            </motion.div>
          </Col>
        </Row>
      </Section>
    </CVContainer>
  );
};

export default CV;
