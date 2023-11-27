// CompanyNewsPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DrawerExample from './DrawerExample';
import { Heading } from '@chakra-ui/react';

const CompanyNewsPage = () => {
  const { companyName } = useParams();
  const [companyNewsData, setCompanyNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await import(`../Json/${companyName.toLowerCase()}NewsData.json`);
        const data = response.default; // Assuming the data is the default export in the JSON file
        setCompanyNewsData(data.stories.slice(0, 7)); // Use the first 8 stories
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [companyName]);

  const createArticle = (articleData) => (
    <a key={articleData.id} href={articleData.url} className="card">
     
      {articleData.img && <img src={articleData.img} alt="" />}
      <article>
        {articleData.category && (
          <p className={`${articleData.category.toLowerCase()}-category`}>
            {articleData.category}
          </p>
        )}
        <h3>{articleData.title}</h3>
      </article>
    </a>
  );

  return (
    <div>
      <DrawerExample />
      <section>
        <div className="container">
          <div className="articles">
            {companyNewsData.map((article) => createArticle(article))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyNewsPage;
