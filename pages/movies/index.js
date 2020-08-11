import Layout from '../../components/layout';
import React, { Component } from 'react';
import { MovieRepository } from '../../core/api/movie-repository';
import MovieItem from '../../components/movie-item';
import { Container } from '@material-ui/core';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  async componentDidMount() {
    const data = await MovieRepository.fetchMovies();
    this.setState({
      data,
    });
  }

  render() {
    return (
      <Layout>
        <Container>
          <h1>Movies</h1>
          {this.state.data ? (
            this.state.data.map((movie) => {
              return <MovieItem key={movie.id} movie={movie}></MovieItem>;
            })
          ) : (
            <Skeleton variant='rect' width={210} height={118} />
          )}
        </Container>
      </Layout>
    );
  }
}
