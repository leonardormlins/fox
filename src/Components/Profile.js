import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import StoreContext from './Store/Context';
import { Link } from 'react-router-dom';
import ProfileBar from './ProfileBar';
import Card from './Card';
import AddPictureButton from './AddPictureButton';
import logoMinor from './Styles/logoMinor.svg';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import './Styles/Home.css';

function initialState() {
    return {
        pictureToInsert: null,
    }
}

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Profile = () => {
    const [values, setValues] = useState(initialState);
    const [posts, setPosts] = useState([]);

    const { setToken, username, token } = useContext(StoreContext);
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        axios.get('user/' + username)
            .then(resp => {
                setValues(resp.data)
            })
            .catch(err => console.log('req1: ', err))

    },[])

    useEffect(() => {
        axios.get('post/user/' + username)
            .then(resp => {
                setPosts(resp.data)
            })
            .catch(err => console.log('req1: ', err))

    },[])

    function onChange(event) {
        const { name, value } = event.target;

        setValues({
            ...values,
            [name]: value
        })
    }

    function handleLogout() {
        return setToken('')
    }

    function handleOpen() {
        setOpen(true);
    };

    function handleClose() {
        setOpen(false);
    };

    function handleSubmitPhoto() {
        if ( values.pictureToInsert ) {
            const config = { headers: { Authorization: `Bearer ${token}` } }
            const bodyParameter = { "profilePhoto": values.pictureToInsert };
            axios.post('user/updatePhoto/', bodyParameter, config)
                .then(resp => {
                    handleClose()
                    setValues({name:values.name, id: values.id, profilePhoto:values.profilePhoto})
                    console.log('testing valuess:',values)
                })
        }
    }

    function handleSubmitPost() {
        if ( values.pictureToInsert ) {
            const config = { headers: { Authorization: `Bearer ${token}` } }
            const bodyParameter = { "pictureLink": values.pictureToInsert };
            axios.post('post/', bodyParameter, config)
                .then(resp => {
                    handleClose()
                })
        }
    }

    return (
        <div className="Home">
            <header className="Header-app">
                <div className="Minor-logo">
                    <img src={logoMinor} alt="logoMinor" />
                </div>

                <div className="Logout-button">
                    <span className="material-icons">exit_to_app</span>
                    <div onClick={handleLogout} className="Logout-text">Logout</div>
                </div>

                <div className="Header-line"></div>
            </header>
            <div className="Space-top"></div>

            {console.log('postsss:', posts)}
            <ProfileBar props={values} />
            <div className="NumberOfFollowers">
                {/* Followers: {values.numbersOfFollowers} | Following: {values.numbersOfFollowing} */}
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="Modal"
                open={open}
                onClose={handleClose}
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}>

                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2>Insert the picture link</h2>
                        <p>On the box below insert the picture link.</p>
                        <input value={values.pictureToInsert} onChange={onChange}
                            type="text" name="pictureToInsert" />
                        <div onClick={handleSubmitPhoto} className="Button-add">Profile Photo</div>
                        <div onClick={handleSubmitPost} className="Button-add">New Post</div>
                    </div>
                </Fade>
            </Modal>

            <div onClick={handleOpen}>
                <AddPictureButton text="Add photo" />
            </div>

            {console.log('testing values before:',values)}
            {false ? <p className="No-posts">Não existem publicações</p> : <br />}
            {posts.map(post => console.log('>>',post))}
            {posts.map(post => <Card key={post.pictureLink} username={post.author.name} pp={post.author.profilePhoto} media={post.pictureLink}/>)}

            <div className="Space"></div>
            <section className="Navbar">
                <div className="Options">
                    <Link to='/'>
                        <span className="material-icons md-light">home</span>
                        <div className="Icon-info">Home</div>
                    </Link>
                    <Link to='/search'>
                        <span className="material-icons md-light">search</span>
                        <div>Search</div>
                    </Link>
                    <Link to='/people'>
                        <span className="material-icons md-light">people</span>
                        <div>People</div>
                    </Link>
                    <Link to='/profile'>
                        <span className="material-icons md-light">person</span>
                        <div>Profile</div>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Profile;
