import React, { useState, useEffect } from "react";
import Layout from '../src/app/layout';
import DOMPurify from "dompurify";
import styles from "../src/app/style/TermsPage.module.css";
import { jsPDF } from "jspdf";

const SidebarMenu: React.FC<{ onSelect: (id: string) => void }> = ({ onSelect }) => {
    const [menu, setMenu] = useState<{ id: string; title: string }[]>([]);
    const [expandedItem, setExpandedItem] = useState<string | null>(null);
    const [subMenu, setSubMenu] = useState<{ subtitle: string; content: string }[] | null>(null);
  
    useEffect(() => {
      fetch("/terms.json")
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
      <div className="sidebar">
        {menu.map((item) => (
          <div key={item.id} className="menuItem">
            <button
              className={`button ${expandedItem === item.id ? "active" : ""}`}
              onClick={() => handleItemClick(item.id)}
            >
              {item.title}
            </button>
            {expandedItem === item.id && subMenu && (
              <div className="subMenu">
                {subMenu.map((section, index) => (
                  <a
                    key={index}
                    href={`#section-${index}`}
                    className="subMenuItem"
                  >
                    {section.subtitle}
                  </a>
                ))}
              </div>
            )}
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
        fetch(`/${selectedId}.json`)
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
        <div className={styles.metadata}>
          <p>Effective Date: {content.date}</p>
          <a href="#" onClick={() => {/* handleDownloadPDF logic here */}}>
            Download PDF
          </a>
        </div>
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
  
  
  
  

// GeneratePDF component
const GeneratePDF: React.FC<{ selectedId: string | null }> = ({ selectedId }) => {
  const handleDownload = () => {
    if (!selectedId) return;

    fetch(`/${selectedId}.json`)
      .then((response) => response.json())
      .then((data) => {
        const doc = new jsPDF();

        // Titlu
        doc.setFont("Helvetica", "normal");
        doc.setFontSize(16);
        doc.text(data.id, 10, 10);

        // Secțiuni
        data.sections.forEach((section: { subtitle: string; content: string }, index: number) => {
          doc.setFontSize(14);
          doc.text(section.subtitle, 10, 20 + index * 10);
          doc.setFontSize(12);
          doc.text(DOMPurify.sanitize(section.content).replace(/<[^>]*>?/gm, ""), 10, 30 + index * 10); // Eliminăm tagurile HTML
        });

        doc.save(`${selectedId}.pdf`);
      });
  };

  return (
    <button className={styles.button} onClick={handleDownload} disabled={!selectedId}>
        Download PDF
    </button>

  );
};

const TermsPage: React.FC = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
  
    useEffect(() => {
      fetch("/terms.json")
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
            {selectedId && <GeneratePDF selectedId={selectedId} />}
          </div>
        </div>
      </Layout>
    );
  };

  export default TermsPage;