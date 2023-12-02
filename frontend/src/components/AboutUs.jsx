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
      imageSrc: 'https://drive.google.com/file/d/1i7G5vKesmZu5ko8Y5_9Q7mxK-wpcoggP/view?usp=drive_link',
      socialLinks: [
        { icon: 'fa-github', url: 'https://github.com/natvar55' },
        { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/natvar-prajapati-b0b344236' },

      ],
    },
    {
      name: 'Naman Modi',
      username: 'Naman9119',
      studentID: '202101421',
      imageSrc: 'https://drive.google.com/file/d/1k0dmOGTt4YJQcTH2upuTc2L5Ha3pVrAL/view?usp=drive_link',
      socialLinks: [
        { icon: 'fa-github', url: 'https://github.com/naman9119' },
        { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/naman-modi' },

      ],
    },
    {
      name: 'Bhavya Shah',
      username: 'Bhavya',
      studentID: '202101426',
      imageSrc: 'https://drive.google.com/file/d/1G9gMHKu5TpIPkyRVogAnWfK9TIRTPO7F/view?usp=drive_link',
      socialLinks: [
        { icon: 'fa-github', url: 'https://github.com/Bhavya418' },
        { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/bhavya-shah-9a7550233/' },

      ],
    },
    {
      name: 'Dhairya Bhanvadia',
      username: 'Dhairya',
      studentID: '202101436',
      imageSrc: 'https://drive.google.com/file/d/1rWEGFyHevJoSIXLy6k6I1sZJyQYJtrKy/view?usp=drive_link',
      socialLinks: [
        { icon: 'fa-github', url: 'https://github.com/dhairya-bh' },
        { icon: 'fa-linkedin', url: 'http://www.linkedin.com/in/dhairya-bhanavadia-a1783b283' },

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
      imageSrc: 'https://drive.google.com/file/d/1GttQ0NSNKcTSRrQvG12_DSL_PlN1ux7T/view?usp=drive_link',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },

      ],
    },
    {
      name: 'Shubham Patel',
      username: 'Bot-Binary',
      studentID: '202101464',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(30).jpg',
      socialLinks: [
        { icon: 'fa-github', url: 'https://github.com/Bot-Binary' },
        { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/shubham-patel-853266241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },

      ],
    },
    {
      name: 'Darshana Chauhan',
      username: 'Dharshana',
      studentID: '202101467',
      imageSrc: 'https://drive.google.com/file/d/19k3wKRfAjt63cu2kU6xx5jdFrYfPvlXo/view?usp=drive_link',
      socialLinks: [
        { icon: 'fa-github', url: 'https://github.com/DarshanaChauhan' },
        { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/darshana-chauhan-662995280' },

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
      username: 'OGplayer',
      studentID: '202101484',
      imageSrc: 'https://drive.google.com/file/d/1nnSSsXsux0bXvAQzUJIworj_SedOFNdu/view?usp=drive_link',
      socialLinks: [
        { icon: 'fa-github', url: 'https://github.com/GOR-OM' },
        { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/om-gor/' },

      ],
    },
    {
      name: 'Nisha Savaliya',
      username: 'Nishh3370',
      studentID: '202101486',
      imageSrc: 'https://drive.google.com/file/d/1ovGun-0f3_HUqO7LpzxOqO9goGZKDmhS/view?usp=drive_link',
      socialLinks: [
        { icon: 'fa-github', url: 'https://github.com/Niisha3370' },
        { icon: 'fa-linkedin', url: 'www.linkedin.com/in/nishasavaliya3370' },

      ],
    },
    {
      name: 'Vasu Golakiya',
      username: 'Vasu2344',
      studentID: '202101487',
      imageSrc: 'https://drive.google.com/file/d/1Aj3GCgXPOFcrqTBAQjAViaPxGOlBQsto/view?usp=drive_link',
      socialLinks: [
        { icon: 'fa-github', url: 'https://github.com/VasuGolakiya' },
        { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/vasu-golakiya-86161b221' },

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

