import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import himanshi from './assests/himanshi.jpeg'
import harshita from './assests/harshita.jpeg'
import hitaishi from './assests/hitaishi.jpeg'
import hemant from './assests/hemant.jpg'
import './Cards.css'

function BasicExample() {
  return (
    <div className='cards'>

    <Card style={{ width: '20rem', marginLeft: '20px', borderRadius:'10px'}} className='carditis'>
      <img src={harshita} className="imagess" alt="Blog" />
      <Card.Body>
        <Card.Title className='devname' ><b>Harshita</b></Card.Title>
        <Card.Text className='devinfo'>
          I architect, develop, and optimize the server-side logic and database systems to ensure seamless functionality and efficient data management for web and mobile applications
        </Card.Text>
        <a href='https://www.linkedin.com/in/harshita-kathuria-6a4853265/'><i style={{marginLeft: '78%'}}  className="fa-brands fa-linkedin"></i></a>
        <a href='https://github.com/Harshita1642'><i className="fa-brands fa-square-github"></i></a>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' , marginLeft: '20px', borderRadius:'10px'}} className='carditis'>
    <img src={himanshi} className="imagess" alt="Blog" />
      <Card.Body>
        <Card.Title className='devname' ><b>Himanshi</b></Card.Title>
        <Card.Text className='devinfo'>
          I architect, develop, and optimize the server-side logic and database systems to ensure seamless functionality and efficient data management for web and mobile applications
        </Card.Text>
        <a href="https://www.linkedin.com/in/himanshi-gupta-293b1a275/"><i style={{marginLeft: '78%'}} className="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/Himanshigupta2004"><i className="fa-brands fa-square-github"></i></a>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' , marginLeft: '20px', borderRadius:'10px'}} className='carditis'>
    <img src={hitaishi} className="imagess" alt="Blog" />
      <Card.Body>
        <Card.Title className='devname' ><b>Hitaishi</b></Card.Title>
        <Card.Text className='devinfo'>
          I architect, develop, and optimize the server-side logic and database systems to ensure seamless functionality and efficient data management for web and mobile applications
        </Card.Text>
        <a href="http://www.linkedin.com/in/hitaishi-singhaniya-52979a269"><i style={{marginLeft: '78%'}} className="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/Hitaishi08"><i className="fa-brands fa-square-github"></i></a>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' , marginLeft: '20px'}} className='carditis'>
    <img src={hemant} className="imagess" alt="Blog" />
      <Card.Body>
        <Card.Title className='devname'><b>Hemant</b></Card.Title>
        <Card.Text className='devinfo'>
          I architect, develop, and optimize the server-side logic and database systems to ensure seamless functionality and efficient data management for web and mobile applications
        </Card.Text>
        <a href="https://www.linkedin.com/in/hemant-sharma-09777024b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i style={{marginLeft: '78%'}} className="fa-brands fa-linkedin"></i></a>
        <a href="github.com/Githemantsharma"><i className="fa-brands fa-square-github"></i></a>
      </Card.Body>
    </Card>
    </div>
  );
}

export default BasicExample;