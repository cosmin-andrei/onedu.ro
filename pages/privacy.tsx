import React, { useState, useEffect } from "react";
import Layout from '../src/app/layout';
import DOMPurify from "dompurify";
import styles from "../src/app/style/TermsPage.module.css";

const SidebarMenu: React.FC<{ onSelect: (id: string) => void }> = ({ onSelect }) => {
    const [menu, setMenu] = useState<{ id: string; title: string }[]>([]);
    const [expandedItem, setExpandedItem] = useState<string | null>(null);
    const [, setSubMenu] = useState<{ subtitle: string; content: string }[] | null>(null);
  
    useEffect(() => {
      fetch("/privacy/privacy.json")
        .then((response) => response.json())
        .then((data) => setMenu(data));
    }, []);
  
    const handleItemClick = (id: string) => {
      setExpandedItem(expandedItem === id ? null : id);
  
      if (expandedItem !== id) {
        fetch(`/${id}.json`)
          .then((response) => response.json())
          .then((data) => setSubMenu(data.sections));
      }
  
      onSelect(id);
    };
  
    return (
      <div className={styles.sidebar}>
        {menu.map((item) => (
          <div key={item.id} className={styles.menuItem}>
            <button
              className={`button ${expandedItem === item.id ? "active" : ""}`}
              onClick={() => handleItemClick(item.id)}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>
    );
  };

// Content component
const Content: React.FC<{ selectedId: string | null }> = ({ selectedId }) => {
    const [content, setContent] = useState<{
      title: string;
      date: string;
      sections: { subtitle: string; content: string }[];
    } | null>(null);
  
    useEffect(() => {
      if (selectedId) {
        fetch(`/privacy/${selectedId}.json`)
          .then((response) => response.json())
          .then((data) => setContent(data));
      }
    }, [selectedId]);
  
    if (!content) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className={styles.content}>
        <h1 className={styles.title}>{content.title}</h1>
        {content.sections.map((section, index) => (
          <div key={index} id={`section-${index}`} className={styles.section}>
            {/* Fiecare subtitlu are un ID unic */}
            <h3 className={styles.subtitle}>{section.subtitle}</h3>
            <div
              className={styles.sectionContent}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(section.content),
              }}
            />
          </div>
        ))}
      </div>
    );
  };


const PrivacyPage: React.FC = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
  
    useEffect(() => {
      fetch("/privacy/privacy.json")
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            setSelectedId(data[0].id);
          }
        });
    }, []);
  
    const handleSelect = (id: string) => {
      setSelectedId(id);
    };
  
    return (
      <Layout>
        <div className={styles.TermsPage}>
          <SidebarMenu onSelect={handleSelect} />
          <div className={styles.mainContent}>
            <Content selectedId={selectedId} />
          </div>
        </div>
      </Layout>
    );
  };

  export default PrivacyPage;