import React, { useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Typography, Row, Col, Card, Tag, Avatar } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  UserOutlined,
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  CodeOutlined,
  RocketOutlined,
  FileTextOutlined,
  LinkOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const HomeContainer = styled.div`
  text-align: center;
  color: #00ff41;
`;

const ProfileSection = styled(motion.div)`
  margin-bottom: 48px;
`;

const ProfileAvatar = styled(Avatar)`
  width: 120px !important;
  height: 120px !important;
  margin-bottom: 24px;
  border: 4px solid #00ff41;
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.5);
`;

const Name = styled(Title)`
  margin-bottom: 8px !important;
  color: #00ff41 !important;
  text-shadow: 0 0 15px #00ff41;
  font-family: 'Courier New', monospace;
`;

const Role = styled(Paragraph)`
  font-size: 18px;
  color: #00ff41;
  margin-bottom: 24px !important;
  text-shadow: 0 0 8px #00ff41;
  font-family: 'Courier New', monospace;
`;

const Bio = styled(Paragraph)`
  font-size: 16px;
  line-height: 1.6;
  color: #00ff41;
  max-width: 600px;
  margin: 0 auto 32px auto !important;
  text-shadow: 0 0 5px #00ff41;
`;

const SiteDescription = styled(motion.div)`
  margin-bottom: 48px;
  padding: 24px;
  border: 2px solid #00ff41;
  border-radius: 12px;
  background: rgba(0, 255, 65, 0.05);
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.2);
`;

const DescriptionTitle = styled(Title)`
  color: #00ff41 !important;
  text-shadow: 0 0 10px #00ff41;
  font-family: 'Courier New', monospace;
`;

const DescriptionText = styled(Paragraph)`
  color: #00ff41;
  font-size: 16px;
  line-height: 1.6;
  text-shadow: 0 0 5px #00ff41;
`;

const SkillsSection = styled(motion.div)`
  margin-bottom: 48px;
`;

const SkillsGrid = styled(Row)`
  margin-top: 24px;
  
  @media (max-width: 768px) {
    margin-top: 16px;
  }
  
  @media (max-width: 480px) {
    margin-top: 12px;
  }
`;

const SkillCard = styled(Card)`
  margin-bottom: 16px;
  border-radius: 12px;
  border: 2px solid #00ff41;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
  transition: all 0.3s ease;
  min-height: 146px;
  align-items: center;
  display: grid;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 25px rgba(0, 255, 65, 0.5);
  }

  .ant-card-body {
    background: transparent;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100px;
  }

  @media (max-width: 768px) {
    min-height: 120px;
    
    .ant-card-body {
      padding: 12px;
      min-height: 80px;
    }
  }

  @media (max-width: 480px) {
    min-height: 100px;
    
    .ant-card-body {
      padding: 8px;
      min-height: 60px;
    }
  }
`;

const ContactSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: rgba(0, 255, 65, 0.1);
  color: #00ff41;
  text-decoration: none;
  border: 2px solid #00ff41;
  border-radius: 8px;
  font-weight: 500;
  font-family: 'Courier New', monospace;
  transition: all 0.3s ease;
  text-shadow: 0 0 5px #00ff41;

  &:hover {
    color: #00ff41;
    background: rgba(0, 255, 65, 0.2);
    box-shadow: 0 0 15px rgba(0, 255, 65, 0.5);
    transform: translateY(-2px);
  }
