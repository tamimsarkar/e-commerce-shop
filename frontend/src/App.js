import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <>
                    <main className="py-3">
                        <Container>
                            <Route exact path="/" component={HomeScreen} />
                            <Route path="/product/:id" component={ProductScreen} />
                        </Container>
                    </main>
                </>
            </Switch>
            <Footer />
        </Router>
    );
}
export default App;
