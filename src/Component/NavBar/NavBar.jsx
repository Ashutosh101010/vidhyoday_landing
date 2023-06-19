import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import AboutIcon from '@mui/icons-material/Info';
import HomeIcon from "@mui/icons-material/Home";
import logoImg from "../../assets/img/logo/logo.png";
import { Container } from "@mui/system";
import NewsTrigger from './NewsTrigger/NewsTrigger';
// import { makeStyles } from '@mui/styles';
import './newstriger.css';
// import ModalForm from '../Form/ModalForm';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";


// const useStyles = makeStyles({

//   mobileView: {
//     '@media (max-width: 600px)': {
//       display: 'none',
//     },
//   },
//   desktopView: {
//     '@media (min-width: 601px)': {
//       display: 'none',
//     },
//   },
// });

const Navbar = ({ sticky, scrollDownC }) => {
  const isDesktopScreen = window.innerWidth >= 880;
  const navigate = useNavigate();
  // const classes = useStyles();
  const headerClasses = `header ${sticky ? 'sticky' : ''}`;
  // const location = useLocation();

  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.type === "Tab" || event.type === "Shift")) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const handleOpenForm = () => {
    navigate('web.classiolabs.com');
    // console.log('from')
  };

  const handleLogoClick = () => {
    navigate("/"); // Replace "/" with the desired route for the home page
  };

  const handleLoginClick = () => {
    navigate('https://web.classiolabs.com');
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        maxHeight: 'calc(100vh - 64px)', // Adjust the value as needed
        overflowY: 'auto',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[

          { text: "Home", icon: <HomeIcon />, link: "/" },
          { text: "Blog", icon: <FeaturedPlayListIcon />, link: "/" },
          { text: "Courses", icon: <FeaturedPlayListIcon />, link: "/" },
          { text: "Career", icon: <MiscellaneousServicesIcon />, link: "/" },
          {/* { text: "Features", icon: <ListAltIcon />, link: "/features" },
          { text: "Contacts", icon: <ContactsIcon />, link: "/contacts" }, */}
        ].map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{
              marginTop: item.link === window.location.pathname ? '2rem' : 0,
              transition: 'margin-top 0.3s ease',
            }}
          >
            <ListItemButton
              component={NavLink}
              to={item.link}
              exact
              activeClassName="active"
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          marginLeft: '4rem',
          '@media (max-width: 600px)': {
            marginLeft: '0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.9rem',
          },
          '@media (min-width: 601px) and (max-width: 960px)': {
            marginLeft: '0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.9rem',
          },
        }}
      >
        <Button
          onClick={() => (window.location.href = 'https://web.classiolabs.com')}
          sx={{
            textTransform: 'none',
            fontFamily: 'Mulish',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '19px',
            lineHeight: '13px',
            color: '#FFFFFF',
            background: '#01B1C9',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '6px',
            border: '1px solid #FFF',
            padding: '12px',
            marginLeft: '3rem',
            paddingLeft: '20px',
            paddingRight: '20px',
            '@media (max-width: 600px)': {
              marginLeft: '0',
              width: '80%',
            },
            '@media (min-width: 601px) and (max-width: 960px)': {
              marginLeft: '0',
              width: '80%',
            },
          }}
        >
          Login
        </Button>

        <Button
          sx={{
            textTransform: 'none',
            fontFamily: 'Mulish',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '19px',
            lineHeight: '13px',
            color: '#5A5A5A',
            background: '#fff',
            borderRadius: '6px',
            border: '1px solid #01B1C9',
            padding: '12px',
            marginLeft: '2rem',
            paddingLeft: '20px',
            paddingRight: '20px',
            '@media (max-width: 600px)': {
              marginLeft: '0',
              width: '80%',
            },
            '@media (min-width: 601px) and (max-width: 960px)': {
              marginLeft: '0',
              width: '80%',
            },
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );


  const StyledNavLink = styled(NavLink)(({ theme }) => ({
    // width: '5rem',
    textDecoration: 'none',
    fontSize: "19px",
    fontWeight: "400",
    fontFamily: 'Mulish',
    cursor: "pointer",
    letterSpacing: '3px',
    lineHeight: '22px',
    textAlign: 'center',
    color: '#5A5A5A',
    // color: location.pathname === '/' ? '#FFFFFF' : 'rgba(139, 69, 246, 1)',
    "&:hover": {
      color: '#01B1C9',
      // color: location.pathname === '/' ? 'rgba(248, 187, 26, 1)' : 'rgba(248, 187, 26, 1)',
    },
    '&.active': {
      color: '#01B1C9', // Replace with your desired active color
      // color: '#FBD826', // Replace with your desired active color
      // textDecoration: 'underline',
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginLeft: '3rem',
    marginLeft: '15rem',
    gap: '2.5rem',
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(9),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1),
      width: '86%',
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  return (
    <>
      <Box className={headerClasses}>
        <NavbarContainer>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: '2rem',
              marginBottom: '2rem',
              '@media (max-width: 600px)': {
                marginTop: '1.5rem',
                marginBottom: '1.5rem',
              },

            }}
          >
            <Box sx={{
              display: "flex", alignItems: "center",
            }}>
              <CustomMenuIcon onClick={toggleDrawer("left", true)} />
              <Drawer
                anchor="left"
                open={mobileMenu["left"]}
                onClose={toggleDrawer("left", false)}
              >
                {list("left")}
              </Drawer>
              <NavbarLogo onClick={handleLogoClick} src={logoImg} alt="logo" sx={{ width: '50%', marginLeft: '4rem' }} />
            </Box>

            <NavbarLinksBox>
              <StyledNavLink
                to="/"
                exact
                isActive={(match) => match && match.isExact}
                activeClassName="active"
              >
                Home
              </StyledNavLink>

              {/* <StyledNavLink
                to="/careeratclassio"
                exact
                activeClassName="active"
              >
                Blog
              </StyledNavLink> */}
              <StyledNavLink
                // to="/careeratclassio"
                onClick={scrollDownC}
                exact
                activeClassName="active"
              >
                Courses
              </StyledNavLink>
              <StyledNavLink
                // to="/careeratclassio"
                exact
              // activeClassName="active"
              >
                Career
              </StyledNavLink>
              {/* <StyledNavLink
                to="/features"
                exact
                activeClassName="active"
              >
                Features
              </StyledNavLink> */}
            </NavbarLinksBox>
            {/* <ModalForm className={`${classes.button} ${classes.mobileView}`}/> */}
            <Box
              sx={{
                // '@media (min-width: 601px)': {
                //   display: 'none',
                // },
              }}
            >
              <Button
                // className={`${classes.button} ${classes.mobileView}`}
                onClick={() => (window.location.href = 'https://web.classiolabs.com')}
                sx={{
                  textTransform: 'none',
                  fontFamily: 'Mulish',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '19px',
                  lineHeight: '13px',
                  color: '#FFFFFF',
                  background: '#01B1C9',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  borderRadius: '6px',
                  border: '1px solid #FFF',
                  padding: '12px',
                  marginLeft: '3rem',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  '@media (max-width: 880px)': {
                    display: 'none',
                  },
                }}
              >
                Login
              </Button>

              <Button
                // className={`${classes.button} ${classes.mobileView}`}
                // onClick={handleOpenForm}
                sx={{
                  textTransform: 'none',
                  fontFamily: 'Mulish',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '19px',
                  lineHeight: '13px',
                  color: '#5A5A5A',
                  background: '#fff',
                  // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  borderRadius: '6px',
                  border: '1px solid #01B1C9',
                  padding: '12px',
                  marginLeft: '2rem',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  '@media (max-width:880px)': {
                    display: 'none',
                  },
                }}
              >
                Register
              </Button>
              <div className={`desktop-news-trigger ${isDesktopScreen ? 'hide-on-desktop' : ''}`} style={{ overflowX: 'auto' }}>
                <NewsTrigger className='news-trigger' />
              </div>

            </Box>

            {/* <NewsTrigger
              style={{
                '@media (min-width: 601px)': {
                  display: 'none',
                },
              }}
            /> */}
            {/* <img onClick={handleLogoClick} className={`${classes.desktopView}`}
              src={logoImg}
              alt="Image"

            /> */}


          </Box>
        </NavbarContainer >
      </Box >
    </>
  );
}

export default Navbar;




