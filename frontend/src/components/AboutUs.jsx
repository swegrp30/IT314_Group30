import React, { useState, useEffect } from 'react';
import { useTransition, a } from 'react-spring';
import '../style/AboutUs.css'
import line from '../Images/line.png';
import img1 from '../Images/access_time.svg'
import img2 from '../Images/update.svg'
import img3 from '../Images/education.svg'
import img4 from '../Images/wallet.svg'
import img5 from '../Images/forum.svg'
import img6 from '../Images/feedback.svg'
import ProfileCard from './ProfileCard';
import { HStack, VStack } from '@chakra-ui/react';


const AboutUs = () => {
  const [index, set] = useState(0);

  const profiles = [
    {
      name: 'Natvar Prajapati',
      username: 'Natvar',
      studentID: '202101402',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },

      ],
    },
    {
      name: 'Naman Modi',
      username: 'Naman',
      studentID: '202101421',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(30).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },

      ],
    },
    {
      name: 'Bhavya Shah',
      username: 'Bhavya',
      studentID: '202101426',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(30).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },

      ],
    },
    {
      name: 'Dhairya Bhanvadia',
      username: 'Dhairya',
      studentID: '202101436',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(30).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },

      ],
    },
    {
      name: 'Aayush Patel',
      username: 'Aayush',
      studentID: '202101452',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(30).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },

      ],
    },
    {
      name: 'Priya Tank',
      username: 'Priya',
      studentID: '202101463',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(30).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },

      ],
    },
    {
      name: 'Shubham Patel',
      username: 'Shubham',
      studentID: '202101464',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(30).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },

      ],
    },
    {
      name: 'Darshana Chauhan',
      username: 'Dharshana',
      studentID: '202101467',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(30).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },

      ],
    },
    {
      name: 'Varun Vyas',
      username: 'Lemon',
      studentID: '202101468',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(30).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },

      ],
    },
    {
      name: 'Om Gor',
      username: 'Om',
      studentID: '202101484',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(30).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },

      ],
    },
    {
      name: 'Nisha Savaliya',
      username: 'Nisha',
      studentID: '202101486',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(30).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },

      ],
    },
    {
      name: 'Vasu Golakiya',
      username: 'Vasu',
      studentID: '202101487',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(30).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },

      ],
    },
    

  ];

  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className='a'>
        We ❤️ what we do
      </div>

      <div className='b' >
        Discover the Story Behind Our Passion for Profits:<br></br>
        Unveiling the Magic Behind Your Financial Future
      </div>

      <div className='c'>
        <img src={line} alt="line" className='line'></img>
      </div>

      <div className='d'>
        Experience Stock Predictions like Never Before. Your Journey to Unveiling Tomorrow's Opportunities
      </div>

      <div className='e'>
        We are a team of passionate students from DAIICT College, embarking on this software project assigned by our professor, Saurabh Tiwari. While we may not have years of professional experience, we are enthusiastic and dedicated to delivering a great product under our professor's guidance
      </div>


      <div className='f'>

        <div className='card'>
          <img src={img1} alt="img1" className='img1'></img>
          <h3 className='title'>
            <b>  Use Anytime: </b>
          </h3 >
          <p className='disc'>Our website is accessible 24/7, allowing you to check stock patterns and predictions at your convenience. Whether you're an early bird or a night owl, you can access valuable insights whenever it suits you.</p>
        </div>


        <div className='card'>
          <img src={img2} alt="img1" className='img1'></img>
          <h3 className='title'>
            <b>  Real-time Updates: </b>
          </h3 >
          <p className='disc'>Stay informed about the latest stock trends and predictions as our platform provides real-time data and analysis, enabling you to make timely decisions.</p>
        </div>


        <div className='card'>
          <img src={img3} alt="img1" className='img1'></img>
          <h3 className='title'>
            <b> Educational Resource:  </b>
          </h3 >
          <p className='disc'>Utilize our Newbie Manual to enhance your stock market knowledge. It's a valuable resource for both beginners and experienced investors, offering insights, tips, and tutorials to help you make informed choices.</p>
        </div>


        <div className='card'>
          <img src={img4} alt="img1" className='img1'></img>
          <h3 className='title'>
            <b> Personalized Portfolio: </b>
          </h3 >
          <p className='disc'> Create and manage your personalized portfolio effortlessly. Monitor your investments and track their performance over time, all in one place.</p>
        </div>


        <div className='card'>
          <img src={img5} alt="img1" className='img1'></img>
          <h3 className='title'>
            <b> Interactive Community: </b>
          </h3 >
          <p className='disc'> Engage with a vibrant community of fellow investors. Share your thoughts, get feedback, and discuss strategies with like-minded individuals through our Comments and Feedback sections.</p>
        </div>



        <div className='card'>
          <img src={img6} alt="img1" className='img1'></img>
          <h3 className='title'>
            <b> User-driven Improvements: </b>
          </h3 >
          <p className='disc'>Your feedback matters. We are constantly working to enhance the website based on user input. Your suggestions and comments play a crucial role in shaping the future of our platform.</p>
        </div>
      </div>



      <div className='g'>
        Our Team Members
      </div>


      <div className='h'>

        <section className="vh-400" style={{ backgroundColor: 'white' }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              {profiles.map((profile, index) => (
                <ProfileCard key={index} {...profile} />
              ))}
            </div>
          </div>
        </section>



      </div>





    </div>
  );
};

export default AboutUs;

