import '../Style/Components/Section/Section.css'
import Music from './Music'
import About from './About'
import Navigation from './Navigation'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Section = () => {
    return (
        <section>
            <BrowserRouter>
                <div className="section-container">
                    <Navigation />
                    <div className="weclome-section">
                        <h3 className="section-h3">What is your Goal?</h3>

                        <div className="reactangle-section" />
                    </div>
                </div>
                <Switch>
                    <Route exact path="/" />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/My-Playlist" component={Music} />
                </Switch>
            </BrowserRouter>
        </section>
    )
}

export default Section;