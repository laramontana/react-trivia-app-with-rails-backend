import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CategoriesList from './categoriesList';
import Category from './category';
import '../App.css';

class Categories extends Component {

  render() {

    return (
      <div className="App">
        <Route exact path={`${this.props.match.url}`} component={CategoriesList}/>
        <Route path={`${this.props.match.url}/:categoryId`} component={Category}/>
      </div>
    );
  }
}

export default Categories;
