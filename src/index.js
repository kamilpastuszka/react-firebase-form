import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import Form from './components/form/form';
import Feedback from './components/feedback/feedback';

const routes = (
    <BrowserRouter>
     <div>
        <Route path="/" component={Form} exact={true} />
        <Route path="/thankyou" component={Feedback}/>
     </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('form'));
