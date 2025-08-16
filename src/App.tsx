import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Layout, Menu, Button, Space } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HomeOutlined,
  FileTextOutlined,
  LinkOutlined,
  ProjectOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import CV from './components/CV';
import Home from './components/Home';
import Links from './components/Links';
import Projects from './components/Projects';
import './i18n';

const { Header, Content } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
  background: #0a0a0a;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      linear-gradient(90deg, transparent 98%, #00ff41 100%),
      linear-gradient(180deg, transparent 98%, #00ff41 100%);
    background-size: 50px 50px;
    opacity: 0.1;
    pointer-events: none;
    z-index: 1;
  }
`;

const StyledHeader = styled(Header)`
  background: rgba(0, 0, 0, 0.9) !important;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid #00ff41;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;

  @media (max-width: 893px) {
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    padding: 16px 20px;
    flex-direction: column;
    height: auto !important;
    gap: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
  }
`;

const Logo = styled(motion.h1)`
  color: #00ff41;
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  text-shadow: 0 0 10px #00ff41;
  font-family: 'Courier New', monospace;

  @media (max-width: 893px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const StyledMenu = styled(Menu)`
  background: transparent !important;
  border: none !important;
  line-height: 1.5 !important;

  .ant-menu-item {
    color: #00ff41 !important;
    border: none !important;
    margin: 0 8px !important;
    border-radius: 8px !important;
    font-family: 'Courier New', monospace;
    font-weight: 500;
    position: relative;
    height: auto !important;
    line-height: 1.5 !important;
    padding: 8px 16px !important;

    &:hover {
      color: #00ff41 !important;
      background: rgba(0, 255, 65, 0.1) !important;
      text-shadow: 0 0 8px #00ff41;
      cursor: inherit;
    }

    &.ant-menu-item-selected {
      color: #00ff41 !important;
      background: rgba(0, 255, 65, 0.2) !important;
      text-shadow: 0 0 10px #00ff41;
      box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
      &::after {
        border-bottom: none !important;
        display: none !important;
      }
    }

    &::after {
      border-bottom: none !important;
      display: none !important;
    }
  }

  @media (max-width: 893px) {
    .ant-menu-item {
      margin: 0 4px !important;
      font-size: 13px;
      padding: 8px 10px !important;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 8px;

    .ant-menu-item {
      margin: 0 4px !important;
      font-size: 12px;
      padding: 8px 12px !important;
    }
  }

  @media (max-width: 480px) {
    .ant-menu-item {
      margin: 0 2px !important;
      font-size: 11px;
      padding: 6px 8px !important;
    }
  }
`;

const StyledContent = styled(Content)`
  padding: 24px 50px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  z-index: 2;

  @media (max-width: 893px) {
    padding: 20px 30px;
  }

  @media (max-width: 768px) {
    padding: 16px 20px;
  }
`;

const ContentContainer = styled(motion.div)`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border: 2px solid #00ff41;
  border-radius: 16px;
  padding: 32px;
  box-shadow:
    0 0 30px rgba(0, 255, 65, 0.3),
    inset 0 0 30px rgba(0, 255, 65, 0.05);
  max-width: 1200px;
  width: 100%;
  min-height: 600px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 49%,
      rgba(0, 255, 65, 0.1) 50%,
      transparent 51%
    );
    background-size: 20px 20px;
    border-radius: 16px;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 20px;
    min-height: 500px;
  }
`;

const LanguageSwitcher = styled(Space)`
  .ant-btn {
    color: #00ff41;
    border-color: #00ff41;
    background: transparent;
    font-family: 'Courier New', monospace;
    font-weight: 500;

    &:hover {
      color: #00ff41;
      border-color: #00ff41;
      background: rgba(0, 255, 65, 0.1);
      text-shadow: 0 0 8px #00ff41;
    }

    &.active {
      background: rgba(0, 255, 65, 0.2);
      text-shadow: 0 0 10px #00ff41;
      box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
    }
  }

  @media (max-width: 768px) {
    margin-top: 0;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 480px) {
    .ant-btn {
      font-size: 11px;
      padding: 4px 8px;
      height: 28px;
    }
  }
`;

const contentVariants = {
  enter: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
  },
};

function App() {
  const [selectedKey, setSelectedKey] = useState('home');
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');

  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLanguage(i18n.language || 'en');
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const menuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: t('navigation.home'),
    },
    {
      key: 'cv',
      icon: <FileTextOutlined />,
      label: t('navigation.cv'),
    },
    {
      key: 'links',
      icon: <LinkOutlined />,
      label: t('navigation.links'),
    },
    {
      key: 'projects',
      icon: <ProjectOutlined />,
      label: t('navigation.projects'),
    },
  ];

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const renderContent = () => {
    switch (selectedKey) {
      case 'home':
        return <Home />;
      case 'cv':
        return <CV />;
      case 'links':
        return <Links />;
      case 'projects':
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <StyledLayout>
      <StyledHeader>
        <Logo
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('home.name')}
        </Logo>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <StyledMenu
            mode="horizontal"
            selectedKeys={[selectedKey]}
            items={menuItems}
            onClick={({ key }) => setSelectedKey(key)}
          />
          <LanguageSwitcher>
            <Button
              size="small"
              className={currentLanguage.startsWith('en') ? 'active' : ''}
              onClick={() => handleLanguageChange('en')}
            >
              EN
            </Button>
            <Button
              size="small"
              className={currentLanguage.startsWith('ru') ? 'active' : ''}
              onClick={() => handleLanguageChange('ru')}
            >
              RU
            </Button>
          </LanguageSwitcher>
        </div>
      </StyledHeader>
      <StyledContent>
        <AnimatePresence mode="wait">
          <ContentContainer
            key={selectedKey}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {renderContent()}
          </ContentContainer>
        </AnimatePresence>
      </StyledContent>
    </StyledLayout>
  );
}

export default App;
