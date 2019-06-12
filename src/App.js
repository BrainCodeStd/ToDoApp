import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Recipe from './container/RecipeContainer/RecipeContainer'
class App extends Component {
  render() {
    return (
    <Layout>

<Recipe/>
    </Layout>
    );
  }
}

export default App;