`;

const SectionCard = styled(motion.div)`
  border: 2px solid #00ff41;
  border-radius: 12px;
  padding: 20px;
  margin: 16px 0;
  background: rgba(0, 255, 65, 0.05);
  box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Home: React.FC = () => {
  const { t } = useTranslation();

  const skills = useMemo(
    () => [
      { name: t('home.skills.bachelor'), color: '#61dafb' },
      { name: t('home.skills.frontend'), color: '#61dafb' },
      { name: t('home.skills.backend'), color: '#3178c6' },
      { name: t('home.skills.tennis'), color: '#000000' },
      { name: t('home.skills.master'), color: '#3178c6' },
      { name: t('home.skills.trading'), color: '#000000' },
      { name: t('home.skills.english'), color: '#339933' },
      { name: t('home.skills.entrepreneurship'), color: '#764abc' },
      { name: t('home.skills.camp'), color: '#764abc' },
    ],
    [t]
  );

  const sections = useMemo(
    () => [
      {
        icon: <UserOutlined />,
        title: t('home.sections.home.title'),
        description: t('home.sections.home.description'),
      },
      {
        icon: <FileTextOutlined />,
        title: t('home.sections.cv.title'),
        description: t('home.sections.cv.description'),
      },
      {
        icon: <LinkOutlined />,
        title: t('home.sections.links.title'),
        description: t('home.sections.links.description'),
      },
      {
        icon: <CodeOutlined />,
        title: t('home.sections.projects.title'),
        description: t('home.sections.projects.description'),
      },
    ],
    [t]
  );

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

  return (
    <HomeContainer>
      <ProfileSection
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <ProfileAvatar size={120} icon={<UserOutlined />} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Name level={1}>{t('home.name')}</Name>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Role>{t('home.role')}</Role>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Bio>{t('home.bio')}</Bio>
        </motion.div>
      </ProfileSection>

      <SiteDescription
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <DescriptionTitle level={2}>
            <RocketOutlined /> {t('home.welcomeTitle')}
          </DescriptionTitle>
        </motion.div>

        <motion.div variants={itemVariants}>
          <DescriptionText>{t('home.welcomeDescription')}</DescriptionText>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
            {sections.map(section => (
              <Col xs={24} sm={12} md={8} lg={6} key={section.title}>
                <SectionCard
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '8px',
                    }}
                  >
                    {section.icon}
                    <strong style={{ color: '#00ff41' }}>
                      {section.title}
                    </strong>
                  </div>
                  <p style={{ color: '#00ff41', margin: 0, fontSize: '14px' }}>
                    {section.description}
                  </p>
                </SectionCard>
              </Col>
            ))}
          </Row>
        </motion.div>
      </SiteDescription>

      <SkillsSection
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Title
            level={2}
            style={{ color: '#00ff41', textShadow: '0 0 10px #00ff41' }}
          >
            {t('home.facts')}
          </Title>
        </motion.div>

        <SkillsGrid gutter={[16, 16]}>
          {skills.map(skill => (
            <Col xs={24} sm={12} md={8} key={skill.name}>
              <motion.div variants={itemVariants}>
                <SkillCard>
                  <Tag
                    color={skill.color}
                    style={{
                      fontSize: '14px',
                      padding: '8px 12px',
                      border: '1px solid #00ff41',
                      borderRadius: '8px',
                      background: 'rgba(0, 0, 0, 0.8)',
                      textWrap: 'wrap',
                      maxWidth: '100%',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 'auto',
                      minHeight: '40px',
                      width: '100%',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal',
                      lineHeight: '1.2',
                    }}
                  >
                    {skill.name}
                  </Tag>
                </SkillCard>
              </motion.div>
            </Col>
          ))}
        </SkillsGrid>
      </SkillsSection>

      <ContactSection
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <ContactButton
            href="mailto:artur.mukaev@mail.ru"
            whileHover={{ scale: 1.05 }}
          >
            <MailOutlined />
            {t('home.contactMe')}
          </ContactButton>
        </motion.div>

        <motion.div variants={itemVariants}>
          <ContactButton
            href="https://github.com/ArturMukaev"
            target="_blank"
            whileHover={{ scale: 1.05 }}
          >
            <GithubOutlined />
            {t('common.github')}
          </ContactButton>
        </motion.div>

        <motion.div variants={itemVariants}>
          <ContactButton
            href="https://linkedin.com/in/artur-mukaev"
            target="_blank"
            whileHover={{ scale: 1.05 }}
          >
            <LinkedinOutlined />
            {t('common.linkedin')}
          </ContactButton>
        </motion.div>
      </ContactSection>
    </HomeContainer>
  );
};

export default Home;
