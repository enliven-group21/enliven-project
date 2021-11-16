import React, { useState, useRef } from 'react'

// Components
import Navbar from '../components/Navbar'
import { Alert } from 'react-bootstrap';
import { Grid, Button } from '@material-ui/core';
import { List, Header, Image } from "semantic-ui-react";

// Style
import '../App.css';

export default function News() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [articles, setArticles] = useState([]);
    const searchQuery = useRef();

    const handleSearch = () => {

        // Basic input validation
        if (searchQuery.current.value === '' || searchQuery.current.value == null || !searchQuery.current.value.trim().length) {
            setError('Invalid search term');
        } else {
            setError(null);
            fetch(`https://gnews.io/api/v4/search?q=${searchQuery.current.value}&sortBy=relevance&lang=en&token=${process.env.REACT_APP_NEWS_API_KEY}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        console.log(result.articles);
                        setArticles(result.articles);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
        }
    }

    // Format date for articles
    const formatDate = (dateString) => {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        var date = new Date(dateString);
        return date.toLocaleDateString("en-us", options);
    }

    if (error) {
        return (
            <>
                <Navbar />
                <h1>News</h1>
                <hr />
                <div class="input-group">
                    <input type="text" ref={searchQuery} class="form-control" placeholder="Search for news related to any topic" />
                    <div class="input-group-append">
                        <Button className="btn" variant="contained" color="primary" type="submit" onClick={handleSearch} >Search</Button>
                    </div>
                </div>
                <Alert className="m-auto mt-3 w-50 d-flex align-items-center justify-content-center" variant="danger">
                    {error}
                </Alert>
            </>
        );
    }
    else {
        return (
            <>
                <Navbar />
                <h1>News</h1>
                <hr />
                <div class="input-group">
                    <input type="text" ref={searchQuery} class="form-control" placeholder="Search for news related to any topic" />
                    <div class="input-group-append">
                        <Button variant="contained" color="primary" type="submit" onClick={handleSearch} >Search</Button>
                    </div>
                </div>
                <List divided style={{ maxWidth: 900, margin: "0 auto" }}>
                    {articles.map((article, index) => (
                        <>
                            <List.Item key={index} className="mb-4 mt-4" style={{ padding: 30 }}>
                                <Grid container spacing={4}>
                                    <Grid item sm={8} sx={12}
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-start",
                                        }}>
                                        <Header as="h3">{article.title}</Header>
                                        <List.Description style={{ margin: "20px 0" }}>
                                            {article.description}
                                        </List.Description>
                                        <List horizontal>
                                            <List.Item>
                                                <strong>{article.source.name}</strong> | <a className="mt-5" href={article.url} target="o">Read More</a>
                                            </List.Item>
                                            <List.Item>{formatDate(article.publishedAt)}</List.Item>
                                        </List>
                                    </Grid>
                                    <Grid sm={4} sx={12}>
                                        <Image className="news-image" alt="No image found" src={article.image} size="small" />
                                    </Grid>
                                </Grid>
                            </List.Item>
                            <hr />
                        </>
                    ))}
                </List>
            </>
        );
    }
}

