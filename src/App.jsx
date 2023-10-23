import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import { Actors, MovieInfomation, Movies, Profile, Navbar } from "./components";
import useStyle from './components/style'
const App = () => {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Navbar />
            <main className={classes.content}>
                <div className={classes.toolbar}></div>
                <Routes>
                    <Route path="/" element={<Movies />} />
                    <Route path="/movies/:id" element={<MovieInfomation />} />
                    <Route path="/actors/:id" element={<Actors />} />
                    <Route path="/profile/:id" element={<Profile />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
