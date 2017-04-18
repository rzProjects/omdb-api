import React from 'react';
import { 
    Router, 
    Route, 
    browserHistory
} from 'react-router';
import App from 'containers/app';
import MovieDetailContainer from 'containers/movie-detail-container';
import Home from 'components/home';
import Favorites from 'components/favorites';
import SearchList from 'components/search-list';
import NotFound from 'components/not-found';

const routes = (
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={Home} />
            <Route path="favorites" component={Favorites} />
            <Route path="movie/:id" component={MovieDetailContainer} />
            <Route path="searches" component={SearchList} />
        </Route>
    </Router>
);

export default routes;