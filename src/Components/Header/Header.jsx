
import Container from 'react-bootstrap/Container';
import {Image} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import menu from '../../menu-json-api/menu.json';
import company from '../../Company-Details/company.json';


// function Subhead() {
//   return (
//     <div><h4>Subhead</h4></div>
//   )
// }

function Mainmenu({demo}){
  return(
    <>
    return <Link to={demo.link} className={demo.isButton ? "btn btn-primary" :"nav-link"}>
      {demo.label}</Link> 
    </>
  );
}

function DropdownMenu({demo}){
  console.log(demo)
  return(
    <NavDropdown title={demo.label} id="basic-nav-dropdown">
      {
        //console.log(demo)
        demo.dropdownMenu.map((data,index)=>{
             return <Mainmenu demo={data} key={index}/>
        })
      }

   </NavDropdown>

  );
}


function Header() {
 // console.log(menu);
  return (
   <>
   {/* <h1 className='animate__animated animate__tada animate__slower	3s'>Header</h1> */}
  
   <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" className='navbar-brand'>
          <Image src={company.logo} width={35} className='me-2'/>
          {company.name}
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Link to="/" className='nav-link'>Learn</Link>
            <Link to="/link" className='nav-link'>Refrence</Link> */}

            {
              menu.map((item,index)=>{
                //console.log(item,index)
              //  return <Link to={item.link} key={index} className='nav-link'>{item.label}</Link> 
              if(item.isDropDown){
                return <DropdownMenu demo={item} key={index}/>
              }
              return <Mainmenu demo={item} key={index}/>
              })
            }
            
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>

   </>
  )
}

export default Header;