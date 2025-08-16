import React, { useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Typography, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MessageOutlined,
  GlobalOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

const LinksContainer = styled.div`
  color: #00ff41;
`;

const SectionTitle = styled(Title)`
  color: #00ff41 !important;
  text-shadow: 0 0 15px #00ff41;
  font-family: 'Courier New', monospace;
  text-align: center;
  margin-bottom: 32px !important;
`;

const LinkCard = styled(motion.div)`
  border: 2px solid #00ff41;
  border-radius: 12px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
  transition: all 0.3s ease;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 0 30px rgba(0, 255, 65, 0.5);
    transform: translateY(-4px);
  }
`;

const LinkIcon = styled.div`
  font-size: 48px;
  color: #00ff41;
  margin-bottom: 16px;
  text-shadow: 0 0 15px #00ff41;
`;

const LinkTitle = styled.h3`
  color: #00ff41;
  margin: 0 0 8px 0;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 8px #00ff41;
`;

const LinkDescription = styled.p`
  color: #00ff41;
  margin: 0;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 5px #00ff41;
  flex-grow: 1;
  display: flex;
  align-items: center;
  min-height: 60px;
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

const ContactInfo = styled.div`
  margin-bottom: 48px;
  padding: 24px;
  border: 2px solid #00ff41;
  border-radius: 12px;
  background: rgba(0, 255, 65, 0.05);
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.2);
  word-break: break-all;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  color: #00ff41;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 5px #00ff41;

  strong {
    color: #00ff41;
    text-shadow: 0 0 8px #00ff41;
  }
`;

const Links: React.FC = () => {
  const { t } = useTranslation();

  const links = useMemo(
    () => [
      {
        icon: <MailOutlined />,
        title: t('links.links.email.title'),
        description: t('links.links.email.description'),
        url: 'mailto:artur.mukaev@mail.ru',
        label: 'artur.mukaev@mail.ru',
      },
      {
        icon: <MessageOutlined />,
        title: t('links.links.telegram.title'),
        description: t('links.links.telegram.description'),
        url: 'https://t.me/arty_m7',
        label: '@arty_m7',
      },
      {
        icon: <LinkedinOutlined />,
        title: t('links.links.linkedin.title'),
        description: t('links.links.linkedin.description'),
        url: 'https://www.linkedin.com/in/artur-mukaev',
        label: 'linkedin.com/in/artur-mukaev',
      },
      {
        icon: <GithubOutlined />,
        title: t('links.links.github.title'),
        description: t('links.links.github.description'),
        url: 'https://github.com/ArturMukaev',
        label: 'github.com/ArturMukaev',
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
    <LinksContainer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <SectionTitle level={2}>
            <GlobalOutlined /> {t('links.title')}
          </SectionTitle>
        </motion.div>

        <motion.div variants={itemVariants}>
          <ContactInfo>
            <Title
              level={3}
              style={{
                color: '#00ff41',
                textAlign: 'center',
                marginBottom: '24px',
              }}
            >
              <UserOutlined /> {t('links.contactInformation')}
            </Title>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <InfoItem>
                  <MailOutlined />
                  <strong>Email:</strong> artur.mukaev@mail.ru
                </InfoItem>
                <InfoItem>
                  <MessageOutlined />
                  <strong>Telegram:</strong> @arty_m7
                </InfoItem>
              </Col>
              <Col xs={24} md={12}>
                <InfoItem>
                  <LinkedinOutlined />
                  <strong>LinkedIn:</strong> linkedin.com/in/artur-mukaev
                </InfoItem>
                <InfoItem>
                  <GithubOutlined />
                  <strong>GitHub:</strong> github.com/ArturMukaev
                </InfoItem>
              </Col>
            </Row>
          </ContactInfo>
        </motion.div>

        <Row gutter={[24, 24]}>
          {links.map((link, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <motion.div variants={itemVariants}>
                <LinkCard
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <LinkIcon>{link.icon}</LinkIcon>
                  <LinkTitle>{link.title}</LinkTitle>
                  <LinkDescription>{link.description}</LinkDescription>
                  <LinkButton
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.label}
                  </LinkButton>
                </LinkCard>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </LinksContainer>
  );
};

export default Links;
